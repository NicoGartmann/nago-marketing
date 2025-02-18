import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Aboutme({
    id
}: {
    id: string
}) {
    return (
        <div 
            id={id}
            className="flex flex-col gap-8 row-start-2 items-center sm:items-center"
        >
            <h2 className="text-center text-2xl font-bold">Über Mich</h2>
            <p>Ich gehe nun seit mittlerweile 4 Jahren meiner Leidenschaft nach:</p>
            <p>Professionelles Marketing</p>

            <Card>
                <CardContent className="flex justify-center m-4">
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div className="flex pl-2">
                        <Image 
                            src="/platzhalter.png"
                            alt="Nadja Gottschalk"
                            width={200}
                            height={200}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="flex justify-center m-4">
                    <div className="flex pr-2">
                        <Image 
                            src="/platzhalter.png"
                            alt="Nadja Gottschalk"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </CardContent>
            </Card>

            <h2 className="text-center text-2xl font-bold">Mein Werdegang</h2>
            <Card className="w-full">
                <CardContent className="grid grid-cols-2 gap-4 justify-center m-4">
                    <div><p>Trainee Performance Marketing</p></div>
                    <div><p>Muy Dozo Köln, 2020-2021</p></div>
                    <div><p>Performance Marketer</p></div>
                    <div><p>Mooncrab Köln 2021-2020</p></div>
                </CardContent>
            </Card>

            <Card className="w-full">
                <CardContent className="grid grid-cols-2 gap-4 justify-center m-4">
                    <div><p>Trainee Performance Marketing</p></div>
                    <div><p>Muy Dozo Köln, 2020-2021</p></div>
                    <div><p>Performance Marketer</p></div>
                    <div><p>Mooncrab Köln 2021-2020</p></div>
                </CardContent>
            </Card>

            <Card className="w-full">
                <CardContent className="grid grid-cols-2 gap-4 justify-center m-4">
                    <div><h3>Head of Social Media</h3></div>
                    <div><h3>Bootshaus Köln 2022-2025</h3></div>
                    <div><h3>Freelancer</h3></div>
                    <div><h3>Selbstständig seit Februar 2025</h3></div>
                </CardContent>
            </Card>

        </div>
    )
}