import React, { Component } from 'react';
import firebase from '../../firebase';

class Cadastro extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            nascimento: ""
        }

        this.gravar = this.gravar.bind(this);
    }

    async gravar(){

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then( async (retorno) => {
            
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                nascimento: this.state.nascimento
            });
        });

        // firebase.firestore().collection("usuario").add({
        //     nome: this.state.nome,
        //     sobrenome: this.state.sobrenome
        // });
    }
    
    
    render(){
        return(
            <div>
                <div>
                    <h1>Tela de Cadastro</h1>
                    <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email:e.target.value})} />
                    <br/>
                    <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha:e.target.value})} />
                    <br/>
                    <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome:e.target.value})} />
                    <br/>
                    <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome:e.target.value})} />
                    <br/>
                    <input type="text" placeholder="Data de Nascimento" onChange={(e) => this.setState({nascimento:e.target.value})} />
                    <br/>
                    <button onClick={this.gravar}>Gravar Cadastro</button>
                </div>
                <div>
                    <a href="./"><button>Voltar</button></a>
                </div>
            </div>
        );
    }

}



export default Cadastro;