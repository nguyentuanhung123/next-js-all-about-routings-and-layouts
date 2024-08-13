import Link from 'next/link';

const Product = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div className='flex flex-col gap-4'>
            <div className='text-2xl'>Product: {id}</div>
            <Link href={`/5productss/${id}/comments`}>comments</Link>
        </div>
    )
}

export default Product;