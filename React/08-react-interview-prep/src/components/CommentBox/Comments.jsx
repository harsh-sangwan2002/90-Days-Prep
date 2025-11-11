import { memo, useCallback, useState } from "react";

const Comments = () => {

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
            <h1>Comments</h1>
            {
                comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} setComments={setComments} />
                ))
            }
        </div>
    )
}

const Comment = memo(({ comment, setComments }) => {

    console.log("Rendering comment:", comment.id);
    const [replyFlag, setReplyFlag] = useState(false);

    const updateComments = useCallback((commentId, newCommentText, commentsList) => {
        return commentsList.map((c) => {
            if (c.id === commentId) {
                return {
                    ...c,
                    replies: [
                        {
                            id: Date.now(),
                            title: newCommentText,
                            replies: [],
                        },
                        ...c.replies,
                    ],
                };
            } else if (c.replies.length > 0) {
                return {
                    ...c,
                    replies: updateComments(commentId, newCommentText, c.replies),
                };
            }
            return c;
        });
    }, []);

    const handleSend = useCallback((text) => {
        setComments(prev => updateComments(comment.id, text, prev));
        setReplyFlag(false);
    }, [comment.id, setComments, updateComments]);

    return (
        <div style={{ marginLeft: "20px", borderLeft: "1px solid gray", padding: "10px", marginTop: "10px" }}>
            <p>{comment.title}</p>
            <button onClick={() => setReplyFlag(!replyFlag)}>Reply</button>
            {
                replyFlag && <ReplyForm handleSend={handleSend} />
            }
            {
                comment?.replies?.map((reply) => (
                    <Comment key={reply.id} comment={reply} setComments={setComments} />
                ))
            }
        </div>
    )
});

const ReplyForm = ({ handleSend }) => {
    console.log("Rendering ReplyForm");
    const [text, setText] = useState("");
    const handleClick = () => {
        if (!text.trim()) return;
        handleSend(text);
        setText("");
    }

    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your comment"></textarea>
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default Comments
