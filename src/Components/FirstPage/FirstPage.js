import React from 'react';
import './FirstPage.css';
import { Link } from 'react-router-dom';
 
function Main() {
	return (
			<>
			<body>
			<div className="card"><Link to='/Login'><u>Librarian</u></Link>
			{/*  <div className="card2"><Link to='/Login'><u>Librarian</u></Link></div> */}
			</div>
			
			<div className="msg">CLICK ON CARD</div>
			</body>
			</>
	)
}

export default Main;