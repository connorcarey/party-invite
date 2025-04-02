export default function CardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-[300px] sm:h-[200px] w-[300px] sm:w-[200px] rounded-xl shadow-md transform ease-in-out duration-300 hover:scale-101">
            {children}
        </div>
    );
}