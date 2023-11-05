import { styled } from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export const OutlineHeart = styled(AiOutlineHeart)`
  color: #fff;
`;

export const FillHeart = styled(AiFillHeart)`
  color: #3470ff;
`;

export const Item = styled.li`
  position: relative;
  width: 274px;
  cursor: pointer;
  transition: transform 500ms ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Favotire = styled.button`
  position: absolute;
  top: 10px;
  left: 245px;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 100;
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 274px;
  height: 268px;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  border-radius: 14px;
`;

export const TitleBox = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const DescBox = styled.div`
  margin-top: 8px;
  text-align: start;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const SpanLine = styled.span`
  color: rgba(18, 20, 23, 0.1);
`;

export const Button = styled.button`
  margin-top: 28px;
  padding: 12px 99px;
  font-size: 14px;
  color: #fff;
  font-family: 'Manrope';
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  transition: background 500ms ease;

  &:hover {
    background: #0b44cd;
  }
`;
