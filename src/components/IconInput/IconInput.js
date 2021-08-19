import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--font-size': '14px',
    '--border-width': '1px',
  },
  large: {
    '--font-size': '18px',
    '--border-width': '2px',
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = {
    ...STYLES[size],
    '--width': width + 'px',
  };
  return (
    <Wrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': 16 + 'px' }}>
        <Icon id={icon} size={16} />
      </IconWrapper>
      <Input type="text" placeholder={placeholder}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: var(--width);

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: var(--font-size);
  padding-left: 20px;

  outline-offset: 2px;

  border: none;
  border-bottom: var(--border-width) solid black;

  color: inherit;

  &:placeholder-shown {
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default IconInput;
