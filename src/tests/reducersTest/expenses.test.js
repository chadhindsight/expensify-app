import expensesReducer from '../../reducers/expensesReducer';

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})