import React from 'react';
import '../assets/Styles/Sass/Sign_up.scss';

// eslint-disable-next-line camelcase
const Sign_Up = () => {
  return (
    <section className='container'>
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

          <section className='aside__buttons--login'>
            <p className='aside-login__text'>¿Ya estás registrado?</p>
            <button className='aside--login__button'>Inicia sesión</button>
          </section>
        </section>
      </aside>

      <section className='register'>
        <figure>
          <img
            className='register__logoSabana'
            src='../static/LogoUniSabana.png'
            alt='Logo Sabana'
          />
        </figure>
        <section className='register__container'>
          <h2 className='register__container--title'>Regístrate</h2>
          <p className='register__container--text'>Por favor ingresa tus datos</p>
          <form action='' className='register__container--form'>
            <input type='text' name='' id='' className='input' placeholder='Nombre' />
            <input
              type='email'
              name=''
              id=''
              className='input'
              placeholder='Correo'
            />
            <input
              type='password'
              name=''
              id=''
              className='input'
              placeholder='Contraseña'
            />
            <button className='button'>Regístrate</button>
          </form>
        </section>
      </section>
    </section>
  );
};

// eslint-disable-next-line camelcase
export default Sign_Up;
