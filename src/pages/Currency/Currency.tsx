import bemCssModules from 'bem-css-modules';
import { default as CurrencyStyles } from "./Currency.module.scss";
import currencyCodes from "../../data/currencyCodes.json";
import ChartSelect from "../../ui/organisms/ChartSelect/ChartSelect";
import CurrencySelect from "../../ui/organisms/CurrencySelect/CurrencySelect";
import Chart from "../../ui/organisms/Chart/Chart";

const style = bemCssModules(CurrencyStyles);

const Currency = () => {
    return (
        <div className={style()}>
            <form className={style('form')}>
                <ChartSelect  />
                <CurrencySelect currencyCodes={currencyCodes} />
            </form>
            <Chart />
        </div>
    )
};

export default Currency;
