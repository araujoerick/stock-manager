import { cn } from "@/app/_lib/utils";
import { ReactNode } from "react";

export const SummaryCardTitle = ({ children }: { children: ReactNode }) => {
  return <p className="text-sm font-medium text-slate-500">{children}</p>;
};

export const SummaryCardValue = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-[clamp(1.125rem,2.4vw,1.5rem)] font-semibold text-slate-900">
      {children}
    </p>
  );
};

export const SummaryCardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-max rounded-xl bg-primary/5 p-3 text-primary">
      {children}
    </div>
  );
};
export const SummaryCardContent = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export const SummaryCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 rounded-xl bg-white p-6",
        className,
      )}
    >
      {children}
    </div>
  );
};
