import { compose } from '@bem-react/core';
import {CardComponent, ICardProps} from './Card';
import {CardSizeM} from './_size/_m/Card_size_m';
import {CardSizeL} from './_size/_l/Card_size_l';
import {CardSizeS} from './_size/_s/Card_size_s';

interface ICardPropsSize  extends ICardProps {
  size: string;
}

export const CardComposed = compose<ICardPropsSize, ICardPropsSize, ICardPropsSize>(
  CardSizeM,
  CardSizeL,
  CardSizeS,
)(CardComponent);
