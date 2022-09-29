import { useContext } from "react";
import { StoreContext } from '../../../store/StoreProvider';
import { ContextInterface } from '../../../interfaces/interfaces';
import { CHART_TYPE, CHART_GRID, CHART_SIZE } from '../../../data/constants';
import { getPreviousWeekDay, getDatesInRange } from '../../../helpers/dates';
import Image from "../../atoms/Image/Image";

const Chart = () => {
  const { chartsData, chartsModel, chartsSingleData } = useContext(StoreContext) as ContextInterface;

  let chartNames = "";
  let chartColor = "";
  let chartDots = "";
  let chartRates ;
  let chartValues = "";
  
  if (chartsModel === "single") {
    chartNames = chartsSingleData.code;
    chartColor = chartsSingleData.color;
    chartDots = chartColor &&`o,${chartColor},0,-1,7.0`;
    chartRates = chartsSingleData.rates;
    chartValues = chartRates.map(element => element.mid).join(',');
  } else if (chartsModel === "multiple") {
    chartNames = chartsData.map(data => data.code).join('|');
    chartColor = chartsData.map(data => data.color).join(',');
    chartDots = chartsData.map(data => `o,${data.color},${chartsData.indexOf(data)},-1,7.0`).join('|');
    chartRates = chartsData.map(data => data.rates);
    chartValues = chartRates.map(rate => rate.map(element => element.mid).join(',')).join('|');
  };

  const endDate = getPreviousWeekDay();
  const startDate = getPreviousWeekDay(endDate, 6);
  const datesArray = getDatesInRange(startDate, endDate).join('|');

  const chartSrc = `https://image-charts.com/chart?chco=${chartColor}&chd=t:${chartValues}&chdl=${chartNames}&chg=${CHART_GRID}&chm=${chartDots}&chs=${CHART_SIZE}&cht=${CHART_TYPE}&chxl=0:|${datesArray}&chxt=x,y`
          
  return (
        <Image imageSrc={chartSrc} imageAlt = "chart" />
  )
}

export default Chart