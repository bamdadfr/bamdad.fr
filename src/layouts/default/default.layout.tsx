import React, {ReactElement} from 'react';

import {BackgroundComponent} from 'src/components/background/background.component';
import {FooterComponent} from 'src/components/footer/footer.component';
import {NextSeo} from 'next-seo';
import {NewContainer, TopSection} from './default.layout.styles';

interface Props {
  children: ReactElement[];
}

export function DefaultLayout({children}: Props) {
  return (
    <>
      <NextSeo
        noindex={false}
        nofollow={false}
      />
      <BackgroundComponent />
      <NewContainer>
        <TopSection>{children}</TopSection>
      </NewContainer>
      <FooterComponent />
    </>
  );
}
