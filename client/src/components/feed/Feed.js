import {useState, useEffect} from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { withStyles } from '@material-ui/core/styles';
import {styles} from './feedStyle'

function Feed({username, classes}) {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username 
                ?  await axios.get("/posts/profile/" + username)
                : await axios.get("posts/timeline/" + user._id);
              setPosts(res.data.sort((p1,p2) => {
                  return new Date(p2.createdAt) - new Date(p1.createdAt);
              })); 
        };

        fetchPosts();
    }, [username, user._id])

    return (
        <div className={classes.feed}>
            <div className={classes.feedWrapper}>
                {( !username || username === user.username) && <Share/> }
                {posts.map((p) => {
                    return <Post key={p._id} post={p}/>
                })}
            </div>
        </div>
    )
}

export default withStyles(styles)(Feed);
