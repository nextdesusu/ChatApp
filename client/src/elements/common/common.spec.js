import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe("Chain of Input tests", () => {
	let inputComponent;
	const inputClass = ".form__inputForm";
	beforeEach(() => {
		inputComponent = shallow(
			<Input 
				name = "text" 
				label = "input" 
				type = "text" 
				bindTo = "someText" 
				handleFunction = {function(){}}
			/>
		);
	});
	it("Input is input component", () => {
		expect(inputComponent.text()).toEqual("input");
	});
	it("Have a class " + inputClass, () => {
		expect(inputComponent.find(inputClass)).toHaveLength(1);
	});
})