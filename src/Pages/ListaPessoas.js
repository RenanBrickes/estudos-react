import React, { Component } from 'react';
import './NovaPessoa.css';
import Api from './services/api';

class ListaPessoas extends Component {
  state =  { //-> Variavel nativa para carregar novas informações no componete
    Pessoas : [],
    
};

async componentDidMount() //-> Metodo que exuculta automaticamete quando o componete é carrgado
{
  const resposta = await Api.get('/Pessoas') //-> Carrega todos os dados da rota com o nome posts
  //console.log(resposta);
  this.setState({Pessoas:resposta.data}); //-> Atribui a variavel local State todos dados retornado da API
  //console.log(this.state);
} 

NovaPagina ()
{  
  
  this.props.history.push('/novaPessoas');
}
    render() {

      return (
        
        <div>
            <div className="container">
        <h1 className="text-center">Pagina Lista Pessoa</h1>
        <table className="table">
          <thead className="table-dark">
            <th className="text-center"scope="col">Nome</th>
            <th className="text-center" scope="col">Idade</th>
            <th className="text-center" scope="col">Cargo</th>
          </thead>
          <div>
            
          </div>
          { this.state.Pessoas.map(pessoa => (
              <tbody>
              <tr>
                  <td className="text-center">{pessoa.Nome}</td>
                  <td className="text-center">{pessoa.Idade}</td>
                  <td className="text-center">{pessoa.Cargo}</td>
              </tr>
            </tbody>
          ))}
        </table>

  
      </div>

      <button className="btn btn-primary" onClick={this.NovaPagina}>Cadastrar Novo</button>

        </div>

      );
  
  }
}
export default ListaPessoas