import React, {useState} from 'react'
import './post.css';
import {MoreVert} from '@material-ui/icons';
import { Users } from '../../dummyData';

function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={ `/assets/${Users.filter((u) => u.id === post.userId)[0].profilePicture}` } alt="" className="postProfileImg"/>
                        <span className="postUsername">
                            { Users.filter((u) => u.id === post.userId)[0].username }
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF + post.photo} alt="" className="postImg"/>
                    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{post.comment } comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
