import { authService } from '../http/client';
import { Me } from '@technical-test/common';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [me, setMe] = useState<Me>({
    name: '',
    appVersion: '',
  });
  const fetchMe = () => {
    return authService.get<Me>('/me').then((res) => res.data);
  };

  useEffect(() => {
    fetchMe().then((me) => setMe(me));
  }, []);

  return {
    me,
  };
};
