import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';

const BasicPopover = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const openPopover = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const closePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div className='text-xl px-2' aria-describedby={id} onClick={openPopover} >
                <HiDotsVertical />
            </div>
            <Popover
                className='mt-4' 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={closePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Typography className='bg-violet-200 border-b border-violet-300' sx={{ px: 2, py: 1, fontSize: 12, fontWeight: 400 }}>
                    The content of the Popover.
                </Typography>
                <Typography className='bg-violet-200 border-b border-violet-300' sx={{ px: 2, py: 1, fontSize: 12, fontWeight: 400 }}>
                    The content of the Popover.
                </Typography>
                <Typography className='bg-violet-200 border-b border-violet-300' sx={{ px: 2, py: 1, fontSize: 12, fontWeight: 400 }}>
                    The content of the Popover.
                </Typography>
                <Typography className='bg-violet-200 border-b border-violet-300' sx={{ px: 2, py: 1, fontSize: 12, fontWeight: 400 }}>
                    The content of the Popover.
                </Typography>
                <Typography className='bg-violet-200' sx={{ px: 2, py: 1, fontSize: 12, fontWeight: 400 }}>
                    The content of the Popover.
                </Typography>
            </Popover>
        </div>
    );
}
export default BasicPopover