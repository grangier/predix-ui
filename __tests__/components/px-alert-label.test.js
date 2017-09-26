import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import PxAlertLabel from '../../src/px-alert-label';

describe('px-alert-label', () => {
  test('should...', () =>{
    const wrapper = shallow(
      <PxAlertLabel label='Test'/>
    );
    console.log(wrapper.debug());
    expect(true).to.equal(true);
  });
  expect(wrapper.find('.label')).to.have.length(1);
  expect(wrapper.contains(<span className='label__text'>Test</span>)).to.equal(true);
});
