import Link from "next/link";

export default function ModalLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="border-2 border-gray-500 rounded-lg p-8 text-center">
            <div>{children}</div>
            <div className="mt-7 flex justify-center gap-8">
                <Link href="/13paralleldefaults/first">First</Link>
                <Link href="/13paralleldefaults/second">Second</Link>
            </div>
        </div>
    );
}