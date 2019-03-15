// react-test-renderer for components
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', ()=>{
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1').length).toBe(1);

    
});
