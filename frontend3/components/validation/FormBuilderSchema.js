// validation/formBuilderSchema.js
import * as yup from "yup";

export const formBuilderSchema = yup.object({
  title: yup.string().required("Form title is required"),
  description: yup.string(),
  status: yup.string().required("Status is required"),
  // department: yup
  //   .string()
  //   .oneOf(["cs", "it", "bba", "bed", "english"], "Invalid department")
  //   .required("Department field is required"),
  // batch: yup
  //   .string()
  //   .oneOf(
  //     ["2k19", "2k20", "2k21", "2k22", "2k23", "2k24", "2k25"],
  //     "Invalid batch"
  //   )
  //   .required("Batch field is required"),
  questions: yup
    .array()
    .of(
      yup.object({
        // id: yup.string().required(),
        text: yup.string().required("Question text is required"),
        type: yup.string().required("Question type is required"),
        options: yup
          .array()
          .of(yup.string().required("Option text is required"))
          .min(1, "Not enough options"),
      })
    )
    .min(1, "You must add at least one question"),

  audiences: yup.array().of(
    yup.object({
      role: yup.string().oneOf(["student", "faculty", "admin", "staff"], "Invalid target role").required("Role is required"),
      department: yup.string(),
      batch: yup.string(),
      semester: yup.string().max(2, "Invalid Semester"),
      custom_label: yup.string().min(3,"Label too short"),
      designation: yup.string(),
    })
  ),
});
