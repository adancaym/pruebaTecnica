import { Branding } from '@technical-test/common';

import { useEffect, useState } from 'react';
import { brandingService } from '../http/client';

export const useBranding = (): Branding => {
  const [branding, setBranding] = useState<Branding>({
    logo: '',
    companySystem: '',
    company: '',
  });
  const fetchBranding = async () => {
    brandingService.get<Branding>('/').then((response) => {
      setBranding(response.data);
    });
  };

  useEffect(() => {
    fetchBranding();
  }, []);

  return branding;
};
