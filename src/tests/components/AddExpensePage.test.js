import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;
// Allows us to reuse these spy functions and wrappers
beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
// on Submit test
test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});

