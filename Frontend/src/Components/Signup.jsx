import React from "react";
import { Link, replace, useLocation, useNavigate} from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
    const location = useLocation();
    const navigate=useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { 
        register, 
        handleSubmit,
        formState: { errors },
       } = useForm();

      const onSubmit =async( data ) => {
        const userInfo = {
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        };
        await axios
        .post ("http://localhost:4001/user/signup",userInfo)
        .then((res) => {
            console.log(res.data);
            if (res.data) {
                alert("Signup Successfully !!");
                navigate(from,{replace:true});
            }
            localStorage.setItem("Users",JSON.stringify(res.data));
        }).catch((err)=>{
            if(err.response){
                console.log(err);
                alert("Error : " + err.response.data.message);
            }
        });
      };
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px] ">
                    <div className="modal_box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link 
                            to="/" 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                ✕
                            </Link>

                        {/* {Signup} */}
                        <h3 className="font-bold text-lg">Signup</h3>
                        {/* {Name} */}
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input 
                                type="text"
                                placeholder="Enter your FullName"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                 {...register("fullname", { required: true })}
                            />
                            <br />
                              {errors.fullname && (
                            <span className="text-sm-text-red-600">
                                This field is required
                            </span>
                        )}
                        </div>

                        {/* {Email} */}
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input 
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
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
                            <input type="password"
                                placeholder="Enter your Password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && (
                            <span className="text-sm-text-red-600">
                                This field is required
                            </span>
                            )}
                        </div>

                        {/* {Button} */}
                        <div className="flex justify-around mt-4">
                            <button 
                                className="bg-pink-700 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-400">
                                Signup
                                </button> 
                            <p className="text-md">
                                Already have an Account? {" "}</p>
                                <button
                                    type="button"
                                    className="underline text-pink-700 cursor-pointer"
                                onClick={() =>
                                   document.getElementById("my_modal_3").showModal()
                                }
                                >
                                    Login
                                </button>{" "} 
                                <Login />
                            
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;