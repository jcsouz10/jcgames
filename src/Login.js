import React from 'react';
import {Modal, Button, FormControl, FormGroup, Col, Form, ControlLabel} from 'react-bootstrap'
import agencian1 from './files/agencian1.jpg';
import './Login.css'

class Login extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleHide = this.handleHide.bind(this);
      this.state = {
        show: true,
        show2: false,
        inputValue: '',
        nameUser: '',
      };
    }
  
    handleHide() {
      this.setState({ show: false, show2:true});
    }

    closeModal = () =>{
        this.setState({
            show2: false
        })
    }

    onName = (e) => {
        const name = e.target.value;
        this.setState({
            nameUser: name
        })
    }
    
    render() {
      return (
        <div className="Login modal-container" style={{ height: 200 }}>  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Cadastro
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FormGroup>
                  <img src={agencian1} alt='imgstatic' width='100px' height='100px'/>
                  <h4> Se cadastre para receber descontos incríveis!! </h4>
                </FormGroup>
                <FormGroup value={this.state.inputValue} onChange={this.onName} controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Usuário
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Usuário" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    E-mail
                  </Col>
                  <Col sm={10}>
                    <FormControl  placeholder="E-mail" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col smOffset={1} sm={10}>
                    <Button bsStyle="success" onClick={this.handleHide}>Cadastrar</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal
            {...this.props}
            show={this.state.show2}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
                Bem-Vindo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='Bemvindo' alt='imgstatic'>
                <img src={agencian1} alt='imgstatic' width='100px' height='100px'/>
                <h3> Obrigado por se cadastrar </h3>
                <h1> {this.state.nameUser} </h1>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeModal}>Fechar</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
export default Login;