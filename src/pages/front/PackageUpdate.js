import React, { Component } from 'react'
import CustomNavbar from '../../componentsFront/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../componentsFront/Footer/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import PackagesForm from '../../components/front/PackagesForm';
import PackageUpdateForm from '../../components/front/PackageUpdateForm';  


export default class PackageUpdate extends Component {
    render() {
        return (
            <div>
                <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
                <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Update your Package" Pdescription="here your can update the package that you are sending"/>
            <PackageUpdateForm />
            <FooterTwo FooterData={FooterData}/>
            </div>
        )
    }
}