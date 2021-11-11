import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundComponent } from '../../components/background/background.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { MetaComponent } from '../../components/meta/meta.component';
import { Container, TopSection } from './default.layout.styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Component to render the default layout
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Component children
 * @returns {React.ReactElement} - Default layout component
 */
export function DefaultLayout ({ children }) {
  return (
    <>
      <MetaComponent />
      <BackgroundComponent />
      <Container>
        <TopSection>
          {children}
        </TopSection>
        <ContactComponent />
      </Container>
      <FooterComponent />
    </>
  );
}

DefaultLayout.propTypes = propTypes;
