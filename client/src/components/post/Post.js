import { useContext, useEffect, useState } from "react";
import { format } from 'timeago.js'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"
import {MoreVert} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './postStyle'

function Post({post, classes}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
      }, [currentUser._id, post.likes]);
      
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data);
        };

        fetchUser();
    }, [post.userId])

    const likeHandler = () => {
        try {
            axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className={classes.post}>
            <div className={classes.postWrapper}>
                <div className={classes.postTop}>
                    <div className={classes.postTopLeft}>
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilePicture ? PF + user.profilePicture : PF+'person/noAvatar.png'} alt="" className={classes.postProfileImg}/>
                        </Link>
                        <span className={classes.postUsername}>
                            { user.username }
                        </span>
                        <span className={classes.postDate}>{format(post.createdAt)}</span>
                    </div>
                    <div className={classes.postTopRight}>
                        <MoreVert/>
                    </div>
                </div>
                <div className={classes.postCenter}>
                    <span className={classes.postText}>{post?.desc}</span>
                    <img src={PF + post.img} alt="" className={classes.postImg}/>
                </div>
                <div className={classes.postBottom}>
                    <div className={classes.postBottomLeft}>
                        <img src={`${PF}like.png`} alt="" className={classes.likeIcon} onClick={likeHandler} />
                        <img src={`${PF}heart.png`} alt="" className={classes.likeIcon} onClick={likeHandler} />
                        <span className={classes.postLikeCounter}>{like} likes</span>
                    </div>
                    <div className={classes.postBottomRight}>
                        <div className={classes.postCommentText}>{post.comment } comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Post);
