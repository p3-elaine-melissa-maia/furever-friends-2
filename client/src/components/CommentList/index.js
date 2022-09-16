import React from 'react';

const CommentList = ({ comments = [] }) => {
    if (!comments.length) {
        return  <h2>No Comments Yet</h2>;
    }

    return (
        <>
            <h2>
                Comments
            </h2>
            <div>
                {comments && comments.map((comment) => (
                    <div key={comment._id} className='singleComment'> 
                        <p>{comment.commentText} <br/>
                        <span className='commentDetails' style={{ fontSize: '15px'}}> {comment.commentAuthor} · {comment.createdAt} </span></p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CommentList;