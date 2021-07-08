import { withStyles } from '@material-ui/styles';
import {styles} from './messageStyle';
import {format} from 'timeago.js'

function Message({classes, message, own}) {
    return (
      <div className={own ? classes.messageContainerRight : classes.messageContainerLeft} >     
        <img src='https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' ></img>
        <div>{message.text}</div>
        <span className={classes.date}>{format(message.createdAt)}</span>
      </div>
    )
}

export default withStyles(styles)(Message);
