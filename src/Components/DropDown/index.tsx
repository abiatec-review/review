import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {FC, useState} from 'react';

// type DropDownPropsType = {
//   // items: [],
// }

const DropDown: FC<any> = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana1', value: 'banana1'},
    {label: 'Banana2', value: 'banana2'},
    {label: 'Banana3', value: 'banana3'},
    {label: 'Banana4', value: 'banana4'},
  ]);

  return (
    <DropDownPicker
      dropDownContainerStyle={{zIndex: 10000000}}
      zIndex={110}
      zIndexInverse={1000}
      containerStyle={{zIndex: 10000000}}
      labelStyle={{
        zIndex: 1000,
        fontWeight: '500',
      }}
      textStyle={{
        zIndex: 1000,
        fontSize: 15,
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

export default DropDown;
