import { Colaborador } from '../colaborador';
import hexToRgba from 'hex-to-rgba';
import './style.css'

export const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    return (
        (colaboradores.length > 0) ?
        <section className='time' style={{backgroundImage: 'url(/images/imagens/fundo.png', backgroundColor: hexToRgba(time.cor, '0.6')}}> 
            <input 
             type='color'
             className='input-cor'
             value={time.cor}
             onChange={event => mudarCor(event.target.value, time.id)}/>
            
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            
            <div className='colaboradores'>
                {colaboradores.map((colaborador, index) => (
                <Colaborador
                  colaborador={colaborador}
                  key={index}
                  corDeFundo={time.cor}
                  aoDeletar={aoDeletar}
                  aoFavoritar={aoFavoritar}/>
                ))}
            </div>
        </section>
        : <></>
    );
}