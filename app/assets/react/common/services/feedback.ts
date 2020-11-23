import { ApiClient, ApiResult } from './api-client';
import { get, isEmpty } from 'lodash';

export class FeedbackSvc extends ApiClient {
	constructor() {
		super();

		this.setUrl('feedbacks');
		this.setCsrfToken(
			get(document.querySelector('[name="csrf-token"]'), 'content')
		);
	}

	buildUrl(id: string = '') {
		if (isEmpty(id)) {
			return 'feedbacks';
		}
		return `feedbacks/${id}`;
	}

	// create interfaces that looks like angularjs resource :/
	list(url: string = '', params: object = {}): Promise<ApiResult> {
		this.setUrl(`${this.buildUrl()}${url}`);
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