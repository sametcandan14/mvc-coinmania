import * as yup from "yup";

const passwordRules =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen Geçerli Bir Email Girin")
    .required("Zorunlu Alan"),
  age: yup
    .number()
    .required("Zorunlu Alan")
    .positive()
    .integer()
    .min(18, "18  Yaşından küçükler Giremez")
    .max(100, "Yaşınız 100 den büyük olamaz"),
  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı.")
    .matches(passwordRules, "Lütfen daha güçlü bir şifre giriniz.")
    .required("Zorunlu alan"),
  confirmPassword: yup
    .string()
    .required("Zorunlu Alan")
    .oneOf([yup.ref("password")], "Şifre uyuşmuyor"),
  terms: yup.boolean().isTrue("Koşulları kabul etmeden devam edemezsiniz."),
});
