import { AppBar, Avatar, Grid, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import logo from '../../images/dg-logo-simple.jpg'

const Header = () => (
    <AppBar position='static' color='primary'>
        <Toolbar>
            <Avatar alt={logo} src={logo} />
            <Typography variant='h6'>Delta Green</Typography>
        </Toolbar>
    </AppBar>
)

export default Header
