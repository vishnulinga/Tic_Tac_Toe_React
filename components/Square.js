import React from "react"

const style = {
	background: "rgb(230, 230, 230)",
	border: "2px double grey",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
};

const Square = (props) => {
    return (
        <button style={style} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;