import { /* useState , */ useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/ToggleCurrency.module.css';
import CurrencyContext from './CurrencyContext';

const ToggleCurrency = () => {
  const { t } = useTranslation("global");

  console.log(useContext(CurrencyContext));

  const { currency, setCurrency } = useContext(CurrencyContext);

  const handleToggleCurrency = () => {
    const newCurrency = currency === 'USD' ? 'MXN' : 'USD';
    setCurrency(newCurrency);
  };

  /* const [currency, setCurrency] = useState('USD'); */

  /* const handleToggleCurrency = () => {
    const newCurrency = currency === 'USD' ? 'MXN' : 'USD';
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  }; */

  return (
    <button
      id='currency-toggle'
      className={styles.toggleButton}
      onClick={handleToggleCurrency}
      aria-label="Toggle Currency"
    >
      {currency === 'USD' ? (
        <>
          {t("Settings.ToggleCurrency.mxn")}
          &nbsp;
          <abbr title="Cambiar a Peso Mexicano">&#40;MXN&#41;</abbr>
        </>
      ) : (
        <>
          {t("Settings.ToggleCurrency.usd")}
          &nbsp;
          <abbr title="Switch to US Dollar">&#40;USD&#41;</abbr>
        </>
      )}
    </button>
  );
};

export default ToggleCurrency;
