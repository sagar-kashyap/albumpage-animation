import React from 'react';
import gsap from 'gsap';
import './App.css';
import HoverPics from './hoverPic';


function App() {
  return (
    <div className="wrapper">
			<div className="site-logo">mouthwash</div>
			
			<div className="header">
				<div className="header-left">
					elevated<br /><span>reality</span>
					<div className="link"><a href="#">view showreel</a></div>
				</div>
				<div className="header-right">/all projects</div>
			</div>
			<div className="container">
				<HoverPics />
			</div>
		</div>
  );
}

export default App;

// const allcontainer = gsap.utils.toArray(".container-item");
// const venueImageWrap = document.querySelector(".container-img-wrap");
// const venueImage = document.querySelector(".container-img");

// function initcontainer() {
//   allcontainer.forEach((link) => {
//     link.addEventListener("mouseenter", venueHover);
//     link.addEventListener("mouseleave", venueHover);
//     link.addEventListener("mousemove", moveVenueImage);
//   });
// }

// function moveVenueImage(e) {
//   let xpos = e.clientX;
//   let ypos = e.clientY;
//   const tl = gsap.timeline();
//   tl.to(venueImageWrap, {
//     x: xpos,
//     y: ypos,
//   });
// }

// function venueHover(e) {
//   if (e.type === "mouseenter") {
//     const targetImage = e.target.dataset.img;

//     const tl = gsap.timeline();
//     tl.set(venueImage, {
//       backgroundImage: `url(${targetImage})`,
//     }).to(venueImageWrap, {
//       duration: 0.5,
//       autoAlpha: 1,
//     });
//   } else if (e.type === "mouseleave") {
//     const tl = gsap.timeline();
//     tl.to(venueImageWrap, {
//       duration: 0.5,
//       autoAlpha: 0,
//     });
//   }
// }

// function init() {
//   initcontainer();
// }

// window.addEventListener("load", function () {
//   init();
// });

// const tl = gsap.timeline();


    
// tl.from(
//   ".site-logo",
  
//   {duration:1.6,
//     opacity: 0,
//     y: 40,
//     ease: "expo.inOut",
//   },
//   "-=1.6"
// );



// tl.from(
//   ".header > div",
  
//   {   duration:1,
//     opacity: 0,
//     y: 60,
//     ease: "power2.Out",
//     delay: -1.4,
//             stagger:0.2
//   },
  
// );