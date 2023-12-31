import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corDeFundo}

    return (
         props.colaboradores.length > 0 ? <section className='time' style={css}>

            <h3>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.key} nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo}/>)}
            </div>
        
        </section>
        : ''
    )
}

export default Time;