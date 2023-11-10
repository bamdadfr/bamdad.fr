import React from 'react';
import PropTypes from 'prop-types';
import {animated, useSpring} from '@react-spring/web';

const propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  isVisible: PropTypes.bool,
};

const defaultProps = {
  delay: 0,
  isVisible: true,
};

/**
 * Component to fade in and out an element
 *
 * @param {object} props - Component props
 * @param {React.ReactElement} props.children - Child element
 * @param {number} [props.delay=0] - Delay before animation
 * @param {boolean} [props.isVisible=true] - Whether the element is visible
 * @returns {React.ReactElement} - Rendered component
 */
export function FadeAnimation({children, delay, isVisible}) {
  const style = useSpring({
    from: {opacity: isVisible ? 0 : 1},
    to: {opacity: isVisible ? 1 : 0},
    delay: isVisible ? delay : 0,
  });

  return (
    <>
      <animated.div style={style}>{children}</animated.div>
    </>
  );
}

FadeAnimation.propTypes = propTypes;
FadeAnimation.defaultProps = defaultProps;
