import Link from 'next/link'
import React from 'react'

const InterceptRoutes = () => {
    return (
        <div className='flex flex-col gap-4'>
            Intercept Routes page
            <Link href="/1home" className='text-blue-500'> 
                Home route
            </Link>
            <Link href="/15Interceptlevelroute/onesteptrigger" className='text-blue-500'>
                Move to 1 level up triggle link
            </Link>
        </div>
    )
}

export default InterceptRoutes;