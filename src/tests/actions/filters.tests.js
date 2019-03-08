import moment from 'moment';
import { setEndDate, setStartDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';

// The tests that ensure your action generators work as intended
test('should generate setStartDate action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        startDate: moment(0)
    });
});

test('should generate sort date object', ()=>{
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should generate sort by amount object', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
})

test('should generate set text filter', () => {
    const text = 'Something in';
    const filterAction = setTextFilter('Something in');
    expect(filterAction).toEqual({
        type: 'SET_TEXT_FILTER',
        text     
    })
});

test('should have set text filter defaults', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})