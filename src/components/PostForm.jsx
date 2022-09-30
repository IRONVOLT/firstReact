import React, {useState} from "react";
import { MyButton } from "../components/UI/button/MyButton";
import { MyInput } from "../components/UI/input/MyInput"

export const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (event) => {
        event.preventDefault()

        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost)

        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={userValue => setPost({ ...post, title: userValue.target.value })}
                type="text"
                placeholder="название поста" />
            <MyInput
                value={post.body}
                type="text"
                placeholder="описание поста"
                onChange={userValue => setPost({ ...post, body: userValue.target.value })}
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}