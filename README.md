This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Sự khác biệt giữa template và layout khi được các page dùng chung
- Template khi ta chuyển trang sẽ bị re-render (dữ liệu nhập từ input ví dụ sẽ bị mất khi chuyển trang)
- Layout khi chuyển trang sẽ không bị re-render (dữ liệu nhập từ input ví dụ sẽ không bị mất khi chuyển trang)

## Folder có tên @ ở trước như @model và folder có tên được đặt trong dấu () nằm trong folder app thì sẽ bị bỏ qua và không được tính là 1 URL nhưng folder bên trong chúng vẫn sẽ được tính là 1 URL

## Parallel Routes : https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
- Parallel Routes (Tuyến song song) cho phép bạn hiển thị đồng thời hoặc có điều kiện một hoặc nhiều trang trong cùng một bố cục. Chúng rất hữu ích cho các phần có tính năng động cao của ứng dụng, chẳng hạn như trang tổng quan và nguồn cấp dữ liệu trên các trang xã hội.

- Ví dụ: xem xét trang tổng quan, bạn có thể sử dụng các tuyến song song để hiển thị đồng thời trang nhóm và trang phân tích:

## Lưu ý ở bài 12, ta có các thẻ Link hướng đến đường dẫn con như bên dưới để chỉ thay đổi tiêu đề trong Sidebar chứ không chuyển đổi sang các trang như những bài trước. 

- http://localhost:3000/12parallel/first
- http://localhost:3000/12parallel/first

- Thì khi refresh nó sẽ chạy file not-found.tsx trong thư mục gốc
- Để giải quyết điều này, hãy xem bài 13


## Bài 13, ở Sidebar ta cũng có các thẻ link như bài 12 ở trên, sự khác biệt chính là để đảm bảo khi refesh màn hình vẫn ở trang đó, ta phải thêm file default.tsx trong các folder cùng cấp và cha của nó là @model và 13paralleldefaults để có thể có hiệu quả như mong muốn

## default.js
- Bạn có thể xác định tệp default.js để hiển thị dưới dạng dự phòng cho các vị trí chưa khớp trong lần tải đầu tiên hoặc tải lại toàn bộ trang.

## Sau khi tạo các folder con như @model và @sidebar và bên trong chúng có page.tsx thì chúng được dùng giống như các component dùng chung như Navbar. Nếu bên trong chúng tồn tại folder như first hay second chúng sẽ được xem như URL

## Ở layout của sidebar ta có

```tsx
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
```

- Khi bấm vào First, nó sẽ chuyển ta đến http://localhost:3000/13paralleldefault/first trong trường hợp ta ghi sai tên thư mục cha thì nó sẽ hiện trang lỗi

## Bài 14: Intercepting Routes : https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes

- Intercepting Routes (Chặn các tuyến đường) cho phép bạn tải một tuyến đường từ một phần khác của ứng dụng trong bố cục hiện tại. Mô hình định tuyến này có thể hữu ích khi bạn muốn hiển thị nội dung của tuyến đường mà không cần người dùng chuyển sang ngữ cảnh khác.

- Ví dụ: khi nhấp vào photo trong nguồn cấp dữ liệu, bạn có thể hiển thị ảnh theo phương thức, phủ lên nguồn cấp dữ liệu. Trong trường hợp này, Next.js chặn tuyến /photo/123, che dấu URL và phủ nó lên /feed.

- Tuy nhiên, khi điều hướng đến ảnh bằng cách nhấp vào URL có thể chia sẻ hoặc bằng cách làm mới trang, toàn bộ trang ảnh sẽ hiển thị thay vì phương thức. Không xảy ra tình trạng chặn tuyến đường.

## Quy ước
- Các tuyến đường chặn có thể được xác định bằng quy ước (..), tương tự như quy ước đường dẫn tương đối ../ nhưng dành cho các đoạn.

- Bạn có thể sử dụng:

- (.) để khớp các phân đoạn ở cùng cấp độ
- (..) để khớp các phân đoạn một cấp ở trên
- (..)(..) để khớp với các phân đoạn có hai cấp độ trên
- (...) để khớp các phân đoạn từ thư mục ứng dụng gốc

- Ví dụ: bạn có thể chặn photo segment từ trong feed segment bằng cách tạo thư mục ảnh (..).

## Ví dụ
- Modal
- Chặn các tuyến đường có thể được sử dụng cùng với các tuyến đường song song để tạo các phương thức. Điều này cho phép bạn giải quyết các thách thức chung khi xây dựng các phương thức, chẳng hạn như:

- Làm cho nội dung phương thức có thể chia sẻ được thông qua URL.
- Giữ nguyên bối cảnh khi trang được làm mới, thay vì đóng phương thức.
- Đóng phương thức điều hướng lùi thay vì quay lại tuyến đường trước đó.
- Mở lại phương thức điều hướng chuyển tiếp.
- Hãy xem xét mẫu giao diện người dùng sau, trong đó người dùng có thể mở chế độ ảnh từ thư viện bằng cách sử dụng điều hướng phía máy khách hoặc điều hướng trực tiếp đến trang ảnh từ URL có thể chia sẻ:

## Bài học rút ra ở bài 14:

- Khi ta có thẻ Link hướng tới nested route login

```jsx
const InterceptRoutes = () => {
    return (
        <div className='flex flex-col gap-4'>
            InterceptRoutes Routes page
            <Link href="/14InterceptRoutes/login" className='text-blue-500'>
                Login
            </Link>
        </div>
    )
}

export default InterceptRoutes;
```

## Thì nó sẽ hướng ta đến folder (.)login mà không phải folder login như thông thường (Có thể nói là do dấu (.) có độ ưu tiên cao hơn) nhưng khi ta refesh thì folder login sẽ được chạy

## Ở bài 14, ta đã tạo folder (.)login để thể hiện nó cùng cấp độ với folder login và sẽ chạy trước so với login và chỉ khi refresh mới chạy vào folder login. 

## Ở bài 15, ta đã tạo folder (...)1Home tức là nó sẽ đi đến thư mục gốc rồi đến thư mục cụ thể

## Ở bài 15, ta đã tạo folder (..)onestepintercept tức là nó sẽ chạy trước thư mục cùng tên và hơn nó 1 cấp độ
```tsx
<Link href="/1home" className='text-blue-500'> 
    Home route
</Link>
```

