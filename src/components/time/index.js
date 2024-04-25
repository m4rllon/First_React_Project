import { Colaborador } from '../colaborador';
import './style.css'

export const Time = ({nome, corSecundaria, corPrimaria, colaboradores}) => {
    return (
        (colaboradores.length > 0) ?
        <section className='time' style={{backgroundColor: corSecundaria}}> 
            <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} time={colaborador.time}/>)}
            </div>
        </section>
        : <></>
    );
}