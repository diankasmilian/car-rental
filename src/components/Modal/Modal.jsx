import PropTypes from 'prop-types';
import { useEffect, Fragment } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalWindow,
  OutlineClose,
  Image,
  Title,
  Span,
  DescBox,
  SpanLine,
  Description,
  Text,
  TitleSection,
  List,
  Item,
  SpanNumber,
  PhoneNumber,
  ButtonClose,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal, car }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    const handleKeyDown = e => {
      if (e.code === `Escape`) {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  const handleClickButton = () => {
    onCloseModal();
  };

  const conditionsArray = car.rentalConditions.split('\n');
  return createPortal(
    <Overlay onClick={handleClickBackdrop}>
      <ModalWindow>
        <ButtonClose onClick={handleClickButton}>
          <OutlineClose size={24} />
        </ButtonClose>
        <Image src={car.img} />
        <Title>
          {car.make} <Span>{car.model}</Span>, {car.year}
        </Title>
        <DescBox>
          <p>
            {car.address} <SpanLine>|</SpanLine> Miliage: {car.mileage}{' '}
            <SpanLine>|</SpanLine> Type: {car.type}
          </p>
          <Text>
            Fuel Consumption: {car.fuelConsumption} <SpanLine>|</SpanLine>{' '}
            Engine Size: {car.engineSize}{' '}
          </Text>
        </DescBox>

        <Description>{car.description}</Description>

        <TitleSection>Accessories and functionalities:</TitleSection>

        <DescBox>
          <p>
            {car.accessories.map((accessory, index) => (
              <Fragment key={index}>
                {index !== 0 && <SpanLine>|</SpanLine>} {accessory}{' '}
              </Fragment>
            ))}
          </p>
          <Text>
            {car.functionalities.map((functional, index) => (
              <Fragment key={index}>
                {index !== 0 && <SpanLine>|</SpanLine>} {functional}{' '}
              </Fragment>
            ))}
          </Text>
        </DescBox>

        <TitleSection>Rental Conditions:</TitleSection>

        <List>
          {conditionsArray.map((condition, index) => (
            <Item key={index}>
              {condition.replace(/\d+/g, '')}
              {condition.match(/\d+/g)?.map((number, numIndex) => (
                <SpanNumber key={numIndex}>{number}</SpanNumber>
              ))}
            </Item>
          ))}
          <Item>
            Mileage: <SpanNumber>{car.mileage}</SpanNumber>{' '}
          </Item>
          <Item>
            Price: <SpanNumber>{car.rentalPrice}</SpanNumber>
          </Item>
        </List>

        <PhoneNumber href="tel:+380730000000">Rental car</PhoneNumber>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalConditions: PropTypes.string.isRequired,
  }).isRequired,

  onCloseModal: PropTypes.func.isRequired,
};
