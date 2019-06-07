import React, { Component } from 'react'
import imagelist from './listofpaintings'
import ModalImage from 'react-modal-image'
import '../App.1.css'

class Paintings extends Component {
  
    render() {
    

    const List = ({ list }) => (
        <ul>
          {list.map(item => (
            <ModalImage style={{height:400}}

              small={item.url}
              large={item.url}
              className= 'img'
              alt={<p>Name: {item.name} &nbsp;&nbsp; Medium: {item.medium} &nbsp;&nbsp; Size: {item.size}</p>}
              />
          
          ))}
        </ul>
      )
      return(
      
    
      <List list={imagelist} />
      
      
  );
}
}
export default Paintings;