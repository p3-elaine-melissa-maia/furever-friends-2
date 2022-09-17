import React from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { REMOVE_POST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const PostList = ({ posts = [] }) => {
    const [removePost, { error }] = useMutation(REMOVE_POST, {
        update(cache, { data: { removePost } }) {
            try {
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: removePost },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });


    const handleRemovePost = async (post) => {
        try {
            const { data } = await removePost({
                variables: { post },
            });
        } catch (err) {
            console.error(err);
        }
    };

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
                      
                      <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemovePost(post)}
                      >
                      X
                      </button>
                      <h4 className="card-header bg-primary text-light p-2 m-0">
                <Link
                  className="text-light"
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {post.createdAt}
                  </span>
                </Link>
            
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${post._id}`}
            >
              Join the discussion on this thought.
            </Link>
        </h4>
                    </div>
                    
                    
                    ))}
            </div>
            
            
        
            {/* {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div> */}
    
        </>
    );
};

export default PostList;