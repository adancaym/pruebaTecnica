import { providersService } from '../http/client';
import {
  Pagination,
  ProviderCreate,
  ProviderResponse,
} from '@technical-test/common';

export const useProviders = () => {
  const fetchAll = (params: Pagination) => {
    return providersService
      .get<ProviderResponse[]>('/', {
        params,
      })
      .then((response) => {
        return response.data;
      });
  };

  const create = (data: ProviderCreate) => {
    return providersService
      .post<ProviderResponse>('/', data)
      .then((response) => {
        return response.data;
      });
  };

  const update = (id: string | number, data: ProviderCreate) => {
    return providersService
      .put<ProviderResponse>(`/${id}`, data)
      .then((response) => {
        return response.data;
      });
  };

  const remove = (id: string | number) => {
    return providersService
      .delete<ProviderResponse>(`/${id}`)
      .then((response) => {
        return response.data;
      });
  };

  return {
    fetchAll,
    create,
    update,
    remove,
  };
};
