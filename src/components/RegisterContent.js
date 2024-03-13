import UserService from '../services/UserService';
import '../styles/RegisterContentStyle.css';
import toast, { Toaster } from 'react-hot-toast';


import React, { useState } from 'react';

const RegisterContent = () => {

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors, setErrors] = useState({
        firstname : "",
        lastname  : "",
        password  : "",
        email     : ""
    });

    
    const formValidation = () => {

        let status = true;
        let localErrors = {...errors};

        if(firstname == ""){
            localErrors.firstname = 'Enter your firstname';
            status = false;            
        }

        if(lastname == ""){
            localErrors.lastname = 'Enter your lastname'; 
            status = false;              
        }

        if(password == "" || password.length < 8){
            localErrors.password = 'Must be greater than or equal to 8';
            status = false;               
        }

        setErrors (localErrors);
        //console.log(localErrors);
        return status;

    }

    const register = async (e) => {
        e.preventDefault();
        console.log('form submited');

        if (formValidation()){// validation true
            const data = {
                firstname : firstname,
                lastname  : lastname,
                password  : password,
                email     : email
                
            }
    
            try {
                const response = await UserService.register(data);
                console.log('response ===>', response);
                toast.success('User added Successfully !');
    
                setFirstname('');
                setLastname('');
                setPassword('');
                setEmail('');
    
            }catch (err){
                console.log(err);
                toast.error('This is an error!');
            }

        }else{
            console.log('Form invalid');
            }

        
        
    }

    

    return (
    <div className='container'>
        <div className="register">
            <h1>sing Up</h1>
            <Toaster />
            <div >
                <form className="register-contents" onSubmit={register}>
                    <div className="form-content">
                        <label>Firstname </label>
                        <input type="text"
                        value={firstname} 
                        onChange={ (e) => setFirstname(e.target.value)} 
                        />
                        {
                            errors.firstname != " " ? <div style={{color:'orangered' , textAlign:'center'}}>
                                {errors.firstname}
                                </div> : ''
                        }
                    </div>
                    <div className="form-content">
                        <label>Lastname </label>
                        <input type="text"
                        value={lastname} 
                        onChange={ (e) => setLastname(e.target.value)}
                        />
                        {
                            errors.lastname != " " ? <div style={{color:'orangered' , textAlign:'center'}}>
                                {errors.lastname}
                                </div> : ''
                        }
                    </div>
                    
                    <div className="form-content">
                        <label>Email </label>
                        <input type="email" 
                        value={email} 
                        onChange={ (e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-content">
                        <label>Password </label>
                        <input type="password" 
                        value={password} 
                        onChange={ (e) => setPassword(e.target.value)}
                        />
                        {
                            errors.password != " " ? <div style={{color:'orangered' , textAlign:'center'}}>
                                {errors.password}
                                </div> : ''
                        }
                    </div>
                    
                    <button className='btn' type="submit" >submit</button>
                    
                </form>
            </div>
        </div>
    </div>
    );
};

export default RegisterContent;