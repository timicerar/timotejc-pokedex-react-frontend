import { useTranslation } from 'react-i18next';
import HelmetMetadata from '~/components/components/HelmetMetadata/HelmetMetadata';
import NotFoundPage from '~/containers/NotFoundPage/NotFoundPage';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetMetadata
        title={t('meta.notFound.title')}
        description={t('meta.notFound.description')}
      />
      <NotFoundPage />
    </>
  );
};

export default NotFound;
