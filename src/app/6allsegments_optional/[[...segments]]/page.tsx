/**
 * http://localhost:3000/6allsegments_optional/124/153
 * -> All Segments: 124/153
 */

const AllSegments = ({ params }: { params: { segments: string[] } }) => {
    const { segments } = params;
    return (
        <div className='flex gap-8'>
            All Segments: {segments?.join('/')}
        </div>
    )
}

export default AllSegments