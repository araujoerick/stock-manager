import { Skeleton } from "@/app/_components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex h-40 flex-col space-y-3 rounded-xl bg-white p-6">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-8 w-36" />
    </div>
  );
};

export default SkeletonCard;
