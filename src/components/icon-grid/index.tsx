import React from 'react';
import {
  Container,
  Grid,
  IconWrapper,
  Icon,
  IconText,
} from './styles/icon-grid';

type IconObject = {
  src: string;
  label: string;
};

type Props = {
  icons: Array<IconObject>;
};

export default function IconGrid({ icons }: Props): JSX.Element {
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
