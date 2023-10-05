const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classlist.add("active");
});

loginBtn.addEventListener('click', ()=>{
    container.classlist.remove("active");
});