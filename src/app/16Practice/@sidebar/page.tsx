import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className="border-2 border-gray-500 rounded-lg p-8 text-center">
            <div>My Sidebar</div>
            <div className="mt-7 flex justify-center gap-8">
                <Link href="/16Practice/third">Third</Link>
                <Link href="/16Practice/fourth">Fourth</Link>
            </div>
        </div>
    )
}

export default Sidebar