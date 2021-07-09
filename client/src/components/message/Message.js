import { withStyles } from '@material-ui/styles';
import {styles} from './messageStyle';
import {format} from 'timeago.js'

function Message({classes, message, own, user, contact}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <div className={own ? classes.messageContainerRight : classes.messageContainerLeft} >     
        {own 
			? <img
				src={
					user 
					&& user.profilePicture
						? PF + user.profilePicture
						: PF + "person/noAvatar.png"
				}
				alt=''
			></img>
			: <img
				src={
					contact 
					&& contact.profilePicture
						? PF + contact.profilePicture
						: PF + "person/noAvatar.png"
				}
				alt=''
			></img>
		}
        <div>{message.text}</div>
        <span className={classes.date}>{format(message.createdAt)}</span>
      </div>
    )
}

export default withStyles(styles)(Message);
