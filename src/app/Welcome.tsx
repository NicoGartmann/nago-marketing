import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Welcome() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Willkommen bei NAGO Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Erhalte eine hochqualitative Marketingberatung um DEIN Unternehmen auf das nächste
                    Level zu heben! Professionell und auf dich zugeschnitten.</p>
                    
                    <p>Erfahre mehr über unseren Service oder Vereinbare ein unverbindliches Erstgespräch!</p>
                </CardContent>
                <CardFooter>
                    <Button>Vereinbare ein Gespräch</Button>
                    <Button>Schreibe eine Nachricht</Button>
                </CardFooter>
            </Card>  
        </div>
    )
}