import React, { Component } from 'react';
import '../assets/Styles/Sass/Report.scss';

export default class Report extends Component {
  render() {
    return (
      <>
        <div className='wrapper'>
          <section className='top container'>
            <button className='containerBack__backButton'>Volver</button>
            <h1 className='main__title'>Resumen</h1>
            <section className='container' id='timer' />
          </section>

          <section className='container' id='cont1'>
            <h2 className='abstract__numExp subtitle'>Experimento #01</h2>

            <table className='abstract__table tabla'>
              <thead className='abstract__table--head tablahead'>
                <tr>
                  <th>Experimento</th>
                  <th>Fecha</th>
                  <th>Duración del experimento</th>
                  <th>Resultado</th>
                  <th>Resumen</th>
                </tr>
              </thead>
              <tbody className='abstract__table--body tablabody'>
                <tr>
                  <td>1</td>
                  <td>10-Diciembre-2020</td>
                  <td>24 horas</td>
                  <td>Exitoso</td>
                  <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className='container' id='cont2'>
            <h2 className='outputs__title subtitle'>Parámetros registrados</h2>
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
                  <td>11:58 am 20-dic-2020</td>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>11:58 am 15-dic-2020</td>
                  <td>3</td>
                  <td>48 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>53 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className='container' id='cont3'>
            <h2 className='tableVontainer__title subtitle'>Valores registrados</h2>

            <table className='outputs__table tabla'>
              <thead className='outputs__table--head tablahead'>
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
              <tbody className='outputs__table--body tablabody'>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>24 horas</td>
                  <td>10 unidades</td>
                  <td>0.5 unidades</td>
                  <td>50 C</td>
                  <td>100 unidades</td>
                  <td>100 ml</td>
                </tr>
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
          </section>

          <section className='container' id='cont4'>
            <h2 className='subtitle'>Gráfica</h2>
            <select className='selector' name='select'>
              <option value='value1'>Value 1</option>
              <option value='value2' selected>Value 2</option>
              <option value='value3'>Value 3</option>
            </select>
            <canvas id='MiGrafica' width='100' height='100' />
          </section>

          <section className='container' id='endButtons'>
            <button>Exportar</button>
          </section>
        </div>
      </>
    );
  }
}
