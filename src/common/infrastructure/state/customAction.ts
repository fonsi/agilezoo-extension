import { Action } from 'redux';

export default interface CustomAction extends Action {
    payload?: any;
};