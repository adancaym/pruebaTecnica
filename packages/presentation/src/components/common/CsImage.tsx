interface CsImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export const CsImage = ({
  src,
  alt,
  width = '100%',
  height = '100%',
}: CsImageProps) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};
