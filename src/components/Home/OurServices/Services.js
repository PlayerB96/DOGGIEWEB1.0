import './Services.scss';
import img from '../../../assets/imgs/Services/woman-with-headphones.png'


export default function Services(props) {
    const moreInfoStyle = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUwNi4xMzQsMjQxLjg0M2MtMC4wMDYtMC4wMDYtMC4wMTEtMC4wMTMtMC4wMTgtMC4wMTlsLTEwNC41MDQtMTA0Yy03LjgyOS03Ljc5MS0yMC40OTItNy43NjItMjguMjg1LDAuMDY4ICAgIGMtNy43OTIsNy44MjktNy43NjIsMjAuNDkyLDAuMDY3LDI4LjI4NEw0NDMuNTU4LDIzNkgyMGMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjBjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjBoNDIzLjU1NyAgICBsLTcwLjE2Miw2OS44MjRjLTcuODI5LDcuNzkyLTcuODU5LDIwLjQ1NS0wLjA2NywyOC4yODRjNy43OTMsNy44MzEsMjAuNDU3LDcuODU4LDI4LjI4NSwwLjA2OGwxMDQuNTA0LTEwNCAgICBjMC4wMDYtMC4wMDYsMC4wMTEtMC4wMTMsMC4wMTgtMC4wMTlDNTEzLjk2OCwyNjIuMzM5LDUxMy45NDMsMjQ5LjYzNSw1MDYuMTM0LDI0MS44NDN6IiBmaWxsPSIjZTRjMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==";
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
                <div className='button-1'>
                    <button className='button'>
                        Plan de Tesis
                    </button>
                    <div className='rectangle'></div>
                </div>
                <div className='button-1'>
                    <button className='button'>
                        Modelo <br /> de negocios
                    </button>
                    <div className='rectangle'></div>
                </div>
                <div className='button-1'>
                    <button className='button'>
                        Plan <br /> de negocios
                    </button>
                    <div className='rectangle'></div>
                </div>
            </div>
            <div className='more-information'>
                <a href='' className='information-link'>
                    Más información 
                </a>
                <img src={moreInfoStyle}/>
            </div>
        </div>
    )
}