import React, { Component } from 'react';
import '../assets/Styles/Sass/NewExperiment.scss';

export default class NewExperiment extends Component {
  render() {
    return (
      <>
        <section className='expphase newExpContainer'>
          <button className='expphase__volver'>Cancelar experimento</button>
        </section>
        <section className='inputContainer container'>
          <h2 className='inputContainer__title'>Ingrese los valores iniciales</h2>
          <form action='' className='inputForm'>
            <div className='reactorNum container'>
              <h1 className='reactorNum__title'>Cantidad de fotobioreactores</h1>
              <div className='reactornum__options'>
                <label>
                  <input
                    type='radio'
                    className='option-input radio'
                    name='example'
                    checked
                  />
                  1 Fotobiorreactor
                </label>
                <label>
                  <input type='radio' className='option-input radio' name='example' />
                  2 Fotobiorreactores
                </label>
                <label>
                  <input type='radio' className='option-input radio' name='example' />
                  3 Fotobiorreactores
                </label>
              </div>
            </div>

            <div className='form__container'>
              <label htmlFor='i_numcel'>
                Número de células objetivo:
                <input
                  type='number'
                  name='i_numcel'
                  placeholder='Número de células objetivo'
                />
              </label>
            </div>

            <div className='form__container'>
              <label htmlFor='i_duracion'>
                Duración del experimento:
                <input
                  type='number'
                  name='i_duracion'
                  placeholder='Duración del experimento'
                />
              </label>
            </div>

            <div className='form__container'>
              <label htmlFor='i_luz'>
                Tiempo de luz:
                <input type='number' name='i_luz' placeholder='Tiempo de luz' />
              </label>
            </div>

            <div className='form__container'>
              <label htmlFor='i__irradiancia'>
                Intensidad de la luz (irradiancia):
                <input
                  type='number'
                  name='i_irradiancia'
                  placeholder='Intensidad de la luz (irradiancia)'
                />
              </label>
            </div>

            <div className='form__container'>
              <label htmlFor='i_temp'>
                Temperatura:
                <input type='number' name='i_temp' placeholder='Temperatura' />
              </label>
            </div>

            <div className='form__container'>
              <label htmlFor='i_PH'>
                PH deseado:
                <input type='number' name='i_PH' placeholder='PH deseado' />
              </label>
            </div>

            <div className='form__container'>
              <label htmlFor='i_volumen'>
                Volumen deseado (nivel del tanque):
                <input
                  type='number'
                  name='i_volumen'
                  placeholder='Volumen deseado (nivel del tanque)'
                />
              </label>
            </div>
            <button type='submit'>Continuar</button>
          </form>
        </section>
      </>
    );
  }
}
