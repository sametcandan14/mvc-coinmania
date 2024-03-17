import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen Geçerli Bir Email Girin")
    .required("Zorunlu Alan"),
  age: yup
    .number()
    .required()
    .positive()
    .integer()
    .min(18, "18  Yaşından küçükler Giremez")
    .max(100, "Yaşınız 100 den büyük olamaz"),
  //   password: "",
  //   confirmPassword: "",
  //   terms: false,
});
