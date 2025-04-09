import { Skeleton } from "@/app/_components/ui/skeleton";

const SkeletonChart = () => {
  return (
    <div className="flex h-full flex-col space-y-3 rounded-xl bg-white p-6">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-3 w-36" />
      <div className="flex h-full items-end justify-center gap-2.5">
        <Skeleton className="h-40 w-7 md:h-60 md:w-10" />
        <Skeleton className="h-12 w-7 md:w-10" />
        <Skeleton className="h-24 w-7 md:h-48 md:w-10" />
        <Skeleton className="h-36 w-7 md:h-72 md:w-10" />
        <Skeleton className="h-5 w-7 md:w-10" />
        <Skeleton className="h-28 w-7 md:h-60 md:w-10" />
        <Skeleton className="hidden h-36 w-7 md:inline-block md:w-10" />
        <Skeleton className="hidden h-12 w-7 md:inline-block md:w-10" />
      </div>
      <div className="flex items-center justify-center gap-2.5">
        <Skeleton className="h-4 w-7 md:w-10" />
        <Skeleton className="h-4 w-7 md:w-10" />
        <Skeleton className="h-4 w-7 md:w-10" />
        <Skeleton className="h-4 w-7 md:w-10" />
        <Skeleton className="h-4 w-7 md:w-10" />
        <Skeleton className="h-4 w-7 md:w-10" />
        <Skeleton className="hidden h-4 w-7 md:inline-block md:w-10" />
        <Skeleton className="hidden h-4 w-7 md:inline-block md:w-10" />
      </div>
    </div>
  );
};

export default SkeletonChart;
