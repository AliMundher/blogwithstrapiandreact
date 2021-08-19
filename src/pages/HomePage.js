import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function HomePage() {
    const { data, error, loading } = useFetch('http://localhost:1337/blogs');

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error</h2>
    return (
        <div className="container mt-5 ">
            <h1 className="text-center">List of Blogs</h1>
            {
                data.map(item => <div key={item.id}>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card mb-3 my_card">
                                <div className="card-body">
                                    <h4 className="card-title">{item.title}</h4>
                                    <h4 className="rating">{item.rating}</h4>
                                    <p className="card-text mt-3">{item.body.slice(0, 300)}...</p>
                                    <Link to={`/details/${item.id}`}
                                        className="btn btn-outline-primary">Read More</Link>
                                    <hr />
                                    {
                                        item.categories.map(n => <span key={n.id}>
                                            <Link to={`/category/${n.id}`}
                                                className="text-capitalize text-decoration-none">{n.name}</Link>
                                            &nbsp;&nbsp;
                                        </span>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}


export default HomePage;

