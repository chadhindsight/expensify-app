import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

// Call our functions and assert something about the return value
test('should setup remove expense action', ()=> {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

// Setup test case
// Call editExpense
test('should setup edit action', ()=> {
    const actionTing = editExpense({id: 'boy'});
    expect(actionTing).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'boy'
    })
})