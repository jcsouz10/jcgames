import React from 'react'

import {Grid, Well, Modal, Alert, Row, Col, Thumbnail, Button} from 'react-bootstrap'

import pacman from './files/pacman.jpg';
import iori from './files/iori.jpg';
import street from './files/street.jpg';
import godofwar from './files/godofwar.jpg';
import homemaranha from './files/homemaranha.jpg';
import fifa from './files/fifa.jpg';

import './Games.css';

class Games extends React.Component {
    constructor(){
      super();

      this.state={
        currentCar: 0,
        show: false        
      }
    }

    handleHide = () => {
      const {show} = this.props;
      alert(show)
    }

    render (){
      const { currentCar, showFalse } = this.props;             
        return (
            <div className='gameLegend' >
              <Grid>
              <Well bsSize="small"><h3 className='titles'> PRODUTOS EM DESTAQUE </h3></Well>

                <Row>
                  <Col xs={6} md={4} >
                    <Thumbnail src={street}>
                      <h3>R$ 30,00</h3>
                      <p> O novo Street Fighter para PSP.</p>
                      <div>
                        <Button onClick={() => currentCar()} bsStyle="primary">COMPRAR</Button>&nbsp;
                      </div>
                    </Thumbnail>
                  </Col>
                  <Col xs={6} md={4}>
                    <Thumbnail src={iori} >
                      <h3>R$ 35,00</h3>
                      <p>O Iori está mais poderoso no novo King Of Fighters.</p>
                      <div>
                        <Button onClick={() =>  currentCar()} bsStyle="primary">COMPRAR</Button>&nbsp;
                      </div>
                    </Thumbnail>
                  </Col>
                  <Col xs={6} md={4}>
                    <Thumbnail src={pacman} >
                      <h3>R$ 40,00</h3>
                      <p>O famoso joguinho do come-come está de volta!</p>
                      <div>
                        <Button  onClick={() => currentCar()} bsStyle="primary">COMPRAR</Button>&nbsp;
                      </div>
                    </Thumbnail>
                  </Col>
                </Row>
              </Grid>;

              <Grid>
                <Well bsSize="small"><h3 className='titles'> NOVIDADES </h3></Well>
                <Row>
                  <Col xs={6} md={4}>
                    <Thumbnail src={fifa}>
                      <h3>R$ 95,00</h3>
                      <p>FIFA 18 o melhor jogo de futebol da atualidade.</p>
                      <div>
                      <Button onClick={() => currentCar()} bsStyle="primary">COMPRAR</Button>&nbsp;
                      </div>
                    </Thumbnail>
                  </Col>
                  <Col xs={6} md={4}>
                    <Thumbnail src={homemaranha} >
                      <h3>R$ 60,00</h3>
                      <p>Novo jogo do Homem-Aranha está irado!!</p>
                      <div>
                        <Button  onClick={() => currentCar()} bsStyle="primary">COMPRAR</Button>&nbsp;
                      </div>
                    </Thumbnail>
                  </Col>
                  <Col xs={6} md={4}>
                    <Thumbnail src={godofwar}>
                      <h3>R$ 80,00</h3>
                      <p>God of War foi um dos jogos mais aguardados de 2018!</p>
                      <div>
                        <Button  onClick={() => currentCar()} bsStyle="primary">COMPRAR</Button>&nbsp;
                      </div>
                    </Thumbnail>
                  </Col>
                </Row>
              </Grid>;

                  
      
              <Modal bsStyle="success"
                show={this.props.show}
                onHide={currentCar}
                container={this}
                aria-labelledby="contained-modal-title"
              >
                  <Alert bsStyle="success">
                  <h4>Oba</h4>
                  <div>
                    Você adicionou um novo jogo ao seu carrinho, confira!!
                  </div>
                  <div>
                    <Button onClick={showFalse}>Fechar</Button>
                  </div>
                </Alert>
              </Modal>
            </div>
        )
    }
}
  
export default Games;


