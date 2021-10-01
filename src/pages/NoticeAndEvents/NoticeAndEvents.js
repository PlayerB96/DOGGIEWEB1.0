import React from 'react'
import FourSection from '../../components/NoticeAndEvents/FourSectionNE/FourSection'
import ThirdSection from '../../components/NoticeAndEvents/ThirdSectionNE/ThirdSection'
import NEData from './NewsData.json'
import FirstSection from '../../components/NoticeAndEvents/FirstSectionNE/FirstSection'

export default function NoticeAndEvents() {
    return (
        <div>
            <FirstSection/>
            <ThirdSection data={NEData.thirdSection}></ThirdSection>
            <FourSection data={NEData.fourthSection}></FourSection>
        </div>
    )
}
