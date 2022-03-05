import React, {useState} from 'react';
import Image from 'react-bootstrap/Image'
// import {login} from '../services/authService'

export const Login = props => {

    const [data, setData] = useState({
        email: '',
        password: '', 
        role: '',
    })

    // const onChangeUsername = (e)=> {
    //     setData({...data, email:e.target.value})
    // }

    // const onChangePassword = (e)=> {
    //     setData({...data, password:e.target.value})
    // }

    // const onChangeRole = (e)=> {
    //     setData({...data, role:e.target.value})
    // }

    async function hundleSubmit(e) {
        e.preventDefault();
        console.log('i\'m clicked');
        const response = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({data})
        })

        const loginData = await response.json();
        console.log(loginData);

        // login(data.email, data.password).then((res)=>{
        //     window.localStorage.setItem('token', res.data.token);
        // })
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

                                <form onSubmit={hundleSubmit} className="mx}-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Your Email</label>
                                    <input type="email" name="email"  className="form-control" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Password</label>
                                    <input type="password" name="password" className="form-control" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Role</label>
                                    <input type="text" name="text"className="form-control" />
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