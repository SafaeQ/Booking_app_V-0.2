import React, {useState, useEffect} from 'react';
import Image from 'react-bootstrap/Image'
import axios from 'axios';
import { useLocation } from "react-router-dom";

export const Login = props => {
    let location = useLocation();

    const [user, setUser] = useState({
        email: '',
        password: '', 
        role: '',
    })
    const handleInputChange = (e)=> {
        const {name, value} = e.target.value
        setUser({
            ...user,
            [name]: value
        })
    }

    const hundleSubmit = (e)=> {
        e.preventDefault();
        console.log('i\'m clicked');
        axios.post('http://localhost:8000/auth/login',user)
        .then(res=>{console.log(res.data.message);})
        
    }
    return (
        <div>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" >
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                <form onSubmit={hundleSubmit} className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Your Email</label>
                                    <input type="email"  className="form-control" onChange={handleInputChange} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Password</label>
                                    <input type="password"  className="form-control" onChange={handleInputChange} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Role</label>
                                    <input type="text" className="form-control" onChange={handleInputChange}/>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                </div>

                                </form>

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <Image src="https://as2.ftcdn.net/v2/jpg/02/34/32/13/1000_F_234321332_znN7GKnrrOV3V9Ol4DTQW5LL24zZQ1oF.jpg" className="img-fluid" alt="Sample image"/>

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}