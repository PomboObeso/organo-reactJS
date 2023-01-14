import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    // Posteriormente implementar algo que mostre algo alternativo quando a seção estiver vazia com um ternario ? :
    return (
        props.colaboradores.length > 0 ? 
        <section className='time' style={css}>
            <h3 style={{borderColor:props.corPrimaria}} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                    />)
                }
            </div>
        </section>
        : 
        <section className='time' style={css}>
            <h3 style={{borderColor:props.corPrimaria}} >{props.nome}</h3>
            <p className='info'>Está seção ainda não possui colaboradores.</p>
        </section>
    )
}

export default Time