import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services({ id }: { id: string }) {
    return (
        <div id={id} className="flex flex-col gap-8">
            <h2 className="text-center text-2xl font-bold">Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center">
                <Card className="flex-1 min-w-[250px] max-w-[300px] flex items-center justify-center text-center">
                    <CardHeader>
                        <CardTitle className="">Marketingberatung</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="flex-1 min-w-[250px] max-w-[300px] flex items-center justify-center text-center">
                    <CardHeader>
                        <CardTitle>Performance</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="flex-1 min-w-[250px] max-w-[300px] flex items-center justify-center text-center">
                    <CardHeader>
                        <CardTitle>Avatar Hacking</CardTitle>
                    </CardHeader>
                </Card>
            </div>

            <div className="text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mt-6">Marketingberatung</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                <h3 className="text-xl font-semibold mt-6">Performance</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                <h3 className="text-xl font-semibold mt-6">Avatar Hacking</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>

            <div className="text-center">
                <p>Du hast ein anderes Anliegen? Buche einfach ein persönliches Gespräch um mehr Informationen zu erhalten</p>
                <Button className="mt-4">
                    Log Gehts
                </Button>
            </div>
        </div>
    )
}
