import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 900;
  overflow: auto;
`;

export const ModalWindow = styled.div`
  position: relative;
  max-width: 461px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 24px;
  background-color: #fff;
  z-index: 999;
`;

export const ButtonClose = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const OutlineClose = styled(AiOutlineClose)`
  position: absolute;
  left: 501px;
  top: 16px;
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
`;

export const Title = styled.h2`
  margin-top: 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

export const Span = styled.span`
  color: #3470ff;
`;
export const DescBox = styled.div`
  margin-top: 8px;
  text-align: start;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const Text = styled.p`
  margin-top: 4px;
`;

export const SpanLine = styled.span`
  color: rgba(18, 20, 23, 0.1);
`;

export const Description = styled.p`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const TitleSection = styled.h3`
  margin-top: 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const List = styled.ul`
  margin-top: 8px;
  margin-bottom: 24px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const SpanNumber = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const PhoneNumber = styled.a`
  text-decoration: none;

  padding: 12px 50px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
