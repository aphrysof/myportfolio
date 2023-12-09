
export default function Card ({children}:{children: React.ReactNode}) {
    return (
        <div className="md:font-body w-[320px] bg-white rounded-2xl">
            {children}
        </div>
    )
}