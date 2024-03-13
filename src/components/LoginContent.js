
import '../styles/LoginContentStyle.css';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import UserService from '../services/UserService';




const LoginContent = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        password  : "",
        email     : ""
    });

    const formValidation = () => {

        let status = true;
        let localErrors = {...errors};

        if(password == "" || password.length < 8){
            localErrors.password = 'Must be greater than or equal to 8';
            status = false;               
        }

        setErrors (localErrors);
        return status;

    }


    const signin = async (e) => {
        e.preventDefault();
        console.log('form submited');

        if (formValidation()){// validation true
            const data = {
                password  : password,
                email     : email
                
            }
    
            try {
                const response = await UserService.login(data);
                console.log('response ===>', response);
                toast.success('User signin Successfully !');

                //save user data in localstorage
                localStorage.setItem('user_data', JSON.stringify(response.data.user));
                localStorage.setItem('token', response.data.token);

                setEmail('');
                setPassword('');

                //redirection
                navigate('/home');
    
            }catch (err){
                console.log(err);
                toast.error(err.response.data.message);
            }

        }else{
            console.log('Form invalid');
            }

    }

    return (
        <div className='login'>
            <Toaster />

            <div className='login-content'>
                <h1>Signin</h1>
            </div>

            <form onSubmit={signin}>
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
            
    );
};

export default LoginContent;