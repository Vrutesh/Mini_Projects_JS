document.addEventListener("DOMContentLoaded", function() {
    const generateCVBtn = document.querySelector(".generate-btn");

    generateCVBtn.addEventListener("click", function() {
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
        let summary = document.querySelector(".summary").value
        
        //experience data
        let project_title = document.querySelector(".project-title").value
        let project_start_date = document.querySelector(".project-start-date").value
        let project_end_date = document.querySelector(".project-end-date").value
        let project_description = document.querySelector(".project-description").value

        //project data
        let job_title = document.querySelector(".job-title").value
        let job_start_date = document.querySelector(".start-date").value
        let job_end_date = document.querySelector(".end-date").value
        let job_description = document.querySelector(".experience-description").value
        
        // ----------------------------------------------------------------------------

        // Store data in localStorage
        //personal data
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("number", number);
        localStorage.setItem("DOB", DOB)
        localStorage.setItem("nationality", nationality)
        localStorage.setItem("location", location);
        localStorage.setItem("linkedin", linkedin);
        localStorage.setItem("github", github);

        //summary data
        localStorage.setItem("summary", summary)
        
        //experience data
        localStorage.setItem("job-title", job_title)
        localStorage.setItem("job_start_date", job_start_date)
        localStorage.setItem("job_end_date", job_end_date)
        localStorage.setItem("job-description", job_description)

        //project data
        localStorage.setItem("project-title", project_title)
        localStorage.setItem("project_start_date", project_start_date)
        localStorage.setItem("project_end_date", project_end_date)
        localStorage.setItem("project-description", project_description)

        // re-locate to this window
        window.location.href = "cv.html";
    });
})
