import expensesReducer from '../../reducers/expensesReducer';
import expenses from '../fixtures/expenses'

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});