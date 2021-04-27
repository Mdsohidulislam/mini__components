import React from 'react';
import style from './App.scss'

const App = () => {

  const handleMenuClick = () => { 
      const stroke__1 = document.getElementById('stroke__1');
      const stroke__2 = document.getElementById('stroke__2');
      const stroke__3 = document.getElementById('stroke__3');
      const menu__logo__container = document.getElementById('menu__logo__container'); 
      stroke__2.style.display='none';

      stroke__1.style.cssText=`

        position: absolute; 
        width: 400px;
        top: 125px;
        left: 25px;   
        transform: rotate(45deg);
        transition: .4s;
        background: red;

      `
      stroke__3.style.cssText=`
      
        position: absolute; 
        width: 400px;
        bottom: 125px;
        left: 25px;
        transform: rotate(-45deg); 
        transition: .4s;
        background: red;
      
      `
  }

  const handleMouseLeave = () => {
    const stroke__1 = document.getElementById('stroke__1');
    const stroke__2 = document.getElementById('stroke__2');
    const stroke__3 = document.getElementById('stroke__3');  
    stroke__2.style.display='inline' 
    stroke__1.style.cssText='none';
    stroke__3.style.cssText='none'
  }

  return (
      <div className="container" id="menu__logo__container">
            <div className='menu__logo__container' onClick={handleMenuClick} onMouseLeave={handleMouseLeave}>
               <div id="stroke__1" className="stroke stroke__1"></div>
               <div id="stroke__2" className="stroke stroke__2"></div>
               <div id="stroke__3" className="stroke stroke__3"></div>
            </div>
      </div>
  );
};

export default App;