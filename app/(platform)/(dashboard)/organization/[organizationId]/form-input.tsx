"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

export interface IFormInputProps {
  errors?: {
    title?: string[];
  };
}

export default function FormInput({ errors }: IFormInputProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors?.title.map((error) => (
            <p className="text-rose-500">{error}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
