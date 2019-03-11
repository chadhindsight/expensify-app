import expensesReducer from '../../reducers/expensesReducer';
import expenses from '../fixtures/expenses'

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expenses if id not found', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
// should add expense
test('should add an expense', ()=>{
   const expense = {
        id: '120',
        description: 'new laptop',
        note: '',
        createdAt: 2000,
        amount: 29500
   };
   const action = {
       type: 'ADD_EXPENSE',
       expense
   };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual([...expenses, expense])
});
// should edit expense
test('should edit expense', ()=>{
    const amount = 1220;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

//NOT
est('should not edit expense if id not found', () => {
    const amount = 1220;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});