import React from 'react';
import '../assets/Styles/Sass/Login.scss';

const Login = () => {
  return (
    <div className='loginContainer'>
      <aside className='aside'>
        <h2 className='aside__welcomemsg'>Bienvenido de nuevo</h2>
        <section className='aside__logo'>
          <figure>
            <img
              src='../static/LogoSicomodalAdvance.png'
              alt='Logo Sicomodal Advance'
              className='aside__logo--img'
            />
          </figure>
          <h1 className='aside__logo--title'>Sicomodal Advance</h1>
          <h2 className='aside__logo--slogan'>
            El lugar perfecto para experimentar
          </h2>
        </section>
        <section className='aside__buttons'>
          <section className='aside__buttons--moreInfo'>
            <p className='aside--moreInfo__text'>
              ¿Quieres conocer más información?
            </p>
            <button className='aside--moreInfo__button'>Más información</button>
          </section>

          <section className='aside__buttons--register'>
            <p className='aside-register__text'>¿Aún no estás registrado?</p>
            <button className='aside--register__button'>Regístrate</button>
          </section>
        </section>
      </aside>

      <section className='login'>
        <figure>
          <img
            className='login__logoSabana'
            src='../static/LogoUniSabana.png'
            alt='Logo Sabana'
          />
        </figure>
        <section className='login__container'>
          <h2 className='login__container--title'>Iniciar sesión</h2>
          <p className='login__container--text'>Por favor ingresa tus datos</p>
          <form action='' className='login__container--form'>
            <input
              type='email'
              name=''
              id='mail'
              className='input'
              placeholder='Correo'
            />
            <input
              type='password'
              name=''
              id='password'
              className='input'
              placeholder='Contraseña'
            />
            <a href='/'>¿Olvidaste tu contraseña?</a>
            <button className='button'>Iniciar sesión</button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Login;
