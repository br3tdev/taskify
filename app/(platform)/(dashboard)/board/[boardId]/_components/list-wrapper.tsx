export interface IListWrapperProps {
  children: React.ReactNode;
}

export default function ListWrapper({ children }: IListWrapperProps) {
  return (
    <div className="h-full w-[272px] shrink-0 select-none">{children}</div>
  );
}
