interface ResumeData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
}

const generateResumeHtml = (data: ResumeData): string => {
    return `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <h3>Education</h3>
        <p>${data.education}</p>
        <h3>Work Experience</h3>
        <p>${data.workExperience}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;
};

const handleFormSubmit = (event: Event): void => {
    event.preventDefault();
    
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeData: ResumeData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        education: (document.getElementById('education') as HTMLTextAreaElement).value,
        workExperience: (document.getElementById('workExperience') as HTMLTextAreaElement).value,
        skills: (document.getElementById('skills') as HTMLTextAreaElement).value,
    };

    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = generateResumeHtml(resumeData);
    }
};

document.getElementById('resumeForm')?.addEventListener('submit', handleFormSubmit);
