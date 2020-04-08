import React from 'react';

const Form =(props)=>{
    return(
         
        <form autoFocus >
            <input
                className='text' 
                value={props.value} 
                type='text'
                placeholder='I have to do .......' 
                onChange={props.input}
            />
            <input 
                className='submit' 
                type='submit' 
                value='Add' 
                onClick={props.task} 
            />
        </form>
    )
}

export default Form