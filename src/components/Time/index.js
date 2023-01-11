import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    // Posteriormente implementar algo que mostre algo alternativo quando a seção estiver vazia com um ternario ? :
    return (
        props.colaboradores.length > 0 && 
        <section className='time' style={css}>
            <h3 style={{borderColor:props.corPrimaria}} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                    />)
                }
            </div>
        </section>
    )
}

export default Time