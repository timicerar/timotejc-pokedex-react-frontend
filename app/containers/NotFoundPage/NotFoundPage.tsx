import { useTranslation } from 'react-i18next';
import Typography from '~/components/components/Typography/Typography';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <Typography>{t('meta.notFound.title')}</Typography>;
};

export default NotFoundPage;
