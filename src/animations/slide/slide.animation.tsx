import {ResizeObserver} from '@juggle/resize-observer';
import {animated, useSpring} from '@react-spring/web';
import React, {ReactElement} from 'react';
import useMeasure from 'react-use-measure';

import {useFirstRender} from 'src/hooks/use-first-render/use-first-render';
import {getEnterOrLeaveDelay} from 'src/utils/get-enter-or-leave-delay/get-enter-or-leave-delay';

interface Props {
  children: ReactElement | string;
  delay?: number;
  isVisible?: boolean;
  type: 'div' | 'span';
}

export function SlideAnimation({
  children,
  delay = 0,
  isVisible = true,
  type,
}: Props) {
  const [ref, {height}] = useMeasure({polyfill: ResizeObserver});
  const {firstRender} = useFirstRender(delay);

  const style = useSpring({
    from: {
      display: 'none',
      opacity: isVisible ? 0 : 1,
      height: 0,
    },
    to: {
      display: 'block',
      opacity: isVisible ? 1 : 0,
      height: isVisible ? height : 0,
    },
    delay: getEnterOrLeaveDelay(delay, firstRender, !isVisible),
  });

  if (type === 'span') {
    return (
      <animated.span style={style}>
        <div ref={ref}>{children}</div>
      </animated.span>
    );
  }

  return (
    <animated.div style={style}>
      <div ref={ref}>{children}</div>
    </animated.div>
  );
}
