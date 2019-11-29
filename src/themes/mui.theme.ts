import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        background: {
            default: '#e5f3ff',
        },
        grey: grey,
    },
    typography: {
        h1: {
            fontSize: '2rem',
        },
        h2: {
            fontSize: '1.6rem',
        },
    },
    overrides: {
        MuiChip: {
            root: {
                height: 24,
            },
        },
    },
})

export default theme
