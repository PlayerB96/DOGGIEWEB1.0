import React from 'react'
import Abouts from "../../components/AboutUs/Valores/AboutUs"
import AboutUsData from "../../components/AboutUs/Valores/AboutUsData.json"
export default function AboutUs() {
    return (
    <Abouts data={AboutUsData.aboutUs}/>
    )
}
