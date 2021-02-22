import React from 'react';

// Slideshow
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Styling
import { createMuiTheme, makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';

// Images
import uptown from '../Pictures/Slideshow/Uptownwebsite.png';
import fourm from '../Pictures/Slideshow/4m1.png';


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
					<img className={classes.image} src={uptown} />
				</div>
				<div>
					<img className={classes.image} src={fourm} />
				</div>
			</Fade>
		</div>
	)
}

export default Slideshow;