import './Navbar.css';

function Navbar({pages, handlePage}) {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container-fluid">
                <a 
                    className="navbar-brand" 
                    href="#home"
                    onClick={() => handlePage('Home')}
                >
                    <svg svg="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                </a>
                <div className="name-badge">
                    Hayk <br/>Ter-Markosyan
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {pages.map(page => {
                            return (
                                <li 
                                    className="nav-item" 
                                    key={page.id} 
                                    onClick={() => handlePage(page.name)}
                                >
                                    <a id={page.name} className={`nav-link ${page.isActive}`} aria-current="page" href={page.href}>{page.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;