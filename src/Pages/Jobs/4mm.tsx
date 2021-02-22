// Base
import React from 'react';

// Font CSS
import '../../Fonts.css';

// Pictures
import FourM from '../../Pictures/4m3.png';

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
								<img className={classes.img} alt="4M" src={FourM} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={6} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h3" className={classes.title} style={{ fontFamily: "Neuton" }}>
										4M Management
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Web Developer
									</Typography>
									<p> </p>
									<Typography variant="body2" gutterBottom className={classes.description}>
										Since 4M Management became a company 10+ years ago I had always helped out with the
										technical responsiblities of the company. Whether it was on-site technical assistance
										with the computers or further development needs. I've been in charge of hosting, managing
										and development of the 4M Management website and all subsidiary companies web requirments
										for the past 5+ years.
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										HTML, CSS, Javascript
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body2" className={classes.link}>
										<a className={classes.link} href="https://www.4mmanagement.com">www.4mmanagement.com</a>
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