import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col relative items-center justify-center mt-24">
            <h1>This page does not exist</h1>
            <Link href={'/'}>Go back to home</Link>
        </div>
    )
}