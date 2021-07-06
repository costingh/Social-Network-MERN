import { useContext } from 'react';
import {loginCall} from '../../apiCalls';
import { useHistory } from "react-router";
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import {styles} from './loginPageStyle'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function Login({ classes }) {
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  const history = useHistory();
  
  const handleClick = (e) => {
	e.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

    loginCall(
      { email: email, password: password },
      dispatch
	);
	
	history.push("/");
	
  }
  
    return (
		  <div className={classes.login} >
				<form 
					className={classes.form} 
					noValidate 
					autoComplete="off" 
					onSubmit={handleClick}
				>
					<h1 className={classes.header}>Log In</h1>
					<p className={classes.text}>new to this app? <Link to='/register'>sign up for free</Link></p>
					<TextField 
						className={classes.textField}						
						id='email' 
						name='email' 
						label="Email" 
						required 	
						type="email"
					/>
					{/* <p className={classes.errorMessage}>err email</p> */}
					<TextField
						className={classes.textField}
						id="password"
						label="Password"
						type="password"
						autoComplete="current-password"
						type="password"
						required
						minLength="6"
					/>
					{/* <p className={classes.errorMessage}>eroare pass</p> */}
					<button
						type="submit"
						className={classes.button}
						disabled={isFetching}
					>
						{isFetching ? (
							<CircularProgress color="primary" size="20px" />
							) : (
							"Log In"
							)}
					</button>
				</form>
		</div>

    )
}

export default withStyles(styles)(Login);