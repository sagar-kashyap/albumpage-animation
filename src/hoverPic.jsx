import React from "react";
import Pic from "./pictures";
import './App.css'

function addPics(link){
        <div className="item">
			<a className="container-item" data-img={link.url}>
				<h3>1</h3>
			</a>
		</div>
        console.log(link.key);
}

function HoverPics(){
    return(
        <div className="container-items">
					<div className="container-img-wrap">
						<div className="container-img"></div>
					</div>
                    {Pic.map(addPics)}
				</div>
        
    )
}

export default HoverPics;