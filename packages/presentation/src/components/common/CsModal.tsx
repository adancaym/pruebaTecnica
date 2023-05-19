import { CsButton } from './CsButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import { Modal } from '@mui/material';

interface CsModalProps {
  open: boolean;
  onClose: () => void;
  handleOpen: () => void;
  children: ReactNode;
  title: string;
  titleButton: string;
  trigger?: ReactNode;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const CsModal = ({
  open,
  onClose,
  handleOpen,
  children,
  titleButton,
  title,
  trigger,
}: CsModalProps) => {
  return (
    <>
      {trigger ? trigger : <CsButton text={titleButton} onClick={handleOpen} />}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          {children}
        </Box>
      </Modal>
    </>
  );
};
