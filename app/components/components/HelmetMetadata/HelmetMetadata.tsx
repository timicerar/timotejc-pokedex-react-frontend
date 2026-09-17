import { Fragment, type PropsWithChildren, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type HelmetMetadataProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
} & PropsWithChildren;

const HelmetMetadata = ({
  title,
  description,
  imageUrl,
  children,
}: HelmetMetadataProps) => {
  const { t } = useTranslation();

  const metaTitle = title ? title : t('meta.home.title');
  const metaDescription = description
    ? description
    : t('meta.home.description');

  const imageLocation = '/images/seo/og-image.png';

  const metaImageUrl = useMemo(() => {
    if (imageUrl) return imageUrl;
    if (typeof window !== 'undefined')
      return `${window.location.origin}${imageLocation}`;
    return imageLocation;
  }, [imageUrl]);

  return (
    <Fragment>
      <title>{metaTitle}</title>

      <meta name="description" content={metaDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImageUrl} />
      <meta property="og:image:secure_url" content={metaImageUrl} />
      <meta property="og:image:alt" content={metaTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageUrl} />

      {children}
    </Fragment>
  );
};

export default HelmetMetadata;
