// Base
import React from 'react';

// Font CSS
import '../Fonts.css';

// Pictures
import SolTown from '../Pictures/SolTown.png';
import SolGame from '../Pictures/SolGame.png';
import SolHouse from '../Pictures/SolHouse.png';

// CSS & Material UI
import { createMuiTheme, makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
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
			color: 'black',
		},
		page: {
			width: '98%',
			margin: 'auto',
		}
	}),
);

////////////////////////////////////////////
// App
function ContactInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} square>
				<div className={classes.page}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
							<Typography variant="h3" className={classes.title} style={{ fontFamily: "Neuton" }}>
								Contact
							</Typography>
							<Typography variant="body2" color="textSecondary" className={classes.description}>
								Developer, Designer and Project Manager
							</Typography>
						</Grid>
						<Grid item xs={12} sm={3} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h6" className={classes.description}>
										<a href='https://www.linkedin.com/in/hunter-mcgregor/' className={classes.link}	>Linked In</a>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant='h6' className={classes.description}>
										<a href='mailto:yatamare@outlook.com' className={classes.link}>hunter-mcgregor@outlook.com</a>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={3} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h6" color="textSecondary" className={classes.description}>
										<a href="https://github.com/yatamare" className={classes.link}>Github</a>
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

export default ContactInfo;