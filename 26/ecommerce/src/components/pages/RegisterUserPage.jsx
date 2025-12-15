import { useState } from "react";
import useRegisterUser from "../../hooks/user/useRegisterUser";

function RegisterUserPage() {
  const [form, setForm] = useState({
  email: "",
  name: "",
  password: "",
  });

  const { error, registerUser } = useRegisterUser();

  // Eventos: onSubmit y onChange

  const handleFormSubmit = async (e) => {
    // Metodo que evita refrescar la pagina al enviar el form
    e.preventDefault();
    const success = await registerUser(form)
    console.log(success)
    if (success) {
        // limpieza del form
      setForm({
        email: "",
        name: "",
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
      <h1> Registrar usuario </h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Nombre del usuario</label>
        <input
          required
          onChange={handleInputChange}
          type="text"
          name="name"
          id="name"
          value={form.name}
        />
        <br />
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
        <button type="submit">Registrar usuario</button>
        <br />
        <button type="reset">Limpiar</button>
        <br />
        {error && <p> {error.message || error} </p>}
      </form>
    </>
  );
}

export default RegisterUserPage;
