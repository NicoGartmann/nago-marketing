import Image from "next/image";
import { PhoneIcon, MailIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center gap-8 py-8">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-40">
          <div className="flex flex-col items-center">
            <p className="text-center font-semibold">Kontakt:</p>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              <p>+49 176 376 952043</p>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="w-5 h-5" />
              <p>geschaeftsfuehrer@nago.de</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/nago-marketing-logo-full.png" alt="Company Logo Full" width={200} height={100} />
          </div>
        </div>
      </footer>
    )
}