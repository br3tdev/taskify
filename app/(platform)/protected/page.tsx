"use client";

import { UserButton } from "@clerk/nextjs";

export interface IProtectedPageProps {}

export default async function ProtectedPage(props: IProtectedPageProps) {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
