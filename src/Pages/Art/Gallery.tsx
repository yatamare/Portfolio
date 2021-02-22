// Base
import React from 'react';

// Font CSS
import '../../Fonts.css';

// Pictures
import Connection from '../../Pictures/Art/Upsidedown.png';
import Light from '../../Pictures/Art/Light.png';

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
		},
		page: {
			width: '98%',
			margin: 'auto',
		}
	}),
);

////////////////////////////////////////////
// App
function GalleryInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} square>
				<div className={classes.page}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="complex" src={Connection} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={3}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="complex" src={Light} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={6} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h3" className={classes.title} style={{ fontFamily: "Neuton" }}>
										Deep Freeze Gallery
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Artist
									</Typography>
									<p> </p>
									<Typography variant="body2" gutterBottom className={classes.description}>
										The Deep Freeze Gallery was an evolving gallery in which the artist were given
										two weeks to create pieces of art within the gallery space. The gallery was open
										to the general public allowing them to stop everyday to see the progress which had
										been made by each artists. On the final day we had an "openning day" in
										which would all the pieces would finally be finished before closing the
										gallery. I was luckily enough to be included in this process.
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										"The Connection" and "Guiding Hand"
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

export default GalleryInfo;