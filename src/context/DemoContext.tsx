import React, { createContext, useContext, ReactNode } from 'react';
import { DemoConfig, demos } from '../config/demos';

interface DemoContextType {
  demo: DemoConfig;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ demoId: string; children: ReactNode }> = ({ demoId, children }) => {
  const demo = demos.find(d => d.id === demoId) || demos[0];

  return (
    <DemoContext.Provider value={{ demo }}>
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = (): DemoContextType => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};
