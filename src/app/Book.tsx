export default function Book({
    id
}: {
    id: string
}) {
    return (
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start" id={id}>
            <h2>Gespräch vereinbaren</h2>
        </div>
    )
}