import React from 'react';

import { Button as AntdButton } from 'antd';

export type ButtonProps = {
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  size?: 'large' | 'middle' | 'small';
  onClick?: () => void;
  children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  size,
  onClick,
  children,
}) => {
  return (
    <AntdButton type={type} size={size} onClick={onClick}>
      {children}
    </AntdButton>
  );
};
