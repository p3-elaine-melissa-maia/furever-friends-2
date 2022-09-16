import React from 'react';

const PostList = ({ posts = [] }) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }

    return (
        <>
        <h2> Posts </h2>
        <div>
            {posts && 
            posts.map((post) => (
                <div key={post._id} className='singlePost'>
                    <p>{post.caption} <br/>
                    <span className='postDetails' style={{ fontSize: '15px'}}> {post.postAuthor} · {post.createdAt}</span></p>
                </div>
            
            ))}
        </div>
        </>
    );
};

export default PostList;