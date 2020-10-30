import React from 'react'
import './HeaderStyles.css'

function Header()
{

    const logoName={
        fontSize:"40px",
        paddingTop:"1px",
        paddingLeft:"20px",
        width:"300px",
        textDecoration:"none"

    }
    return(

        <div className="HeaderDiv">

            <div style={logoName}>
                <span> <div style={{color:"white",float:"left"}}>Neo</div> <div style={{color:"red",float:"left"}}> STORE </div> </span>
            </div>

            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Order</a></li>
                </ul>
            </div>

            <div>
                <input type="text" placeholder="Search.."/>
                <button>Cart</button>
                <button>login</button>
            </div>

        </div>
            
    )
}

export default Header