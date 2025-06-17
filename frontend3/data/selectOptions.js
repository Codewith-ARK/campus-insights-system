const batchOptions = ["2k20", "2k21", "2k22", "2k23", "2k24", "2k25"];
const deptOptions = [
  { name: "Computer Science (CS)", value: "cs" },
  { name: "Information Technology (IT)", value: "it" },
  { name: "Business Administration (BBA)", value: "bba" },
  { name: "English (BS. Eng.)", value: "english" },
  { name: "Education (BS. B.ed.)", value: "bed" },
];

const userOptions = [
  {name: "Students", value: "student"},
  {name: "Faculty Staff", value: "faculty"},
  {name: "Administration", value: "admin"},
  {name: "Non-Teaching Staff", value: "staff"},
]

const questionTypeOptions = [
  {name:"Multiple Choice", value: "radio"},
  {name:"Checkboxes", value: "checkbox"},
  {name:"Rating", value: "rating"},
  {name:"Text", value: "text"},
]
export { batchOptions, deptOptions, userOptions, questionTypeOptions };
