import { Skeleton } from "@/app/_components/ui/skeleton";

const SkeletonChart = () => {
  return (
    <div className="flex h-full flex-col space-y-3 rounded-xl bg-white p-6">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-3 w-36" />
      <div className="flex h-full items-end justify-center gap-2.5">
        <Skeleton className="h-60 w-10" />
        <Skeleton className="h-12 w-10" />
        <Skeleton className="h-48 w-10" />
        <Skeleton className="h-72 w-10" />
        <Skeleton className="h-5 w-10" />
        <Skeleton className="h-60 w-10" />
        <Skeleton className="h-36 w-10" />
        <Skeleton className="h-12 w-10" />
      </div>
      <div className="flex items-center justify-center gap-2.5">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-10" />
      </div>
    </div>
  );
};

export default SkeletonChart;
