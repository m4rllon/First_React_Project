import './style.css'

export const Botao = ({children}) => {
    return (
        <button className="botao"> {children} </button>
    );
}