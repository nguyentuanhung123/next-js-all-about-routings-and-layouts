import React from 'react'

const Nested = ({ params }: { params: { id: string } }) => {
    
    const { id } = params;
    return (
        <div className='text-2xl'>Product: {id}</div>
    )
}

export default Nested;