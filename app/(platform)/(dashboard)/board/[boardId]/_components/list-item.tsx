"use client";

import { ListWithCards } from "@/types";
import ListHeader from "./list-header";

export interface IListItemProps {
  index: number;
  data: ListWithCards;
}

export default function ListItem({ index, data }: IListItemProps) {
  return (
    <li className="h-full w-[272px] shrink-0 select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] pb-2 shadow-md">
        <ListHeader data={data} />
      </div>
    </li>
  );
}
