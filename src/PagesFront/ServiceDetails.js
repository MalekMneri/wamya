import React from 'react';
import CustomNavbar from '../components/front/CustomNavbar';
import Breadcrumb from '../components/front/Breadcrumb';
import ServiceDetails from '../componentsFront/Service/ServiceDetails';
import FooterTwo from '../components/front/FooterTwo';
import FooterData from '../components/front/FooterData';

const Faq = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Services Details" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <ServiceDetails/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Faq;