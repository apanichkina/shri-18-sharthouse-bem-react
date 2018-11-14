import React, {ChangeEvent} from 'react';
import {cn} from '@bem-react/classname';
import './Slider.css';

const cnSlider = cn('Slider');

export interface IMusicProps {
  className?: string;
  min: string;
  max: string;
  value: string;
  step: string;
  title: string;
  style: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const Slider: React.SFC<IMusicProps> = (props) => {
  const {className, style, onChange, ...rest} = props;

  return (
    <input
      type="range"
      className={cnSlider({style}, [className])}
      onChange={onChange}
      {...rest}
    />
  );
};
