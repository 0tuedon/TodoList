import { SickRounded } from '@mui/icons-material'
import { IconButton, Typography,Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <SickRounded />
                </IconButton>
                TODOS
                <Typography variant="h6" className="title">
                    <Button color="inherit">
                       <Link to="/new" className="btn">Add Todos </Link>
                    </Button>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
