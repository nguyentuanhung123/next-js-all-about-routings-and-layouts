"use client";

/**
 * Nếu component nào đang throw ra 1 error -> Lỗi
 * Chạy vào file bắt lỗi gần nhất -> Trong trường hợp này là file error.tsx cùng cấp
 * Nó sẽ bắt lỗi ở file bắt lỗi gần nhất, tức là nếu trong thư mục khác cùng cấp có file bắt lỗi thì nó sẽ chạy vào file đó
 * Trong trường hợp các thư mục khác cùng cấp không có file bắt lỗi thì file global-error.tsx sẽ được thực thi
 * 
 * Không bắt buộc phải bọc trong thẻ html hay thẻ div chỉ cần có use-client trên đầu là được
 * 
 */

const ErrorComponent = () => {
    if(Math.floor(Math.random() * 3) == 1) {
        throw new Error("Random Number Error")
    }
    return (
        <div>No Error found!</div>
    )
}

export default ErrorComponent