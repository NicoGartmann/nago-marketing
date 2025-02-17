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
            <h2>Über Mich</h2>
            <p>Ich gehe nun seit mittlerweile 4 Jahren meiner Leidenschaft nach:</p>
            <p>Professionelles Marketing</p>

            <Card>
                <CardContent className="flex justify-center m-4">
                    <div className="">
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

        </div>
    )
}