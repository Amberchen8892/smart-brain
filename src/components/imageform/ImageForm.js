import React from 'react';
import './ImageForm.css'

const ImageForm = ({userInput,userSubmit}) => {
    return(
        <div>
            <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center'
                       type='url'
                       onChange={userInput}
                        />
                <button className='w-30 grow f4 link ph3 pv2 dib black bg-light-pink'
                        onClick={userSubmit}>
                        Detect
                </button>
            </div>

        </div>
    )
}
export default ImageForm;