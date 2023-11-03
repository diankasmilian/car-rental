import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
   const dispatch = useDispatch()
   const filter = useSelector(getFilter)

   const [brand, setBrand] = useState(filter)
 

   const handleChangeFilter = (e) => {
      const { value } = e.target;
      setBrand(value)
    };
  
    const handleSubmitFilter = (e) => {
      e.preventDefault();
      dispatch(setFilter(brand));
    };

  return (
    <form>
      <label>
        Car brand
        <select value='' name="brand" onChange={handleChangeFilter}>
          <option value="">
            Enter the text
          </option>
          <option value="Buick">Buick</option>
          <option value="Volvo">Volvo</option>
          <option value="HUMMER">HUMMER</option>
          <option value="Subaru">Subaru</option>
          <option value="Mitsubishi">Mitsubishi</option>
          <option value="Nissan">Nissan</option>
          <option value="Lincoln">Lincoln</option>
          <option value="GMC">GMC</option>
          <option value="Hyundai">Hyundai</option>
          <option value="MINI">MINI</option>
          <option value="Bentley">Bentley</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Pontiac">Pontiac</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Chrysler">Chrysler</option>
          <option value="Kia">Kia</option>
          <option value="Land">Land</option>
        </select>
      </label>

      <button onClick={handleSubmitFilter}>Search</button>
    </form>
  );
};

export default Filter;
