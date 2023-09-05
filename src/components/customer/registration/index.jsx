import { Link } from 'react-router-dom';
import './style.css'
import { RECAPTCHA_KEY } from '../../../config/config';
import ReCAPTCHA from 'react-google-recaptcha';
import { Controller, useForm } from 'react-hook-form';

const Registration = () => {

    const { register, handleSubmit, control, formState: { errors }, getValues } = useForm();
    const handleRagister = (data) => {
        console.log("SS", data);
    }
    return (
        <div className='main-container'>
            <div className='register-page'>
                <div>
                    <h4 className="title-1">New Customer</h4>
                    <p>If you have an account with us, Please <Link className='login-link'>Log-in</Link></p>
                </div>

                <form onSubmit={(e) => {
                e.preventDefault(); // Prevent the default form submission
                handleSubmit(handleRagister)(e); // Call your submit function manually
            }}>
                    <div className='form-div'>
                        <div className='input-div-1 form-group'>
                            <div className='input-text'>
                                <input type='text'
                                    placeholder='Enter first name'
                                    className={`custom-input form-control ${errors.firstName ? 'error-input' : ''}`}
                                    {...register("firstName",
                                        {
                                            required: true,
                                        })
                                    }
                                />
                                {errors.firstName && errors.firstName.type === "required" && (
                                    <p className="errorMsg">First name is required.</p>
                                )}
                                <input type="text"
                                    placeholder="Enter last name"
                                    name="lastName"
                                    formcontrolname={`custom-input form-control ${errors.lastName ? 'error-input' : ''}`}
                                    className='custom-input'
                                    {...register("lastName",
                                        {
                                            required: true,
                                        })
                                    }
                                />
                                {errors.lastName && errors.lastName.type === "required" && (
                                    <p className="errorMsg">Last name is required.</p>
                                )}
                                <input type='email'
                                    placeholder='Enter email'
                                    className={`custom-input form-control ${errors.email ? 'error-input' : ''}`}
                                    {...register("email", {
                                        required: true,
                                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                                    })}
                                />
                                {errors.email && errors.email.type === "required" && (
                                    <p className="errorMsg">Email is required.</p>
                                )}
                                {errors.email && errors.email.type === "pattern" && (
                                    <p className="errorMsg">Email is not valid.</p>
                                )}
                            </div>
                            <div className='input-radio'>
                                <input type="radio" value="male" name="gender"
                                  {...register("gender", {

                                })} formcontrolname="gender" />Male
                                <input type="radio" value="female" name="gender"   {...register("gender", {
                                       
                                    })} formcontrolname="gender" />Female
                             
                                {errors.gender && (
                                    <p className="errorMsg">Gender is required.</p>
                                )}

                            </div>
                        </div>

                        <div className="form-group input-div-2">
                            <div className='input-text'>
                                <input type="text"
                                    placeholder="Enter mobile number"
                                    name="mobileNumber"
                                    formcontrolname="mobileNumber"
                                    className={`custom-input-2 form-control ${errors.mobileNumber ? 'error-input' : ''}`}
                                    {...register("mobileNumber", {
                                        required: true,
                                        minLength: 10
                                    })} />
                                {errors.mobileNumber && errors.mobileNumber.type === "required" && (
                                    <p className="errorMsg">Password is required.</p>
                                )}
                                {errors.mobileNumber && errors.mobileNumber.type === "minLength" && (
                                    <p className="errorMsg">
                                        Contact should be at-least 10 digit.
                                    </p>
                                )}
                                <input type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    formcontrolname="password"
                                    className={`custom-input-2 form-control ${errors.password ? 'error-input' : ''}`}
                                    {...register("password", {
                                        required: true,
                                        minLength: 8
                                    })} />
                                {errors.password && errors.password.type === "required" && (
                                    <p className="errorMsg">Password is required.</p>
                                )}
                                {errors.password && errors.password.type === "minLength" && (
                                    <p className="errorMsg">
                                        Password should be at-least 8 characters.
                                    </p>
                                )}
                                <input type="password"
                                    placeholder="Enter confirm password"
                                    name="confirmPassword"
                                    formcontrolname="confirmPassword"
                                    className={`custom-input-2 form-control ${errors.confirmPassword ? 'error-input' : ''}`}
                                    {...register("confirmPassword", {
                                        required: 'Confirm Password is required',
                                        validate: (value) =>
                                            value === getValues("password"),
                                    })} />
                                {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                                    <p className="errorMsg">Password is required.</p>
                                )}
                                {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
                                    <p className="errorMsg">
                                        Password should be match
                                    </p>
                                )}

                            </div>
                        </div>
                    </div>
                    <div>
                        <ReCAPTCHA sitekey={RECAPTCHA_KEY} />
                    </div>
                    <div>
                        <button type="submit" data-text="register" className="button-one submit-button mt-15">register</button>
                    </div>
                </form>

            </div>
        </div>
    )

}
export default Registration;