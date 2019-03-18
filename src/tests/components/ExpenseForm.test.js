import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () =>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
});

test('should render form with data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[2]}/>)
    expect(wrapper).toMatchSnapshot();

})