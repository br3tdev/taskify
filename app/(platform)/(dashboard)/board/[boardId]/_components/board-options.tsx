"use client";

import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { MoreHorizontal, X } from "lucide-react";
import { toast } from "sonner";

export interface IBoardOptionsProps {
  id: string;
}

export default function BoardOptions({ id }: IBoardOptionsProps) {
  const { execute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      toast.error("Board delete failed");
    },
  });

  const onDelete = () => {
    execute({ id });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="transparent" className="h-auto w-auto p-2">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pb-3 pt-3" align="start" side="bottom">
        <div className="pb-4 text-center text-sm font-medium text-neutral-600">
          Board actions
        </div>
        <PopoverClose asChild>
          <Button
            variant="ghost"
            className="absolute right-2 top-2 h-auto w-auto p-2 text-neutral-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <Button
          variant={"ghost"}
          className="h-auto w-full justify-start rounded-none p-2 px-5 text-sm font-normal"
          onClick={onDelete}
          disabled={isLoading}
        >
          Delete this board
        </Button>
      </PopoverContent>
    </Popover>
  );
}
