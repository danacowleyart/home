import React, { component } from 'react'

let List = class List extends Component {
  render(){

    return(
    ({ list }) => (
        <ul>
          {list.map(item => (
              <img src={item.url} />
            // <div className='px12 py12 pt3 shadow-darken25-on-hover cursor-pointer' key={item.id} onClick={()=>directions.setDestination(item.location)}>       
                // <div className='color-gray-dark'>{item.name}</div>
                // <div className='txt-light txt-s'>{item.description}</div>         
            // </div>
          ))}
        </ul>
      )

    );
  }
} 
  export default List;