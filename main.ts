const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();

const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('Email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const Education = (document.getElementById('education') as HTMLInputElement).value
const Experience = (document.getElementById('experience') as HTMLInputElement).value
const Skills = (document.getElementById('skills') as HTMLInputElement).value


const resumeHTML =  `<h2><b>Editable Resume</b></h2>
<h3>Personal Information</3>
<p>><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Email:</b><span contenteditable="true"${email}</span></p>
<p><b>Phone:</b><span contenteditable="true"${phone}</span></p>

<h3>Education</h3>
<p contenteditable="true">${Education}</p>


<h3>Experience</h3>
<p contenteditable="true">${Experience}</P>


<h3>Skills</h3>
<p> contenteditable="true"${Skills}</p>:`

if(resumeDisplayElement){
resumeDisplayElement.innerHTML=resumeHTML
}
else{
    console.log(`The resume display elaement is missing.`);
    
}



}); 