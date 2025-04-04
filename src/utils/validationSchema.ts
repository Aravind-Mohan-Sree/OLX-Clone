import * as Yup from "yup";

export const validationSchema = Yup.object({
  adTitle: Yup.string()
    .trim()
    .required("Title is required")
    .test(
      "",
      "At least 10 characters required",
      (value) => value.replace(/\s/g, "").length >= 10
    )
    .test(
      "",
      "At most 70 characters allowed",
      (value) => value.replace(/\s/g, "").length <= 70
    )
    .test(
      "",
      "Can't contain consecutive spaces",
      (value) => !/^\s|\s{2,}|\s$/.test(value)
    )
    .test("", "Too many special character not allowed", (value) => {
      const matches =
        value.match(/[.,!?;:'"(){}[\]<>@#$%^&*_\-=+\\/|`~]/g) || [];
      return matches && matches.length < 4;
    }),

  description: Yup.string()
    .trim()
    .required("Description is required")
    .test(
      "",
      "At least 10 characters required",
      (value) => value.replace(/\s/g, "").length >= 10
    )
    .test(
      "",
      "At most 250 characters allowed",
      (value) => value.replace(/\s/g, "").length <= 250
    )
    .test(
      "",
      "Can't contain consecutive spaces",
      (value) => !/^\s|\s{2,}|\s$/.test(value)
    )
    .test("", "Too many punctuation not allowed", (value) => {
      const matches =
        value.match(/[.,!?;:'"(){}[\]<>@#$%^&*_\-=+\\/|`~]/g) || [];
      return matches && matches.length < 4;
    }),

  location: Yup.string()
    .trim()
    .required("Location is required")
    .test(
      "",
      "At least 8 characters required",
      (value) => value.replace(/\s/g, "").length >= 8
    )
    .test(
      "",
      "At most 20 characters allowed",
      (value) => value.replace(/\s/g, "").length <= 20
    )
    .test(
      "",
      "Can't contain consecutive spaces",
      (value) => !/^\s|\s{2,}|\s$/.test(value)
    )
    .test(
      "",
      "Can't contain special characters",
      (value) => !/[^\w\s]/.test(value)
    )
    .test("", "Can't contain numbers", (value) => !/\d/.test(value)),

  price: Yup.number().required("Price is required").min(1, "Invalid price"),

  image: Yup.string().required("Photo is required"),

  name: Yup.string()
    .trim()
    .required("Name is required")
    .test(
      "",
      "At least 3 characters required",
      (value) => value.replace(/\s/g, "").length >= 3
    )
    .test(
      "",
      "At most 20 characters allowed",
      (value) => value.replace(/\s/g, "").length <= 20
    )
    .test(
      "",
      "Can't contain consecutive spaces",
      (value) => !/^\s|\s{2,}|\s$/.test(value)
    )
    .test(
      "",
      "Can't contain special characters",
      (value) => !/[^\w\s]/.test(value)
    )
    .test("", "Can't contain numbers", (value) => !/\d/.test(value)),
});
