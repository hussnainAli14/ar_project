export const initialState='none';
export const reducer = (state,action)=>{
     if(action.type==='user'){
        return action.payload ;
     }
     else if(action.type === 'admin'){
        return action.payload;
     }
     else if (action.type === 'none'){
        return action.payload;
     }
     return state;
}