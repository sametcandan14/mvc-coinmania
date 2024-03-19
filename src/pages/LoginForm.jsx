import { useFormik } from "formik";
import { schema } from "./schema";
import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { user, signUser } = useContext(userContext);

  const navigate = useNavigate();

  if (user) {
    navigate("/coins");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

    validationSchema: schema,

    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      signUser(values);
      actions.resetForm();
      navigate("/coins");
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
              value={formik.values.email}
              className={formik.errors.email && formik.touched.email && "error"}
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
              value={formik.values.age}
              className={formik.errors.age && formik.touched.age && "error"}
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
              value={formik.values.password}
              className={
                formik.errors.password && formik.touched.password && "error"
              }
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
              value={formik.values.confirmPassword}
              className={
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                "error"
              }
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
          <div className="check-wrapper">
            <div className="check">
              <input
                value={formik.values.terms}
                className={
                  formik.errors.terms && formik.touched.terms && "error"
                }
                onBlur={formik.handleBlur}
                name="terms"
                onChange={formik.handleChange}
                type="checkbox"
                id="terms"
              />
              <label onBlur={formik.handleBlur} htmlFor="terms">
                Koşulları Okudum ve Onaylıyorum.
              </label>
            </div>
            {formik.errors.terms && formik.touched.terms && (
              <p>{formik.errors.terms} </p>
            )}
          </div>
          <button disabled={formik.isSubmitting} type="submit">
            Kaydol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
