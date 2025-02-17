import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Welcome() {
    return (
        <div className="flex justify-center items-center">
            <Card className="text-center max-w-lg">
                <CardHeader>
                    <CardTitle>Willkommen bei NAGO Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Erhalte eine hochqualitative Marketingberatung um DEIN Unternehmen auf das nächste
                    Level zu heben! Professionell und auf dich zugeschnitten.</p>
                    
                    <p className="mt-4">Erfahre mehr über unseren Service oder Vereinbare ein unverbindliches Erstgespräch!</p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4">
                    <Button>Vereinbare ein Gespräch</Button>
                    <Button>Schreibe eine Nachricht</Button>
                </CardFooter>
            </Card>  
        </div>
    )
}