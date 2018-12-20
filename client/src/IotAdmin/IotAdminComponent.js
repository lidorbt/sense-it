import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Paper, Grid, Typography, Button } from '@material-ui/core'
import IotTableComponent from './components/IotTableComponent'

const IotAdminComponent = (props) => {
	const { classes } = props
	return (<div>
		<Paper className={classes.iotAdminPanel}>
			<Grid container spacing={8} justify={'space-around'} alignItems={'center'}>
				<Grid item xs={1}/>
				<Grid item xs={2}>
					<Typography variant={'headline'}>{'Dashboard'}</Typography>
				</Grid>
				<Grid item xs={9}/>
			</Grid>
			<IotTableComponent className={classes.iotTable} />
		</Paper>
	</div>
	)
}

IotAdminComponent.propTypes = {
	classes: PropTypes.object,
}

const style = {
	notActiveCard: {
		textAlign: 'center'
	},
	iotAdminPanel: {
		margin: 20
	},
	addDeviceButton: {
		/* right: 20, */
		marginTop: 20,
		
	},
	iotTable: {
		margin: 10
	}
}

export default withStyles(style)(IotAdminComponent)