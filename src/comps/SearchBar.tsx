import * as React from "react"
import { useState, useEffect } from "react"
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles<Theme>(theme => ({
    container: {
        padding: '20px 0',
        backgroundColor: "#00838f"
    },
    icon: {
        marginTop: 30,
        width: 150,
        height: 150,
        color: theme.palette.primary.main,
    },
    typo: {
        display: 'block',
        marginTop: 30,
    },
    root: {
        padding: theme.spacing(3, 2),
        backgroundColor: "#26a69a"
    },
}))


interface Response {
    name: string
    description: string
    id: string
    title: string
    body: string
    stargazers_count: number

}


export const SearchBar = (): JSX.Element => {
    const classes = useStyles({})
    const [search, setSearch] = useState<string>("");


    const [data, setData] = useState<Response[]>([])
    const getGitHub = async () => {

        let res = await fetch(`https://api.github.com/users/pdxphilippmac/repos?sort=pushed`)
        let data = await res.json()
        setData(data)
    }

    useEffect(() => {
        getGitHub()
    }, []);

    return (
        <>
            <input
                type="text"
                value={search}
                onChange={(
                    ev: React.ChangeEvent<HTMLInputElement>,
                ): void => setSearch(ev.target.value)}
            />

            {search && data.map(item =>
                <Grid container alignContent="center" justify="center" className={classes.container}>
                    <Paper className={classes.root}>
                        <Typography variant="h4" className={classes.heading} align="center">
                            {item.name}
                        </Typography>
                        <p>{item.description}</p>
                        <p>{item.stargazers_count}</p>
                    </Paper>
                </Grid>)
            }
        </>

    );

};