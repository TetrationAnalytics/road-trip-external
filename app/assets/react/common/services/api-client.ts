import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

export interface ApiClientData {
  method: string;
  url: string;
  params?: object;
  headers: object;
  timeout: number;
}

export interface ApiResult {
  data?: any;
  status: string;
  message: string;
}

export class ApiClient {
  instance: any;
  baseURL: string;
  data: ApiClientData;

  constructor(csrfToken: string = '') {
    this.instance = axios.create();
    this.baseURL = '/api';
    this.data = {
      method: 'get',
      url: this.baseURL,
      headers: {
        ...{ 'X-CSRF-TOKEN': csrfToken }
      },
      timeout: 10000
    };
  }

  setCsrfToken(csrfToken: string = ''): boolean {
    if (isEmpty(csrfToken)) {
      return false;
    }

    this.instance.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    this.data.headers = {
      ...{ 'X-CSRF-TOKEN': csrfToken }
    };
    return true;
  }

  setHeaders(headers: object = {}): boolean {
    if (isEmpty(headers)) {
      return false;
    }
    this.data.headers = {
      ...headers
    };
    return true;
  }

  setAbortTime(timeout: number = -1): boolean {
    if (timeout <= 0) {
      return false;
    }
    this.data.timeout = timeout;
    return true;
  }

  setParams(params: object = {}): boolean {
    if (isEmpty(params)) {
      return false;
    }
    this.data.params = { ...params };
    return true;
  }

  setUrl(url: string = ''): boolean {
    if (isEmpty(url)) {
      return false;
    }
    this.data.url = [this.baseURL, url].join('/');

    return true;
  }

  setUrlBaseless(url: string = ''): boolean {
    if (isEmpty(url)) {
      return false;
    }
    this.data.url = ['', url].join('/');

    return true;
  }

  setMethod(method: string = 'get'): boolean {
    this.data.method = method.toLowerCase();
    return true;
  }

  GET(data: ApiClientData): Promise<ApiResult> {
    console.log('[GET]', data);
    return this.instance.get(getFullUrl(data.url, data.params));
  }

  POST(data: ApiClientData): Promise<ApiResult> {
    console.log('[POST]', data);
    return this.instance.post(data.url, data.params);
  }

  PUT(data: ApiClientData): Promise<ApiResult> {
    console.log('[POST]', data);
    return this.instance.put(data.url, data.params);
  }

  DELETE(data: ApiClientData): Promise<ApiResult> {
    console.log('[DELETE]', data);
    return this.instance.delete(data.url);
  }
}

function getFullUrl(url: string, params: any) {
  return [url, Object.keys(params || {}).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&')].join('?');
};