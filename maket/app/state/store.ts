import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReduser = combineReducers({});

const store = configureStore({
    reducer: rootReduser,
});
export default store;

export type TrootState = ReturnType<typeof store.getState>;
export type TappDispatch = typeof store.dispatch;
