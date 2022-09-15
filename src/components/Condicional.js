import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form >
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='Digite o seu e-mail...' 
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit' onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail &&(
                    <div>
                        <p>o email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail} > Limpar e-mail</button>
                    </div>
                )}
            </form>

        </div>
    )
}
export default Condicional