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
              onBlur={formik.handleBlur}
              name="email"
              onChange={formik.handleChange}
              type="text"
              placeholder="ör: mail@mail.com"
            />

            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email} </p>
            )}
          </div>
          <div>
            <label>Yaş</label>
            <input
              onBlur={formik.handleBlur}
              name="age"
              onChange={formik.handleChange}
              type="number"
              placeholder="ör: 35"
            />

            {formik.errors.age && formik.touched.age && (
              <p>{formik.errors.age} </p>
            )}
          </div>
          <div>
            <label>Şifre</label>
            <input
              onBlur={formik.handleBlur}
              name="password"
              onChange={formik.handleChange}
              type="password"
              placeholder="••••••"
            />
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password} </p>
            )}
          </div>
          <div>
            <label>Şifre Onay</label>
            <input
              onBlur={formik.handleBlur}
              name="confirmPassword"
              onChange={formik.handleChange}
              type="password"
              placeholder="••••••"
            />

            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p>{formik.errors.confirmPassword} </p>
              )}
          </div>
          <div className="check">
            <input
              onBlur={formik.handleBlur}
              name="terms"
              onChange={formik.handleChange}
              type="checkbox"
              id="terms"
            />
            <label onBlur={formik.handleBlur} htmlFor="terms">
              Koşulları Okudum ve Onaylıyorum.
            </label>
            {formik.errors.terms && formik.touched.terms && (
              <p>{formik.errors.terms} </p>
            )}
          </div>
          <button>Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
