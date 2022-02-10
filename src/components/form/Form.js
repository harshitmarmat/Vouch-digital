import { Input } from 'antd';
import { useRef } from 'react';
import ButtonUI from '../UI/ButtonUI';
import classes from './Form.module.css'

const Form = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const formHandler = async(event) => {
        event.preventDefault();
        const email = emailRef.current.input.value;
        const password = passwordRef.current.input.value;

        try{
            const response = await fetch('https://reqres.in/api/login',{
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json' 
                },
                body : JSON.stringify({
                    email : email,
                    password: password
                })
            });
            if(!response.ok){
                throw new Error('User Not Found');
            }
            const data = await response.json();
            if(!data.token){
                throw new Error(data.error);
            }
            alert('Successfully Logged In with token '+ data.token);
            console.log(data.token);
        }catch(err){
            alert(err);
        }
    }


    return(
        <div className={classes.container}>
            <div className={classes.titleBox}>
                <h2>Welcome Back</h2>
                <p>Sub-title text goes here</p>
            </div>
            <form onSubmit={formHandler}>
                <Input ref={emailRef} type="email" className={classes.input} placeholder="Email*"  required />
                <Input ref={passwordRef} type="password" className={classes.input} placeholder="Password*" required />
                <ButtonUI type='submit' className={classes['startBtn']} title='Login'/>
            </form>
            <div className={classes.lowerCnt}>
                <p>
                    Remember Password
                </p>
                <p>
                    Forget Password?
                </p>
            </div>
        </div>
    )
}

export default Form;