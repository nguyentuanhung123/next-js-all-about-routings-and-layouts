export default function ContentLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="border-2 border-gray-500 rounded-lg p-8 text-center">
            <div>{children}</div>
        </div>
    );
}