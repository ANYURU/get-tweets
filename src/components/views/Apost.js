import React from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import getData from '../helpers/fetchData'
import posts from './Posts'

function Apost(){
    let { id } = useParams()
    const [post, setPost] = React.useState({})
    
    const handlePost = async () => {
        let post = await getData(`posts/${id}`)
        post.id == id && setPost(post)
        console.log(post)
    }

    React.useEffect(() => {
        handlePost()
    }, [])

    return (
        <> 
            <Link to='/posts'>Posts</Link>
            <Link to='/todos'>Todos</Link>
            {/* <Link to='/'>Home<Link> */}
            <Link to='/'>Home</Link>



            {!post.id ? <h5>loading</h5> : <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>

            </div>
            }
        </>
    
    )
}

export default Apost