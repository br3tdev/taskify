import { Separator } from "@/components/ui/separator";
import Info from "./_components/info";
import BoardList from "./_components/board-list";

export interface IOrganizationIdPageProps {}

export default async function OrganizationIdPage(
  props: IOrganizationIdPageProps,
) {
  return (
    <div className="mb-20 w-full">
      <Info />
      <Separator className="my-4" />

      <div className="px-2 md:px-4">
        <BoardList />
      </div>
    </div>
  );
}
