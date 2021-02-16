import React, { Component } from 'react';
import '../assets/Styles/Sass/RTExperiment.scss';

export default class RTExperiment extends Component {
  render() {
    return (
      <div className='wrapper'>
        <section className='top container'>
          <button className='containerBack__backButton'>Volver</button>
          <h1 className='main__title'>Experimento en tiempo real</h1>
          <section className='container' id='timer'>
            <h3 className='container__timer--title subtitle'>Tiempo transcurrido</h3>
            <p className='container__timer indicator__value '>00:00:00</p>
          </section>
        </section>

        <section className=' container' id='cont1'>
          <h2 className='indicator__title subtitle'>Indicadores</h2>
          <div className='indicator container' id='luz'>
            <h3 className='subtitle'>Luz</h3>
            <p className='indicator__value'>30 LX</p>
          </div>
          <div className='indicator container' id='irradiancia'>
            <h3 className='subtitle'>Irradiancia</h3>
            <p className='indicator__value'>320mm</p>
          </div>
          <div className='indicator container' id='temperatura'>
            <h3 className='subtitle'>Temperatura</h3>
            <p className='indicator__value'>25 C</p>
          </div>
          <div className='indicator container' id='ph'>
            <h3 className='subtitle'>PH</h3>
            <p className='indicator__value'>7 PH</p>
          </div>
          <div className='indicator container' id='volumen'>
            <h3 className='subtitle'>Volumen</h3>
            <p className='indicator__value'>30 ml</p>
          </div>
        </section>

        <section className='container' id='cont2'>
          <h2 className='outputs__title subtitle'>Parámetros ingresados</h2>
          <table className='outputs__table tabla'>

            <thead className='outputs__table--head'>
              <tr>
                <th>Número de células objetivo</th>
                <th>Duración del experimento</th>
                <th>Tiempo de luz</th>
                <th>Intensidad de la luz (irradiancia)</th>
                <th>Temperatura</th>
                <th>PH deseado</th>
                <th>Volumen deseado (nivel del tanque)</th>
              </tr>
            </thead>
            <tbody className='outputs__table--body'>
              <tr>
                <td>1</td>
                <td>24 horas</td>
                <td>10 unidades</td>
                <td>0.5 unidades</td>
                <td>50 C</td>
                <td>100 unidades</td>
                <td>100 ml</td>
              </tr>

            </tbody>
          </table>
          <button className='updateParam'>Actualizar parametros</button>

        </section>

        <section className='container' id='cont3'>
          <h2 className='tableVontainer__title subtitle'>Valores registrados</h2>

          <table className='outputs__table tabla'>
            <thead className='outputs__table--head'>
              <tr>
                <th>Tiempo</th>
                <th>Número de células objetivo</th>
                <th>Duración del experimento</th>
                <th>Tiempo de luz</th>
                <th>Intensidad de la luz (irradiancia)</th>
                <th>Temperatura</th>
                <th>PH deseado</th>
                <th>Volumen deseado (nivel del tanque)</th>
              </tr>
            </thead>
            <tbody className='outputs__table--body'>
              <tr>
                <td>05 días 15:42 horas</td>
                <td>1</td>
                <td>10 unidades</td>
                <td>0.5 unidades</td>
                <td>50 C</td>
                <td>100 unidades</td>
                <td>100 ml</td>
                <td>100 ml</td>
              </tr>
              <tr>
                <td>01 día 05:42 horas</td>
                <td>1</td>
                <td>10 unidades</td>
                <td>0.5 unidades</td>
                <td>50 C</td>
                <td>100 unidades</td>
                <td>100 ml</td>
                <td>100 ml</td>
              </tr>
              <tr>
                <td>2:30 horas</td>
                <td>1</td>
                <td>10 unidades</td>
                <td>0.5 unidades</td>
                <td>50 C</td>
                <td>100 unidades</td>
                <td>100 ml</td>
                <td>100 ml</td>
              </tr>
              <tr>
                <td>10:00 min</td>
                <td>1</td>
                <td>10 unidades</td>
                <td>0.5 unidades</td>
                <td>50 C</td>
                <td>100 unidades</td>
                <td>100 ml</td>
                <td>100 ml</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className='container' id='cont4'>
          <h2 className='subtitle'>Gráfica</h2>
          <select className='selector' name='select'>
            <option value='value1'>Todo</option>
            <option value='value1'>PH</option>
            <option value='value2'>Luz</option>
            <option value='value3'>Temperatura</option>
          </select>
          <canvas id='MiGrafica' width='100' height='100' />
        </section>

        <section className='container' id='endButtons'>
          <button>Abortar</button>
          <button disabled='disabled'>Finalizar</button>
        </section>

      </div>
    );
  }
}
