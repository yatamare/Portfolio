// Base
import React from 'react';

// Pages
import Gallery from './Art/Gallery'
import Instagram from './Art/Instagram'
import Contact from './contact'

// CSS & Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
				<Gallery />
			</div>
			<div className={classes.pagealt}>
				<Instagram />
			</div>
			<div className={classes.pagealt}>
				<Contact />
			</div>
		</div>
	);
}

export default UsersAll;