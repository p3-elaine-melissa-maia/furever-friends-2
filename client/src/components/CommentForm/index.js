import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ postId }) => {
    const [commentText, setCommentText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addComment({
                variables: {
                    postId,
                    commentText,
                    commentAuthor: Auth.getProfile().data.username,
                },
            });
            
            setCommentText('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'commentText' && value.length <= 280) {
            setCommentText(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div className='newCommentForm'>
            <h2>Write A New Post</h2>

            {Auth.loggedIn() ? (
                <>
                    <p
                        className={`${
                            characterCount === 280 || error ? 'text-danger' : ''
                        }`}>
                            Character Count: {characterCount}/280
                        </p>
                        <form
                        onSubmit={handleFormSubmit}
                        >
                            <textarea
                                name="commentText"
                                placeholder='Add your comment...'
                                value={commentText}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit"> Add Comment </button>
                            {error && (
                                <div>
                                    {error.message}
                                </div>
                            )}
                        </form>
                </>
            ) : (
                <p>
                    You need to be logged in to add a new comment. Please{' '}
                    <Link to="/login">log in</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default CommentForm;