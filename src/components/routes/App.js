import * as React from 'react';
import logo from '../imgs/get-tweets-logo.png';

function App(){

    const [handle, setHandle] = React.useState(''); 

    const handleClick = () => {
        console.log(handle )
    }

    return (
        <>
            <div>
                <img src={logo} alt="Get tweets logo" width="180" height="40 " />
                <input type="text" placeholder='@handle' onChange = {event => setHandle(event.target.value)}/>
                <button onClick={handleClick}> Get </button>
            </div>
        </>
    )


}

export default App;