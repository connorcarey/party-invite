export default function CardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-[200px] w-[200px] rounded-xl bg-neutral-200">
            {children}
        </div>
    );
}