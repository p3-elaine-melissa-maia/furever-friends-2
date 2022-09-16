import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';

import { QUERY_POSTS } from '../utils/queries';

import '../styles/Profile.css'

const Feed = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <section>
    <div className="content">
        <div className="posts">
        <PostList
            posts={posts}
            />
        </div>
    </div>
    </section>
  );
};

export default Feed;

