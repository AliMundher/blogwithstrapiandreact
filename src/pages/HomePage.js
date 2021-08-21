import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function HomePage() {
    const { data, error, loading } = useFetch('http://localhost:1337/blogs');

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error</h2>
    return (
        <div className="container mt-5 ">
            <h1 className="text-center">List of Blogs</h1>
            {
                data.map(item => <div key={item.id}>
                    <div className="row justify-content-center ">
                        <div className="col-md-8">
                            <div className="card mb-3 my_card">
                                <div className="card-body">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-8">
                                            <h4 className="card-title">{item.title}</h4>
                                            <h4 className="rating">{item.rating}</h4>
                                            <p >{item.body.slice(0, 300)}...</p>
                                        </div>
                                        <div className="col-md-4 d-none d-lg-block">
                                            <img src={`http://localhost:1337${item.image.formats.small.url}`}
                                                alt={item.title} className="img-fluid align-middle" />
                                        </div>
                                    </div>

                                    <Link to={`/details/${item.id}`}
                                        className="btn btn-outline-primary my-3">Read More</Link>

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

