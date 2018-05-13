import React from 'react';
import {Nav, Tooltip, OverlayTrigger, Modal, Button, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Badge} from 'react-bootstrap';
import agencian1 from './files/agencian1.jpg';
import search from './files/search.svg';
import cart from './files/cart.svg';
import car from './files/car.png';
import finish from './files/finish.png';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(){
    super()
    
    this.state={
      show:false,
      show2:false
    }
  }
  render() {
    const tooltip = <Tooltip id="modal-tooltip">Boa diversãoo...</Tooltip>;
    return (
      <div className='Navbar'>
        <Nav className='AllNavBar'>
          <NavItem eventKey="1" href="/home">
            <img src={agencian1} alt='imgstatic' height='50px' width='50px'/>
          </NavItem>
          <NavDropdown  eventKey="4" title="CATEGORIAS" id="nav-dropdown">
            <MenuItem eventKey="4.1">TIRO</MenuItem>
            <MenuItem eventKey="4.2">AÇÃO</MenuItem>
            <MenuItem eventKey="4.3">RPG</MenuItem>
            <MenuItem eventKey="4.4">MMO</MenuItem>
            <MenuItem eventKey="4.5">ACARDE</MenuItem>
            <MenuItem eventKey="4.6">AVENTURA</MenuItem>
          </NavDropdown>
          <NavDropdown  eventKey="4" title="VIDEO GAMES" id="nav-dropdown">
            <MenuItem eventKey="4.1">PS4</MenuItem>
            <MenuItem eventKey="4.2">PS3</MenuItem>
            <MenuItem eventKey="4.3">X-BOX ONE</MenuItem>
            <MenuItem eventKey="4.4">X-BOX 360</MenuItem>
            <MenuItem eventKey="4.5">WII</MenuItem>
            <MenuItem eventKey="4.6">3DS</MenuItem>
          </NavDropdown>
          <NavItem>
            <FormGroup>
              <FormControl type="text" placeholder="Encontre um Game"/>
                <FormControl.Feedback>
                  <img src={search} alt='imgstatic' className='itemColor'/>
                </FormControl.Feedback>
              </FormGroup>
          </NavItem>
          <NavItem onClick={() => this.setState({ show: true })}>
            <img src={cart} alt='imgstatic'/>&nbsp;
            <Badge>{this.props.currentCar}</Badge>
          </NavItem>
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title className='carFinish' id="contained-modal-title">
                Carrinho 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='carFinish'>
              <div>
                Você tem {this.props.currentCar} jogo(s) no carrinho
              </div>
              <img src={car} alt='imgstatic' width='100px' height='100px'/>
              <div>
                <Button onClick={() => this.setState({ show2: true })} bsStyle="info">Finalizar compra :)</Button>&nbsp;
                <Button onClick={() => this.setState({ show: false })} bsStyle="danger">Continuar comprando..</Button>
              </div>
            </Modal.Body>

              <Modal
                {...this.props}
                show={this.state.show2}
                onHide={this.handleHide}
                dialogClassName="custom-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title className='carFinish' id="contained-modal-title-lg">
                    Finalizando compra..
                  </Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                    <div className='carFinish'>
                      <h3> Compra finalizada com sucesso, obrigado por comprar conosco! </h3>
                      <img src={finish} alt='imgstatic' width='60px' height='60px'/>
                    <div>
                      Você adquiriu{' '}
                      <OverlayTrigger overlay={tooltip}>
                        <a href="#tooltip">{this.props.currentCar } jogo(s)!!!</a>
                      </OverlayTrigger>{' '}
                    </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => this.setState({ show: false, show2: false })}>Fechar</Button>
                  </Modal.Footer>
              </Modal>
            </Modal>
        </Nav>
      </div>
      );
    }
  }
  

export default Navbar;




