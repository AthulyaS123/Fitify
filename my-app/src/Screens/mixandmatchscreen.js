import { FunctionComponent } from 'react';
import styles from './mixandmatchscreen.module.css';
import preficon from './Icons/preficon.png';
import hearticon from './Icons/hearticon.png';
import fitsicon from './Icons/fitsicon.png';
import mixandmatchicon from './Icons/mixandmatchicon.png';
import closeticon from './Icons/closeticon.png';
import lessthanicon from './Icons/arrowlefticon.png';
import greaterthanicon from './Icons/arrowrighticon.png';


const MixMatch = () => {
  	return (
    		<div className={styles.mixMatch}>
      			<img className={styles.image8Icon} alt="" src="image 8.png" />
      			<div className={styles.mixMatchChild} />
      			<div className={styles.mixMatch1}>{`Mix & Match`}</div>
      			<img className={styles.cutIcon} alt="" src={mixandmatchicon} />
      			<img className={styles.wardrobeIcon} alt="" src={closeticon} />
      			<img className={styles.tuneIcon} alt="" src={preficon} />
      			<div className={styles.ellipseParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.div}>?</div>
          					</div>
          					<img className={styles.heartIcon} alt="" src={hearticon} />
          					<div className={styles.closet}>Closet</div>
          					<div className={styles.swipe}>Swipe</div>
          					<div className={styles.mixMatch2}>{`Mix & Match`}</div>
          					<div className={styles.lookbook}>Lookbook</div>
          					<img className={styles.openBookIcon} alt="" src={fitsicon} />
          					<img className={styles.moreThanIcon} alt="" src={greaterthanicon} />
          					<img className={styles.moreThanIcon1} alt="" src={greaterthanicon} />
          					<img className={styles.moreThanIcon2} alt="" src={greaterthanicon} />
          					<img className={styles.moreThanIcon3} alt="" src={lessthanicon} />
          					<img className={styles.moreThanIcon4} alt="" src={lessthanicon} />
          					<img className={styles.moreThanIcon5} alt="" src={lessthanicon} />
          					<div className={styles.button}>
            						<div className={styles.stateLayer}>
              							<div className={styles.labelText} />
            						</div>
          					</div>
          					<div className={styles.save}>Save</div>
          					<img className={styles.image12Icon} alt="" src="image 12.png" />
          					<img className={styles.image11Icon} alt="" src="image 11.png" />
          					</div>);
        				};
        				
        				export default MixMatch;
        				