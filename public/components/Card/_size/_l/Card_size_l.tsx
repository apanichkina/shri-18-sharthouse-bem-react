import { ICardProps } from '../../Card';
import { withBemMod } from '@bem-react/core';

import './Card_size_l.css';

export const CardSizeL = withBemMod<ICardProps>('Card', { size: 'l' });
