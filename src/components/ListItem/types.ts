import {ImageSourcePropType} from 'react-native';

export interface IListItemProps {
  poster: ImageSourcePropType;
  title: string;
  subtitle: string;
  isFree: string;
  price?: string;
  id: string;
}
