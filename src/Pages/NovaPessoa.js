import React, { Component } from 'react';
import './NovaPessoa.css';
import Api from './services/api';

class NovaPessoa extends Component {
  
  state =  { //-> Variavel nativa para carregar novas informações no componete
    Nome : "",
    Idade : "",
    Cargo : ""
  };

 preencherCampos = async e => {
    e.preventDefault();

    const Dados = new FormData();
    Dados.append('Nome', this.setState.Nome);
    Dados.append('Idade', this.setState.Idade);
    Dados.append('Cargo', this.setState.Cargo);
    console.log(this.state);
    await Api.post('Criar', this.state);

     this.props.history.push('/');
  }

  PasssarCampos = e =>{ // Formato ErroFuction, para acessar o parametro this da classe Componetn
    this.setState({ [e.target.name]: e.target.value }); // Recebo no parametro name o parametro value

}


    render() {
    return (
      <div>
          <div className="container">
            <h1 className="text-center">Inserir Nova Pessoa</h1>
              <form className="form-group" onSubmit={this.preencherCampos}>
                  <label>Nome</label>
                  <input 
                  type="text"
                   name="Nome" 
                   className="form-control"
                    placeholder="Nome aqui"
                     value={this.state.Nome}
                      onChange={this.PasssarCampos}/> 

                  <label >Idade</label>
                  <input type="text" name="Idade" className="form-control" placeholder="Idade aqui" value={this.state.Idade}  onChange={this.PasssarCampos}/>
                  <label >Cargo</label>
                  <input type="text" name="Cargo" className="form-control" placeholder="Cargo aqui" value={this.state.Cargo}  onChange={this.PasssarCampos}/>
                  <button type="submit" className="btn btn-primary">Cadastrar Pessoas</button>
              </form>
          </div>


      </div>


    );
  }
}
export default NovaPessoa;