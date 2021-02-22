// Base
import React from 'react';

// Font CSS
import '../../Fonts.css';

// Pictures
import Bath from '../../Pictures/Art/Bath.png';
import Cali from '../../Pictures/Art/Cali.png';
import Flowers from '../../Pictures/Art/Flowers.png';
import Star from '../../Pictures/Art/Starexplorer.png';
import Written from '../../Pictures/Art/Written.png';

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
function GalleryInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} square>
				<div className={classes.page}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="Bath" src={Bath} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={3}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="Written in the Wind" src={Written} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={6} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h3" className={classes.title} style={{ fontFamily: "Neuton" }}>
										Stetchbook
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Artist
									</Typography>
									<p> </p>
									<Typography variant="body2" gutterBottom className={classes.description}>
										Amateur artist
									</Typography>
									<Typography variant="body2" gutterBottom className={classes.description}>
										An exploration of surrealism
									</Typography>
									<Typography variant="body2" gutterBottom className={classes.description}>
										Or whatever
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Thanks for looking :)
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} width="70%" alt="complex" src={Cali} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={3}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="complex" src={Flowers} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={3}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="complex" src={Star} />
							</ButtonBase>
						</Grid>
					</Grid>
				</div>
			</Paper>
		</div>
	);
}

export default GalleryInfo;