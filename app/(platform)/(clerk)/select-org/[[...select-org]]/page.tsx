import { OrganizationList } from "@clerk/nextjs";

export interface ICreateOrganizationListProps {}

export default function CreateOrganizationList(
  props: ICreateOrganizationListProps,
) {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl={"/organization/:id"}
      afterSelectOrganizationUrl={"/organization/:id"}
    />
  );
}
