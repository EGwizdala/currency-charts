import { useContext, useState } from "react";
import bemCssModules from 'bem-css-modules';
import { default as CurrencySelectStyles } from "./CurrencySelect.module.scss";
import request from "../../../helpers/request";
import {randomColor} from "../../../helpers/randomColor";
import { StoreContext } from '../../../store/StoreProvider';
import { ContextInterface } from '../../../interfaces/interfaces';
import { SelectField, OptionsType } from "../../molecules/SelectField/SelectField";
import { TABLE_TYPE, TOP_COUNT} from '../../../data/constants';

interface CurrencySelectInterface {
  currencyCodes: OptionsType[],
}

const style = bemCssModules(CurrencySelectStyles);

const CurrencySelect = ({ currencyCodes }: CurrencySelectInterface) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const { setChartsData, selectedCurrencyCodes, setSelectedCurrencyCodes, chartsModel,  setChartsSingleData, selectedCurrency, setSelectedCurrency } = useContext(StoreContext) as ContextInterface;

  const currenciesHandler =  async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setIsError(false);
    setIsLoading(true);
    
    try {
      const {data} = await request.get(`/${TABLE_TYPE}/${value}/last/${TOP_COUNT}/?format=json`, {
        headers: {
          Accept: 'application/json',
        },
      });

      data.color = randomColor();
      setIsError(false);
      setSelectedCurrency(value);
      chartsModel === "single" ? setChartsSingleData(data) : setChartsData((prevValue: any) => [...prevValue, data]);
      chartsModel !== "single" && setSelectedCurrencyCodes((prevValue: any) => [...prevValue, value]);
    } catch (err: any) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  const selectedCurrenciesDisplay = chartsModel === "single" ?
    <li className={style('list-element')}>{selectedCurrency}</li>
    :
    selectedCurrencyCodes?.map(currency => <li className={style('list-element')} key={currency}>{currency}</li>);

  return (
    <div className={style()}>
      <SelectField handleChange={currenciesHandler} label="Wybierz walutę" options={currencyCodes} optionKey="CurrencyCode" optionTag="CurrencyName" />
      <div className={style('container')}>
        <h3 className={style('subtitle')}>Wybrane waluty:</h3>
        <div className={style('list-container')}>
          {!isLoading && !isLoading && <ul className={style('list')}>{selectedCurrenciesDisplay}</ul>}
        </div>
        {isLoading && <h4 className={style('loading')}>Dane się ładują...</h4>}
        {isError && <h4 className={style('error')}>Brak danych, proszę wybrać inną walutę</h4>}
       </div>
    </div>
  )
}

export default CurrencySelect