import Link from "next/link"

const Products = () => {
    return (
        <div className='flex gap-8'>
            <Link href="/4products/1">1</Link>
            <Link href="/4products/2">2</Link>
            <Link href="/4products/3">3</Link>
            <Link href="/4products/4">4</Link>
            <Link href="/4products/5">5</Link>
            <Link href="/4products/6">6</Link>
        </div>
    )
}

export default Products