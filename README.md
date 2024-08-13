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

## Lưu ý ở bài 12, ta có các thẻ Link hướng đến đường dẫn con như bên dưới để chỉ thay đổi tiêu đề trong Sidebar chứ không chuyển đổi sang các trang như những bài trước. 

- http://localhost:3000/12parallel/first
- http://localhost:3000/12parallel/first

- Thì khi refresh nó sẽ chạy file not-found.tsx trong thư mục gốc
- Để giải quyết điều này, hãy xem bài 13

## Bài 13, ở Sidebar ta cũng có các thẻ link như bài 12 ở trên, sự khác biệt chính là để đảm bảo khi refesh màn hình vẫn ở trang đó, ta phải thêm file default.tsx trong các folder cùng cấp và cha của nó là @model và 13paralleldefaults để có thể có hiệu quả như mong muốn
