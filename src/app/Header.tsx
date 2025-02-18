import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 p-4">
        <nav className="flex justify-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/nago-marketing-logo.svg" // Replace with your actual logo path
              alt="Company Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <Link href="#services" scroll={true} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Services</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#aboutme" scroll={true} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Über Mich</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#book" scroll={true} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Gespräch vereinbaren</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" scroll={true} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Nachricht senden</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
    </header>
  )
}

