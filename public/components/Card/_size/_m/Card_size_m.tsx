import { ICardProps } from '../../Card';
import {withBemMod} from '@bem-react/core';

import './Card_size_m.css';

export const CardSizeM = withBemMod<ICardProps>('Card', { size: 'm' });
