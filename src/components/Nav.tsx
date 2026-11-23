import { Link } from 'react-router'

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/patents">Patents</Link>
        </nav>
    )
}

export default Nav