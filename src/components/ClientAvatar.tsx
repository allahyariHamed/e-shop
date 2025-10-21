import Avatar from "@mui/material/Avatar"
import { AdminOnlyButtons, ShowOnLogin, ShowOnLogout } from "./DynamicLinks"
import Menu from "@mui/material/Menu"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { FC, useState } from "react"
import { logOut } from "../utils/apiServices"
import Link from "next/link"
import { useSelector } from "react-redux"
import { selectUserName } from "../utils/redux/authSlice"
import { FiLink2 } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TbLogin2, TbLogout2 } from "react-icons/tb";
import { RiUserAddLine } from "react-icons/ri";
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"

const ClientAvatar: FC = () => {
    const params = useParams();
    const { locale } = params
    const t = useTranslations('navbar')
    const userName = useSelector(selectUserName)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const style = { fontWeight: 'bold', fontFamily: 'Nunito', "&:hover": { backgroundColor: '#222' }, fontSize: { xs: '13px', sm: '17px' }, backgroundColor: '#000', paddingY: { sm: 2 }, color: '#fff' }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ShowOnLogin>
                <Button
                    id="LoginButton"
                    aria-controls={open ? 'ShowOnLogin' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ paddingX: 0 }}
                >
                    <Avatar alt={userName} className='shadow' src="#" sx={{ width: { xs: 30, sm: 35 }, height: { xs: 30, sm: 35 }, bgcolor: '#000' }} />
                </Button>

                <Menu
                    id="ShowOnLogin"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'LoginButton',
                            sx: {
                                paddingY: 0,
                                width: { xs: 200, sm: 250 },
                            }
                        },
                    }}
                >
                    {/* <MenuItem sx={{ fontWeight: 'bold', fontFamily: 'Nunito', fontSize: { xs: '13px', sm: '17px' }, backgroundColor: '#000', paddingY: { sm: 2 }, color: '#fff' }}
                        onClick={handleClose}>
                        <div className="flex items-center gap-3">
                            <FiUser className="text-2xl" />
                            <span>
                                Profile
                            </span>
                        </div>
                    </MenuItem> */}


                    <Link href={`/${locale}/contactUs`}>
                        <MenuItem sx={style}>
                            <div className="flex items-center gap-3">
                                <FiLink2 className="text-2xl" />
                                <span>
                                    {t('contactUs')}
                                </span>
                            </div>
                        </MenuItem>
                    </Link>

                    <AdminOnlyButtons>
                        <Link href={`/${locale}/admin/home`}>
                            <MenuItem sx={style} onClick={handleClose}>
                                <div className="flex items-center gap-3">
                                    <MdOutlineAdminPanelSettings className="text-2xl" />
                                    <span>
                                        {t('admin')}
                                    </span>
                                </div>
                            </MenuItem>
                        </Link>
                    </AdminOnlyButtons>

                    <MenuItem sx={style}
                        onClick={() => { logOut(); handleClose() }}>
                        <div className="flex items-center gap-3">
                            <TbLogout2 className="text-2xl" />
                            <span>
                                {t('logOut')}
                            </span>
                        </div>
                    </MenuItem>
                </Menu>
            </ShowOnLogin>

            <ShowOnLogout>
                <Button
                    id="LogoutButton"
                    aria-controls={open ? 'ShowOnLogout' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ paddingX: 0 }}
                >
                    <Avatar alt="#" className='shadow' src="#" sx={{ width: { xs: 30, sm: 35 }, height: { xs: 30, sm: 35 }, bgcolor: '#000' }} />
                </Button>

                <Menu
                    id="ShowOnLogout"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'LogoutButton',
                            sx: {
                                paddingY: 0,
                                width: { xs: 200, sm: 250 },
                            }
                        },
                    }}
                >
                    <Link href={`/${locale}/register`}>
                        <MenuItem sx={style} onClick={handleClose}>
                            <div className="flex items-center gap-3">
                                <RiUserAddLine className="text-2xl" />
                                <span>
                                    {t('register')}
                                </span>
                            </div>
                        </MenuItem>
                    </Link>

                    <Link href={`/${locale}/login`}>
                        <MenuItem sx={style} onClick={handleClose}>
                            <div className="flex items-center gap-3">
                                <TbLogin2 className="text-2xl" />
                                <span>
                                    {t('login')}
                                </span>
                            </div>
                        </MenuItem>
                    </Link>

                    <Link href={`/${locale}/contactUs`}>
                        <MenuItem sx={style}>
                            <div className="flex items-center gap-3">
                                <FiLink2 className="text-2xl" />
                                <span>
                                    {t('contactUs')}
                                </span>
                            </div>
                        </MenuItem>
                    </Link>

                </Menu>
            </ShowOnLogout >
        </>
    )
}

export default ClientAvatar