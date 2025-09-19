import { use } from "react"
import Comment from './comment'
export default function Comments({CommentsPromise}){
const comments = use(CommentsPromise)


    return(
        <div className="card">
            <h3>All comments here: {comments.length}</h3>
            {
                comments.map(comment => <Comment key={comment.id} comment = {comment}></Comment>)
            }
        </div>
    )
}