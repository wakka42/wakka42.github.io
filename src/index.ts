interface CVObject {
  date: string;
  title: string;
  body: Array<string>;
}

const workExperiencesObjects: CVObject[] = [
  {
    date: "2023 - 2025",
    title: "Support Dev / System Administrator at 42 Paris",
    body: [
      "Python and Shell scripting to facilitate and automatate the workflow of the pedago team.",
      "Configure and deploy the services and workstations, manage the exams.",
    ],
  },
  {
    date: "2017 - 2022",
    title: "Maths teacher at Education nationale",
    body: [
      "Teaching maths in adequation to national standard reference.",
      "Monitoring students' learning progress.",
    ],
  },
  {
    date: "2013 - 2016",
    title: "Assistant Project Manager at SNCF",
    body: [
      "Elaborate specifications for construction work.",
      "Managing and coordinate external teams on construction site.",
    ],
  },
];

const educationalBackgroundObjects: CVObject[] = [
  {
    date: "2021 - 2026",
    title: "Digital Technology Architect",
    body: ["Unix, algorithms, graphics, imperative programming, OOP, web."],
  },
  {
    date: "2013 - 2016",
    title: "Master Degree in civil engineering at CESI",
    body: ["Project management, structural calculations, site planning."],
  },
];

const workExperienceslistElement = document.querySelector(
  ".work-experiences-list"
);
const educationalBackgroundlistElement = document.querySelector(
  ".educational-background-list"
);

let createObjects = (parent: Element, objs: CVObject[]) => void {};
createObjects = (parent, objs) => {
  objs.map((item) => {
    const divBlock: HTMLDivElement = document.createElement("div");
    divBlock.classList.add("info-block");
    const divBlockDate: HTMLDivElement = document.createElement("div");
    divBlockDate.classList.add("info-block-date");
    divBlockDate.innerText = item.date;
    const divBlockTitle: HTMLDivElement = document.createElement("h3");
    divBlockTitle.classList.add("info-block-title");
    divBlockTitle.innerText = item.title;
    const divBlockBody: HTMLUListElement = document.createElement("ul");
    divBlockBody.classList.add("info-block-body");
    item.body.forEach((element) => {
      const li: HTMLLIElement = document.createElement("li");
      li.innerText = element;
      divBlockBody.appendChild(li);
    });
    divBlock.append(divBlockDate, divBlockTitle, divBlockBody);
    parent.append(divBlock);
  });
};

createObjects(workExperienceslistElement, workExperiencesObjects);
createObjects(educationalBackgroundlistElement, educationalBackgroundObjects);
