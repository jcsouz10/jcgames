import React, { Component } from 'react';
import Banner_kung from './banners/Banner_kung.png';
import Banner_Motaro from './banners/Banner_Motaro.png';
import Banner_ryu from './banners/Banner_ryu.png';
import Banner_scorpion from './banners/Banner_scorpion.png';

import { Carousel } from 'react-bootstrap';

class GamesSlides extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
              <img width={1500} height={640} alt="1500x640" src={Banner_kung} />
                <Carousel.Caption>
                  <h3>KUNG LAO</h3>
                  <p>Relaxando e treinando..</p>
                </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1500} height={640} alt="1500x640" src={Banner_Motaro} />
              <Carousel.Caption>
                <h3>MOTARO</h3>
                <p>Estalando os dedinhos.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1500} height={640} alt="1500x640" src={Banner_ryu} />
            <Carousel.Caption>
              <h3>Ryu</h3>
              <p>Ele ta doidinho pra bater em um.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1500} height={640} alt="1500x640" src={Banner_scorpion} />
            <Carousel.Caption>
              <h3>SCORPION</h3>
              <p>Eita</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>;
      </div>
    );
  }
}

export default GamesSlides;
