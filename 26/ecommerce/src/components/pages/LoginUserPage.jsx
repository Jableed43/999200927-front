import { useState } from "react";
import useLoginUser from "../../hooks/user/useLoginUser";
import useAuth from "../../hooks/user/useAuth";

function LoginUserPage() {
  const [form, setForm] = useState({
  email: "",
  password: "",
  });

  const { error, loginUser } = useLoginUser();
  const {login} = useAuth()

  // Eventos: onSubmit y onChange

  const handleFormSubmit = async (e) => {
    // Metodo que evita refrescar la pagina al enviar el form
    e.preventDefault();
    const user = await loginUser(form.email, form.password)
    console.log(user)
    if (user) {
        login(user)
        alert("Login!")
        // limpieza del form
      setForm({
        email: "",
        password: "",
  });      
    }
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  // Controlled form
  return (
    <>
      <h1> Login de usuario </h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email</label>
        <input
          required
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          value={form.email}
        />
        <br />
          <label htmlFor="password">Contraseña</label>
        <input
          required
          onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          value={form.password}
        />        
        <br />
        <button type="submit">Login</button>
        <br />
        <button type="reset">Limpiar</button>
        <br />
        {error && <p> {error.message || error} </p>}
      </form>
    </>
  );
}

export default LoginUserPage;
