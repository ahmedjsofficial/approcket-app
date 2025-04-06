import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavDataProps } from "@/types/types";
import LinkComponent from "../LinkComponent";

interface DesktopNavProps {
  data: NavDataProps;
}

export function DesktopNav({ data }: DesktopNavProps) {
  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-6">
      <NavigationMenu>
        <NavigationMenuList>
          {data.nav_links.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Link href={link.url} legacyBehavior passHref>
                <NavigationMenuLink className={"hover:text-[#f04e30] text-black  hover:bg-transparent font-semibold"}>
                  {link.text}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <LinkComponent link={data.call_to_action} />
    </div>
  );
}
