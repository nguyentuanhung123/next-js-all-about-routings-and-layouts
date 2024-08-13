const Comment = ({ params }: { params: { id: string, commentId: string } }) => {
 
    const { id, commentId } = params;

    return (
        <div className="text-2xl">
            Product: {id} & Comment: {commentId}
        </div>
    )
}

export default Comment