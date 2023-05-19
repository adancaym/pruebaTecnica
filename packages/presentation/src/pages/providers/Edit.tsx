import { ProviderCreate, ProviderResponse } from '@technical-test/common';
import { useState } from 'react';
import { CsModal } from '../../components/common/CsModal';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Form } from './Form';

interface EditProps {
  provider: ProviderResponse;
  onSubmit: (values: ProviderCreate) => void;
}

export const Edit = ({ provider, onSubmit }: EditProps) => {
  const [open, setOpen] = useState(false);
  return (
    <CsModal
      title={'Update Provider'}
      titleButton={'Update provider'}
      handleOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      open={open}
      trigger={
        <IconButton
          onClick={async () => {
            setOpen(true);
          }}
        >
          <EditIcon color={'primary'}></EditIcon>
        </IconButton>
      }
    >
      <Form
        values={provider}
        onSubmit={async (values) => {
          await onSubmit(values);
          setOpen(false);
        }}
      />
    </CsModal>
  );
};
