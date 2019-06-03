import React, { Component } from 'react'
import imagelist from './listofpaintings'
import ModalImage from 'react-modal-image'
import '../App.1.css'

const Paintings = () => {
    // const myimages = []
    // dbx.filesListFolder({path: '/photos'})
    //   .then(response => {
    //     response.entries.map(item => (
    //       console.log(item)
    //     ))
    //     })
      
      
      const List = ({ list }) => (
        <ul>
          {list.map(item => (
            <ModalImage

              small={item.url}
              large={item.url}
              alt={<p>Name: {item.name} &nbsp;&nbsp; Medium: {item.medium} &nbsp;&nbsp; Size:</p>}
              />
          
          ))}
        </ul>
      )
      
  return (
    
    
      <List list={imagelist} />
      
      
  );
}
export default Paintings;