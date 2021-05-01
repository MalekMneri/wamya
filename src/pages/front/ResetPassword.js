import React from 'react';
import CustomNavbar from '../../componentsFront/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../componentsFront/Footer/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import ResetPasswordForm from "../../components/front/ResetPasswordForm";

const ResetPassword = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Reset Your Password" Pdescription="TO EDIT"/>

            <ResetPasswordForm/>

            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default ResetPassword;