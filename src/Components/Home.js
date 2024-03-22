import React from "react";

export const Home = (props) => {
    console.log("props" , props)
    return (
        <>

           <div className="add-to-cart">
           <h1>home page</h1>
           <div>
            <img src="data:image/png;base64,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" height={100}/>
            </div>
           </div>
            
            <div className="shoping">
                <div>
                    <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-3.jpg" height={150} />
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