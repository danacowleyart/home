import React, { Component } from 'react'
import imagelist from './listofpaintings'
import ModalImage from 'react-modal-image'
import './img.css'

class Paintings extends Component {
  
    render() {
    

    const List = ({ list }) => (
        <ul>
          {list.map(item => (
            <ModalImage

              small={item.url}
              large={item.url}
              className= 'modal'
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