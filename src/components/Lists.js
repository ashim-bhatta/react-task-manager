import React from 'react';
import List from './List'

const Lists =(props)=>{
    var key = 0
    var task = (props.tasks.length < 1) ? <h5> Task not found</h5>:(
        props.tasks.map((task, index)=>(    
            key = key + 1,

                <List 
                    key = {key}
                    delete = {()=>{props.delete(index)}}
                    check = {()=>{props.check(index)}}
                >
                    {task}   
                </List>
           ))
    )
    return(
       <ul>
            {task}           
       </ul> 

    )
}

export default Lists
