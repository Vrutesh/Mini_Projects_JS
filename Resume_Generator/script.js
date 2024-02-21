document.addEventListener("DOMContentLoaded", function() {  
    // Retrieve data from localStorage

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
    let job_title = localStorage.getItem("job-title")
    let job_start_date = localStorage.getItem("job-start-date")
    let job_end_date = localStorage.getItem("job-end-date")
    let job_description = localStorage.getItem("job-description")

    //project data
    let project_title = localStorage.getItem("project-title")
    let project_start_date = localStorage.getItem("project-start-date")
    let project_end_date = localStorage.getItem("project-end-date")
    let project_description = localStorage.getItem("project-description")
    
    // Populate fields in CV page  --------------- display data---------------

    //personal data 
    document.querySelector(".name-content").textContent = name;
    document.querySelector(".email-content").textContent = email ? `${email} |` : "";
    document.querySelector(".number-content").textContent = number ? `${number} |` : "";
    document.querySelector(".birthdate-content").textContent = DOB ? `${DOB} |` : "";
    document.querySelector(".location-content").textContent = location ? `${location} |` : "";
    document.querySelector(".nationality-content").textContent = nationality ? `${nationality} |` : "";
    document.querySelector(".linkedin-content").textContent = linkedin ? `${linkedin} |` : "";
    document.querySelector(".github-content").textContent = github ? `${github} |` : "";
    
    //summary data 
    document.querySelector(".summary-content").textContent = summary ? `${summary}` : "";
    document.querySelector(".summary-heading").textContent = summary ? "SUMMARY" : "";
    let summary_line = document.querySelector(".summary-line")
    summary ? `${summary_line}` : summary_line.style.display ="none"

    //experience data
    document.querySelector(".job-title").textContent = job_title ? `${job_title}` : "";
    document.querySelector(".job-start-date").textContent = job_start_date ? `${job_start_date}` : "";
    document.querySelector(".job-end-date").textContent = job_end_date ? `${job_end_date} -` : "";
    document.querySelector(".job-description").textContent = job_description ? `${job_description}` : "";
    document.querySelector(".experience-heading").textContent = job_title ? "WORK EXPERIENCE" : "";
    if(job_title == ""){
        let experience_line = document.querySelector(".experience-line")
        experience_line.style.display ="none"
    }
    else{
        experience_line.style.display ="inline-block"
    }

    //project data
    document.querySelector(".project-title").textContent = project_title ? `${project_title}` : "";
    document.querySelector(".project-start-date").textContent = project_start_date ? `${project_start_date}` : "";
    document.querySelector(".project-end-date").textContent = project_end_date ? `${project_end_date} -` : "";
    document.querySelector(".project-description").textContent = project_description ? `${project_description}` : "";
    document.querySelector(".project-heading").textContent = project_title ? "PROJECTS" : "";
    if(project_title == ""){
        let project_line = document.querySelector(".project-line")
        project_line.style.display ="none"
    }
    else{
        project_line.style.display ="inline-block"
    }


    // Clear localStorage
    localStorage.clear();
});
