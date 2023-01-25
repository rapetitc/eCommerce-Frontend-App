import React from "react";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className='SignIn container'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const user = e.target[0].value;
          const email = e.target[1].value;
          const password = e.target[2].value;
          console.log("Creando cuenta:", user, email, password);
        }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-pass-fill' viewBox='0 0 16 16'>
          <path d='M10 0a2 2 0 1 1-4 0H3.5A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0H10ZM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z' />
        </svg>
        <div>
          <h2>Registro</h2>
          <p>Ingresa la informacion requerida para proceder con tu registro</p>
        </div>
        <input type='text' placeholder='Nombre de Usuario' />
        <input type='email' placeholder='Correo Electronico' />
        <input type='password' placeholder='Contraseña' />
        <button>Registrar</button>
      </form>
    </div>
  );
};

export default SignIn;
