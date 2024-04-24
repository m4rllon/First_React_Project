import { Colaborador } from '../colaborador';
import './style.css'

export const Time = ({nome, corSecundaria, corPrimaria, colaboradores}) => {
    return (
        <section className='time' style={{backgroundColor: corSecundaria}}> 
            <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
            {colaboradores.map(colaborador => <Colaborador />)}
        </section>
    );
}