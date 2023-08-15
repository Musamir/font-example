import {createSlice} from '@reduxjs/toolkit';

const Light = 'light'
const Dark = 'dark'

const themeStore = createSlice({
        name: 'theme_mode',
        initialState: {
            value: Light
        },
        reducers: {
            changeMode: (state) => {
                if (state.value === Light) {
                    state.value = Dark
                } else {
                    state.value = Light
                }
            }
        }
    }
)

export const { changeMode } = themeStore.actions;
export default themeStore.reducer;