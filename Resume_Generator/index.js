document.addEventListener("DOMContentLoaded", function () {
  let forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  const generateCVBtn = document.querySelector(".generate-btn");

  generateCVBtn.addEventListener("click", function () {
    // Get form data
    //personal data
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let number = document.querySelector(".number").value;
    let DOB = document.querySelector(".nationality").value;
    let nationality = document.querySelector(".dob").value;
    let location = document.querySelector(".location").value;
    let linkedin = document.querySelector(".linkedin").value;
    let github = document.querySelector(".github").value;

    //summary data
    let summary = document.querySelector(".summary").value;

    //experience data
    let job_title = document.querySelector(".job-title").value;
    let job_start_date = document.querySelector(".job-start-date").value;
    let job_end_date = document.querySelector(".job-end-date").value;
    let job_description = document.querySelector(
      ".experience-description"
    ).value;

    //project data
    let project_title = document.querySelector(".project-title").value;
    let project_start_date = document.querySelector(
      ".project-start-date"
    ).value;
    let project_end_date = document.querySelector(".project-end-date").value;
    let project_description = document.querySelector(
      ".project-description"
    ).value;

    //skills data
    let skill_1 = document.querySelector(".skill-1").value;
    let skill_2 = document.querySelector(".skill-2").value;
    let skill_3 = document.querySelector(".skill-3").value;

    //education data
    let degree = document.querySelector(".degree").value;
    let college_name = document.querySelector(".college-name").value;
    let percent = document.querySelector(".percent").value;
    let year_of_passing = document.querySelector(".year-of-passing").value;

    //certification data
    let course_name = document.querySelector(".course-name").value;
    let institute_name = document.querySelector(".institute-name").value;
    let course_description = document.querySelector(
      ".course-description"
    ).value;

    //declaration data
    let declaration_info = document.querySelector(
      ".declaration-description"
    ).value;
    let declaration_name = document.querySelector(".declaration-name").value;
    let declaration_place = document.querySelector(".declaration-place").value;
    let declaration_date = document.querySelector(".declaration-date").value;

    // ----------------------------------------------------------------------------

    // Store data in localStorage
    //personal data
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    localStorage.setItem("DOB", DOB);
    localStorage.setItem("nationality", nationality);
    localStorage.setItem("location", location);
    localStorage.setItem("linkedin", linkedin);
    localStorage.setItem("github", github);

    //summary data
    localStorage.setItem("summary", summary);

    //experience data
    localStorage.setItem("job-title", job_title);
    localStorage.setItem("job-start-date", job_start_date);
    localStorage.setItem("job-end-date", job_end_date);
    localStorage.setItem("job-description", job_description);

    //project data
    localStorage.setItem("project-title", project_title);
    localStorage.setItem("project-start-date", project_start_date);
    localStorage.setItem("project-end-date", project_end_date);
    localStorage.setItem("project-description", project_description);

    //skills data
    localStorage.setItem("skill-1", skill_1);
    localStorage.setItem("skill-2", skill_2);
    localStorage.setItem("skill-3", skill_3);

    //education data
    localStorage.setItem("degree", degree);
    localStorage.setItem("college-name", college_name);
    localStorage.setItem("percent", percent);
    localStorage.setItem("year-of-passing", year_of_passing);

    //certification data
    localStorage.setItem("course-name", course_name);
    localStorage.setItem("institute-name", institute_name);
    localStorage.setItem("course-description", course_description);

    //declaration data
    localStorage.setItem("declaration-description", declaration_info);
    localStorage.setItem("declaration-name", declaration_name);
    localStorage.setItem("declaration-place", declaration_place);
    localStorage.setItem("declaration-date", declaration_date);

    // re-locate to this window
    window.location.href = "cv.html";
  });
});

let add_skill_btn = document.querySelector(".add-skill");

add_skill_btn.addEventListener("click", () => {
  console.log("click");
  let container = document.querySelector(".skill-content");
  let div = document.createElement("div");
  div.classList.add("material-textfield");
  let input = document.createElement("input");
  input.classList.add("input-field");
  // input.type = Text
  input.setAttribute("placeholder", "Skill");
  div.appendChild(input);
  container.appendChild(div);
});
