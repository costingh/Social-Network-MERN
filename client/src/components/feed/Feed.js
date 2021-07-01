import {useState, useEffect} from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css' 
import axios from "axios"

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/60d71560b5a6240a7852809b")
              setPosts(res.data);
        };

        fetchPosts();
    }, [])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => {
                    return <Post key={p.id} post={p}/>
                })}
            </div>
        </div>
    )
}

export default Feed
