import Link from 'next/link'
import React from 'react'

const Comments = ({params} : {params: {id: string}}) => {
    const { id } = params;
    return (
        <div className='flex gap-8'>
            Comments for Product {id}:
            <Link href={`/5productss/${id}/comments/1`}>1</Link>
            <Link href={`/5productss/${id}/comments/2`}>2</Link>
        </div>
    )
}

export default Comments