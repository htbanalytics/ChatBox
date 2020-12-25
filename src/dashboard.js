import React from 'react';
import Paper from '@material -ui/core/Paper';
import classes from '*.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material -ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

export default function dashboard() {
    return {
        <div>
        <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
        This is a sheet of paper. 
        </Typography>
        <Typography component="p">
        Paper can be used to build surface or other things...
        </Typography>
        
        
        </Paper>

        </div>
    }
}