import { notFound } from "next/navigation";

import React from 'react'

const Nested = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    // console.log("not found");
    if(parseInt(id) > 100) {
        notFound();
    }
    return (
        <div className="text-2xl">Product: {id}</div>
    )
}

export default Nested