// Base
import React from 'react';

// Font CSS
import '../../Fonts.css';

// Pictures
import Pit from '../../Pictures/pit2.png';

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
function CalebInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} square>
				<div className={classes.page}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h3" className={classes.title} style={{ fontFamily: "Neuton" }}>
										Caleb's Pit
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Developer
									</Typography>
									<p> </p>
									<Typography variant="body2" gutterBottom className={classes.description}>
										Caleb's Pit is rogue-like game that features an evolving field of play in
										which after a monster is slain it drops a cooresponding environmental terrain that
										changes the shape of the field of play. Each environment terrain type effects
										the surronding area's environment terrains when dropped. Alongisde varying power-ups
										and potions its provided a unique play experience every time.
									</Typography>
									<Typography variant="body2" gutterBottom className={classes.description}>
										The project's technical strength was a fully functioning AI pathing system which
										could dynamically evaluate an consitantly changing map with each elemental type
										of AI having its on unique movement parameters. The AI was light weight enough to
										have several hundred paths being calculated within each frame.
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="Caleb's Pit" src={Pit} />
							</ButtonBase>
						</Grid>
					</Grid>
				</div>
			</Paper>
		</div>
	);
}

export default CalebInfo;