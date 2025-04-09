"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

interface SidebarButtonProps {
  children: React.ReactNode;
  href: string;
  icon: React.ReactNode;
}

const SidebarButton = ({ children, href, icon }: SidebarButtonProps) => {
  const pathname = usePathname();

  return (
    <Button
      variant={pathname === href ? "default" : "ghost"}
      className="justify-start"
      asChild
    >
      <Link
        href={href}
        className="grid w-full items-center justify-center gap-2 p-2 text-sm font-medium text-primary md:grid-cols-[auto,1fr]"
      >
        {icon}
        <p className="hidden md:inline-block">{children}</p>
      </Link>
    </Button>
  );
};

export default SidebarButton;
