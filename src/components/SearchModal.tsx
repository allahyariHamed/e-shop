import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { IoSearch } from "react-icons/io5";
import { FC, useEffect, useState } from 'react';
import { useFetchProducts } from '../utils/customHooks/useFetchProducts';
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../utils/redux/filterSlice';

const TransitionsModal: FC = () => {
    const [search, setSearch] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');
    const products = useFetchProducts('products')
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: '#ddd6fe',
        borderRadius: 2,
        boxShadow: 20,
        p: 2,
    }

    useEffect(() => {
        dispatch(filterBySearch({ products, search }))
    }, [dispatch, products, search])

    return (
        <div>
            <div onClick={handleOpen}>
                <IoSearch className="text-3xl" />
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
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
                        <div className='flex gap-1'>
                            <input
                                type="search"
                                name="search"
                                id=""
                                placeholder='search'
                                className="peer w-full bg-white placeholder:text-slate-500 text-black text-xs rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow focus:shadow-none"
                                onBlur={(e) => setInputValue(e.target.value)}
                            />

                            <div className='bg-white p-1 rounded shadow' onClick={() => {
                                setSearch(inputValue)
                                handleClose()
                            }}>
                                <IoSearch className="text-3xl" />
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
export default TransitionsModal