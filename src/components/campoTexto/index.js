import './style.css'

export const CampoTexto = ({label, placeholder, obrigatorio, valor, aoAlterar}) => {

    const placeholderFormatada = `${placeholder}` 

    const aoDigitar = (event) => {
        aoAlterar(event.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholderFormatada}/>
        </div> 
    );
}
