export default function Book({
    id
}: {
    id: string
}) {
    return (
        <div id={id} className="w-full flex flex-col gap-8">
            <hr />
            <h2 className="text-center text-2xl font-bold">Gespräch vereinbaren</h2>
        </div>
    )
}