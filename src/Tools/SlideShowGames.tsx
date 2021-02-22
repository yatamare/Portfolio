import React from 'react';

// Slideshow
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Styling
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Images
import Sol from '../Pictures/Slideshow/SolTown.png';
import Dota from '../Pictures/Slideshow/dotaSuggestions.png';
import Caleb from '../Pictures/Slideshow/pit2.png';


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
		}
	}),
);

function Slideshow() {
	const classes = useStyles();

	return (
		<div className={classes.imageContainer}>
			<Fade arrows={false}>
				<div className={classes.imageCenter}>
					<img className={classes.image} alt="Sol" src={Sol} />
				</div>
				<div>
					<img className={classes.image} alt="Dota UI" src={Dota} />
				</div>
				<div>
					<img className={classes.image} alt="Caleb's Pit" src={Caleb} />
				</div>
			</Fade>
		</div>
	)
}

export default Slideshow;