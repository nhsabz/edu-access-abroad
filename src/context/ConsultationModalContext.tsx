"use client";

import React, { createContext, useContext, useState } from "react";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

interface ConsultationModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ConsultationModalContext = createContext<ConsultationModalContextType>({} as ConsultationModalContextType);

export const useConsultationModal = () => useContext(ConsultationModalContext);

export const ConsultationModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ConsultationModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
    </ConsultationModalContext.Provider>
  );
};
