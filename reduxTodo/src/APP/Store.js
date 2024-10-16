import {configureStore} from '@reduxjs/toolkit'
import { TodoReducer } from '../Reducer/TodoSlice'

export const Store = configureStore({
    reducer: TodoReducer
})