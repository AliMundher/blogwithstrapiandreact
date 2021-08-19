import React from 'react'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Category() {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`http://localhost:1337/categories/${id}`);

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error</h2>

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-5 my_card">
                        <div className="card-header">
                            <h4 className="card-title text-capitalize">{data.name}</h4>
                        </div>
                        {
                            data.blogs.map(d => <div key={d.id}>
                                <div className="card-body">
                                    <Link to={`/details/${d.id}`}>{d.title}</Link>
                                    <p className="card-text mt-3">{d.body.slice(0, 300)}...</p>
                                </div>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Category;