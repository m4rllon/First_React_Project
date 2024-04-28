import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './style.css'

export const Colaborador = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    return(
        <div className='colaborador'>
            <AiFillCloseCircle
                size={24}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}
                
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart onClick={favoritar} color='red'/> 
                        : <AiOutlineHeart onClick={favoritar}/>}
                </div>
            </div>
        </div>
    );
}