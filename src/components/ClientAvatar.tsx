import Avatar from "@mui/material/Avatar"
import { AdminOnlyButtons, ShowOnLogin, ShowOnLogout } from "./DynamicLinks"
import Menu from "@mui/material/Menu"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { useState } from "react"

const ClientAvatar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const loggedInClient = [
        { title: 'Profile' },
        { title: 'Logout' },
    ]
    const noLoggedInClient = [
        { title: 'Register' },
        { title: 'Login' },
    ]

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
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ minWidth: 20, paddingX: 0, color: 'black' }}
                >
                    <Avatar alt="Hamed Allahyari" className='shadow' src="#" sx={{ width: 30, height: 30, bgcolor: '#000' }} />
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
                    {
                        loggedInClient.map((item, i) => (
                            <MenuItem key={i} sx={{ fontWeight: 'bold', fontFamily: 'Nunito', fontSize: '13px', backgroundColor: '#ddd6fe', borderBottom: '1px silver solid' }} onClick={handleClose}>
                                {item.title}
                            </MenuItem>
                        ))
                    }
                    <AdminOnlyButtons>
                        <MenuItem sx={{ fontWeight: 'bold', fontFamily: 'Nunito', fontSize: '13px', backgroundColor: '#ddd6fe', borderBottom: '1px silver solid' }} onClick={handleClose}>
                            Admin
                        </MenuItem>
                    </AdminOnlyButtons>

                </Menu>
            </ShowOnLogin>

            <ShowOnLogout>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ minWidth: 20, paddingX: 0, color: 'black' }}
                >
                    <Avatar alt="" className='shadow' src="" sx={{ width: 30, height: 30, bgcolor: '#000' }} />
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
                                minWidth: 200
                            }
                        },
                    }}
                >
                    {
                        noLoggedInClient.map((item, i) => (
                            <MenuItem key={i} sx={{ fontWeight: 'bold', fontSize: '13px', fontFamily: 'Nunito', backgroundColor: '#ddd6fe', borderBottom: '1px silver solid' }} onClick={handleClose}>{item.title}</MenuItem>
                        ))
                    }
                </Menu>
            </ShowOnLogout>
        </>
    )
}

export default ClientAvatar