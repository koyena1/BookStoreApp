import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => 
        {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        await axios
            .post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    alert("Login Successfully !!");
                    document.getElementById("my_modal_3").closest();
                    window.location.reload();
                }
                localStorage.setItem("Users", JSON.stringify(res.data));
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    alert("Error : " + err.response.data.message);
                }
            });
    };
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").closest()}
                        >
                            ✕
                        </Link>


                        {/* {Login} */}
                        <h3 className="font-bold text-lg">Login</h3>

                        {/* {Email} */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none text-black dark:text-white dark:bg-slate-700 placeholder-gray-500 dark:placeholder-gray-300"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && (
                                <span className="text-sm-text-red-600">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* {Password} */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-80 px-3 py-1 border rounded-md outline-none text-black dark:text-white dark:bg-slate-700 placeholder-gray-500 dark:placeholder-gray-300"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && (
                                <span className="text-sm text-red-600">
                                    This field is required
                                </span>
                            )}
                        </div>
                        {/* {Login Button} */}
                        <div className="flex justify-around mt-4">
                            <button className="bg-pink-700 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-400">
                                Login
                            </button>
                            <p>
                                Not Registered ? {" "}
                                <Link
                                    to="/signup"
                                    className="underline text-pink-700 cursor-pointer"
                                >
                                    Signup
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;