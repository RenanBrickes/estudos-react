import React from 'react';
import{Switch, Route} from 'react-router-dom';
import listaPessoas from './Pages/ListaPessoas';
import novaPessoas from './Pages/NovaPessoa';

function Rotas()
{   
    return (
        <Switch>
            <Route path="/" exact component ={listaPessoas}/>
            <Route path="/novaPessoa" component ={novaPessoas}/>
        </Switch>

    );

}

export default Rotas;