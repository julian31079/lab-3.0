import React, { Component } from 'react';
import '../assets/Styles/Sass/Dashboard.scss';

const lorem =`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio a
at delectus natus autem eveniet eum, voluptatum repellat omnis
esse quos ipsum aliquam minus ut, corrupti totam saepe. Soluta,
laboriosam.`;
class Dashboard extends Component {
  render() {
    return (
      <div className='dashboardWrapper'>
        <section className='title container'>
          <h1>Bienvenido David</h1>
        </section>
        <section className='actionpanel container'>
          <h2 className='actionpanel__title'>¿Qué deseas hacer hoy?</h2>
          <button className='newExperiment'>Realizar un nuevo experimento.</button>
          <button className='history'>Estudiar mis anteriores experimentos.</button>
        </section>
        <section className='indicators container'>
          <h3>Indicadores</h3>
        </section>
        <section className='dayTip container'>
          <h2 className='dayTip__title'>Dato Curioso</h2>
          <div className='dayTip__algaeinfo'>
            <figure className='dayTip__algaeinfo--figure'>
              <img
                src='https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/article/2020/04/14/microalgae-cosmetics-market-has-untapped-significant-potential-says-yemoja-ceo/10903077-1-eng-GB/Microalgae-cosmetics-market-has-untapped-significant-potential-says-Yemoja-CEO.jpg'
                alt='Suculenta'
              />
            </figure>
            <h3 className='dayTip__algaeinfo--subtitle'>Algae scientific name</h3>
            <p className='dayTip__algaeinfo--text'>
              {lorem}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
