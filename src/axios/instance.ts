import axios, { CreateAxiosDefaults } from 'axios';

const config: CreateAxiosDefaults<string> = {
  baseURL: 'https://api.coinbase.com/v2/',
}

export const instance = axios.create(config);
