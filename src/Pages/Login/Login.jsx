import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from '../../assets/shop/loginImg.png'
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const forme = location.state?.forme?.pathname || '/';
    // const captchaRef = useRef(null)
    // const [disable, setDisable] = useState(true)
    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Log in successfully",
            showConfirmButton: false,
            timer: 1500
        });
        navigate(forme, { replace: true });
    }
    // const handleValidateCaptcha = () => {
    //     const user_captcha_value = captchaRef.current.value
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisable(false)
    //     }
    //     else {
    //         setDisable(true)
    //     }
    // }
    return (
        <div>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                {/*  */}
                                {/* <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input type="text" ref={captchaRef} placeholder="type the captcha above" name='captcha' className="input input-bordered" required />
                                    <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs my-2">Validate</button>
                                </div> */}

                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-yellow-500 text-white" value="login" />
                                </div>
                            </form>
                            <hr className='my-5' />
                            {/* <button onClick={googleLog} className='btn  text-white'><FcGoogle></FcGoogle> Google</button> */}
                            {/* <button onClick={googleLog} className='btn  text-white'> Google</button> */}

                            <p className='my-4 text-center'>New here.Create An account <Link className='text-yellow-500 font-bold' to='/signup'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;