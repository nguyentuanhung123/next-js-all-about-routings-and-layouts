"use client"

/**
 * Hàm reset giúp chúng ta re-render lại ở chính page đang hiện lỗi
 * Không bắt buộc phải bọc trong thẻ html hay thẻ div chỉ cần có use-client trên đầu là được
 */

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div>
            <h2>Somthing went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()} className="bg-blue-600 px-4">
                Ty again
            </button>
        </div>
    )
}