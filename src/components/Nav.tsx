import { NavLink } from 'react-router'

function Nav() {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/publications">Publications</NavLink>
            <NavLink to="/patents">Patents</NavLink>
        </nav>
    )
}

export default Nav