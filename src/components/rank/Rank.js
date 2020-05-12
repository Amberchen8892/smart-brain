import React from 'react';
 

const Rank = ({entries, name}) =>{
    return(
        <div>
            {/* <div>{`Hello ${name}, your rank is`}</div> */}
            <div> {`${name}, your current entry count is...`}</div>
    <h2>{entries}</h2>

        </div>
    )
}
export default Rank;