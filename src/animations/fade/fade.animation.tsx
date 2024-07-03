import {animated, useSpring} from '@react-spring/web';
import React, {ReactElement} from 'react';

interface Props {
  children: ReactElement;
  delay?: number;
  isVisible?: boolean;
}

export function FadeAnimation({children, delay = 0, isVisible = true}: Props) {
  const style = useSpring({
    from: {opacity: isVisible ? 0 : 1},
    to: {opacity: isVisible ? 1 : 0},
    delay: isVisible ? delay : 0,
  });

  return <animated.div style={style}>{children}</animated.div>;
}
