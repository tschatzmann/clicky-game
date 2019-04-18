import React from "react";
import "./style.css";

function GameCard(props) {
    // console.log(props.click + "this is me");
    return (
        <div className="card">
            <div className="img-thumbnail" onClick={() => props.clickGame(props.id, props.click)}>
                <img alt={props.id} src={props.image} className="img-thumbnail" />
                <div className="content">
                 </div>
            </div>
            {/* <span onClick={() => props.clickCharacter(props.id)} className="clicked"></span> */}
        </div>


    );
}

export default GameCard;