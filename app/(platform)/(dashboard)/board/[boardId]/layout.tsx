import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { boardId: string };
}) {
  const { orgId } = auth();

  if (!orgId) {
    return {
      title: "Board",
    };
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId,
    },
  });

  return {
    title: board?.title || "Board",
  };
}

export default async function BoardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) {
  const { orgId } = auth();

  if (!orgId) return redirect("/select-org");

  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId,
    },
  });

  if (!board) return notFound();

  return (
    <div
      className="relative h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <main className="relative h-full pt-28">{children}</main>
    </div>
  );
}
