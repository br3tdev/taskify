import { Separator } from "@/components/ui/separator";
import Info from "./_components/info";
import BoardList from "./_components/board-list";
import { Suspense } from "react";

export interface IOrganizationIdPageProps {}

export default async function OrganizationIdPage(
  props: IOrganizationIdPageProps,
) {
  return (
    <div className="mb-20 w-full">
      <Info />
      <Separator className="my-4" />

      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
}
