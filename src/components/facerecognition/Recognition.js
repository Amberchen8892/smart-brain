import React from 'react';
import './Recognition.css'

const Recognition = ({imageURL, box}) =>{
    return(
        <div  style={{ display:'flex', justifyContent:'center',  marginTop: '20px' }}>
            <div className='absolute mt2'>
            <img id='inputimage'style={{width:"500px", height:'auto'}} src={imageURL} alt='' />
            <div className='facebox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
            
        </div>
    )
}
export default Recognition;

// console.log(response.outputs[0].data.regions[0].region_info.bounding_box)

// bottom: 49.688665000000015
// leftCol: 125.79508
// rightCol: 57.961749999999995
// topRow: 12.920439
