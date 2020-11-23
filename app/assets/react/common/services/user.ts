import { ApiClient, ApiResult } from './api-client';
import { get, isEmpty } from 'lodash';

export class UserSvc extends ApiClient {
	constructor() {
		super();

		this.setUrl('users');
		this.setCsrfToken(
			get(document.querySelector('[name="csrf-token"]'), 'content')
		);
	}

	buildUrl(id: string = '') {
		if (isEmpty(id)) {
			return 'users';
		}
		return `users/${id}`;
	}

	// create interfaces that looks like angularjs resource :/
	list(params: object = {}): Promise<ApiResult> {
		this.setUrl(`${this.buildUrl()}`);
		this.setParams(params);
		return this.GET(this.data);
	}

	show(id: string, params: object = {}): Promise<ApiResult> {
		this.setUrl(`${this.buildUrl(id)}`);
		this.setParams(params);
		return this.GET(this.data);
	}

	create(params: object = {}): Promise<ApiResult> {
		this.setUrl(`${this.buildUrl()}`);
		this.setParams(params);
		return this.POST(this.data);
	}
}