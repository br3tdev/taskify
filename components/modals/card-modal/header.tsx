"use client";

import { ElementRef, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { FormInput } from "@/components/form/form-input";
import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Layout } from "lucide-react";
import { useAction } from "@/hooks/use-action";
import { updateCard } from "@/actions/update-card";
import { toast } from "sonner";

export interface IHeaderProps {
  data: CardWithList;
}

export default function Header({ data }: IHeaderProps) {
  const [title, setTitle] = useState(data.title);

  const { execute } = useAction(updateCard, {
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["card", data.id],
      });

      queryClient.invalidateQueries({
        queryKey: ["card-logs", data.id],
      });

      toast.success(`Renamed to ${data.title}`);
      setTitle(data.title);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const params = useParams();

  const queryClient = useQueryClient();

  const inputRef = useRef<ElementRef<"input">>(null);

  const onBlur = () => {
    inputRef.current?.form?.requestSubmit();
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const boardId = params.boardId as string;

    if (title === data.title) return;

    execute({ boardId, title, id: data.id });
  };

  return (
    <div className="mb-6 flex w-full items-start gap-x-3">
      <Layout className="mt-1 h-5 w-5 text-neutral-700" />
      <div className="w-full">
        <form action={onSubmit}>
          <FormInput
            ref={inputRef}
            onBlur={onBlur}
            id="title"
            defaultValue={title}
            className="relative -left-1.5 mb-0.5 w-[95%] truncate border border-transparent bg-transparent px-1 text-xl font-semibold text-neutral-700 focus-visible:border-input focus-visible:bg-white"
          />
        </form>
        <p className="text-sm text-muted-foreground">
          in list <span className="underline">{data.list.title}</span>
        </p>
      </div>
    </div>
  );
}

Header.Skeleton = function SkeletonHeader() {
  return (
    <div className="mb-6 flex items-center gap-x-3">
      <Skeleton className="mt-1 h-6 w-6 bg-neutral-200" />
      <div className="">
        <Skeleton className="mb-1 h-6 w-24 bg-neutral-200" />
        <Skeleton className="h-4 w-12 bg-neutral-200" />
      </div>
    </div>
  );
};
