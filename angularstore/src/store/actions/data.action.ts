import { Action } from '@ngrx/store';
import { DataActionTypes } from '../data-action-types.enum';


export class DataAction{
    type : DataActionTypes.Add
    constructor(private payload: any){} 
}