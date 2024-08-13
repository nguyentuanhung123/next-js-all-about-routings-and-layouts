import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-blue-900 flex rounded-b-3xl justify-between p-4">
            <div className="flex gap-4 text-sm">
                <Link href="/">Landing</Link>
                <Link href="/1home">Home</Link>
                <Link href="/2about">About</Link>
                <Link href="/3parent/nested">nested</Link>
                <Link href="/4products">dynamic</Link>
                <Link href="/5productss">dynamic nested</Link>
                <Link href="/6allsegments_optional">all_Segments_optional</Link>
                <Link href="/10nestednotfound/101">Nested_notfound</Link>
                <Link href="/11error">Error</Link>
                <Link href="/12parallel">Parallel</Link>
                <Link href="/13paralleldefaults">Parallel_defaults</Link>
                <Link href="/14interceptlevelroute">Intercept_root_route</Link>
            </div>
            <div className="flex gap-4 text-sm">
                <Link href="/chat">Chat</Link>
                <Link href="/blog">Blog</Link>
            </div>
            <div className="flex gap-4 text-sm">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>
        </div>
    )
}

export default Navbar