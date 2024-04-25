import './style.css'

// O forEach itera e executa algum comando. Já o map itera, executa comando e retorna algo, uma nova lista dps das instruções serem executadas

export const ListaSuspensa = ({label, itens, valor, aoAlterado}) => {
    return(
        <div className="listaSuspensa">
            <label>{label}</label>
            <select onChange={event => aoAlterado(event.target.value)} value={valor}>
                <option value={''}></option>
                {itens.map(item => <option key={item}>{item}</option>)} 
                {/* Como a arrow function do map só vai executa uma linha, não precisa do return */}
                {/* A tag 'key' ajuda o react a renderizar os componentes. CUIDADO QUANDO FOR RENDERIZAR AS COISAS PELO INDEX */}
            </select>
        </div>
    );
}