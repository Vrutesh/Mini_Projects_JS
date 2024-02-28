let plus_icons = document.querySelectorAll(".plus");
let faq_containers = document.querySelectorAll(".faq-container");
let info = document.querySelectorAll(".info");

let faq_Answers = [
  "Frontend development refers to the process of creating the user interface and user experience of a website or web application. It involves implementing designs using technologies such as HTML, CSS, and JavaScript to ensure that the website or application is visually appealing, functional, and user-friendly.",
  "HTML (Hypertext Markup Language) is the standard markup language used to create the structure of web pages.",
  "CSS (Cascading Style Sheets) is a stylesheet language used to style the appearance of HTML elements on a webpage.",
  "JavaScript is a programming language commonly used in web development to add interactivity, behavior, and dynamic features to web pages.",
];

function showFaq() {
  info.forEach((info_Element, index) => {
    let plus_icon = plus_icons[index];
    info_Element.addEventListener("click", () => {
      console.log("click");
      // Check if a <p> element exists inside the corresponding .faq-container
      let existingP = faq_containers[index].querySelector(".faq-content");

      if (existingP) {
        // If it exists, remove it
        faq_containers[index].removeChild(existingP);
        plus_icon.src = "assets/plus.svg";
      } else {
        // If it doesn't exist, create a <p> element and add it
        let p = document.createElement("p");
        p.classList.add("faq-content");
        p.innerText = faq_Answers[index];
        faq_containers[index].appendChild(p);
        plus_icon.src = "assets/hyphen.svg";
      }
    });
  });
}

showFaq();

