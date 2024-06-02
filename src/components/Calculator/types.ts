export interface CalculatorProps {};

export interface DisplayProps {
  value: string;
};

export interface KeypadProps {
  numClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  commaClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  signClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  equalsClickHandler: () => void;
  clearClickHandler: () => void;
};
