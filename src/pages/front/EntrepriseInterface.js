import React from "react";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import EntrepriseInterfaceBody from "../../components/front/EntrepriseInterfaceBody";
import { useServerApi } from "../../hooks/useServerApi";
import SignInFormWamya from "../../components/front/SignInFormWamya";

const EntrepriseInterface = () => {

    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');
  const [company, err, reload] = useServerApi("entreprises/"+id);
  const toRender = company;
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Entreprise Interface"
        Pdescription=""
      />
      {/*<HRService ServiceData={ServiceData}/>*/}
      <p></p>
      {toRender ? (
        <>
          <EntrepriseInterfaceBody company={toRender} />
        </>
      ) : (
          <SignInFormWamya/>
      )}
      <FooterTwo fClass="pt_150" FooterData={FooterData} />
    </div>
  );
};
export default EntrepriseInterface;
