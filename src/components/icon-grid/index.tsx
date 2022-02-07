import React from 'react';
import { IconObject } from '../../types';
import {
  Container,
  Grid,
  IconWrapper,
  Icon,
  IconText,
  SmallIcon,
} from './styles/icon-grid';

export default function IconGrid({
  icons,
}: {
  icons: IconObject[];
}): JSX.Element {
  return (
    <Container data-testid='skills-icons'>
      <Grid>
        {icons.map((icon, idx) => {
          return (
            <IconWrapper key={idx}>
              <Icon src={icon.src} alt={icon.label} />
              <IconText>{icon.label}</IconText>
            </IconWrapper>
          );
        })}
      </Grid>
    </Container>
  );
}

export const SingleSmallIcon = ({
  src,
  label,
  clickHandler,
}: {
  src: string;
  label: string;
  clickHandler: (e: React.MouseEvent) => void;
}) => {
  return <SmallIcon src={src} alt={label} onClick={clickHandler} />;
};
