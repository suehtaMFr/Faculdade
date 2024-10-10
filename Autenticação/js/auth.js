class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class Auth {
    constructor() {
        this.users = [];  // Array para armazenar os usuários
    }

    registerUser(name, email, password, confirmPassword) {
        if (!this.validatePassword(password, confirmPassword)) {
            this.showError('As senhas não coincidem', 'registerErrorMsg');
            return false;
        }
        if (this.isEmailRegistered(email)) {
            this.showError('E-mail já cadastrado', 'registerErrorMsg');
            return false;
        }

        const newUser = new User(name, email, password);
        this.users.push(newUser);
        alert('Usuário cadastrado com sucesso!');
        return true;
    }

    loginUser(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            window.location.href = 'main.html';  // Redireciona para a página principal
        } else {
            this.showError('E-mail ou senha incorretos', 'errorMsg');
        }
    }

    isEmailRegistered(email) {
        return this.users.some(user => user.email === email);
    }

    validatePassword(password, confirmPassword) {
        return password === confirmPassword;
    }

    showError(message, elementId) {
        const errorMsg = document.getElementById(elementId);
        errorMsg.innerText = message;
        errorMsg.style.display = 'block';
    }
}

// Inicializa o sistema de autenticação
const auth = new Auth();

// Função para verificar se a tecla Enter foi pressionada e executar a ação correspondente
function checkEnter(event, action) {
    if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault(); // Impede o comportamento padrão de enviar o formulário
        action(); // Chama a função de login ou cadastro
    }
}

function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (auth.registerUser(name, email, password, confirmPassword)) {
        document.getElementById('registerForm').reset(); // Limpa o formulário de cadastro

        // Fecha o modal de cadastro
        const modalElement = document.getElementById('registerModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    }
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.loginUser(email, password);
}
