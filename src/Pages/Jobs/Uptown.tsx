// Base
import React from 'react';

// Font CSS
import '../../Fonts.css';

// Pictures
import UptownWebsite from '../../Pictures/Uptownwebsite.png';

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
function UptownInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} square>
				<div className={classes.page}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="complex" src={UptownWebsite} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={6} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h3" className={classes.title} style={{ fontFamily: "Neuton" }}>
										Uptown
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Project Manager
									</Typography>
									<p> </p>
									<Typography variant="body2" gutterBottom className={classes.description}>
										Uptown is a lead distribution company with the focus on luxery real state.
										We provide leads in 50+ cities with hundreds of leads generated a week.
										Since I've taken over as Project Manager I've been in charge of managing
										a small team of contracted developers. We have created microsites, setup VoIP2
										and hired IVR actors, Setup SMTP systems and much more.
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Sold company in February 2020
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body2" className={classes.link}>
										<a className={classes.link} href="https://www.uptown.com">www.uptown.com</a>
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

export default UptownInfo;