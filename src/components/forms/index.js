import { useState } from 'react'
import { Botao } from '../botao'
import { CampoTexto } from '../campoTexto'
import { ListaSuspensa } from '../listaSuspensa'
import './style.css'

export const Forms = ({aoCadastrarColaborador, nomesDosTimes, cadastrarNovoTime}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        // Essa é uma forma bem simples de declarar um objeto
        aoCadastrarColaborador({
            nome, 
            cargo, 
            imagem, 
            time,
        })
        setCargo('')
        setImagem('')
        setNome('')
        setTime('')
    }

    return(
        <section className="forms">
            <form onSubmit={aoSalvar}>
                <h2>Preencha as informações abaixo para adicionar um novo colaborador</h2>
                <CampoTexto obrigatorio={true} label={"Nome"} placeholder={"Digite seu nome"} valor={nome} aoAlterar={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label={"Cargo"} placeholder={"Digite seu cargo"} valor={cargo} aoAlterar={valor => setCargo(valor)}/>
                <CampoTexto obrigatorio={true} label={"Imagem"} placeholder={"Informe o caminho da imagem"} valor={imagem} aoAlterar={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} itens={nomesDosTimes} label={"Time"} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao children={"Adicionar Colaborador"}/>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault()
                cadastrarNovoTime({nome: nomeTime, cor: corTime})
                }}>
                <h2>Preencha as informações abaixo para adicionar um novo time</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label={"Nome do Time"} 
                    placeholder={"Digite o nome do time"} 
                    valor={nomeTime} aoAlterar={valor => setNomeTime(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label={"Cor do Time"}
                    placeholder={"Digite a cor do time"} 
                    valor={corTime} 
                    aoAlterar={valor => setCorTime(valor)}
                />                  
                <Botao children={"Criar novo time"}/>
            </form>
        </section>
    )
}