function Evento({numero}){

    function meuevento(){
        console.log(`Opa, fui ativado! ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuevento} >Ativar!</button>
        </div>
    )
}

export default Evento