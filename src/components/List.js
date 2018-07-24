import React from 'react';

export default function List (props) {
    return (
      <ul>
        {props.items.map((item)=> {
            return (
              <li key={item.id}>
                <span 
                  style={item.complete ? {textDecorationLine: 'line-through'} : {}}
                  onClick={() => {if(props.toggle) props.toggle(item)}}>
                   {item.name}
                </span>
                <button onClick={() => props.remove(item)}> X </button>
              </li>
            )
        })}
      </ul> 
    )
}