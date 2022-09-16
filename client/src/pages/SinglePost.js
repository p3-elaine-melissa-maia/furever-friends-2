import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_POST } from '../utils/queries';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const SinglePost = () => {
    const { postId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId: postId },
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <section className='singlePost'>
            <h2> Comments </h2>
            <div>
            
                {post.caption}
                
            </div>

            <div>
                <CommentList comments={post.comments} />
            </div>
            <div>
                <CommentForm postId={post._id} />
            </div>
            
        </section>
    );
};

export default SinglePost;