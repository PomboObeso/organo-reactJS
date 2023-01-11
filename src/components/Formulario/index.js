import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome,setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.cadastroColaborador({
            nome,
            cargo,
            imagem,
            time
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o corda do colaborador.</h2>
                <CampoTexto valor={nome} aoAlterar={valor => setNome(valor)} required={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto valor={cargo} aoAlterar={valor => setCargo(valor)}required={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto valor={imagem} aoAlterar={valor => setImagem(valor)}label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa valor={time} aoAlterar={valor => setTime(valor)} required={true} label="Times" itens={props.times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;