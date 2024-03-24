import React from "react";

export const Home = (props) => {
    console.log("home" , props.data)
    return (
        <>
            
           <div className="add-to-cart">
           <div className="add-to-cart-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9rhYMUgSyN5hNtOGJEOiYbXEPHCUUsyygA&usqp=CAU" height={120}/>
            </div>
            <div className="add-to-cart-no">
            <p>in the same comp {props.data.length}</p>
            </div>
           </div>
           
           
            
            <div className="shoping">
                <div>
                    <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-3.jpg" height={170} />
                </div>

                <div>
                    <span>Samsung S23 price</span>
                    <p>$1000.00</p>
                </div>

                <div>
                    <button onClick={() =>props.addToCartHandler({ name:"Samsung" , price:1000})} className="button">Add to cart</button>
                </div>

            </div>

        </>
    )
}