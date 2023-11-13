import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/shop/loginImg.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const photo = form.photo.value
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, photo, email, password }
        console.log(user);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                updateUserProfile(name, photo)
                    .then(res => {
                        console.log(res, "info updated");
                        navigate('/')
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" name='photo' className="input input-bordered" required />
                                </div>
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


                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-yellow-500 text-white" value="Sign Up" />
                                </div>
                            </form>



                            <p className='my-4 text-center'>New to Clean Center <Link className='text-yellow-500 font-bold' to='/login'>login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SignUp;



