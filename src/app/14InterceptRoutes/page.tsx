import Link from 'next/link'
import React from 'react'

const InterceptRoutes = () => {
    return (
        <div className='flex flex-col gap-4'>
            InterceptRoutes Routes page
            <Link href="/14InterceptRoutes/login" className='text-blue-500'>
                Login
            </Link>
        </div>
    )
}

export default InterceptRoutes;