export interface RatesInterace {
    no: string,
    effectiveDate: string,
    mid: number
}

export interface ChartsDataInterface {
    table: string,
    currency: string,
    code: string,
    rates: RatesInterace[],
    color: string,
};

export type CurrencyValuesType = number[];

export type ChartsModelType = string;

export type SelectedCurrencyType = string;

export type SelectedCurrencyCodeType = string[];

export interface StoreProviderInterface {
    children: JSX.Element | JSX.Element[];
}

export interface ContextInterface {
    chartsSingleData: ChartsDataInterface,
    setChartsSingleData: React.Dispatch<React.SetStateAction<ChartsDataInterface>>,
    chartsData: ChartsDataInterface[],
    setChartsData: React.Dispatch<React.SetStateAction<ChartsDataInterface[]>>,
    chartsModel: ChartsModelType,
    setChartsModel: React.Dispatch<React.SetStateAction<ChartsModelType>>,
    selectedCurrencyCodes: SelectedCurrencyCodeType,
    setSelectedCurrencyCodes: React.Dispatch<React.SetStateAction<SelectedCurrencyCodeType>>,
    selectedCurrency: SelectedCurrencyType,
    setSelectedCurrency: React.Dispatch<React.SetStateAction<SelectedCurrencyType>>,
  };