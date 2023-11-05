import * as types from './course.actionTypes';

const initState={
    isLoading:false,isError:false,coursesData:[]
}

export const courseReducer=(state=initState,{type,payload})=>{

switch(type){

    case types.GET_COURSES_REQUEST  :{return{...state,isLoading:true,isError:false}}
    case types.GET_COURSES_SUCCESS  :{return{...state,isLoading:false,isError:false,coursesData:payload}}
    case types.GET_COURSES_FAILURE  :{return{...state,isLoading:false,isError:true}}



    default: return state;
}

}