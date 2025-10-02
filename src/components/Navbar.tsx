'use client'
import SideBar from './SideBar';
import ClientAvatar from './ClientAvatar';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { removeActiveUser, setActiveUser } from '../utils/redux/authSlice';
import { useDispatch } from 'react-redux';
import ModalComponent from './Modal';
import { HiDotsVertical } from 'react-icons/hi';

const Navbar: React.FC = () => {
    const [extractedUserName, SetExtractedUserName] = useState<string>()
    const [sidebar, SetSidebar] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user?.displayName == null || '') {
                    SetExtractedUserName(user?.email?.split('@')[0])
                }

                dispatch(setActiveUser({
                    email: user?.email || '',
                    userName: user?.displayName || extractedUserName,
                    userId: user?.uid
                }))

            } else {
                dispatch(removeActiveUser())
            }
        })
    }, [dispatch, extractedUserName])

    return (
        <nav className="sticky top-0 z-10">
            <div className="flex items-center justify-between shadow bg-violet-200 rounded-md px-2">

                <ClientAvatar />

                <span className="text-lg font-bold px-3">
                    TaroPud
                </span>

                <ModalComponent Icon={HiDotsVertical} open={sidebar} setOpen={SetSidebar}>
                    <SideBar setOpen={SetSidebar} />
                </ModalComponent>
            </div>
        </nav>
    );
};
export default Navbar;  