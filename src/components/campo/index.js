import './style.css'

export const Campo = ({label, type='text', placeholder, obrigatorio, valor, aoAlterar}) => {

    const placeholderFormatada = `${placeholder}` 

    const aoDigitar = (event) => {
        aoAlterar(event.target.value)
    }

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholderFormatada}/>
        </div> 
    );
}
