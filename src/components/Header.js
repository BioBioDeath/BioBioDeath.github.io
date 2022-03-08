import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
    return (
        <AppBar sx={{ background: 'none' }}>
            <Toolbar>
                <Typography color='primary' variant='h2' sx={{ flexGrow: 1 }}>
                    Sean Sharp
                </Typography>
                <Button>
                    Music
                </Button>
                <Button>
                    Merch
                </Button>
                <Button>
                    Madness
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;