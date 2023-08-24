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
                    // document.body.style.colorScheme = "dark"
                    document.body.style.backgroundColor = "black"
                } else {
                    state.value = Light
                    // document.body.style.colorScheme = "light"
                    document.body.style.backgroundColor = "white"
                }
            }
        }
    }
)

export const { changeMode } = themeStore.actions;
export default themeStore.reducer;