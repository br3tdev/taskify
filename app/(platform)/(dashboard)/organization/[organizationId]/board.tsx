import { deleteBoard } from "@/actions/delete-board";
import ForrmDelete from "./form-delete";

export interface IBoardProps {
  title: string;
  id: string;
}

export default function Board({ title, id }: IBoardProps) {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <ForrmDelete />
    </form>
  );
}
