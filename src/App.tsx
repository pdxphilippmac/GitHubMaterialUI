import React from 'react';
import logo from './logo.png';
import './App.css';
// import { DataWrapper } from './comps/DataFetcher';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { BottomAppBar } from "./comps/AppBar"
import { SearchBar } from "./comps/SearchBar"



const useStyles = makeStyles<Theme>(theme => ({
  container: {
    padding: '20px 0',
    backgroundColor: "#00838f"

  },

  typo: {
    display: 'block',
    marginTop: 30,
  }, heading: {

  }
}))


const App: React.FC = () => {
  const classes = useStyles({})
  return (
    <div className="App">


      <Grid container alignContent="center" justify="center" className={classes.container}>
        <Grid item xs={6}>
          <SearchBar />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h4" className={classes.heading} align="center">
              MaterialUI
        </Typography>
            <Typography variant="h1" className={classes.typo} align="center">
              GitHub Repo Finder
        </Typography>
            {/* <DataWrapper title="DataWrapper" /> */}
          </header>
        </Grid>
      </Grid>

      <BottomAppBar />

    </div >
  );
}

export default App;
