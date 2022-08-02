import gsap from 'gsap';
import './App.css';

function App() {
  return (
    <div className="wrapper">
			<div className="site-logo">mouthwash</div>
			<div className="navbar">
				<div className="site-info">photos / films</div>
				<div className="site-menu">
					<div className="menu-item">projects</div>
					<div className="menu-item">about</div>
					<div className="menu-item">contact</div>
				</div>
			</div>
			<div className="header">
				<div className="header-left">
					elevated<br /><span>reality</span>
					<div className="link"><a href="#">view showreel</a></div>
				</div>
				<div className="header-right">/all projects</div>
			</div>
			<div className="container">
				<div className="container-items">
					<div className="container-img-wrap">
						<div className="container-img"></div>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img="image-one.jpg">
							<h3>1</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img="image-two.jpg">
							<h3>2</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img="image-three.jpg">
							<h3>3</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img="image-four.jpg">
							<h3>4</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img="image-five.jpg">
							<h3>5</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img="image-six.jpg">
							<h3>6</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img="image-seven.jpg">
							<h3>7</h3>
						</a>
					</div>
					<div className="item">
						<a href="#" className="container-item" data-img="image-eight.jpg">
							<h3>8</h3>
						</a>
					</div>
				</div>
			</div>
		</div>
  );
}

export default App;
