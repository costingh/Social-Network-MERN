import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Posts } from '../../dummyData';

function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {Posts.map((p) => {
                    return <Post key={p.id} post={p}/>
                })}
            </div>
        </div>
    )
}

export default Feed
