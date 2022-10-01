import React from 'react'
import NavbarLink from './NavbarLink'
import NavbarUser from './NavbarUser'

export default function Navbar(props) {
    return (
        <nav>
            <NavbarLink>Dashboard</NavbarLink> |
            <NavbarLink>Product</NavbarLink> |
            <NavbarLink>
                <NavbarUser />
            </NavbarLink>
        </nav>
    )
}
