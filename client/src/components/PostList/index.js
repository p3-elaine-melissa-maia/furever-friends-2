import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { REMOVE_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Auth from '../../utils/auth';


const PostList = ({ posts = [] }) => {
  const [removePost, { error }] = useMutation(REMOVE_POST, {
update(cache, { data: { removePost } }) {
  try {
  cache.writeQuery({
    query: QUERY_POSTS,
    data: { posts: removePost },
  });
  } catch (e) {
    console.error(e);
  }
},

});
const handleRemovePost = async (post) => {
  console.log(post);
  try {
    
    const {data} = await removePost({
      
      variables: { _id: post._id, caption: post.caption, postAuthor: Auth.getProfile().data.username, createdAt: post.createdAt },
    });

    window.location.reload();
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
          posts?.map((post) => (
            <div key={post._id} className="singlePost">
              <p>
                {post.caption} <br />
                <span className="postDetails" style={{ fontSize: "15px" }}>
                  {" "}
                  {post.postAuthor} · {post.createdAt}
                </span>
              </p>
              <button className="deletePostBtn" onClick={() => handleRemovePost(post)} > <FontAwesomeIcon icon={faTrash} /></button>
            </div>
          ))}
      </div>
    </>
  );
};

export default PostList;
