import React from 'react';

/* const citta = () => {
  return <div id='second'>
            <h1 id='citybdy'></h1>
            <div id='secondbdy'>
                <h3 id='date'></h3>
                <img src='' className='imgweather' id='img1'></img>
                <label id='lb1'></label>
                <img src='' id='img2'></img>
            </div>
            
         </div>
};

export default citta; */


const citta = ({nome,giorno,img,gradi,img2}) => {
  return <div id='second'>
            <h1 id='citybdy'>{nome}</h1>
            <div id='secondbdy'>
                <h3 id='date'>{giorno}</h3>
                <img src={img} className='imgweather' id='img1'></img>
                <label id='lb1'>{gradi}</label>
                <img src={img2} id='img2'></img>
            </div>
            
         </div>
}; 
export default citta; 