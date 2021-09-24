import React from 'react'
import Presentation from "../../components/Home/Presentation/Presentation";
import Benefits from "../../components/Home/Benefits/Benefits";
import AboutUsFrame from '../../components/Home/AboutUsFrame/AboutUsFrame';
import Services from '../../components/Home/OurServices/Services';
import HomeData from "./HomeData.json"
import FinalSection from '../../components/Home/FinalSection/FinalSection';

// const dataBenefits = [
//     "Originalidad de trabajo elaborado.",
//     "Levantamiento de observaciones al 100%, hasta que se apruebe el trabajo.",
//     "Especialistas encargados de la elaboración de tu investigación.",
//     "Confidencialidad total de tus datos.",
//     "Asesoría de una hora al concluir con todos los entregables suscritos.",
//     "Cronograma de entregables (semanal) para que usted pueda dar seguimiento.",
//     "Hasta 2 sesiones de dos horas en la semana para coordinaciones o explicaciones de avance."
// ]

export default function Home() {
    

    return (
        <div>
            <Presentation data={HomeData.presentation} />
            <AboutUsFrame data={HomeData.about} />
            <Benefits data={HomeData.benefits} />
            <Services />
            <FinalSection data={HomeData.finalSection} />
        </div>
    )
}
