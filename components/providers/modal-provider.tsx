"use client";

import { useEffect, useState } from "react";
import CardModal from "../modals/card-modal";

export interface IModalProviderProps {}

export default function ModalProvider(props: IModalProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CardModal />
    </>
  );
}
