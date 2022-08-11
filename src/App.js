import React from 'react';

import './App.css';
import HoverPics from './hoverPic';


function App() {
  return (
    <div className="wrapper">
			<div className="site-logo">mouthwash</div>
			
			<div className="header">
				<div className="header-left">
					elevated<br /><span>reality</span>
					
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

