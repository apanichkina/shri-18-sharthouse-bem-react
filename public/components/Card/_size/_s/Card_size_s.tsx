import { ICardProps, CardComponent } from '../../Card';
import { withBemMod } from '@bem-react/core';

import './Card_size_s.css';

export interface ICardSizeMiddleProps extends ICardProps {
  size: 's';
}

export const CardSizeS = withBemMod<ICardSizeMiddleProps>('Card', { size: 's' }, CardComponent);
