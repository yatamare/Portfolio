// Base
import React from 'react';

// Pages
import Uptown from './Jobs/Uptown'
import FourM from './Jobs/4m'
import Contact from './contact'

// Pages

// CSS & Material UI
import { createMuiTheme, makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		pagealt: {
			marginTop: '10px',
		},
	}),
);

////////////////////////////////////////////
// App
function ManInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.pagealt}>
				<Uptown />
			</div>
			<div className={classes.pagealt}>
				<FourM />
			</div>
			<div className={classes.pagealt}>
			</div>
			<div className={classes.pagealt}>
				<Contact />
			</div>
		</div>
	);
}

export default ManInfo;