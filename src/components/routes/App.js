import * as React from 'react'
import Posts from '../views/Posts'
import Todos from '../views/Todos'
import Home from '../views/Home'
import Apost from '../views/Apost'

import {
    BrowserRouter as Router,
    Switch, Route, 
} from 'react-router-dom'

function App() {
    const [page, setPage] = React.useState(null)

    return (
        <Router>
            {/* <button onClick={() => setPage(page === 'posts' ? 'todos' : 'posts')} >
                {page === 'posts' ? 'Todos' : 'Posts'}
            </button> */}
            {/* <Link to="/posts">Posts</Link>
            <Link to="/todos">Todos</Link> */}
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/posts">
                    <Posts />
                </Route>
                <Route path="/todos" exact>
                    <Todos />
                </Route>
                <Route path="/posts/:id" exact>
                    <Apost />
                </Route>
                
            </Switch>
{/*             {page === 'posts' ? <button onClick={() => setPage('todos')} > Todos </button>
                : <button onClick={() => setPage('posts')} > Posts </button>} */}

            {/* {page === 'posts' ? <Posts /> : <Todos />} */}
        </Router>
    )
}


export default App