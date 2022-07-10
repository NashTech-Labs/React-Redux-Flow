import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Profilepage from './Profilepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('App', () => {

    let userTestData = {
        name: 'shnsj',
        email: 'sjdsjnxjs',
        password: 'djjdncjdn'
    }

    const initialState = {
        userData: {
            name: 'shnsj',
            email: 'sjdsjnxjs',
            password: 'djjdncjdn'
        }
    };
    const mockStore = configureStore();
    let store;

    store = mockStore(initialState);


    test('renders App component', () => {
        const { getByTestId } = render(<Provider store={store}><Router><Profilepage /></Router></Provider>);

        // console.log(getByTestId('DisplayData').innerHTML)

        // console.log(userTestData.name)

        expect(getByTestId('DisplayData').innerHTML).toEqual(userTestData.name)
        // await fireEvent.click(getByTestId('button1'))
        // expect(getByTestId('display')).toHaveTextContent('1')
        // await fireEvent.click(getByTestId('button2'))
        // expect(getByTestId('display')).toHaveTextContent('2')
        // await fireEvent.click(getByTestId('button3'))
        // expect(getByTestId('display')).toHaveTextContent('3')
    });
});