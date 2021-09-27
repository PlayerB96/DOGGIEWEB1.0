import React from 'react'
import Help from '../../components/ServicesPage/WeHelpYou/WeHelpYou'
import Matrix from '../../components/ServicesPage/Matrix/Matrix'
import ThirdSection from '../../components/ServicesPage/ThirdSection/ThirdSection'
import ThirdData from '../../components/ServicesPage/ThirdSection/ThirdData.json'
import FourthSection from '../../components/ServicesPage/FourthSection/FourthSection'
import FourthData from '../../components/ServicesPage/FourthSection/FourthData.json'
export default function ServicesPage() {
    return (
        <div>
            <Help/>
            <Matrix/>
            <ThirdSection data={ThirdData.thirdSection}/>
            <FourthSection data={FourthData.fourthSection}/>
        </div>
    )
}
