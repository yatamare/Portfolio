// Base
import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// Pages
import Homepage from './Pages/HomePage';
import Games from './Pages/Game';
import Computers from './Pages/Computers';
import Management from './Pages/Management';
import Art from './Pages/Art';

// Tools
import ScrollTop from './Tools/ScrollTop';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

// Style
import './App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		appbar: {
			marginLeft: "auto",
			marginRight: "auto",
			marginTop: "10px",
			width: "90%",
			background: "#000505",
		},
		name: {
			color: '#EFF7FF',
		},
		center: {
			marginTop: "5px",
			marginLeft: "auto",
			marginRight: "auto",
			display: 'inline-block',
			textAlign: 'center',
		},
		link: {
			textDecoration: 'none',
			color: '#E4E6E5',
			paddingRight: '0px',

		},
		bottomNav: {
			marginTop: "10px",
			height: "100px",
			width: "100%",
			background: "#002929",
		},
		grid: {
			width: '50%',
			textAlign: 'center',
		},
	}),
);

////////////////////////////////////////////
// App
function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Router basename="">
				<ScrollTop />
				<AppBar position="sticky" className={classes.appbar}>
					<Toolbar>
						<Grid container>
							<Grid item xs={12} sm={6} container>
								<Grid item xs>
									<Grid item xs>
										<Typography variant="h4" className={classes.name} style={{ fontFamily: "Neuton" }}>
											<NavLink to="/" className={classes.link}>Hunter McGregor</NavLink>
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={6} className={classes.grid} container>
								<Typography variant="h5" className={classes.center} style={{ fontFamily: "Neuton" }}>
									<NavLink to="/Games" activeStyle={{ color: "#F17a7e" }} className={classes.link}>Games</NavLink>
								</Typography>
								<Typography variant="h5" className={classes.center} style={{ fontFamily: "Neuton" }}>
									<NavLink to="/Dev" activeStyle={{ color: "#F17a7e" }} className={classes.link}>Dev</NavLink>
								</Typography>
								<Typography variant="h5" className={classes.center} style={{ fontFamily: "Neuton" }}>
									<NavLink to="/Management" activeStyle={{ color: "#F17a7e" }} className={classes.link}>Management</NavLink>
								</Typography>
								<Typography variant="h5" className={classes.center} style={{ fontFamily: "Neuton" }}>
									<NavLink to="/Art" activeStyle={{ color: "#F17a7e" }} className={classes.link}>Art</NavLink>
								</Typography>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
				<div>
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/Games" component={Games} />
						<Route exact path="/Dev" component={Computers} />
						<Route exact path="/Management" component={Management} />
						<Route exact path="/art" component={Art} />
					</Switch>
				</div>
			</Router>
			<div className={classes.bottomNav}>
			</div>
		</div >
	);
}

export default App;
