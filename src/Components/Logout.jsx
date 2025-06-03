import { Navigate } from 'react-router-dom';

export const Logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('_id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('role')
    return (
        <>
        <Navigate to='/login' />
        </>
    )
}