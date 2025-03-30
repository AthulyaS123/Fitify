import { FunctionComponent } from 'react';
import styles from './swipescreen.module.css';
import redtop from './Clothes/redtop.png';
import preficon from './Icons/preficon.png';
import hearticon from './Icons/hearticon.png';
import swipehearticon from './Icons/swipehearticon.png';
import shoeicon from './Icons/shoeicon.png';
import swipexicon from './Icons/swipexicon.png';
import shirticon from './Icons/shirticon.png';
import panticon from './Icons/panticon.png';
import fitsicon from './Icons/fitsicon.png';
import mixandmatchicon from './Icons/mixandmatchicon.png';
import closeticon from './Icons/closeticon.png';

const SwipingScreen = () => {
  	return (
    		<div className={styles.swipingScreen}>
      			<div className={styles.swipingScreenChild} />
      			<div className={styles.swipeToSave}>Swipe to Save</div>
      			<img className={styles.cutIcon} alt="" src={mixandmatchicon} />
      			<img className={styles.wardrobeIcon} alt="" src={closeticon} />
      			<img className={styles.tuneIcon} alt="" src={preficon}/>
      			<div className={styles.ellipseParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.div}>?</div>
          					</div>
          					<img className={styles.heartIcon} alt="" src={hearticon} />
          					<img className={styles.heartIcon1} alt="" src={swipehearticon} />
          					<div className={styles.closet}>Closet</div>
          					<div className={styles.swipe}>Swipe</div>
          					<div className={styles.mixNMatch}>Mix ‘n Match</div>
          					<div className={styles.lookbook}>Lookbook</div>
          					<img className={styles.openBookIcon} alt="" src={fitsicon} />
          					<div className={styles.swipingScreenItem} />
          					<img className={styles.image10Icon} alt="" src={redtop} />
          					<img className={styles.closeIcon} alt="" src={swipexicon} />
          					<div className={styles.swipingScreenInner} />
          					<div className={styles.rectangleDiv} />
          					<img className={styles.womensTShirtIcon1} alt="" src={shirticon} />
          					<img className={styles.trainersIcon} alt="" src={shoeicon} />
          					<img className={styles.trousersIcon} alt="" src={panticon} />
          					<div className={styles.pacsunMaroonBowneckContainer}>
            						<p className={styles.pacsunMaroonBowneck}>Pacsun Maroon Bowneck Top</p>
            						<p className={styles.pacsunMaroonBowneck}>$17.99</p>
                    </div>
                </div>);
    };
        				
export default SwipingScreen;
        				