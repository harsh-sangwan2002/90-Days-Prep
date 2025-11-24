import { useState } from 'react'

const CommentBox = () => {

    const [comments, setComments] = useState([
        {
            id: 1,
            title: "1. Hi, how are you doing?",
            replies: [
                {
                    id: 2,
                    title: "2. I'm good, thanks! How about you?",
                    replies: [
                        {
                            id: 3,
                            title: "3. Doing well, just busy with work.",
                            replies: [],
                        },
                    ],
                },
                {
                    id: 4,
                    title: "4. Hey! Long time no see.",
                    replies: [],
                },
            ],
        },
        {
            id: 5,
            title: "5. Hello everyone!",
            replies: [],
        },
    ]);
    return (
        <div>
            {comments.map((comment, idx) => (
                <Comment key={idx} comment={comment} setComments={setComments} />
            ))}
        </div>
    )
}

const Comment = ({ comment, setComments }) => {

    const [replyFlag, setReplyFlag] = useState(false);

    const updateComments = (commentId, text, comments) => {
        return comments.map(c => {
            if (c.id === commentId) {
                return {
                    ...c,
                    replies: [{ id: Date.now(), title: text, replies: [] }, ...c.replies]
                }
            }
            else if (c.replies.length > 0) {
                return {
                    ...c,
                    replies: updateComments(commentId, text, c.replies)
                }
            }
            return c;
        })
    }

    const handleSend = (text) => {
        setComments(prevComments => updateComments(comment.id, text, prevComments));
        setReplyFlag(false);
    }

    return (
        <div style={{ marginLeft: "20px", borderLeft: "1px solid gray", paddingLeft: "10px" }}>
            <p>{comment.title}</p>
            <button onClick={() => setReplyFlag(!replyFlag)}>Reply</button>
            {
                replyFlag && <ReplyBox onSend={handleSend} />
            }
            {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} setComments={setComments} />
            ))}
        </div>
    )
}

const ReplyBox = ({ onSend }) => {

    const [text, setText] = useState("");
    const handleSubmit = () => {
        if (!text.trim()) return;
        onSend(text);
        setText("");
    }

    return (
        <div>

            <textarea value={text} onChange={(e) => setText(e.target.value)} rows="4" cols="50" placeholder="Type your reply here..."></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default CommentBox
