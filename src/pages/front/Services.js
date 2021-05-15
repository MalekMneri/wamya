import React from 'react';
import CustomNavbar from "../../components/front/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import HRService from "../../componentsFront/Service/HRService";
import PrototypeService from "../../componentsFront/Service/Sservice/PrototypeService";
import Partner from "../../componentsFront/Partner";
import ServiceSubscribe from "../../componentsFront/ServiceSubscribe";
import FooterTwo from "../../components/front/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import ServiceData from "../../componentsFront/Service/ServiceData";

const Service = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our services" Pdescription="you can find here our services and our advanced features"/>
            <HRService ServiceData={ServiceData}/>
            <PrototypeService/>
            <Partner pClass="partner_logo_area_two" pClasst="pt-0 mb-0"/>
            <ServiceSubscribe sClass="s_form_info_two"/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default Service;