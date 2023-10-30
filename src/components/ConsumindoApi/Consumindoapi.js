import {useState} from "react"
import axios from 'axios';
import './consumindo.css';

function ConsumindoApi(){
   
    const [buscaCep,setBuscaCep] = useState();
    const [data,setData] = useState([]);
    let api = `https://viacep.com.br/ws/${buscaCep}/json/`
    
    function buscaApi(e){
        e.preventDefault();
        axios.get(api)
        .then(response =>{
            if(response.data.erro == true){
                setData([])
            }else{
                setData(response.data)
            }
        }).catch(error =>{
            console.log(error);
        }
        )

    }

    return(
        <main>
            <form>
                <label><h4>Buscar CEP:</h4></label>
                <br />
                <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)}></input>
                <br/>
                <button onClick={buscaApi}>Pesquisar</button>   

                {/* { 
                data.length === 0 
                ? 'Digite um CEP para buscar'
            :
                `${data.logradouro}
                ${data.bairro}
                ${data.cep}
                ${data.uf}
                ${data.ddd}
                ${data.ibge}
                ${data.siafi}`
                } */}
                <p>{data.length === 0 ? "Digite um CEP para buscar" : data.cep}</p>
                <p>{data.length === 0 ? "" : data.logradouro}</p>
                <p>{data.length === 0 ? "" : data.bairro}</p>
                <p>{data.length === 0 ? "" : data.localidade}</p>
                <p>{data.length === 0 ? "" : data.uf}</p>
                <p>{data.length === 0 ? "" : data.ibge}</p>
                <p>{data.length === 0 ? "" : data.gia}</p>
                <p>{data.length === 0 ? "" : data.ddd}</p>
                <p>{data.length === 0 ? "" : data.siafi}</p>
                
            </form>     
        </main>
    )
}

export default ConsumindoApi;