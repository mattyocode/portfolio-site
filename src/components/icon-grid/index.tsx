import React from 'react';
import { IconObject } from '../../types';
import {
  Container,
  Grid,
  IconWrapper,
  Icon,
  IconText,
} from './styles/icon-grid';

export default function IconGrid({
  icons,
}: {
  icons: IconObject[];
}): JSX.Element {
  return (
    <Container>
      <Grid>
        {icons.map((icon, idx) => {
          return (
            <IconWrapper key={idx}>
              <Icon src={icon.src} />
              <IconText>{icon.label}</IconText>
            </IconWrapper>
          );
        })}
      </Grid>
    </Container>
  );
}
