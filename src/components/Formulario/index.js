import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design', 
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Submit done!');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o corda do colaborador.</h2>
                <CampoTexto required={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto required={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa required={true} label="Times" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;