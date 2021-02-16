import React, { Component } from 'react';
import '../assets/Styles/Sass/Records.scss';

export default class Records extends Component {
  render() {
    return (
      <>
        <section className='wrapper container'>
          <button className='back__button'>volver</button>
          <h1 className='experiments__title'>Experimentos realizados</h1>
          <div className='blank' />
        </section>

        <section className='experiments container'>
          <table className='experiments__table'>
            <thead className='experiments__table--head'>
              <tr>
                <th>Experimento</th>
                <th>Fecha</th>
                <th>Duración del experimento</th>
                <th>Estado</th>
                <th>Resumen</th>
              </tr>
            </thead>
            <tbody className='experiments__table--body'>
              <tr>
                <td>1</td>
                <td>10-Diciembre-2020</td>
                <td>24 horas</td>
                <td>Finalizado</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>

              <tr className='active-row'>
                <td>2</td>
                <td>09-Diciembre-2020</td>
                <td>12 horas</td>
                <td>Sin información</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>

              <tr>
                <td>3</td>
                <td>05-Noviembre-2020</td>
                <td>48 horas</td>
                <td>Abortado</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>

              <tr>
                <td>4</td>
                <td>05-Noviembre-2020</td>
                <td>48 horas</td>
                <td>En proceso</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>

              <tr>
                <td>5</td>
                <td>05-Noviembre-2020</td>
                <td>48 horas</td>
                <td>Finalizado</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>

              <tr>
                <td>6</td>
                <td>05-Noviembre-2020</td>
                <td>48 horas</td>
                <td>Finalizado</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>

              <tr>
                <td>7</td>
                <td>05-Noviembre-2020</td>
                <td>48 horas</td>
                <td>Finalizado</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>

              <tr>
                <td>8</td>
                <td>05-Noviembre-2020</td>
                <td>48 horas</td>
                <td>Finalizado</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>

              <tr>
                <td>9</td>
                <td>05-Noviembre-2020</td>
                <td>48 horas</td>
                <td>Finalizado</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>

              <tr>
                <td>10</td>
                <td>05-Noviembre-2020</td>
                <td>48 horas</td>
                <td>Finalizado</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </>
    );
  }
}
