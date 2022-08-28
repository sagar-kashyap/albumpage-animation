import React, {useEffect,useRef} from "react";
import Pic from "./pictures";
import './App.css';
import gsap from 'gsap';


function addPics(link){
    return(
        <div key={link.id} className="item">
			<a href="#top"  className="container-item" data-img={link.url}>
				<h3>{link.id}</h3>
			</a>
            {console.log(link.url)}
		</div>
        
        )
        
}



function HoverPics(){

	const venueImage=useRef();
const venueImageWrap=useRef();


useEffect(()=>{
	const allcontainer = gsap.utils.toArray(".container-item");
	// const venueImageWrap = document.querySelector(".container-img-wrap");
	// const venueImage = document.querySelector(".container-img");

	function initcontainer() {
		allcontainer.forEach((link) => {
			link.addEventListener("mouseenter", venueHover);
			link.addEventListener("mouseleave", venueHover);
			link.addEventListener("mousemove", moveVenueImage);
		});
	}

	function moveVenueImage(e) {
		let xpos = e.clientX;
		let ypos = e.clientY;
		const tl = gsap.timeline();
		tl.to(venueImageWrap.current, {
			x: xpos,
			y: ypos,
		});
	}

	function venueHover(e) {
		if (e.type === "mouseenter") {
			const targetImage = e.target.dataset.img;

			const tl = gsap.timeline();
			tl.set(venueImage.current, {
				backgroundImage: `url(${targetImage})`,
			}).to(venueImageWrap.current, {
				duration: 0.5,
				autoAlpha: 1,
			});
		} else if (e.type === "mouseleave") {
			const tl = gsap.timeline();
			tl.to(venueImageWrap.current, {
				duration: 0.5,
				autoAlpha: 0,
			});
		}
	}

	function init() {
		initcontainer();
	}

	window.addEventListener("load", function () {
		init();
	});

	const tl = gsap.timeline();

		
        
		tl.from(
			".site-logo",
			
			{duration:1.6,
				opacity: 0,
				y: 40,
				ease: "expo.inOut",
			},
			"-=1.6"
		);

		

		tl.from(
			".header > div",
			
			{   duration:1,
				opacity: 0,
				y: 60,
				ease: "power2.Out",
				delay: -1.4,
                stagger:0.2
			},
			
		);
},[])

    return(
        <div  className="container-items">
					<div ref={venueImageWrap} className="container-img-wrap">
						<div ref={venueImage} className="container-img"></div>
					</div>
                    {Pic.map(addPics)}
				</div>
        
    )
}

// const tl = gsap.timeline();

		
        
// 		tl.from(
// 			".site-logo",
			
// 			{duration:1.6,
// 				opacity: 0,
// 				y: 40,
// 				ease: "expo.inOut",
// 			},
// 			"-=1.6"
// 		);

		

// 		tl.from(
// 			".header > div",
			
// 			{   duration:1,
// 				opacity: 0,
// 				y: 60,
// 				ease: "power2.Out",
// 				delay: -1.4,
//                 stagger:0.2
// 			},
			
// 		);

// const venueImage=useRef();
// const venueImageWrap=useRef();


// useEffect(()=>{
// 	const allcontainer = gsap.utils.toArray(".container-item");
// 	// const venueImageWrap = document.querySelector(".container-img-wrap");
// 	// const venueImage = document.querySelector(".container-img");

// 	function initcontainer() {
// 		allcontainer.forEach((link) => {
// 			link.addEventListener("mouseenter", venueHover);
// 			link.addEventListener("mouseleave", venueHover);
// 			link.addEventListener("mousemove", moveVenueImage);
// 		});
// 	}

// 	function moveVenueImage(e) {
// 		let xpos = e.clientX;
// 		let ypos = e.clientY;
// 		const tl = gsap.timeline();
// 		tl.to(venueImageWrap, {
// 			x: xpos,
// 			y: ypos,
// 		});
// 	}

// 	function venueHover(e) {
// 		if (e.type === "mouseenter") {
// 			const targetImage = e.target.dataset.img;

// 			const tl = gsap.timeline();
// 			tl.set(venueImage, {
// 				backgroundImage: `url(${targetImage})`,
// 			}).to(venueImageWrap, {
// 				duration: 0.5,
// 				autoAlpha: 1,
// 			});
// 		} else if (e.type === "mouseleave") {
// 			const tl = gsap.timeline();
// 			tl.to(venueImageWrap, {
// 				duration: 0.5,
// 				autoAlpha: 0,
// 			});
// 		}
// 	}

// 	function init() {
// 		initcontainer();
// 	}

// 	window.addEventListener("load", function () {
// 		init();
// 	});

// 	const tl = gsap.timeline();

		
        
// 		tl.from(
// 			".site-logo",
			
// 			{duration:1.6,
// 				opacity: 0,
// 				y: 40,
// 				ease: "expo.inOut",
// 			},
// 			"-=1.6"
// 		);

		

// 		tl.from(
// 			".header > div",
			
// 			{   duration:1,
// 				opacity: 0,
// 				y: 60,
// 				ease: "power2.Out",
// 				delay: -1.4,
//                 stagger:0.2
// 			},
			
// 		);
// },[])
// document.addEventListener('readystatechange', event => { 


//     });

export default HoverPics;	
        
        