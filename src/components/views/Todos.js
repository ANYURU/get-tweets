// import React, {useState, useEffect} from 'react'
import * as React from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import getData from '../helpers/fetchData'
// import getData from '../helpers/fetchData'

function Todos() { //Opening a component

    const [error, setError] = React.useState('')
    const [todos, setTodos] = React.useState([])

    React.useEffect(() => { //Is invoked at component rendering
        handleTodos()
    }, [])

    const handleTodos = async () => {
        
        const todos = await getData()
        if(todos?.error !== undefined) return setError(todos.error)

        setTodos(todos)
    }

    const handleClick = () =>{
        handleTodos()
    }



    // const getTodos = async () => {
    //     const API_URL = "https://jsonplaceholder.typicode.com/todos";
    //     let response = ''

    //     try {
    //         response = await axios.get(API_URL);
    //         // console.log(response)
    //         let { data } = response
    //         setTodos(data)
    //         // console.log(data)
    //     } catch (error) {

    //         setError(<h1>Resource error</h1>)
    //         console.log(error)
    //         console.log(response)
    //     }
    // }
    // const handleClick = () => {
    //     setTodos([])
    //     setError('')
    //     setTimeout(getTodos, 5000)
    // }

/*     const myOutPut = <div>
        <b>Some thing </b >
    </div>
    return (myOutPut) */

    return (
        <>
            <Link to="/posts">Posts</Link>
            <h1>Todos</h1>
            {error}
            <div>
                <button onClick={handleClick}>Get Todos</button>
            </div>

            {todos?.length <= 0 && <div>Loading...</div>}
            {todos?.length > 0 &&<ul>
                                    {todos.map(todo => <li key={todo.id}><h5>{todo.title}</h5> <p>{todo.completed === true ? "Completed": "Incomplete" }</p></li>)}
                                </ul>}
            {/* {todos?.length > 0 &&<table>
                    <thead>
                        <tr>
                            <th>Todos</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(todo => {}
                            
                            <tr>
                                <td> 
                                    {todos.map(todo => todo.title)}
                                </td>
                            <td>
                                {todos.map(todo => todo.completed === false ? 'incomplete': 'completed')}   
                            </td>
                        </tr>

                        )}
                        <tr>
                            <td> 
                                {todos.map(todo => todo.title)}
                            </td>
                            <td>
                                {todos.map(todo => todo.completed === false ? 'incomplete': 'completed')}   
                            </td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Todos</td>
                            <td>status</td>
                        </tr>
                    </tfoot>
                </table> */}
                    
                
                
            
        </>
    )
}

export default Todos