import React from "react";

import ResourceNav from "../../components/ResourcePage/ResourceNav/ResourceNav"
import ResourceBanner from "../../components/ResourcePage/ResourceBanner/ResourceBanner"

import ResourceNavData from "../../components/ResourcePage/ResourceNav/ResourceNavData.json";
import ResourceBannerData from "../../components/ResourcePage/ResourceBanner/ResourceBanner.json";

export default function ResourcePage(){

    return(
        <div>
            <ResourceNav data={ResourceNavData}/>
            <ResourceBanner data={ResourceBannerData}/>
        </div>
    );
}