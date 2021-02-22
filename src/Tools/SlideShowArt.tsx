import React from 'react';

// Slideshow
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Styling
import { createMuiTheme, makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';

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
					<img className={classes.image} src={flowers} />
				</div>
				<div>
					<img className={classes.image} src={cali} />
				</div>
				<div>
					<img className={classes.image} src={star} />
				</div>
			</Fade>
		</div>
	)
}

export default Slideshow;