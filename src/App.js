import React from 'react';
import Card from './components/Card';
import Image from './components/g10.png';
const App = () =>{
    return (
        <div>
            <img src={Image} width='450' height='400' className='vector'/>
            <Card />
        </div>


    )
}

export default App;