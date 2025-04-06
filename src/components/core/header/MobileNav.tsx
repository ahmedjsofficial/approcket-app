import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavDataProps } from "@/types/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import LinkComponent from "../LinkComponent";
import Image from "next/image";

interface MobileNavProps {
  data: NavDataProps;
}

export function MobileNav({ data }: MobileNavProps) {
  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <Menu className="h-10 w-10" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="sm:max-w-none w-full">
          <nav className="grid items-center px-4 md:px-8 lg:px-12 gap-5 mt-12">
            <Link href="/" target="_blank" className="inline-block">
              <Image
                src={data.logo.url}
                alt="AppRocket Logo"
                width={180}
                height={50}
                className="h-auto w-auto"
              />
            </Link>
            <div className="grid items-center gap-5 mt-12">
              {data.nav_links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="text-lg font-medium hover:text-primary transition-colors ml-3"
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex items-center mt-5">
              <LinkComponent
                link={data.call_to_action}
                sx="text-center px-7 py-2.5"
              />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
