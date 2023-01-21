import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPages = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })
    const [fetchComments, isCommentsLoading, errorComments] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])

    return (
        <div>
            <h1>You open post page with id = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h2>Comments</h2>
            {isCommentsLoading
                ? <Loader/>
                : <div>
                    {
                        comments.map(comm =>
                        <div>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPages;