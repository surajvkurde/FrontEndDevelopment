export function allContactsReducer(state=[
    {
        id:0,
        name:"Suraj Kurde",
        mobile:"9898989898",
        email:"surajkurde@gmail.com",
        isFav:false
    },
    {
        id:1,
        name:"Suraj V Kurde",
        mobile:"9898989898",
        email:"surajkurde4@gmail.com",
        isFav:false
    },
    {
        id:3,
        name:"Suraj Vishnu Kurde",
        mobile:"9898989898",
        email:"surajkurde3@gmail.com",
        isFav:false
    }
], action){
    switch(action.type){
        case 'NEW_CONTACT':
            return [...state,{...action.payload,isFav:false,id:(state?state[state.length-1].id+1:0)}];
        case 'TOGGLE_FAV':
            let copyState=[...state]
            state.forEach((element,i)=>{
                if(action.payload===element.id){
                    copyState[i].isFav=!state[i].isFav;
                }
            })
            return copyState;
        default :
            return state;
    }
}