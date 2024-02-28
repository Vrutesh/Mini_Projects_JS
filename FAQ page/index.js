let info = document.querySelectorAll(".info")
let faq_container = document.querySelectorAll(".faq-container")
let plus_icons = document.querySelectorAll(".plus")

let faq_Answers = [
  "Frontend development refers to the process of creating the user interface and user experience of a website or web application. It involves implementing designs using technologies such as HTML, CSS, and JavaScript to ensure that the website or application is visually appealing, functional, and user-friendly.",
  "HTML (Hypertext Markup Language) is the standard markup language used to create the structure of web pages.",
  "CSS (Cascading Style Sheets) is a stylesheet language used to style the appearance of HTML elements on a webpage.",
  "JavaScript is a programming language commonly used in web development to add interactivity, behavior, and dynamic features to web pages.",
];

function show_Faq(){
  info.forEach((info_Element, index)=>{
     let plus_icon = plus_icons[index]
    info_Element.addEventListener('click', ()=>{
      console.log("click")
      let existingContent = faq_container[index].querySelector('.faq-content')
      if(existingContent){
        faq_container[index].removeChild(existingContent)
        plus_icon.src ='assets/plus.svg'
      }
      else{
        let p = document.createElement("p");
                p.classList.add("faq-content");
                p.innerText = faq_Answers[index];
                faq_container[index].appendChild(p);
        plus_icon.src='assets/hyphen.svg'
      }
    })
   })
}

show_Faq()

