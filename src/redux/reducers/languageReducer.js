import {createSlice} from '@reduxjs/toolkit';

const en = 'en'
const ru = 'ru'
const tj = 'tj'

function validateLanguage(lan) {
    switch (lan) {
        case en:
        case ru:
        case tj:
            return true
        default:
            return false
    }
}

const languageChanger = createSlice({
        name: 'languageChanger',
        initialState: {
            value: tj
        },
        reducers: {
            changeLanguage: (state, action) => {
                console.log('changeLanguage call', action.payload)
                if (validateLanguage(action.payload)) {
                    state.value = action.payload
                }
            }
        }
    }
)

export const { changeLanguage } = languageChanger.actions;
export default languageChanger.reducer;