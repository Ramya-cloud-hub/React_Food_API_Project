import React from 'react'

const Products = ({data}) =>{

    return(
        <div>
                <div className='row'>
                    {data.map(data =>
                        <div className='col-md-4'>
                            <div className='card' style={{"width":"18rem"}}>
                                <img className='card-img-top' src={data.recipe.image} alt="card image" />
                                <div className='card-body'>
                                    <center>
                                        <h5 className='card-title'>{data.recipe.label}</h5>
                                        <p className='card-text'>Total amount of calories:{Math.round(data.recipe.calories)}</p>
                                        <a href="#" className='btn btn-primary'>Buy</a>
                                    </center>
                                </div>
                            </div>
                        </div>
                    )};
                </div>
        </div>

    )
}

export default Products;