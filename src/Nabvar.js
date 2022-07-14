import React from 'react'

function Nabvar({bcolor, onClick}) {
  return (
    <div>
        <div style={{display: "flex", justifyContent: "space-around", padding: "20px", backgroundColor : bcolor, color:"white"}}>
            <div className='navbarLink' onClick={() => onClick("floral")}>Floral</div>
            <div className='navbarLink' onClick={() => onClick("Sea Food")}>Sea Food</div>
            <div className='navbarLink' onClick={() => onClick("Produce")}>Produce</div>
            <div className='navbarLink' onClick={() => onClick("Meat Market")}>Meat Market</div>
        </div>
    </div>
  )
}

export default Nabvar