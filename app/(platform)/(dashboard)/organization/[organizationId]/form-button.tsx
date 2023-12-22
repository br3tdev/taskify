"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export interface IFormButtonProps {}

export default function FormButton(props: IFormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      Submit
    </Button>
  );
}
