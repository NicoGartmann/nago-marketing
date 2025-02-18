'use client'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuLabel, 
    DropdownMenuTrigger, 
    DropdownMenuSeparator, 
    DropdownMenuCheckboxItem 
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import React from "react"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function Book({id}: {id: string}) {
    const [date, setDate] = React.useState<Date>()
    const [selectedServices, setSelectedServices] = React.useState<string[]>([]);

    const toggleService = (service: string, isChecked: boolean) => {
        setSelectedServices((prev: any[]) =>
            isChecked ? [...prev, service] : prev.filter((item: string) => item !== service)
        );
    };
    
    return (
        <div id={id} className="w-full flex flex-col gap-8">
            <hr/>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Gespräch vereinbaren</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 justify-center m-4">
                    <div><p>Name, Firmenname</p></div>
                    <div><Input/></div>
                    <div><p>Gewünschte Services</p></div>
                    <div className="w-full">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full">Auswählen</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Gewünschte Services</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem
                                    checked={selectedServices.includes("Marketingberatung")}
                                    onCheckedChange={(checked) => toggleService("Marketingberatung", checked)}
                                >
                                    Marketingberatung
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={selectedServices.includes("Avatar Hacking")}
                                    onCheckedChange={(checked) => toggleService("Avatar Hacking", checked)}
                                >
                                    Avatar Hacking
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={selectedServices.includes("Performance")}
                                    onCheckedChange={(checked) => toggleService("Performance", checked)}
                                >
                                    Performance
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div>
                        <p className="text-gray-500">Ausgewählte Services:</p>
                    </div>
                    <div>
                        {selectedServices.length > 0 ? (
                            <p className="text-gray-500">{selectedServices.join(", ")}</p>
                        ) : (
                            <p className="text-gray-500">Keine Auswahl getroffen</p>
                        )}
                    </div>
                    <div><p>Wunschtermin</p></div>
                    <div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={"outline"} className="w-full">
                                <CalendarIcon />
                                {date ? format(date, "dd.MM.yyyy") : <span>Auswählen</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            />
                        </PopoverContent>
                        </Popover>
                    </div>
                    <div><p>Weitere Anmerkungen</p></div>
                    <div><Textarea maxLength={250} rows={5}/></div>
                </CardContent>
                <CardFooter className="w-full flex justify-center gap-4">
                    <Button className="w-1/3">Abbrechen</Button>
                    <Button className="w-1/3">Gespräch vereinbaren</Button>
                </CardFooter>
            </Card>  
        </div> 
    )
}