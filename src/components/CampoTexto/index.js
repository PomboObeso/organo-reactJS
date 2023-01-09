import './CampoTexto.css'


const CampoTexto = (props) => {
    
    let valor = "";
    
    const aoDigitar = (evento) => {
        valor = evento.target.value;
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitar} placeholder={props.placeholder} required={props.required}/>
        </div>
    )
}

export default CampoTexto;