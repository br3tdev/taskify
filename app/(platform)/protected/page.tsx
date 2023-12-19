import * as React from "react";

export interface IProtectedPageProps {}

export default function ProtectedPage(props: IProtectedPageProps) {
  return (
    <div>
      <h1>This page is Protected!</h1>
    </div>
  );
}
