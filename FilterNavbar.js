import { faFilter, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const FilterNavbar = () => {

    const [openNav, setOpenNav] = useState(false)

    useEffect(()=>{
        
        let data = document.querySelectorAll('.filter__navbar__items__container');
        let titles = document.querySelectorAll('.filter__navbar__items__container > .filter__navbar__title');
        
 

                titles.forEach((info) => {
                    info.addEventListener('click', closeNav)

                })
 
                data.forEach(info => { 
                    info.addEventListener('click', openNavbar)
                })
                

 





        function openNavbar (e) {
            
                
                let title = this.querySelector('.filter__navbar__title');
                let data = this.querySelector('.filter__navbar__items'); 
                let dataHeight = data.getBoundingClientRect().height;
                let plus  = this.querySelector('.filter__navbar__title > .plus');
                let minus  = this.querySelector('.filter__navbar__title > .minus');
                let lists = data.querySelectorAll('li');
                let sum = 0; 
            


                lists.forEach( (listInfo) => {
                        let liHeight = listInfo.getBoundingClientRect().height;
                        sum += liHeight;
                    })
                    
                if(dataHeight === 0 ){  
                    sum = Math.ceil(sum);
                    data.style.height =  `${sum}px`
                    minus.style.display = 'inline'
                    plus.style.display = 'none' 
                    
                } 
        }

        function closeNav (e) {
            let title = e.path[0]
            let plus  = title.querySelector('.plus');
            let minus  = title.querySelector('.minus');
            let data = e.path[1].querySelector('.filter__navbar__items')
            let dataHeight = data.style.height; 
            if(dataHeight){
                data.style.height = 0;
                minus.style.display = 'none'
                plus.style.display = 'inline' 
            }
        }
    },[])

    
    return (
        <div className='filter__navbar__container'>
            <p className='head'><FontAwesomeIcon icon={faFilter}/> FILTER BY</p>
            <ul className='filter__navbar'>
                <li className='filter__navbar__items__container'>
                    <p className='filter__navbar__title'>{Math.random()*50} 
                    <span className='plus show__or__hidden'><FontAwesomeIcon icon={faPlus}/></span>
                    <span className='minus show__or__hidden'><FontAwesomeIcon icon={faMinus}/></span>
                    </p>
                    <ul className='filter__navbar__items'> 
                        <li>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> {Math.random()*50}</label> 
                        </li>  
                        <li>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> {Math.random()*50}</label> 
                        </li>  
                        <li>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> {Math.random()*50}</label> 
                        </li>  
                        <li>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> {Math.random()*50}</label> 
                        </li>  
                        <li>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> {Math.random()*50}</label> 
                        </li>  
                        <li>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> {Math.random()*50}</label> 
                        </li>  
                        <li>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> {Math.random()*50}</label> 
                        </li>  
                        <li>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> {Math.random()*50}</label> 
                        </li>  
                    </ul>
                </li>   
            </ul>
        </div>
    );
};

export default FilterNavbar;