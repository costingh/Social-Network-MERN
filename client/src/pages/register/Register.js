import { useState } from 'react';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {styles} from './registerPageStyle'
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import axios from "axios";

function Register({classes}) {
  const history = useHistory();
  const [passwordErr, setPasswordErr] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordAgain = document.getElementById('passwordAgain').value;

    if (passwordAgain !== password) {
      setPasswordErr("Passwords don't match!");

      setTimeout(() => {
        setPasswordErr('');
      }, 5000)
    } else {

      const user = {
        username: username,
        email: email,
        password: password,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

    return (
      <div className={classes.register}>
        <form 
						className={classes.form} 
						noValidate 
						autoComplete="off" 
						onSubmit={handleClick}
					>
						<h1 style={{marginBottom: '10vh'}}>Sign Up</h1>
						<p className={classes.text}>already have an account? <Link to='/login'>log in now</Link></p>
						<Avatar alt='choose avatar' src="" className={classes.avatar}/>
            <TextField 
							className={classes.textField}						
							id='username' 
							name='username' 
							label="Username" 
							required	
						/>
						<TextField 
							className={classes.textField}						
							id='email' 
							name='email' 
							label="Email" 
              type="email"
							required 
						/>
						<TextField
							className={classes.textField}
							id="password"
							label="Password"
							type="password"
              minLength="6"
							autoComplete="current-password"
						/>
						<TextField 
							className={classes.textField}						
							id='passwordAgain' 
							name='passwordAgain' 
							label="Password Again" 
              type="password"
							required	
						/>
						<p className={classes.errorMessage}>{passwordErr}</p>
						<button
							type="submit"
							className={classes.button}
						>
							Signup
						</button>
					</form>
      </div>
    )
}

export default withStyles(styles)(Register);


