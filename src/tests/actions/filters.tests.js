import moment from 'moment';
import { setEndDate, setStartDate} from '../../actions/filters';

// Test filters for specifics
test('should generate setStartDate action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate setEndDate action object', () => {

})