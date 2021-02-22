// Base
import React from 'react';

// Pages
import FourM from './Jobs/4mm';
import Contact from './contact';
import Portfolio from './Jobs/Portfolio';

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
function UsersAll() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.pagealt}>
				<FourM />
			</div>
			<div className={classes.pagealt}>
				<Portfolio />
			</div>
			<div className={classes.pagealt}>
				<Contact />
			</div>
		</div>
	);
}

export default UsersAll;