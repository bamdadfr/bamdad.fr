import React, {ReactElement} from 'react';

import {BackgroundComponent} from 'src/components/background/background.component';
import {FooterComponent} from 'src/components/footer/footer.component';
import {MetaComponent} from 'src/components/meta/meta.component';
import {NewContainer, TopSection} from './default.layout.styles';

interface Props {
  children: ReactElement[];
}

/**
 * Component to render the default layout
 */
export const DefaultLayout = ({children}: Props) => (
  <>
    <MetaComponent />
    <BackgroundComponent />
    <NewContainer>
      <TopSection>{children}</TopSection>
    </NewContainer>
    <FooterComponent />
  </>
);
