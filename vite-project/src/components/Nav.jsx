import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-light bg-light navbar-custom">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Kayla Engelstad</span>
            
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/AboutMe"
                        className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}>
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Portfolio"
                        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact"
                        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Resume"
                        className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}