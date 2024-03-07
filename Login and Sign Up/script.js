
document.querySelector('.redirect-signup').addEventListener('click', () => {
    window.location.href = "index.html"; 
});

let body = document.querySelector('.content')
let login_heading = document.querySelector('.login-headings h1')
let input_field_label = document.querySelectorAll('.input-container label')

document.querySelector('.switch-theme').addEventListener('click', ()=>{
    console.log('click')
    document.querySelector('.switch').src = 'assets/sun-icon.svg'
    document.querySelector('.switch').style.color = '#000'
    body.style.background = '#fff'
    login_heading.style.color = '#000'
    input_field_label.forEach((label)=>{
        label.style.color = '#000'
    })
})
const validation = () => {
    let input_container = document.querySelectorAll('.input-container');
    let email = document.querySelector("#email-field");
    let password = document.getElementById("password-field");
    let login_btn = document.querySelector('.input-field-btn');
    let email_error = null;

    login_btn.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Check if an error message already exists
        if (!email_error) {
            email_error = document.createElement('p');
            email_error.classList.add('email-error');
            input_container[0].appendChild(email_error);
        }
        
        if (email.value === '') {
            console.log('Please enter value');
            email_error.textContent = 'Please enter your email id';
        } else if (!email.value.endsWith('@gmail.com')) {
            console.log('Enter valid email id');
            email_error.textContent = 'Please enter valid email address';
        } else {
            // Clear error message if email is valid
            email_error.textContent = '';
            email_error = null;
        }
        
        // Clear fields after validation
        email.value = '';
        password.value = '';
    });
}

validation();

