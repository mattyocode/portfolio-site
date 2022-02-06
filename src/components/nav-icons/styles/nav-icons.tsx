import styled from 'styled-components';
import { motion } from 'framer-motion';

type ButtonProps = {
  borderColor?: string;
};

export const HoriztonalBackBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
  cursor: pointer;
`;

export const VerticalBackBtnWrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 3vh;
  left: 2rem;
  z-index: 100;
  cursor: pointer;
`;

export const BtnText = styled.p`
  font-size: 0.8rem;
  margin: 0.2rem;
`;

export const BtnTextSmall = styled.p`
  font-size: 0.8rem;
  margin: 0.2rem;
  max-width: 3rem;
  text-align: center;
`;

export const IconWrapper = styled.div``;

export const BtnIcon = styled.img`
  max-width: 7rem;
`;

export const HorizontalBackLink = styled.div<ButtonProps>`
  background-color: #121d1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : '1px solid #eee'};
  filter: ${(props) =>
    props.borderColor ? `drop-shadow(3px 3px 0 ${props.borderColor})` : ''};
  padding: 0.5rem;
  max-width: 10rem;
  max-height: 7rem;
  cursor: pointer;

  &:hover {
    background-color: #1c2d30;
  }

  &:active {
    background-color: #0e1718;
    filter: drop-shadow(3px 3px 0 #121d1f);
  }
`;

export const VerticalBackLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #121d1f;
  cursor: pointer;
`;
