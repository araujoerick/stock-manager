import { ReactNode } from "react";
import { cn } from "../_lib/utils";

export const HeaderTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-xl font-semibold text-slate-900">{children}</h1>;
};
export const HeaderSubtitle = ({ children }: { children: ReactNode }) => {
  return <span className="text-xs font-semibold text-primary">{children}</span>;
};

export const HeaderLeft = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-2">{children}</div>;
};

export const HeaderRight = ({ children }: { children: ReactNode }) => {
  return <div className="self-end">{children}</div>;
};

const Header = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <header className={cn("flex w-full justify-between", className)}>
      {children}
    </header>
  );
};

export default Header;
