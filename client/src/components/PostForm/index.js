import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_ME, QUERY_POSTS } from "../../utils/queries";
import Auth from "../../utils/auth";

const PostForm = () => {
  const [caption, setCaption] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        // console.log(posts);

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(Auth.getProfile().data.username);

    try {
      const { data } = await addPost({
        variables: {
          caption,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setCaption("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "caption" && value.length <= 280) {
      setCaption(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="newPostForm">
      <h2>Write A New Post</h2>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form onSubmit={handleFormSubmit}>
            <textarea
              name="caption"
              placeholder="Write your post here..."
              value={caption}
              onChange={handleChange}
            ></textarea>
            <button type="submit"> Add Post </button>
            {error && <div>{error.message}</div>}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a new post. Please{" "}
          <Link to="/login">log in</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
