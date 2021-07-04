import { withStyles } from '@material-ui/core/styles';
import {styles} from './onlineStyle';

function Online({user, classes}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
                <img src={PF+user.profilePicture} alt="" className={classes.rightbarProfileImg}/>
                <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>{user.username}</span>
        </li>
    )
}

export default withStyles(styles)(Online);
