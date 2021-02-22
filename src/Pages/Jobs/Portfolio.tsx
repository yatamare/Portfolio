// Base
import React from 'react';

// Font CSS
import '../../Fonts.css';

// Pictures
import Oldport from '../../Pictures/4mold.png';
import Hyperstone from '../../Pictures/hyperstone.png';
import Pycode from '../../Pictures/pycode.png';

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
function WebsiteInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} square>
				<div className={classes.page}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="Old Website" src={Oldport} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={6} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h3" className={classes.title} style={{ fontFamily: "Neuton" }}>
										My Portfolio
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Developer and Designer
									</Typography>
									<p> </p>
									<Typography variant="body2" gutterBottom className={classes.description}>
										My portfolio has changed and evolved over the years but it has always
										been an amalgamation of my skills as a developer. This includes this websites,
										github projects, app creations, and language application practice. Regardless
										of their purpose I've always added passion and creativity to everything I create.
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Website: React and Typescript
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Projects: C#, Haskell, Akka, Java, Python, Prolog
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body2" className={classes.link}>
										<a className={classes.link} href="https://github.com/yatamare?tab=repositories">www.github.com/repositories</a>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="complex" src={Hyperstone} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="complex" src={Pycode} />
							</ButtonBase>
						</Grid>
					</Grid>
				</div>
			</Paper>
		</div>
	);
}

export default WebsiteInfo;