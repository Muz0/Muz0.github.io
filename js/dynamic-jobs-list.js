const jobs = [
  {
    title: "ENGROUP LLC",
    position: "Junior IT Specialist",
    responsibilities: [
      "Install and set up computer systems at various locations.",
      "Design and install networks and video surveillance systems.",
      "Perform basic hardware diagnostics and assess repair profitability.",
      "Manage Teltonika GPS systems.",
    ],
    date: "November 2022 - Nowadays",
  },
  {
    title: "Crazy Inn",
    position: "Technical Support/Marketing Tools Manager",
    responsibilities: [
      "Provide technical support for smooth workflow at multiple locations. ",
      "Manage small networks and video registration systems in public places.",
      "Deploy network marketing tools and report issues to developers for debugging.",
    ],
    date: "August - November 2022",
  },
  {
    title: "AIESEC in Azerbaijan",
    position: "International Relations Manager",
    responsibilities: [
      "Manage international development through partnerships with committees in Europe and Asia. ",
      "Conduct market research to meet market demand and manage project lists.",
      "Ensure exchange standards are met through working with the local committee's executive board.",
    ],
    date: "February 2022 - August 2022",
  },
  {
    title: "Azerbaijan Chemical Society",
    position: "Graphic Designer",
    responsibilities: [
      "Design posters and logos for events and seminars using Canva or Photoshop, with research on the needs of each promotion company.",
      "Utilize various promotion channels to reach the target audience effectively.",
    ],
    date: "December 2021 - February 2022",
  },
];

const createTitle = (title, id) => { // creates title element
  const titleElem = document.createElement("h2");
  titleElem.setAttribute("id", id);
  titleElem.classList.add("title");
  titleElem.innerHTML = title;
  return titleElem;
}

const createPosition = (position, id) => { // creates position element
  const positionElem = document.createElement("h3");
  positionElem.setAttribute("id", id);
  positionElem.classList.add("position");
  positionElem.innerHTML = position;
  return positionElem;
}

const createResponsibilities = (responsibilities, id) => { // creates responsibilities element
  const ul = document.createElement("ul");
  ul.setAttribute("id", id);
  for (const responsibility of responsibilities) {
    const li = document.createElement("li");
    li.innerHTML = responsibility;
    ul.appendChild(li);
  }
  return ul;
}

const createJobDescription = (title, position, responsibilities, id) => { // creates job description element
  const jobDescription = document.createElement("div");
  jobDescription.setAttribute("id", id);
  jobDescription.classList.add("work-experience");
  jobDescription.appendChild(createTitle(title, `title-${id}`));
  jobDescription.appendChild(createPosition(position, `position-${id}`));
  jobDescription.appendChild(createResponsibilities(responsibilities, `responsibilities-${id}`));
  return jobDescription;
}

const createWorkExperience = (jobDescription, id) => { // creates work experience element
  const hr = document.createElement("hr");
  const workExperience = document.createElement("div");
  workExperience.setAttribute("id", id);
  workExperience.appendChild(hr);
  workExperience.appendChild(jobDescription);
  return workExperience;
}

let counter = 0;

for (const job of jobs) { // loops through jobs array
  const jobDescription = createJobDescription(job.title, job.position, job.responsibilities, counter);
  const workExperience = createWorkExperience(jobDescription, counter);
  document.getElementById("jobs").appendChild(workExperience);
  counter++;
}

