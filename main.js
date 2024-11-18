var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var phone = document.getElementById('phone').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var Skills = document.getElementById('skills').value;
    var resumeHTML = "<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</3>\n<p>><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\"").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\"").concat(phone, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(Education, "</p>\n\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(Experience, "</P>\n\n\n<h3>Skills</h3>\n<p> contenteditable=\"true\"").concat(Skills, "</p>:");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("The resume display elaement is missing.");
    }
});
