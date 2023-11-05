import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { clearItems } from 'redux/carsSlice';
import {
  Label,
  Select,
  Form,
  Button,
  OutlineDown,
  OutlineUp,
  Options,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const [localFilter, setLocalFilter] = useState(filter);
  const [arrowDown, setArrowDown] = useState(true);

  const handleChangeFilter = e => {
    const { value } = e.target;
    setLocalFilter(value);
    setArrowDown(true);
  };

  const handleSubmitFilter = e => {
    e.preventDefault();
    dispatch(setFilter(localFilter));
    dispatch(clearItems());
  };

  return (
    <Form>
      <Label>
        Car brand
        {arrowDown ? <OutlineDown size={16} /> : <OutlineUp size={16} />}
        <Select
          value={localFilter}
          name="brand"
          onChange={handleChangeFilter}
          onFocus={() => setArrowDown(false)}
          onBlur={() => setArrowDown(true)}
        >
          <Options value="">Enter the text</Options>
          <Options value="Buick">Buick</Options>
          <Options value="Volvo">Volvo</Options>
          <Options value="HUMMER">HUMMER</Options>
          <Options value="Subaru">Subaru</Options>
          <Options value="Mitsubishi">Mitsubishi</Options>
          <Options value="Nissan">Nissan</Options>
          <Options value="Lincoln">Lincoln</Options>
          <Options value="GMC">GMC</Options>
          <Options value="Hyundai">Hyundai</Options>
          <Options value="MINI">MINI</Options>
          <Options value="Bentley">Bentley</Options>
          <Options value="Mercedes-Benz">Mercedes-Benz</Options>
          <Options value="Aston Martin">Aston Martin</Options>
          <Options value="Pontiac">Pontiac</Options>
          <Options value="Lamborghini">Lamborghini</Options>
          <Options value="Audi">Audi</Options>
          <Options value="BMW">BMW</Options>
          <Options value="Chevrolet">Chevrolet</Options>
          <Options value="Chrysler">Chrysler</Options>
          <Options value="Kia">Kia</Options>
          <Options value="Land">Land</Options>
        </Select>
      </Label>

      <Button onClick={handleSubmitFilter}>Search</Button>
    </Form>
  );
};

export default Filter;
