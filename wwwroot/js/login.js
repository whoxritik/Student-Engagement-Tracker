const studentBtn = document.getElementById("studentBtn");
const teacherBtn = document.getElementById("teacherBtn");
const loginTitle = document.getElementById("loginTitle");
const loginBtn = document.getElementById("loginBtn");

studentBtn.addEventListener("click", () => {

studentBtn.classList.add("active");
teacherBtn.classList.remove("active");

loginTitle.innerText = "Student Login";
loginBtn.innerText = "Login as Student";

});

teacherBtn.addEventListener("click", () => {

teacherBtn.classList.add("active");
studentBtn.classList.remove("active");

loginTitle.innerText = "Teacher Login";
loginBtn.innerText = "Login as Teacher";

});