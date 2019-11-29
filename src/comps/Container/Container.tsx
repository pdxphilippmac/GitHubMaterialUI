import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        padding: 60,

    },
})

interface ContainerProps { }

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
    const classes = useStyles({})
    return (
        <>
            <div className={classes.root}>{children}</div>
        </>
    )
}
