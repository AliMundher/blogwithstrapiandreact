import React from 'react'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


function HomePage() {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`http://localhost:1337/blogs/${id}`);

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error</h2>

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mb-3 my_card">
                        <div className="card-body">
                            <h4 className="card-title">{data.title}</h4>
                            <img src={`http://localhost:1337${data.image.formats.medium.url}`}
                                alt={data.title} className="img-fluid align-middle my-full-width" />
                            <h4 className="rating">{data.rating}</h4>
                            <ReactMarkdown>{data.body}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomePage;