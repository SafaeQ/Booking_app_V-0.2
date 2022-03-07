import React, {useState} from 'react';
import Image from 'react-bootstrap/Image'
// import {login} from '../services/authService'
import axios from 'axios'

export const Login = props => {

    const [data, setData] = useState({
        email: '',
        password: '', 
        role: '',
    })

    const onChangeInputs = (e)=> {
         const {name, value} = e.target
         setData(({...data, [name]: value}))
        //  console.log(data);
    }
 
    async function hundleSubmit(e) {
        e.preventDefault();
        console.log('i\'m clicked');
        const requestOptions = {
            method: 'POST',
            cache: "no-cache",
            credentials: "same-origin",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
            },
            body: JSON.stringify({data})
        }

        const response = await axios.post('http://localhost:8000/auth/login',data)
        console.log(response.data);
        // const dataBody = await response.json();

        // if(dataBody.user){
        //     console.log('login is cool')
        //     window.location.href = '/'
        // }else{
        //     console.log('please check the inputs valu')
        // }   
        // console.log(loginData);
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
                                    <input type="email" name="email"  className="form-control" onChange={onChangeInputs}/>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Password</label>
                                    <input type="password" name="password" className="form-control" onChange={onChangeInputs} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Role</label>
                                    <input type="role" name="role"className="form-control" onChange={onChangeInputs}/>
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