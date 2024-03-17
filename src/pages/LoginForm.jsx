import { useFormik } from "formik";
import { schema } from "./schema";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

    validationSchema: schema,

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <div className="container">
        <div className="logo">
          <i className="fa-solid fa-coins"></i>
          <h3>CoinMania</h3>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              name="email"
              onChange={formik.handleChange}
              type="text"
              placeholder="ör: mail@mail.com"
            />

            {formik.errors.email && <p>{formik.errors.email} </p>}
          </div>
          <div>
            <label>Yaş</label>
            <input
              name="age"
              onChange={formik.handleChange}
              type="number"
              placeholder="ör: 35"
            />

            {formik.errors.age && <p>{formik.errors.age} </p>}
          </div>
          <div>
            <label>Şifre</label>
            <input
              name="password"
              onChange={formik.handleChange}
              type="password"
              placeholder="••••••"
            />
            {formik.errors.password && <p>{formik.errors.password} </p>}
          </div>
          <div>
            <label>Şifre Onay</label>
            <input
              name="confirmPassword"
              onChange={formik.handleChange}
              type="password"
              placeholder="••••••"
            />

            {formik.errors.confirmPassword && (
              <p>{formik.errors.confirmPassword} </p>
            )}
          </div>
          <div className="check">
            <input
              name="terms"
              onChange={formik.handleChange}
              type="checkbox"
              id="terms"
            />
            <label htmlFor="terms">Koşulları Okudum ve Onaylıyorum.</label>
          </div>
          <button>Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
