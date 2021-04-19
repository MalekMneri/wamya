import React, {useState} from 'react';
import {useHistory} from "react-router";
import {useFormik} from "formik";
import {queryServerApi} from "../../utils/queryServerApi";
import * as Yup from "yup";
import {FormGroup, FormHelperText} from '@material-ui/core';
import MuiAlert from "@material-ui/lab/Alert";

const CustomerSignUpForm =()=>{
    const history = useHistory();
    const [error,setError] = useState({visible: false,message: ""});

    const formik = useFormik({
        initialValues:{
            cin: "",
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            phoneNumber: "",
            street: "",
            city: "",
            zipCode: ""
        },validationSchema: YupSchema,
        onSubmit: async (values) => {
            console.log("Values",values);
            const [, err] = await queryServerApi("customers/addCustomer", values, "POST", false);
            console.log(err);
            if (err) {
                console.log('error',err)
                setError({
                    visible: true,
                    message: JSON.stringify(err.errors, null, 2),
                });
            } else {
                console.log("add");
                history.push("/");
            }
        },
    });


    const Reset= ()=>{
            formik.setValues({
                cin: "",
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                password: "",
                passwordConfirmation: "",
                phoneNumber: "",
                street: "",
                city: "",
                zipCode: ""
            });
        }


    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Allready have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> starting using our <br/><span className="f_700">amazing</span> services</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Track your package</li>
                                    <li><i className="ti-check"></i> Notification of delivery time </li>
                                    <li><i className="ti-check"></i> Checking for the most qualified driver for the job.</li>
                                </ul>
                                <button href="/#" className="btn_three sign_btn_transparent">Sign In</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>


                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        {error.visible && <span>{error.message}</span>}

                                        {!formik.isValid &&
                                        <MuiAlert className="mb-4" severity="error">
                                            <div className="d-flex align-items-center align-content-center">
                                         <span>
                                         <strong className="d-block">Danger!</strong> Check out the form again
                                         </span>
                                            </div>
                                        </MuiAlert>}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">CIN</label>
                                        <input
                                            type="number"
                                            id="cin" className="form-control"
                                            aria-label="Dollar amount (with dot and two decimal places)"
                                            value={formik.values.cin}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.cin && formik.touched.cin && (
                                            <FormHelperText error={formik.errors.cin}>{formik.errors.cin}</FormHelperText>
                                        )}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Username</label>
                                        <input
                                            id="username"
                                            type="text"
                                            placeholder="username"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.username && formik.touched.username && (
                                            <FormHelperText error={formik.errors.username}>{formik.errors.username}</FormHelperText>
                                        )}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">First Name</label>
                                        <input type="text" placeholder="First Name"
                                               id="firstname"
                                               value={formik.values.firstname}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.firstname && formik.touched.firstname && (
                                            <FormHelperText error={formik.errors.firstname}>{formik.errors.firstname}</FormHelperText>
                                        )}

                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Last Name</label>
                                        <input type="text" placeholder="First Name"
                                                id="lastname"
                                               value={formik.values.lastname}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.lastname && formik.touched.lastname && (
                                            <FormHelperText error={formik.errors.lastname}>{formik.errors.lastname}</FormHelperText>
                                        )}
                                    </div>


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" name="email" id="email" placeholder="test@test.com"
                                               value={formik.values.email}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.email && formik.touched.email && (
                                            <FormHelperText error={formik.errors.email}>{formik.errors.email}</FormHelperText>
                                        )}
                                    </div>


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input type="password" placeholder="******"
                                               id="password"
                                               value={formik.values.password}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.password && formik.touched.password && (
                                            <FormHelperText error={formik.errors.password}>{formik.errors.password}</FormHelperText>
                                        )}
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Confirm Password</label>
                                        <input
                                            type="password"
                                            placeholder="******"
                                            id="passwordConfirmation"
                                            value={formik.values.passwordConfirmation}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && (
                                            <FormHelperText error={formik.errors.passwordConfirmation}>{formik.errors.passwordConfirmation}</FormHelperText>
                                        )}
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Phone Number</label>
                                        <input type="number" className="form-control"
                                               aria-label="Dollar amount (with dot and two decimal places)"
                                               id="phoneNumber"
                                               value={formik.values.phoneNumber}
                                               onChange={formik.handleChange}
                                        />
                                        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                            <FormHelperText error={formik.errors.phoneNumber}>{formik.errors.phoneNumber}</FormHelperText>
                                        )}
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Address</label>
                                        <hr/>

                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">Street </label>
                                            <input type="text"
                                                   id="street"
                                                   value={formik.values.street}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.street && formik.touched.street && (
                                                <FormHelperText error={formik.errors.street}>{formik.errors.street}</FormHelperText>
                                            )}
                                        </div>
                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">City </label>
                                            <input type="text"
                                                   id="city"
                                                   value={formik.values.city}
                                                   onChange={formik.handleChange}/>
                                            {formik.errors.city && formik.touched.city && (
                                                <FormHelperText error={formik.errors.city}>{formik.errors.city}</FormHelperText>
                                            )}
                                        </div>

                                        <div className="form-group text_box">
                                            <label className="f_p text_c f_400">ZipCode</label>
                                            <input type="number" className="form-control"
                                                   aria-label="Dollar amount (with dot and two decimal places)"
                                                   id="zipCode"
                                                   value={formik.values.zipCode}
                                                   onChange={formik.handleChange}
                                            />
                                            {formik.errors.zipCode && formik.touched.zipCode && (
                                                <FormHelperText error={formik.errors.zipCode}>{formik.errors.zipCode}</FormHelperText>
                                            )}
                                        </div>

                                        <hr/>
                                    </div>

                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> I agree to terms and conditions of this website
                                            </label>
                                        </div>

                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex ">
                                            <div className="lead-text">
                                                <button type="submit" className="btn_three">Sign Up</button>
                                            </div>
                                             <button className="btn_three" onClick={Reset}>Reset</button>
                                        </div>
                                    </div>
                                    <p></p>
                                    <div className="d-flex justify-content-between align-items-center">

                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Or Sign up Using</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>


                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const YupSchema = Yup.object ({
    firstname: Yup.string()
        .required("First Name is Required"),
    username: Yup.string()
        .required("Username is Required"),
    lastname: Yup.string()
        .required("Last Name is Required"),
    email: Yup.string()
        .email("No valid Email ")
        .required("email is Required"),
    phoneNumber: Yup.number("Phone Number should be a number")
        .positive("Phone Number should be Positive")
        .required("phone number is Required"),
    street: Yup.string()
        .required("street is required"),
    city: Yup.string()
        .required("city is required"),
    zipCode: Yup.number("Zip Code should be a number")
        .positive("Zip Code should be Positive")
        .required("Zip Code is Required"),
    cin : Yup.number("CIN Is a Number")
        .positive("CIN should be Positive")
        .required("CIN Code is Required"),
    password: Yup.string()
        .min(8 | " your password should be 8 characters at least")
        .max(15 | " longer than 15 characters")
        .required("password is Required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')




});
export default CustomerSignUpForm;