// Base
import React from 'react';

// Pages
import Sol from './Games/Sol'
import Caleb from './Games/Caleb'
import DotaUI from './Games/DotaUI'
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
		}
	}),
);

////////////////////////////////////////////
// App
function GameInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.pagealt}>
				<Sol />
			</div>
			<div className={classes.pagealt}>
				<Caleb />
			</div>
			<div className={classes.pagealt}>
				<DotaUI />
			</div>
			<div className={classes.pagealt}>
				<Contact />
			</div>
		</div >
	);
}

export default GameInfo;