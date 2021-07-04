import { withStyles } from '@material-ui/core/styles';
import {styles} from './closeFriendStyle'

function CloseFriend({user, classes}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className={classes.sidebarFriend}>
            <img src={PF + user.profilePicture} alt="" className={classes.sidebarFriendImg}/>
            <span className={classes.sidebarFriendName}>{user.username}</span>
        </li>
    )
}

export default withStyles(styles)(CloseFriend);