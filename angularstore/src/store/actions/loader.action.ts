import { Action } from '@ngrx/store'
import { LoadActionTypes } from '../load-actions-type.enum'

export class LoadActionParent implements Action{
    type: any;
    payload: any
}

export class LoadAction implements LoadActionParent{
    type : LoadActionTypes.Start
    constructor(public payload: any){}
}