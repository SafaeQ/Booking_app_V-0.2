import React, {useState} from 'react';
import {Image, Button} from 'react-bootstrap'
import axios from 'axios'

export const Signup = ()=> {
    const initialForm = {id: null, name:'', email:'', password:'', role:''}
    const [user, setUser] = useState(initialForm)

    const handleInput = (event)=> {
        // console.log(event);
        const {name, value} = event.target
        setUser(({...user, [name]: value}))
    }

    const hundleSubmit = (e)=> {
        e.preventDefault()
        console.log('i\'m clicked');
        const {name, email, password, role} = user;
        if (name && email && password && role) {
            axios.post('http://localhost:8000/auth/signup',user)
            .then(res => console.log( 'dddd',res))
           } else{

                alert('invalid input')
            }
        
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

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                <form onSubmit={hundleSubmit} className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label">Your Name</label>
                                    <input type="text" name="name" className="form-control" onChange={handleInput} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Your Email</label>
                                    <input type="email" name="email" className="form-control" onChange={handleInput} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Password</label>
                                    <input type="password" name="password" className="form-control" onChange={handleInput} />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Role</label>
                                    <input type="text" name="role" className="form-control" onChange={handleInput} />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <Button type="submit" className="btn btn-primary btn-lg">Register</Button>
                                </div>

                                </form>

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/>

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