import React from 'react'
import Help from '../../components/ServicesPage/WeHelpYou/WeHelpYou'
import ThirdSection from '../../components/ServicesPage/ThirdSection/ThirdSection'
import ThirdData from '../../components/ServicesPage/ThirdSection/ThirdData.json'
import FourthSection from '../../components/ServicesPage/FourthSection/FourthSection'
import FourthData from '../../components/ServicesPage/FourthSection/FourthData.json'
export default function ServicesPage() {
    return (
        <div>
            <Help/>
            <ThirdSection data={ThirdData.thirdSection}/>
            <FourthSection data={FourthData.fourthSection}/>
        </div>
    )
}
