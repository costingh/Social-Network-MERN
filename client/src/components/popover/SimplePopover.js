import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Avatar from '../avatar/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'; 
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
	typography: {
		width: '200px',
		paddingRight: '40px',
	},
	desc: {
		color: '#gray',
		fontSize: '14px'
	},
	flex: {
		display: 'flex',
		padding: theme.spacing(2),
		alignItems: 'center',
		justifyContent: 'space-between',
		transition: 'all .3s ease',
		margin: '5px 10px',
		borderRadius: '5px',
		cursor: 'pointer',
		paddingRight: '40px',
		'&:hover': {
			background: '#ccc',

		}
	},
	icon: {
		marginLeft: '10px'
	}
}));

export default function SimplePopover({anchorEl, handleClose}) {
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const logOut = () => {
	localStorage.removeItem("user");
	history.push("/login");
  }

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
		
      >
		<div className={classes.flex}>
			<Avatar/>
			<Link to={`/profile/${user.username}`} style={{textDecoration:'none', color: '#111'}}>
				<Typography className={classes.typography}>{user.username} </Typography>
				<Typography className={classes.typography + ' ' + classes.desc}>Profile details</Typography>
			</Link>
		</div>
		<div className={classes.flex}>
			<ExitToAppIcon className={classes.icon} />
			<Typography className={classes.typography} onClick={logOut}>Log out</Typography>
		</div>
      </Popover>
    </div>
  );
}