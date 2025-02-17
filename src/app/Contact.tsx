export default function Contact({
    id
}: {
    id: string
}) {
    return (
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start" id={id}>
            <h2>Schreibe mir eine Nachricht</h2>
        </div>
    )
}