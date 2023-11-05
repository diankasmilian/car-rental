import { Presentation, List, Text, Item } from './Home.styled';
import { MdOutlineVerified } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import { BsInfoCircle, BsCarFront } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      <Presentation></Presentation>

      <List>
        <Item>
          <BsCarFront size={100} />
          <Text>Wide Selection of Cars</Text>
        </Item>
        <Item>
          <MdOutlineVerified size={100} />
          <Text>Verified Rental Companies</Text>
        </Item>
        <Item>
          <GiMoneyStack size={100} />
          <Text>Car Selection by Budget</Text>
        </Item>
        <Item>
          <BsInfoCircle size={100} />
          <Text>Comprehensive Car Information</Text>
        </Item>
      </List>
    </>
  );
};

export default Home;
