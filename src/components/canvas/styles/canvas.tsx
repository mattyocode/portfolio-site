import styled from 'styled-components';

type CanvasProps = {
  opacity?: string;
};

export const CanvasWrapper = styled.div<CanvasProps>`
  position: absolute;
  height: 100vh;
  width: 100vw;
  opacity: ${(props) => (props.opacity ? props.opacity : '0.8')};
`;
