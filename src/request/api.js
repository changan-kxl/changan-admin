import { get, post } from './http';

export const apiAddress = (p) =>
  get('https://suggest.taobao.com/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb', p);
