const login = document.getElementById('linkLogin')
const account = document.getElementById('linkCreateAccount')
const userInputMessage = document.querySelector('.form__button')
userInputMessage.addEventListener('click',loginMessage)
account.addEventListener('click', createAccount);
login.addEventListener('click', loginForm)
function loginForm(e) {
    e.preventDefault();
    var signIn = document.getElementById('login');
    signIn.style.display = 'block'
    var create = document.getElementById('createAccount')
    create.style.display = 'none'
}
function createAccount(e) {
    e.preventDefault();
    var create = document.getElementById('createAccount');
    create.style.display = 'block';
    var signIn = document.getElementById('login');
    signIn.style.display = 'none'  
}
function loginMessage(e) {
    e.preventDefault();
const loginError = document.createElement('P')
loginError.innerText = 'incorrect username or password'
const messageError = document.querySelector('.form__message--error')
messageError.appendChild(loginError)
}