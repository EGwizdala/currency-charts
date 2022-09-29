import React, { useContext } from "react";
import bemCssModules from 'bem-css-modules';
import { default as ChartSelectStyles } from "./ChartSelect.module.scss";
import { StoreContext } from '../../../store/StoreProvider';
import { ContextInterface } from '../../../interfaces/interfaces';
import { SelectField} from "../../molecules/SelectField/SelectField";

const style = bemCssModules(ChartSelectStyles);

const ChartSelect = () => {
  const { setChartsData, setChartsModel, setChartsSingleData, setSelectedCurrencyCodes, setSelectedCurrency } = useContext(StoreContext) as ContextInterface;

  const chartTypes = [
    {
        ChartKey: "single",
        ChartTag: "Wybierz jedną walutę"
    },
    {
        ChartKey: "multiple",
        ChartTag: "Wybierz kilka walut"
    },
  ]
  
  const chartHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setChartsModel(value);
    setSelectedCurrencyCodes([]);
    setChartsData([]);
    setSelectedCurrency('');
    setChartsSingleData({
      table: "",
      currency: "",
      code: "",
      rates: [],
      color: "",
    })
  };
          
    return (
      <div className={style()}>
       <SelectField handleChange={chartHandler} label="Tryb wyświetlania walut" options={chartTypes} optionKey="ChartKey" optionTag="ChartTag" />
      </div>
    )
}

export default ChartSelect