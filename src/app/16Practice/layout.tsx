export default function PracticeLayout({
    children,
    content,
    sidebar,
  }: Readonly<{
    children: React.ReactNode;
    content: React.ReactNode;
    sidebar: React.ReactNode;
  }>) {
    // We can conditionally render the sidebar or content slots as well using practice layout
    return (
        <div className="w-[800px] h-screen flex flex-col gap-8">
            <div>{children}</div>
            <div className="flex gap-4">
                <div className="w-2/5">{sidebar}</div>
                <div className="w-3/5">{content}</div>
            </div>
        </div>
    );
}