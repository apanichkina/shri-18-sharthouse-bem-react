import {ICardProps} from '../../Card';
import {withBemMod} from '@bem-react/core';

import './Card_size_s.css';

export const CardSizeS = withBemMod<ICardProps>('Card', { size: 's' });
