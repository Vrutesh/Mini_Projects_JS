let stepperContainer = document.querySelectorAll(".stepper");
let active = document.querySelector(".active");
let backward_btn = document.querySelector(".backward");
let forward_btn = document.querySelector(".forward");
let reset_btn = document.querySelector(".reset");
let connector = document.querySelectorAll(".connector");
let step_1 = document.querySelector(".step-1");
let step_2 = document.querySelector(".step-2");
let step_3 = document.querySelector(".step-3");
let step_4 = document.querySelector(".step-4");
let steps_Count = document.querySelector(".steps-count");
let message = document.querySelector(".message");

let currentStep = 1;

// forward button functionality
function forwardStep() {
  forward_btn.addEventListener("click", () => {
    console.log(currentStep);
    if (currentStep === 1) {
      step_2.classList.add("active");
      currentStep = 2;
      done_Icon(step_1);
      message.innerText = "Step 2";
    } else if (currentStep === 2) {
      step_3.classList.add("active");
      currentStep = 3;
      done_Icon(step_2);
      message.innerText = "Step 3";
    } else if (currentStep === 3) {
      step_4.classList.add("active");
      currentStep = 4;
      done_Icon(step_3);
      message.innerText = "Step 4";
      forwardBtn_Steps();
    } else if (currentStep === 4) {
      once_Submit();
      done_Icon(step_4);
      message.innerText = "All steps are completed";
    }
  });
}

forwardStep();

//after submit
function once_Submit() {
  done_Icon(step_3);
  forward_btn.style.background = "gray";
  backward_btn.style.background = "gray";
  reset_btn.style.background = "";
  forward_btn.disabled = true;
  backward_btn.disabled = true;
  reset_btn.style.display = "inline-block";
}

function done_Icon(step) {
  let done = document.createElement("img");
  done.src = "assets/correct.svg";
  step.innerText = "";
  step.appendChild(done);
}

// while submit
function forwardBtn_Steps() {
  forward_btn.innerText = "Submit";
  forward_btn.style.background = "springgreen";
}

function backwardBtn_Steps(steps, text) {
  forward_btn.innerText = "Next";
  forward_btn.style.background = "";
  steps.innerText = text;
}

// backward button functionality
function backStep() {
  backward_btn.addEventListener("click", () => {
    if (currentStep === 4) {
      step_4.classList.remove("active");
      currentStep = 3;
      message.innerText = "Step 3";
    } else if (currentStep === 3) {
      step_3.classList.remove("active");
      currentStep = 2;
      message.innerText = "Step 2";
      backwardBtn_Steps(step_3, "3");
    } else if (currentStep === 2) {
      step_2.classList.remove("active");
      currentStep = 1;
      message.innerText = "Step 1";
      backwardBtn_Steps(step_2, "2");
    }
  });
}

backStep();

// reset button functionality

function resetStep() {
  reset_btn.addEventListener("click", () => {
    console.log("Click");
    if (currentStep === 4) {
      step_4.classList.remove("active");
      currentStep = 3;
      backwardBtn_Steps(step_4, "4");
      step_3.classList.remove("active");
      currentStep = 2;
      backwardBtn_Steps(step_3, "3");
      step_2.classList.remove("active");
      currentStep = 1;
      backwardBtn_Steps(step_2, "2");

      forward_btn.innerText = "Next";
      forward_btn.style.background = "";
      forward_btn.disabled = false;
      backward_btn.style.background = "";
      backward_btn.disabled = false;
      message.innerText = "Step 1";
      beforeReset();
    }
  });
}

resetStep();

// default reset
function beforeReset() {
  reset_btn.style.display = "none";
}

beforeReset();
