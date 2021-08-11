/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    '--height': '24px',
    '--border-radius': '8px',
    '--padding': '4px',
  },
  medium: {
    '--height': '12px',
    '--border-radius': '4px',
  },
  small: {
    '--height': '8px',
    '--border-radius': '4px',
  }
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  border-radius: var(--border-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const ProgressIndicator = styled.div`
  width: ${p => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

const IndicatorWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

function clampValue(min, max, value) {
  return Math.max(Math.min(value, max), min);
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  const clampedValue = clampValue(0, 100, value);

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}>
      <IndicatorWrapper>
        <ProgressIndicator value={clampedValue}></ProgressIndicator>
      </IndicatorWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
