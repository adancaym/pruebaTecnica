import { useBranding } from '../../hooks/useBranding';

interface LogoProps {
  width?: number | string;
  height?: number | string;
}

export const Logo = ({ width = '100', height = '100%' }: LogoProps) => {
  // we can use a hook to get the url or we can use the auth/me service to get all the branding data.

  const { logo } = useBranding();

  return <img src={logo} alt="Logo" width={width} height={height} />;
};
