'use client'
import { useSelector } from 'react-redux'
import { selectEmail, selectLoggedIn } from '../utils/redux/authSlice'
import { DynamicRoutes } from '../types/types.'
import Link from 'next/link'

export const ShowOnLogin = ({ children }: DynamicRoutes) => {

    const isLoggedIn = useSelector(selectLoggedIn)
    if (isLoggedIn) return children
}
export const ShowOnLogout = ({ children }: DynamicRoutes) => {

    const isLoggedIn = useSelector(selectLoggedIn)
    if (!isLoggedIn) return children
}
export const AdminOnlyRoutes = ({ children }: DynamicRoutes) => {

    // const adminEmail = useSelector(selectEmail)
    const adminEmail = 'allahyarihamed53@gmail.com'
    if (adminEmail === 'allahyarihamed53@gmail.com') return children
    return (
        <div className='p-2'>
            <div className='bg-violet-200 px-3 py-2 rounded-md shadow'>
                <div className='text-lg font-bold'>
                    Permission Denied!
                </div>
                <div className='py-2 text-sm'>
                    This page can only be viewed by an admin!
                </div>
                <Link href='/'>
                    <button type='button' className='shadow rounded bg-white text-xs font-bold py-1 px-2'>
                        Back to home
                    </button>
                </Link>
            </div>
        </div>
    )
}
export const AdminOnlyButtons = ({ children }: DynamicRoutes) => {

    const adminEmail = useSelector(selectEmail)
    if (adminEmail === 'allahyarihamed53@gmail.com') return children
}