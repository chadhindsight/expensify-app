import selectExpenses from '../../selectors';

// array of expenses to be tested
const expenses = [{
    id: '1',
    desciprtion: 'cake',
    note: '',
    amount: 195,
    createdAt: 0
},
    {
        id: '1',
        desciprtion: 'rent',
        note: '',
        amount: 109500,
        createdAt: -1000
    },
    {
        id: '1',
        desciprtion: 'credit card',
        note: 'bill payment',
        amount: 4500,
        createdAt: 2000
    }
]
test('should filter by text value', ()=>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        EndDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]])
});