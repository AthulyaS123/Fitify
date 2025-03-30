import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react';
import preficon from './Icons/preficon.png';
import hearticon from './Icons/hearticon.png';
import fitsicon from './Icons/fitsicon.png';
import mixandmatchicon from './Icons/mixandmatchicon.png';
import closeticon from './Icons/closeticon.png';
import usericon from './Icons/user.png';
import questionicon from './Icons/question.png';
import leftarrow from './Icons/arrowlefticon.png';
import rightarrow from './Icons/arrowrighticon.png';

import './mixandmatchscreen.css';
// Import ALL png files from Clothes folder
// access images using Clothes.top1, etc.
import * as Clothes from './Clothes';

import 'bootstrap/dist/css/bootstrap.min.css';

const MixMatch = () => {
  return (
	<div className="container">
		{/* Header */}
		<div className="top-content row align-items-center">
			<div className="col-1">
				<img className="d-block mx-auto" src={preficon} alt="Preferences" width="30" />
			</div>

		<div className="col-1">
			<img className="d-block mx-auto" src={questionicon} alt="Info" width="30" />
		</div>

		<div className="col-8">
			<p className="pageheader">Mix & Match</p>
			</div>

		<div className="col-2">
			<img className="d-block mx-auto" src={usericon} alt="Profile" width="40" />
		</div>

		</div>

		{/*Mix & Match Screen Content*/}

		{/*Shirt area*/}
		<div className="row">
			<div className="col">
				<img className="d-block mx-auto left-arrow" src={leftarrow} alt="" width="30"></img>
			</div>
			<div className="col">
				<img className="col shirt-img" src={Clothes.top1} alt="" width="150"></img>
			</div>
			<div className="col">
				<img className="right-arrow" src={rightarrow} alt="" width="30"></img>
			</div>
		</div>

		{/*Pant area*/}
		<div className="row">
			<div className="col">
				<img className="d-block mx-auto left-arrow" src={leftarrow} alt="" width="30"></img>
			</div>
			<div className="col">
				<img className="col shirt-img" src={Clothes.pant1} alt="" width="150"></img>
			</div>
			<div className="col">
				<img className="right-arrow" src={rightarrow} alt="" width="30" ></img>
			</div>
		</div>

		{/*Shoe area*/}
		<div className="row">
			<div className="col">
				<img className="d-block mx-auto left-arrow" src={leftarrow} alt="" width="30"></img>
			</div>

			<div className="col shoe-img">
				<img src={Clothes.shoe1} alt="" width="150"></img>
			</div>

			<div className="col">
				<img className="right-arrow" src={rightarrow} alt="" width="30"></img>
			</div>
		</div>

		{/* Bottom Navigation */}
		<div className="row navbar fixed-bottom">
	  	<div className="col text-center">
          <Link to="/" className="nav-link-current">
            <img src={hearticon} alt="Swipe" width="40" />
            <div>Swipe</div>
          </Link>
        </div>

        <div className="col text-center">
          <Link to="/closet" className="nav-link">
            <img src={closeticon} alt="Closet" width="40" />
            <div>Closet</div>
          </Link>
        </div>
        <div className="col text-center">
          <Link to="/mix-and-match" className="nav-link">
            <img src={mixandmatchicon} alt="Mix & Match" width="40" />
            <div className="nav-link">Mix & Match</div>
          </Link>
        </div>
        <div className="col text-center">
          <Link to="/lookbook" className="nav-link">
            <img src={fitsicon} alt="Lookbook" width="40" />
            <div>Lookbook</div>
          </Link>
        </div>
      </div>
	</div>
		
    
  );
};

export default MixMatch;