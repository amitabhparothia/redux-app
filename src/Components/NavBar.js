import React from "react";

export const navbar = (props) => {
    return(
        <>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9rhYMUgSyN5hNtOGJEOiYbXEPHCUUsyygA&usqp=CAU" height={120} />
            <p>in the diff comp {props.data.length}</p>
        </div>
        </>
    )
}