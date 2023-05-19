import { useProviders } from '../../hooks/useProviders';
import { ProviderCreate, ProviderResponse } from '@technical-test/common';
import { useEffect, useState } from 'react';
import { Stack, Table } from '@mui/material';
import { CsModal } from '../../components/common/CsModal';
import { Form } from './Form';
import IconButton from '@mui/material/IconButton';
import { DeleteForever } from '@mui/icons-material';
import { Edit } from './Edit';

export const Providers = () => {
  const [providers, setProviders] = useState<ProviderResponse[]>([]);

  const [open, setOpen] = useState(false);

  const { remove, update, create, fetchAll } = useProviders();

  const listProviders = () => {
    fetchAll({ page: 1, limit: 10 }).then((response) => {
      setProviders(response);
    });
  };

  const onDeleted = async (id: string | number) => {
    await remove(id);
    await listProviders();
  };

  const onEdited = async (id: string | number, values: ProviderCreate) => {
    await update(id, values);
    await listProviders();
  };
  useEffect(() => {
    listProviders();
  }, []);

  return (
    <Stack spacing={5}>
      <h1>Welcome to Providers!</h1>
      <CsModal
        title={'Create Provider'}
        titleButton={'Create provider'}
        handleOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <Form
          onSubmit={async (values) => {
            await create(values);
            await listProviders();
            setOpen(false);
          }}
        />
      </CsModal>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Legal Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr>
              <td>{provider.id}</td>
              <td>{provider.name}</td>
              <td>{provider.address}</td>
              <td>{provider.legalName}</td>
              <td>
                <IconButton onClick={() => onDeleted(provider.id)}>
                  <DeleteForever color={'error'}></DeleteForever>
                </IconButton>
                <Edit
                  provider={provider}
                  onSubmit={async (values) => onEdited(provider.id, values)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Stack>
  );
};
