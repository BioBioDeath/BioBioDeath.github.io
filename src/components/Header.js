import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
    return (
        <AppBar sx={{ background: '#00000099' }}>
            <Toolbar>
                <Box sx={{ flex: 1 }}>
                    <Button>
                        <Typography color='primary' variant='h2' textTransform='capitalize'>
                            Sean Sharp
                        </Typography>
                    </Button>
                </Box>
                <Button>
                    Songs
                </Button>
                <Button>
                    Store
                </Button>
                <Button>
                    Sanity?
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;