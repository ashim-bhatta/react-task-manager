import React from "react"

import del from '../assets/trash.svg'
import edit from '../assets/edit-2.svg'


const List =(props)=>{
    return(
        <li>
            <span> {props.children} </span>
            <div className='images'>
                <div className='img'>
                    <img 
                        src={del} 
                        alt='delete'
                        onClick ={props.delete}
                    />
                </div>
                <div className='img'>
                    <input 
                        type='checkbox'
                        onClick ={props.check}
                        className='check'
                    />
                </div>
            </div>
        </li>
    )
}

export default List