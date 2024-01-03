import { useDispatch } from 'react-redux';
import { TappDispatch } from '@store/index';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

export type TuseAppDispatch = ThunkDispatch<TappDispatch, undefined, AnyAction> &
    Dispatch<AnyAction>;

const useAppDispatch = () => useDispatch<TappDispatch>();
export default useAppDispatch;
