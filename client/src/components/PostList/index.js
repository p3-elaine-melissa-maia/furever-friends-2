import React from 'react';

const PostList = ({ posts = [] }) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }

    return (
        <>
        <h3> Your Posts </h3>
        <div>
            {posts && 
            posts.map((post) => (
                <div key={post._id}>
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default PostList;