"use client";

import { copyCard } from "@/actions/copy-card";
import { deleteCard } from "@/actions/delete-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAction } from "@/hooks/use-action";
import { useCardModal } from "@/hooks/use-card-modal";
import { CardWithList } from "@/types";
import { Copy, Trash } from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export interface IActionsProps {
  data: CardWithList;
}

export default function Actions({ data }: IActionsProps) {
  const params = useParams();
  const cardModal = useCardModal();

  const { execute: executeCopy, isLoading: isLoadingCopy } = useAction(
    copyCard,
    {
      onSuccess: () => {
        toast.success(`Card "${data.title}" copied`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    },
  );

  const { execute: executeDelete, isLoading: isLoadingDelete } = useAction(
    deleteCard,
    {
      onSuccess: () => {
        toast.success(`Card "${data.title}" deleted`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    },
  );

  const onCopy = () => {
    const boardId = params?.boardId as string;

    executeCopy({ boardId, id: data.id });
  };

  const onDelete = () => {
    const boardId = params?.boardId as string;

    executeDelete({ boardId, id: data.id });
  };

  return (
    <div className="mt-2 space-y-2">
      <p className="font-xs font-semibold">Actions</p>
      <Button
        onClick={onCopy}
        disabled={isLoadingCopy}
        size={"inline"}
        variant={"gray"}
        className="w-full justify-start"
      >
        <Copy className="mr-2 h-4 w-4" />
        Duplicate
      </Button>
      <Button
        onClick={onDelete}
        disabled={isLoadingDelete}
        size={"inline"}
        variant={"gray"}
        className="w-full justify-start"
      >
        <Trash className="mr-2 h-4 w-4" />
        Delete
      </Button>
    </div>
  );
}

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className="mt-2 space-y-2">
      <Skeleton className="h-4 w-20 bg-neutral-200" />
      <Skeleton className="h-8 w-full bg-neutral-200" />
      <Skeleton className="h-8 w-full bg-neutral-200" />
    </div>
  );
};
