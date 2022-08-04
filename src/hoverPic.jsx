import React from "react";
import Pic from "./pictures";
import './App.css'

function addPics(link){
    return(
        <div key={link.id} className="item">
			<a href="#"  className="container-item" data-img={link.url}>
				<h3>{link.id}</h3>
			</a>
		</div>
        )
        
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