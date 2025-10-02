'use client'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { IconType } from 'react-icons/lib';

type props = {
    children: ReactNode
    Icon: IconType
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const ModalComponent: FC<props> = ({ children, Icon, open, setOpen }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 200,
        bgcolor: '#ddd6fe',
        borderRadius: 2,
        boxShadow: 20,
        p: 2,
    }

    return (
        <div>
            <div onClick={() => setOpen(true)}>
                <Icon className="text-2xl" />
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
export default ModalComponent