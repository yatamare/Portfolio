import React from 'react';

// Slideshow
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Styling
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Images
import flowers from '../Pictures/Slideshow/Flowers.png';
import cali from '../Pictures/Slideshow/Cali.png';
import star from '../Pictures/Slideshow/Light.png';


////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		imageContainer: {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			overflow: "hidden",
		},
		imageCenter: {
			position: 'relative',
		},
		image: {
			minWidth: "150%",
			width: '1000px',
			marginLeft: '50%',
			transform: 'translateX(-50%)',
		},
		specialImage: {
			minWidth: "150%",
			width: '1000px',
		}
	}),
);

function Slideshow() {
	const classes = useStyles();

	return (
		<div className={classes.imageContainer}>
			<Fade arrows={false}>
				<div>
					<img className={classes.image} alt="Flower art" src={flowers} />
				</div>
				<div>
					<img className={classes.image} alt="Cali drawing" src={cali} />
				</div>
				<div>
					<img className={classes.image} alt="star explorer" src={star} />
				</div>
			</Fade>
		</div>
	)
}

export default Slideshow;