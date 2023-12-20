import { TCurrenciesData } from 'types/types';
import { instance } from './instance';

export const getCurrencies = async () => {
  return instance.get<TCurrenciesData>('currencies');
}
