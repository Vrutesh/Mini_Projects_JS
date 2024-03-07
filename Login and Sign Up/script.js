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