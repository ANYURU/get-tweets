// import React, {useState, useEffect} from 'react'
import * as React from 'react'
// import axios from 'axios'
// import Home from './Home'
import "../../styles/posts.css"
import getData from '../helpers/fetchData'
import { Link } from 'react-router-dom'
function Posts() { //Opening a component

    const [error, setError] = React.useState('')
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => { //Is invoked at component rendering
        handlePosts()
    }, [])


    const handlePosts = async () => {
        const endpoint = 'posts'
        const posts = await getData(endpoint);
        // console.log(posts)

        if(posts?.error !== undefined) return setError(posts.error)
        setPosts(posts)
    }

    const handleClick = async () => {
        await handlePosts()
    }

    // const getPosts = async () => {
    //     const API_URL = "https://jsonplaceholder.typicode.com/posts"
    //     let response = ''

    //     try {
    //         response = await axios.get(API_URL)
    //         // console.log(response)
    //         let { data } = response
    //         setPosts(data)
    //         // console.log(data)
    //     } catch (error) {

    //         setError(<h1>Resource error</h1>)
    //         console.log(error)
    //         console.log(response)
    //     }
    // }
    // const handleClick = () => {
    //     setPosts([])
    //     setError('')
    //     setTimeout(getPosts, 5000)
    // }

/*     const myOutPut = <div>
        <b>Some thing </b >
    </div>
    return (myOutPut) */

    return (
        <>
            {/* <Link to="/Home">Home</Link> */}
            
            
            <Link to="/todos">Todos</Link>
            <Link to="/">Home</Link>
            <h1>Posts</h1>
            {error}
            <div>
                <button onClick={handleClick} style={{ 'display': 'flex', 'background-color':'#233456', 'margin':'auto', 'padding-left':'3px', 'paddingRight': '4px'}}>Get Posts</button>
            </div>

            {posts?.length <= 0 && <div>Loading...</div>}
            {posts?.length > 0 &&
                <ul>
                    {posts.map(post => 
                        <Link key={post.id} to={`/posts/${post.id}`}>
                            <li>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </li>

                        </Link>)}
                </ul>
            }
        </>
    )
}

export default Posts
