import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


function Header() {

    const { data, error, loading } = useFetch('http://localhost:1337/blogs');

    console.log(data)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand">Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            data && data.map(item => <React.Fragment key={item.id}>
                                {
                                    item.categories.filter((val, id, array) => array.indexOf(val) === id).map(c => <React.Fragment
                                        key={c.id}>
                                        <li className="nav-item">
                                            <Link to={`/category/${c.id}`}
                                                className="nav-link active">
                                                {
                                                    c.name
                                                }
                                            </Link>
                                        </li>
                                    </React.Fragment>)

                                }
                            </React.Fragment>)
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header;


