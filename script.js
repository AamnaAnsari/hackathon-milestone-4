var _a;
var generateResumeHtml = function (data) {
    return "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(data.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(data.workExperience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n    ");
};
var handleFormSubmit = function (event) {
    event.preventDefault();
    var form = document.getElementById('resumeForm');
    var resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        education: document.getElementById('education').value,
        workExperience: document.getElementById('workExperience').value,
        skills: document.getElementById('skills').value,
    };
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = generateResumeHtml(resumeData);
    }
};
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleFormSubmit);
