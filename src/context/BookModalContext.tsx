import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookModalContext = createContext<BookModalContextType | undefined>(undefined);

export function BookModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BookModalContext.Provider>
  );
}

export function useBookModal() {
  const context = useContext(BookModalContext);
  if (!context) {
    throw new Error('useBookModal must be used within a BookModalProvider');
  }
  return context;
}
