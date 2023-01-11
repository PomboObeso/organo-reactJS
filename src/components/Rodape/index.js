import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='social-medias'>
                <img src='./img/fb.png' alt='Logo do facebook'/>
                <img src='./img/tw.png' alt='Logo do Twitter'/>
                <img src='./img/ig.png' alt='Logo do Instagram'/>
            </div>
            <div className='logotipo'>
                <img src='./img/logo.png' alt='Logo do Organo - App organizacional'/>
            </div>
            <div className='copyright'>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Rodape;