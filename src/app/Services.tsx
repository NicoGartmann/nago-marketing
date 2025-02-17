export default function Services({
    id
}: {
    id: string
}) {
    return (
        <div 
            id={id}
            className="flex flex-col gap-8 row-start-2" 
        >
            <h2 className="flex justify-center">Services</h2>

            <h3>Marketingberatung</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
        
            <h3>Performance</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>

            <h3>Avatar Hacking</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>

            <h3>Marketingberatung</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
        
        </div>
    )
}
