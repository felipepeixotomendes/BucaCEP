import { useState } from "react";

function InputUsestate(){
    const [login,setLogin] = useState(); 
    const [senha,setSenha] = useState();
    const [vLogin,setVlogin] = useState();


    function verificaLogin(e){
        e.preventDefault();
       if (login.toLowerCase()=== 'felipe' && senha === '123'){
        setVlogin(true);

       }else{
        if (login.toLowerCase() !== 'felipe' && senha === '123'){
            setVlogin('Login incorreto!');
        }else if (login.toLowerCase() === 'felipe' && senha !== '123'){
            setVlogin('Senha incorreta!');
        }else{
            setVlogin("Login e senha Incorreto!");
        }
       }
    }


    return(
        <form>
            <label>Login</label>
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}></input>
            <br />
            <label>Senha:</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
            <br />
            <button onClick={verificaLogin}>Logar</button>
            {
                vLogin === true 
                ? <p>Logado com sucesso!</p> 
                : ''
            }
            {
                vLogin !== true
                ? <p>{vLogin}</p>
                : ''
            }
        </form>
    )
}


export default InputUsestate;