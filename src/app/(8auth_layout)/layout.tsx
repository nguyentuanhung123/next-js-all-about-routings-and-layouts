/**
 * http://localhost:3000/(8auth_layout) -> Không phải tuyến đường -> Lỗi
 * Các thư mục con bên trong sẽ trở thành 1 phần của URL bao gồm các thư mục con của nó
 * 
 * Bắt buộc phải tạo 1 file layout.tsx bên trong thư mục có dấu () như (8auth_layout)
 * Chạy: 
 * http://localhost:3000/login
 * http://localhost:3000/register
 * 
 */
export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-col gap-8">
        <p>Login OR Register</p>
        <input  
            className="py-2 text-sm px-4 border border-gray-500 text-left bg-neutral-200"
            type='text'
            placeholder="Random text for testing"
        />
        {children}
      </div>
    );
}