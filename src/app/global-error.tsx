"use client"

/**
 * Hàm reset giúp chúng ta re-render lại ở chính page đang hiện lỗi
 * Không bắt buộc phải bọc trong thẻ html hay thẻ div chỉ cần có use-client trên đầu là được
 */

export default function GlobalError({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    )
}