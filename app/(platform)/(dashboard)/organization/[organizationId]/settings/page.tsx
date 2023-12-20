import { OrganizationProfile } from "@clerk/nextjs";

export interface ISettingsPageProps {}

export default function SettingsPage(props: ISettingsPageProps) {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              border: "1px solid #E5E5E5",
              boxShadow: "none",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
}
