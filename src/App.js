import React, { useRef,useEffect } from 'react';
import gsap,{Power2,Expo} from 'gsap';
import './App.css';
import HoverPics from './hoverPic';


function App() {

	const siteLogo=useRef();
	const header=useRef();
	
	useEffect(() => {
		const tl = gsap.timeline();

		
        console.log(siteLogo.current)
		tl.from(
			siteLogo.current,
			
			{duration:1.6,
				opacity: 0,
				y: 40,
				ease: Expo.easeInOut,
			}
		);

		

		tl.from(
			header.current,
			
			{   duration:1,
				opacity: 0,
				y: 60,
				ease: Power2.easeOut,
				delay: -1.4,
                stagger:0.2
			},
			
		);
	}, [])
	
	

  return (
    <div className="wrapper">
			<div  className="site-logo">Hover Over Numbers</div>
			
			<div ref={header} className="header">
				<div className="header-left">
					Living in the<br /><span>moment</span>
					
				</div>
				<div className="header-right"></div>
			</div>
			<div className="container">
				<HoverPics />
			</div>
		</div>
  );
}

export default App;

