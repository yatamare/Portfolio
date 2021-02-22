// Base
import React from 'react';

// Font CSS
import '../../Fonts.css';

// Pictures
import Dotaui from '../../Pictures/dotaSuggestions.png';

// CSS & Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			margin: 'auto',
			height: '100%',
			width: '100%',
			backgroundColor: '#E4E6E5',
		},
		image: {
			width: '100%',
			height: '100%',
		},
		img: {
			margin: 'auto',
			display: 'block',
			maxWidth: '100%',
			maxHeight: '100%',
		},
		title: {
			margin: 'auto',
			marginTop: '10px',
			display: 'block',
			maxWidth: '100%',
			maxHeight: '100%',
			textAlign: 'center',
		},
		description: {
			textAlign: 'center',
			paddingRight: '0px',
		},
		link: {
			textAlign: 'center',
			textDecoration: 'none',
		},
		page: {
			width: '98%',
			margin: 'auto',
		}
	}),
);

////////////////////////////////////////////
// App
function DotaInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} square>
				<div className={classes.page}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="Dota UI Enhancer" src={Dotaui} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={6} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h3" className={classes.title} style={{ fontFamily: "Neuton" }}>
										Dota UI Enhancer
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Developer
									</Typography>
									<p> </p>
									<Typography variant="body2" gutterBottom className={classes.description}>
										Our team's goal for the Dota UI Enhancer was to add additional features to make
										character selection in MOBA games a more socially positive experience and to
										redesign the interface to include new tools. The redesigned interface gives players the ability to communicate
										strategies at an abstracted level meant to reduce toxic behavior and overcome
										language barriers. This design process required extensive user testing and multiple
										prototypes of both low and medium fidelity.
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										https://github.com/yatamare/Dota-UI-Enhancer
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Paper>
		</div>
	);
}

export default DotaInfo;