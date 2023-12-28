import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import ListContainer from "./_components/list-container";

export interface IBoardIdPageProps {
  params: {
    boardId: string;
  };
}

export default async function BoardIdPage({ params }: IBoardIdPageProps) {
  const { orgId } = auth();

  if (!orgId) return redirect("/select-org");

  const list = await db.list.findMany({
    where: {
      boardId: params.boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div className="h-full overflow-x-auto p-4">
      <ListContainer boardId={params.boardId} data={list} />
    </div>
  );
}
