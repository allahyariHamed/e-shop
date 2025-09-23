import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiDotsVertical } from 'react-icons/hi';

const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ minWidth: 20, paddingX: 0, color: 'black' }}
            >
                <HiDotsVertical className='text-2xl' />
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                        sx: {
                            paddingY: 0,
                            minWidth: 200,
                        }
                    },
                }}
            >
                <MenuItem sx={{ fontWeight: 'bold', fontFamily: 'Nunito', fontSize: '13px', backgroundColor: '#ddd6fe', borderBottom: '1px silver solid' }} onClick={handleClose}>
                    hello
                </MenuItem>

            </Menu>

        </div>
    );
}
export default BasicMenu