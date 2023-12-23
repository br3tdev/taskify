"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "../ui/popover";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";

import { FormInput } from "./form-input";
import FormSubmit from "./form-submit";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";
import FormPicker from "./form-picker";
import { ElementRef, useRef } from "react";
import { useRouter } from "next/navigation";

export interface IFormPopoverProps {
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "center" | "start" | "end";
  sideOffset?: number;
}

export default function FormPopover({
  children,
  side,
  align,
  sideOffset = 0,
}: IFormPopoverProps) {
  const router = useRouter();
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      toast.success("Board created");
      closeRef.current?.click();
      router.push(`/board/${data.id}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;

    execute({ title, image });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent align={align} side={side} sideOffset={sideOffset}>
        <div className="pb-4 text-center text-sm font-medium text-neutral-600">
          Create board
        </div>
        <PopoverClose ref={closeRef}>
          <Button
            className="absolute right-2 top-2 h-auto w-auto p-2 text-neutral-600"
            variant={"ghost"}
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <FormPicker id="image" errors={fieldErrors} />
            <FormInput
              id="title"
              label="Board title"
              type="text"
              errors={fieldErrors}
            />
          </div>
          <FormSubmit className="w-full">Create</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
}
