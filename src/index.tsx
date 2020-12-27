import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

import './index.scss'
// import App from './App/App'
import store from './store'

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: green[800],
        },
        secondary: {
            // This is green.A700 as hex.
            main: grey[900],
        },
    },
})

const app = (
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
)

render(app, document.getElementById('root'))
