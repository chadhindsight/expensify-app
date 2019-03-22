import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expensesSelector'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 6900}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'Booty bill', amount: 1095 }));
store.dispatch(setTextFilter('water'));


const state = store.getState()
const visiblexpenses = getVisibleExpense(state.expenses, state.filters);
console.log(visiblexpenses);
const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
