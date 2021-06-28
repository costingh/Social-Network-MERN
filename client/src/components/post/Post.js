import './post.css';
import {MoreVert} from '@material-ui/icons';

function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpg" alt="" className="postProfileImage"/>
                        <span className="postUsername">Name of User</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">My first post</span>
                    <img src="/assets/person/1.jpg" alt="" className="postImg"/>
                    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon"/>
                        <img src="/assets/heart.png" alt="" className="likeIcon"/>
                        <span className="postLikeCounter">10 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">9 comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
