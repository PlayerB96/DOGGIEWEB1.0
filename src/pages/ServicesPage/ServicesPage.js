import React from 'react'
import Help from '../../components/ServicesPage/WeHelpYou/WeHelpYou'
import ThirdSection from '../../components/ServicesPage/ThirdSection/ThirdSection'
import ThirdData from '../../components/ServicesPage/ThirdSection/ThirdData.json'
export default function ServicesPage() {
    return (
        <div>
            <Help/>
            <ThirdSection data={ThirdData.thirdSection}/>
        </div>
    )
}
