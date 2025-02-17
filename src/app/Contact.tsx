export default function Contact({
    id
}: {
    id: string
}) {
    return (
        <div 
            id={id}
            className="flex flex-col gap-8 row-start-2 items-center sm:items-start" 
        >
            <h2 className="text-center text-2xl font-bold">Schreibe mir eine Nachricht</h2>
        </div>
    )
}