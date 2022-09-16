import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth'; 
import PostList from '../components/PostList';
import PostForm from "../components/PostForm";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

const Profile = () => {
    const { username, userId } = useParams();
    const { loading, data } = useQuery(
        userId ? QUERY_ME : QUERY_SINGLE_USER,
        {
            variables: { userId, username },
        }
    );

    const user = data?.me || data?.user ||  {};

    if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return (
        <section>
        <div className="content">
            <div className="info">
            <PostList
                posts={user.posts}
                title={`${user.username}'s Posts`}
                showTitle={false}
                showUsername={false}
                />
            </div>
        
                <div>
                    <PostForm/>
                </div>
            
        </div>
        </section>
    );
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (!user?.username) {
        return (
            <h4>
            You need to be logged in to see this. Use the navigation links above to
            sign up or log in!
            </h4>
        );
    }
};

export default Profile;
