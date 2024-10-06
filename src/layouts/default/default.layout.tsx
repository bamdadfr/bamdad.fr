import React, {ReactElement} from 'react';

import {BackgroundComponent} from 'src/components/background/background.component';
import {FooterComponent} from 'src/components/footer/footer.component';
import {NewContainer, TopSection} from './default.layout.styles';

interface Props {
  children: ReactElement[];
}

export function DefaultLayout({children}: Props) {
  return (
    <>
      <BackgroundComponent />
      <NewContainer>
        <TopSection>{children}</TopSection>
      </NewContainer>
      <FooterComponent />
    </>
  );
}
