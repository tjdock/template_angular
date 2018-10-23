import {HttpHeaders} from '@angular/common/http';

export function handleBody(data: any): string {
  let body = '';
  for (const k in data) {
    if (k) {
      body += k + '=' + data[k] + '&';
    }
  }

  body = body.replace(/&$/g, '');
  return body;
}

export function handleHeaders(token?: string) {
  const ob = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'};
  if (token) {
    ob['token'] = token;
  }
  return {headers: new HttpHeaders(ob)};
}


export const DOMAIN = 'http://wx.bjlxhqx.com/api/';


export const REG_MOBILE = /^(13|14|15|16|17|18)\d{9}$/;
export const REG_PASSWORD = /^(?![0-9]*$)[a-zA-Z0-9]{6,20}$/;
export const REG_CARCODE = /^[A-Z]{1}[A-Z_0-9]{5}$/;


