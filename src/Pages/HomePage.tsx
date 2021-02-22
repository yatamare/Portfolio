// Base
import React from 'react';
import { NavLink } from 'react-router-dom';

// Pages
import Uptown from './Jobs/Uptown';
import Sol from './Games/Sol';
import Contact from './contact';

// Tools
import SlideshowGames from '../Tools/SlideShowGames';
import SlideshowDev from '../Tools/SlideShowDev';
import SlideshowMan from '../Tools/SlideShowMan';
import SlideshowArt from '../Tools/SlideShowArt';

// CSS & Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		card: {
			width: "100%",
			margin: "auto",
		},
		paper: {
			margin: "auto",
			height: 300,
			width: "100%",
			backgroundColor: '#E4E6E5',
		},
		polaroid: {
			width: "98%",
			height: "90%",
			margin: 'auto',
			marginTop: "1%",
		},
		grid: {
			marginLeft: "auto",
			marginRight: "auto",
			marginTop: "10px",
			paddingBottom: '10px',
			width: "90%",
		},
		pages: {
			background: '#558C8C',
		},
		pagealt: {
			marginTop: '10px',
		},
		slideshow: {
			margintop: '10px',
		},
	}),
);

////////////////////////////////////////////
// App
function UsersAll() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.pages}>
				<Grid container className={classes.grid} spacing={1}>
					<Grid item xs={6} sm={6}>
						<NavLink to="/Games">
							<ButtonBase className={classes.card}>
								<Paper className={classes.paper}>
									<div className={classes.polaroid}>
										<SlideshowGames />
									</div>
									<Typography variant="body1" color="textSecondary" style={{ fontFamily: "Neuton" }}>
										Games
									</Typography>
								</Paper>
							</ButtonBase>
						</NavLink>
					</Grid>
					<Grid item xs={6} sm={6}>
						<NavLink to="/Dev">
							<ButtonBase className={classes.card}>
								<Paper className={classes.paper}>
									<div className={classes.polaroid}>
										<SlideshowDev />
									</div>
									<Typography variant="body1" color="textSecondary" style={{ fontFamily: "Neuton" }}>
										Development
								</Typography>
								</Paper>
							</ButtonBase>
						</NavLink>
					</Grid>
					<Grid item xs={6} sm={6}>
						<NavLink to="/Management">
							<ButtonBase className={classes.card}>
								<Paper className={classes.paper}>
									<div className={classes.polaroid}>
										<SlideshowMan />
									</div>
									<Typography variant="body1" color="textSecondary" style={{ fontFamily: "Neuton" }}>
										Management
								</Typography>
								</Paper>
							</ButtonBase>
						</NavLink>
					</Grid>
					<Grid item xs={6} sm={6}>
						<NavLink to="/Art">
							<ButtonBase className={classes.card}>
								<Paper className={classes.paper}>
									<div className={classes.polaroid}>
										<SlideshowArt />
									</div>
									<Typography variant="body1" color="textSecondary" style={{ fontFamily: "Neuton" }}>
										Art
								</Typography>
								</Paper>
							</ButtonBase>
						</NavLink>
					</Grid>
				</Grid>
			</div>
			<div className={classes.pagealt}>
				<Uptown />
			</div>
			<div className={classes.pagealt}>
				<Sol />
			</div>
			<div className={classes.pagealt}>
				<Contact />
			</div>
		</div >
	);
}

export default UsersAll;