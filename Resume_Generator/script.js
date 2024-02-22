document.addEventListener("DOMContentLoaded", function () {
  // Retrieve data from localStorage

  let lines = document.querySelectorAll(".line");

  // Loop through each element and set its display to "none"
  lines.forEach(function (line) {
    line.style.display = "none";
  });

  //personal data
  let name = localStorage.getItem("name");
  let email = localStorage.getItem("email");
  let number = localStorage.getItem("number");
  let DOB = localStorage.getItem("DOB");
  let nationality = localStorage.getItem("nationality");
  let location = localStorage.getItem("location");
  let linkedin = localStorage.getItem("linkedin");
  let github = localStorage.getItem("github");

  //summary data
  let summary = localStorage.getItem("summary");

  //experience data
  let job_title = localStorage.getItem("job-title");
  let job_start_date = localStorage.getItem("job-start-date");
  let job_end_date = localStorage.getItem("job-end-date");
  let job_description = localStorage.getItem("job-description");

  //project data
  let project_title = localStorage.getItem("project-title");
  let project_start_date = localStorage.getItem("project-start-date");
  let project_end_date = localStorage.getItem("project-end-date");
  let project_description = localStorage.getItem("project-description");

  //skill data
  let skill_1 = localStorage.getItem("skill-1");
  let skill_2 = localStorage.getItem("skill-2");
  let skill_3 = localStorage.getItem("skill-3");

  //education data
  let degree = localStorage.getItem("degree");
  let college_name = localStorage.getItem("college-name");
  let percent = localStorage.getItem("percent");
  let year_of_passing = localStorage.getItem("year-of-passing");

  //course data
  let course_name = localStorage.getItem("course-name");
  let institute_name = localStorage.getItem("institute-name");
  let course_description = localStorage.getItem("course-description");

  //declaration data
  let declaration_description = localStorage.getItem("declaration-description");
  let declaration_name = localStorage.getItem("declaration-name");
  let declaration_place = localStorage.getItem("declaration-place");
  let declaration_date = localStorage.getItem("declaration-date");

  // Populate fields in CV page  --------------- display data---------------

  //personal data
  document.querySelector(".name-content").textContent = name;
  document.querySelector(".email-content").textContent = email
    ? `${email} |`
    : "";
  document.querySelector(".number-content").textContent = number
    ? `${number} |`
    : "";
  document.querySelector(".birthdate-content").textContent = DOB
    ? `${DOB} |`
    : "";
  document.querySelector(".location-content").textContent = location
    ? `${location} |`
    : "";
  document.querySelector(".nationality-content").textContent = nationality
    ? `${nationality} |`
    : "";
  document.querySelector(".linkedin-content").textContent = linkedin
    ? `${linkedin} |`
    : "";
  document.querySelector(".github-content").textContent = github
    ? `${github} |`
    : "";

  //summary data
  document.querySelector(".summary-content").textContent = summary
    ? `${summary}`
    : "";
  document.querySelector(".summary-heading").textContent = summary
    ? "SUMMARY"
    : "";
  let summary_line = document.querySelector(".summary-line");
  if (summary == "") {
    summary_line.style.display = "none";
  } else {
    summary_line.style.display = "inline-block";
  }
  //experience data
  document.querySelector(".job-title").textContent = job_title
    ? `${job_title}`
    : "";
  document.querySelector(".job-start-date").textContent = job_start_date
    ? `${job_start_date}`
    : "";
  document.querySelector(".job-end-date").textContent = job_end_date
    ? `${job_end_date} -`
    : "";
  document.querySelector(".job-description").textContent = job_description
    ? `${job_description}`
    : "";
  document.querySelector(".experience-heading").textContent = job_title
    ? "WORK EXPERIENCE"
    : "";
  let experience_line = document.querySelector(".experience-line");
  if (job_title == "") {
    experience_line.style.display = "none";
  } else {
    experience_line.style.display = "inline-block";
  }

  //project data
  document.querySelector(".project-title").textContent = project_title
    ? `${project_title}`
    : "";
  document.querySelector(".project-start-date").textContent = project_start_date
    ? `${project_start_date}`
    : "";
  document.querySelector(".project-end-date").textContent = project_end_date
    ? `${project_end_date} -`
    : "";
  document.querySelector(".project-description").textContent =
    project_description ? `${project_description}` : "";
  document.querySelector(".project-heading").textContent = project_title
    ? "PROJECTS"
    : "";
  let project_line = document.querySelector(".project-line");
  if (project_title == "") {
    project_line.style.display = "none";
  } else {
    project_line.style.display = "inline-block";
  }

  //skill data
  let skillElement_1 = document.querySelector(".skill-1");
  let skillElement_2 = document.querySelector(".skill-2");
  let skillElement_3 = document.querySelector(".skill-3");

  document.querySelector(".skill-1").textContent = skill_1 ? `${skill_1}` : "";
  document.querySelector(".skill-2").textContent = skill_2 ? `${skill_2}` : "";
  document.querySelector(".skill-3").textContent = skill_3 ? `${skill_3}` : "";
  document.querySelector(".skill-heading").textContent = skill_1
    ? "SKILLS"
    : "";
  let skill_line = document.querySelector(".skill-line");
  if (skill_1 == "") {
    skill_line.style.display = "none";
  } else {
    skill_line.style.display = "inline-block";
  }

  if (skill_1 == "") {
    skillElement_1.style.border = "none";
  }
  if (skill_2 == "") {
    skillElement_2.style.border = "none";
  }
  if (skill_3 == "") {
    skillElement_3.style.border = "none";
  }

  //education data
  document.querySelector(".degree-name").textContent = degree
    ? `${degree}`
    : "";
  document.querySelector(".college-name").innerHTML = college_name
    ? `<b>College Name</b> : ${college_name} <b>|</b>`
    : "";
  document.querySelector(".percent").innerHTML = percent
    ? `<b>CGPA / Percent</b> - ${percent} <b>|</b>`
    : "";
  document.querySelector(".year-of-passing").innerHTML = year_of_passing
    ? `<b>Year of Passing</b>: ${year_of_passing}`
    : "";
  document.querySelector(".education-heading").textContent =
    degree || college_name ? "EDUCATION" : "";
  let education_line = document.querySelector(".education-line");
  if (degree == "" || college_name == "") {
    education_line.style.display = "none";
  } else {
    education_line.style.display = "inline-block";
  }

  //course data
  document.querySelector(".course-name").textContent = course_name
    ? `${course_name}`
    : "";
  document.querySelector(".institute-name").textContent = institute_name
    ? `${institute_name}`
    : "";
  document.querySelector(".course-description").textContent = course_description
    ? `${course_description}`
    : "";
  document.querySelector(".course-heading").textContent =
    course_name || course_description ? "CERTIFICATION / COURSES" : "";

  let course_line = document.querySelector(".course-line");
  if (course_name == "" || course_description == "") {
    course_line.style.display = "none";
  } else {
    course_line.style.display = "inline-block";
  }

  //declaration data
  document.querySelector(".declaration-description").textContent =
    declaration_description ? `${declaration_description}` : "";
  document.querySelector(".declaration-name").textContent = declaration_name
    ? `${declaration_name}`
    : "";
  document.querySelector(".declaration-place").textContent = declaration_place
    ? `${declaration_place}`
    : "";
  document.querySelector(".declaration-date").textContent = declaration_date
    ? `${declaration_date}`
    : "";
  document.querySelector(".declaration-heading").textContent =
    declaration_description ? "DECLARATION" : "";
  let declaration_line = document.querySelector(".declaration-line");
  if (declaration_description == "") {
    declaration_line.style.display = "none";
  } else {
    declaration_line.style.display = "inline-block";
  }
});

let print_btn = document.querySelector(".print-btn");
print_btn.addEventListener("click", () => {
  window.print();
  print_btn.style.display = "none";
});
