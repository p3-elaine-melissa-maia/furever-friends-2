import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts = [] }) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }

    return (
        <>
        <h2> Your Posts </h2>
        <div>
            {posts && 
            posts.map((post) => (
                <div key={post._id} className='singlePost'>
                    <p>{post.caption} <br/>
                    <span className='postDetails' style={{ fontSize: '15px'}}> {post.postAuthor} · {post.createdAt}</span></p>
                        <Link to={`/posts/${post._id}`}>Join the discussion on this post!</Link>
                </div>
            
            ))}
        </div>
        </>
    );
};

export default PostList;