import React from 'react'

const Lang = () => {
    return (
        <div className='header-lang ms-5'>
            <nav className="dropdown">
                <a href="#" className="dropdown-toggle" data-bs-toggle='dropdown' data-bs-auto-close='outside'>English</a>
                <div className="dropdown-menu rounded-0 text-start animate__animated animate__fadeIn">
                    <ul>
                        <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Hindi</a></li>
                        <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Punjabi</a></li>
                        <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Tamil</a></li>
                        <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Telgu</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Lang