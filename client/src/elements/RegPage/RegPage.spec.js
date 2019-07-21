import React from 'react';
import { shallow, mount } from 'enzyme';

import RegPage from './index';
import ErrorCMP from '../common/ErrorCMP';
import FormSubmit from '../common/FormSubmit';
describe("Chain of RegPage tests", () => {
	let RegPageComponent;
	beforeEach(() => {
		RegPageComponent = mount(<RegPage />);
	});
	afterEach(() => {
		RegPageComponent.unmount();
	})
	it("RegPage testing error", () => {
		RegPageComponent.setState({ error: 'error'});
		expect(RegPageComponent.find(ErrorCMP).length).toBe(1);
	});
	it("RegPage input test", () => {
		const submit = RegPageComponent.find(FormSubmit);
		submit.simulate("click");
		expect(RegPageComponent.find(ErrorCMP).length).toBe(1);
	})
})