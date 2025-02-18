export default function Contact({
    id
}: {
    id: string
}) {
    return (
        <div id={id} className="w-full flex flex-col gap-8">
            <hr/>
            <h2 className="text-center text-2xl font-bold">Schreibe mir eine Nachricht</h2>
        </div>
    )
}