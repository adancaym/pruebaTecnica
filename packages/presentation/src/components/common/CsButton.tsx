import { Button } from '@mui/material';

interface CsButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
}

export const CsButton = ({
  text,
  onClick,
  variant = 'contained',
  color = 'primary',
}: CsButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} color={color}>
      {text}
    </Button>
  );
};
