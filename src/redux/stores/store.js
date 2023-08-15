import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../reducers/ThemeReducer';
import languageReducer from '../reducers/languageReducer';

console.log('themeReducer ==>',themeReducer)
console.log('languageReducer ==>',languageReducer)

export default configureStore({
    reducer: {
        themeStore: themeReducer,
        languageStore: languageReducer
    }
});