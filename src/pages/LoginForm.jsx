const LoginForm = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <i class="fa-solid fa-coins"></i>
          <h3>CoinMania</h3>
        </div>

        <form>
          <div>
            <label>Email</label>
            <input type="text" placeholder="ör: mail@mail.com" />
          </div>
          <div>
            <label>Yaş</label>
            <input type="number" placeholder="ör: 35" />
          </div>{" "}
          <div>
            <label>Şifre</label>
            <input type="password" placeholder="••••••" />
          </div>
          <div>
            <label>Şifre Onay</label>
            <input type="password" placeholder="••••••" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
