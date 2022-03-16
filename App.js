import { specifications } from './Data';
import FilterNavbar from './FilterNavbar/FilterNavbar';
import { specificationsConverter } from './utils';

const App = () => { 
    const handleCheckData = () => {
        let categoryData = [];
        let productHeaders = [] 
        specifications.forEach((singleData) => {
            var {info, product__id} = singleData;
            
            info.forEach((specifications) => {
                var {title, infos} = specifications;
                infos.forEach((tr) => {
                    var {title:header , info:dataInfoTd} = tr;
                    let data__part = specificationsConverter(dataInfoTd).split(' '); 
                    if(data__part.length < 4 && dataInfoTd.length  > 0 ){ 
                        let currentInsertProductHeaderIndex = productHeaders.indexOf(specificationsConverter(header).toLowerCase())
                        let thisData = categoryData[currentInsertProductHeaderIndex]; 

                        if( currentInsertProductHeaderIndex !== -1){

                            let workingData = categoryData[currentInsertProductHeaderIndex]; 
                            let workingDataKeys = workingData[workingData.length - 1];
                            let prevData = workingData.slice(0, workingData.length - 1);
                            let workingDataIndex = workingDataKeys.indexOf(specificationsConverter(dataInfoTd).toLowerCase());
                            let newData = [...prevData];
                            let newKeys= [...workingDataKeys]
                            
                            if(workingDataIndex === -1){ 
                                newData.push([specificationsConverter(dataInfoTd).toLowerCase(), [product__id]]);
                                newKeys.push(specificationsConverter(dataInfoTd).toLowerCase());
                                newData.push(newKeys); 
                                categoryData[currentInsertProductHeaderIndex] = newData;  
                            } else {   
                                let currentWorkingProduct = workingData[workingDataIndex]
                                let name = currentWorkingProduct[0];
                                let ides = [...currentWorkingProduct[1]];
                                ides.push(product__id) 
                                workingData[workingDataIndex] = [name, ides];
                                categoryData[currentInsertProductHeaderIndex] = workingData 
                            } 
                        }else{
                            // todo Completed task
                            productHeaders.push(specificationsConverter(header).toLowerCase());
                            categoryData.push([[ specificationsConverter(dataInfoTd).toLowerCase() , [ product__id ]] , [specificationsConverter(dataInfoTd).toLowerCase()]])
                          // todo Completed task
                        }
                    } 
                } )
            })
        })

        
        
        console.log(productHeaders);
        console.log(categoryData);
        
        let finalFilteredArray = [];

        productHeaders.forEach((info, index) => {
            console.log(info.length);
        })

        // console.log(finalFilteredArray);
    }
 
    
    return (
        <div>
            <h1>Hello world </h1>
            <button onClick={handleCheckData}>Handle Check Data</button>
            <FilterNavbar/>
        </div>
    )
}

export default App;
// import axios from 'axios';
// import React from 'react';
// const App = () => {

//     const handleGetAllData = () =>  {
//         axios.get('http://localhost:3009/getBydatabaseAndProductId',{headers:{product__id: '61.01.804.01'}})
//         .then(res => {
//             console.log(res);
//         }).catch(err => {
//             console.log(err.message);
//         })
//     }
//     return (
//         <div>
//             <h1>Hello world</h1>
//             <button onClick={handleGetAllData}>HandleGetAll Data</button>
//         </div>
//     );
// };

// export default App;


// import axios from 'axios';
// import React from 'react';
// import { stringConverter } from './utils';

// const App = () => {

//     const handleGetAllData = () => {
//     axios.get('http://localhost:3009/getAllCollection',{headers:{collection:'product'}})
//     .then(res => { 
//         let resultData = res.data.result;

//         const collections = [];
//         if(res.data.status__code === 200){
//             resultData.forEach((info) => {
//                 let item = stringConverter(info.infos); 
//                 let product  = JSON.parse(item);
//                 let images = product.images;
//                 let id = product.product__id; 
//                 images.forEach((src) => {
//                     collections.push({src, product__id: id })
//                 })
//             })
//         }   
//         console.log(collections);
        
//     }).catch(err => {
//         console.log(err.message);
//     })
//   }

//     return (
//         <div>
//             <button onClick={handleGetAllData}>Handle Get All Data</button>
//             <img src='https://www.ryanscomputers.com/storage/products/main/hp-officejet-pro-9020-all-in-one-printer-61582450560.webp' alt='hello wolrd'/>
//         </div>
//     );
// };

// export default App;


