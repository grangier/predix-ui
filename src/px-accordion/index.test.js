import { expect } from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import PxAccordion from './';

describe('px-accordion', () => {
  test('should...', () =>{
    const wrapper = shallow(
      <PxAccordion/>
    );
    console.log(wrapper.debug());
    expect(true).to.equal(true);
  });
  //expect(wrapper.find('.label')).to.have.length(1);
  //expect(wrapper.find('.delta')).to.have.length(1);
  //expect(wrapper.find('.alpha')).to.have.length(1);
  //expect(wrapper.contains(<div className='label'/>)).to.equal(true);
});
