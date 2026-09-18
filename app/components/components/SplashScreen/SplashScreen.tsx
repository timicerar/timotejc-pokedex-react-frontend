import classes from '~/components/components/SplashScreen/SplashScreen.module.scss';

const SplashScreen = () => {
  return (
    <div className={classes.splash}>
      <img
        src="/images/pokedex-logo-light.svg"
        alt="Pokédex"
        className={`${classes.logo} ${classes['logo--light']}`}
      />
      <img
        src="/images/pokedex-logo-dark.svg"
        alt="Pokédex"
        className={`${classes.logo} ${classes['logo--dark']}`}
      />
    </div>
  );
};

export default SplashScreen;
