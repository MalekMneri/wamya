import React from "react";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import Sign_dm from "../../componentsFront/Sign_dm";
import ScrollToTop from "../../componentsFront/ScrollToTop";

const P_deliveryform = () => {
  return (
    <div className="body_wrapper">
      <ScrollToTop />
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Sign Up"
        Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
      />
      <Sign_dm />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default P_deliveryform;