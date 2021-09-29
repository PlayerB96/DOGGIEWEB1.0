import React from 'react'
import FourSection from '../../components/NoticeAndEvents/FourSectionNE/FourSection'
import ThirdSection from '../../components/NoticeAndEvents/ThirdSectionNE/ThirdSection'
import NEData from './NewsData.json'
export default function NoticeAndEvents() {
    return (
        <div>
            <ThirdSection data={NEData.thirdSection}></ThirdSection>
            <FourSection data={NEData.fourthSection}></FourSection>
        </div>
    )
}
