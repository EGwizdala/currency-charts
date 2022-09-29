import bemCssModules from 'bem-css-modules';
import { default as SelectFieldStyles } from "./SelectField.module.scss";
import { CURRENCY } from "../../../data/constants";
import SelectItem from "../../atoms/Select/SelectItem";

export type OptionsType = {
    [key:string]: string,
}

interface SelectFieldInterface {
    handleChange: any,
    label: string,
    options: OptionsType[],
    optionKey: string;
    optionTag: string;
};

const style = bemCssModules(SelectFieldStyles);

export const SelectField = ({ handleChange, label, options, optionKey, optionTag }: SelectFieldInterface) => {
    
    const selectInput = options.map(option =>
        <SelectItem key={option[optionKey]} defaultValue = {CURRENCY} value={option[optionKey]} tag={option[optionTag]} />
    );
  
    return (
        <div className={style()}>
            <label className={style('label')}>{label}</label>
            <select className={style('select')} onChange={handleChange} defaultValue={"default"}>
                    {selectInput}
            </select>
        </div>
  )
};
