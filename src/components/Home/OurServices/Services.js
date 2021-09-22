import './Services.scss';
import img from '../../../assets/imgs/Services/woman-with-headphones.png'


export default function Services(props) {
    return (
        <div className='services-container'>
            <div className='title-container'>
                <div className='our'>NUESTROS</div>
                <div className='services'>SERVICIOS</div>
            </div>
            <div className='image-container'>
                <img className='image' src={img} alt='woman-headphones' />
            </div>
            <div className='buttons-container'>
                <div className='button-1'>
                    <button className='button'>
                        Tesis
                    </button>
                    <div className='rectangle'></div>
                </div>
                <button className='button'>
                    Plan de Tesis
                </button>
                <button className='button'>
                    Modelo <br /> de negocios
                </button>
                <button className='button'>
                    Plan <br /> de negocios
                </button>
            </div>
        </div>
    )
}