import { createContext, useState } from 'react';
import {ChartsDataInterface, ChartsModelType, StoreProviderInterface, ContextInterface, SelectedCurrencyCodeType } from '../interfaces/interfaces'

export const StoreContext = createContext<ContextInterface  | null>(null);

const StoreProvider = ({ children }: StoreProviderInterface) => {
  const [chartsSingleData, setChartsSingleData] = useState<ChartsDataInterface>({
    table: "",
    currency: "",
    code: "",
    rates: [],
    color: "",
    });
    const [chartsData, setChartsData] = useState<ChartsDataInterface[] >([]);
    const [selectedCurrencyCodes, setSelectedCurrencyCodes] = useState<SelectedCurrencyCodeType>([]);
    const [chartsModel, setChartsModel] = useState<ChartsModelType>("single");
    const [selectedCurrency, setSelectedCurrency] = useState<string>("")
  return (
    <StoreContext.Provider value={{ chartsSingleData, setChartsSingleData, chartsData, setChartsData, chartsModel, setChartsModel, selectedCurrencyCodes, setSelectedCurrencyCodes, selectedCurrency, setSelectedCurrency }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;