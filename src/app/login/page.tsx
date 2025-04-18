"use client"

import login from "@/assets/login.json"
import Lottie from "lottie-react";

const LoginPage = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left flex-1">
                    <Lottie animationData={login} loop={true} />;
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-semibold text-center my-4">Login</h1>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl ">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
