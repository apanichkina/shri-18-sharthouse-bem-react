import { ICardProps, CardComponent } from '../../Card';
import { withBemMod } from '@bem-react/core';

import './Card_size_l.css';

export interface ICardSizeMiddleProps extends ICardProps {
  size: 'l';
}

export const CardSizeL = withBemMod<ICardSizeMiddleProps>('Card', { size: 'l' }, CardComponent);
