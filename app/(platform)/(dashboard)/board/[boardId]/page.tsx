export interface IBoardIdPageProps {
  params: {
    boardId: string;
  };
}

export default function BoardIdPage({ params }: IBoardIdPageProps) {
  return (
    <div>
      <h1>Board</h1>
    </div>
  );
}
