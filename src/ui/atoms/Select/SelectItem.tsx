interface SelectInterface {
  tag: string;
  value: string;
  defaultValue: string;
};

const SelectItem = ({ value, tag, defaultValue }: SelectInterface) => {
  return value === defaultValue ? <option value={"default"}>{tag}</option> : <option value={value}>{tag}</option>
};

export default SelectItem;
