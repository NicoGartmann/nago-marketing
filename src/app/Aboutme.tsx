import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Aboutme({
    id
}: {
    id: string
}) {
    return (
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start" id={id}>
            <h2>Über Mich</h2>
            <p>Ich gehe nun seit mittlerweile 4 Jahren meiner Leidenschaft nach:</p>
            <p>Professionelles Marketing</p>

            <Card>
                <CardContent>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div>
                        <Image 
                            src="/platzhalter.png"
                            alt="Picture of Nadja"
                            width={200}
                            height={200}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <div>
                        <Image 
                            src="/platzhalter.png"
                            alt="Picture of Nadja"
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