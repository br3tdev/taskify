import { ListWithCards } from "@/types";
import ListForm from "./list-form";

export interface IListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

export default function ListContainer({ data, boardId }: IListContainerProps) {
  return (
    <ol>
        <ListForm />
      <div className="w-10 flex-shrink-0" />
    </ol>
  );
}
