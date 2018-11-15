import { ICardProps, CardComponent } from '../../Card';
import { withBemMod } from '@bem-react/core';

import './Card_size_m.css';

export interface ICardSizeMiddleProps extends ICardProps {
  size: 'm';
}

export const CardSizeM = withBemMod<ICardSizeMiddleProps>('Card', { size: 'm' }, CardComponent);
