"use client";

import { Card } from "@prisma/client";

export interface ICardItemProps {
  index: number;
  data: Card;
}

export default function CardItem({ index, data }: ICardItemProps) {
  return (
    <div
      role="button"
      className="truncate rounded-md border-2 border-transparent bg-white px-3 py-2 text-sm shadow-sm hover:border-black"
    >
      {data.title}
    </div>
  );
}
