import Logo from '~/components/components/Logo/Logo';
import classes from './SplashScreen.module.scss';

const SplashScreen = () => {
  return (
    <div className={classes.splash}>
      <Logo className={classes.logo} />
    </div>
  );
};

export default SplashScreen;
