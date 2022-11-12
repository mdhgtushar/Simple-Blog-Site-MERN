import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
    const param = useParams();
    return (
        <div className="col-lg-8">
            <br />
            <h4 className="text-muted card card-body">Category: {param.name}</h4>
            <br />
        </div>
    )
}

export default Category