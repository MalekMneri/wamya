import React from 'react';
import CustomNavbar from '../componentsFront/CustomNavbar';
import Breadcrumb from '../componentsFront/Breadcrumb';
import Bloglists from '../componentsFront/Blog/Bloglists'
import FooterTwo from '../componentsFront/Footer/FooterTwo';
import FooterData from '../componentsFront/Footer/FooterData';

const Bloglist = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Blog List" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <Bloglists/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Bloglist;