// import React, { useState } from 'react';
// import { cable } from './FinalDataEntry/Accessories/Cable';
// import { Camera } from './FinalDataEntry/Camera/Camera';
// import { daily } from './FinalDataEntry/Daily/daily';
// import { desktop } from './FinalDataEntry/Desktop/Desktop';
// import { gaming } from './FinalDataEntry/Gaming/Gaming';
// import { laptop } from './FinalDataEntry/Laptop/Laptop';
// import { monitor } from './FinalDataEntry/Monitor/Monitor';
// import { office } from './FinalDataEntry/Office/office';
// import { photocopier } from './FinalDataEntry/photocopier/photocoppier';
// import { post } from './FinalDataEntry/POS/pos';
// import { projector } from './FinalDataEntry/Projector/projector';
// import { scanner } from './FinalDataEntry/Scanner/Scanner';
// import { secuirity } from './FinalDataEntry/Secuirity/Secuirity';
// import { software } from './FinalDataEntry/Software/software';
// import { sound } from './FinalDataEntry/Sound/Sound';
// import { storage } from './FinalDataEntry/Storage/storage';
// import { tablet } from './FinalDataEntry/Tablet/Tablet';



// const App = () => {

//     const [products, setProducts] = useState([...cable.flat(Infinity), ...daily.flat(Infinity), ...laptop.flat(Infinity), ...gaming.flat(Infinity), ...desktop.flat(Infinity), ...Camera.flat(Infinity), ...monitor.flat(Infinity), ...office.flat(Infinity), ...photocopier.flat(Infinity), ...post.flat(Infinity), ...projector.flat(Infinity), ...scanner.flat(Infinity), ...secuirity.flat(Infinity), ...software.flat(Infinity), ...sound.flat(Infinity), ...storage.flat(Infinity), ...tablet.flat(Infinity)]);
    
//     let filteredItems = [];

//     const allProductFinder = (category, subCategory,  parent,   array) =>  {
//         let sortedArray = [];
//         let collections = [];
//         let filteredBrandProductQuantity = []
//         array.forEach((info, index) => {
//             if(info.category.toLowerCase() === category.toLowerCase() && info.parent.toLowerCase() === parent.toLowerCase() && info.subCategory.toLowerCase() === subCategory.toLowerCase()){
//                 sortedArray.push(info)
//                 if(collections.indexOf(info.collection) !== -1){
//                     let index = collections.indexOf(info.collection); 
//                     let {count} = filteredBrandProductQuantity[index];
//                     filteredBrandProductQuantity[index] = {brand: info.collection, count: count+1};
//                 }else{
//                     collections.push(info.collection);
//                     filteredBrandProductQuantity.push({brand: info.collection, count: 1});
//                 }
//             }
//         })
        
//         return {sortedArray, filteredBrandProductQuantity};
//     }
    

    
//     const handleCollectionFilter = (collection, array ) => {
//         let sortedArray = [];
//         let collections = [];
//         let filteredBrandProductQuantity = []

//         array.forEach((info, index) => {
//             if(info.collection.toLowerCase() === collection.toLowerCase()){
//                 sortedArray.push(info)
//                 if(collections.indexOf(info.collection) !== -1){
//                     let index = collections.indexOf(info.collection); 
//                     let {count} = filteredBrandProductQuantity[index];
//                     filteredBrandProductQuantity[index] = {brand: info.collection, count: count+1};
//                 }else{
//                     collections.push(info.collection);
//                     filteredBrandProductQuantity.push({brand: info.collection, count: 1});
//                 }
//             }
//         })
        
//         return {sortedArray, filteredBrandProductQuantity};
//     }


//     const allSubCategoryFilter = (sub, parent,  array) => {
//         let sortedArray = [];
//         let collections = [];
//         let filteredBrandProductQuantity = []

//         array.forEach((info, index) => {
//             if(info.subCategory.toLowerCase() === sub.toLowerCase() && info.parent.toLowerCase() === parent.toLowerCase()){
//                 sortedArray.push(info)
//                 if(collections.indexOf(info.collection) !== -1){
//                     let index = collections.indexOf(info.collection); 
//                     let {count} = filteredBrandProductQuantity[index];
//                     filteredBrandProductQuantity[index] = {brand: info.collection, count: count+1};
//                 }else{
//                     collections.push(info.collection);
//                     filteredBrandProductQuantity.push({brand: info.collection, count: 1});
//                 }
//             }
//         })

//         return {sortedArray, filteredBrandProductQuantity};
//     }


//     let result = allSubCategoryFilter('Accessories','Laptop', products)

//     // console.log(result);
//     // let result = allProductFinder('All Monitor',  'Monitor',  'All Monitor', products);
    
//     // console.log(result);
    
//     const handleGetAllMonitor = () => {
//         // handleCollectionFilter('hp',result.sortedArray)
//     }

//     return (
//         <div>
//             <h1>Hello world</h1> 
//             <button onClick={handleGetAllMonitor}>Get all Hp Monitor</button>
//         </div>
//     );
// };

// export default App;