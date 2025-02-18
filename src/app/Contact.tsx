import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact({
    id
}: {
    id: string
}) {
    return (
        <div id={id} className="w-full flex flex-col gap-8">
            <hr/>
            <Card>
                <CardHeader className="text-center text-2xl font-bold">
                    <CardTitle className="text-center text-2xl font-bold">Schreibe mir eine Nachricht</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 justify-center m-4">
                    <div><p>Name, Firmenname</p></div>
                    <div><Input/></div>
                    <div className="col-span-2">
                        <Textarea maxLength={250} rows={15}/>
                    </div>
                </CardContent>
                <CardFooter className="w-full flex justify-center gap-4">
                    <Button className="w-1/3">Abbrechen</Button>
                    <Button className="w-1/3">Nachricht schreiben</Button>
                </CardFooter>
            </Card>
        </div>
    )
}