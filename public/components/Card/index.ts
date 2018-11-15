import { compose } from '@bem-react/core';
import {CardComponent} from './Card';
import {CardSizeM} from './_size/_m/Card_size_m';
import {CardSizeL} from './_size/_l/Card_size_l';
import {CardSizeS} from './_size/_s/Card_size_s';

export const CardComposed = compose(
  CardSizeM,
  CardSizeL,
  CardSizeS,
)(CardComponent);
