import { styled } from 'styled-components';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export const Form = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  gap: 8px;
`;
export const OutlineDown = styled(AiOutlineDown)`
  position: absolute;
  color: #121417;
  top: 43px;
  left: 190px;
  pointer-events: none;
`;

export const OutlineUp = styled(AiOutlineUp)`
  position: absolute;
  color: #121417;
  top: 43px;
  left: 190px;
  pointer-events: none;
`;

export const Select = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  appearance: none;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  padding: 14px 18px;
  width: 224px;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
`;

export const Options = styled.option`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const Button = styled.button`
  border: none;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #3470ff;
  padding: 14px 44px;
  cursor: pointer;
`;
