import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage:{
            posts :[
                {id:1, message:'Hi, how are yoy', like:15},
                {id:2, message:'It is my first post!', like:20},
            ],
            newPostText:''
        },
    
        dialogsPage:{
            dialogs :[
                {id:1, name:'Sergey'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sveta'},
                {id:4, name:'Sacha'},
                {id:5, name:'Viktor'},
                {id:6, name:'Valera'},
            ],
            messages : [
                {id:1, message:'Hi'},
                {id:2, message:'How are you'},
                {id:3, message:'Yo'},
                {id:4, message:'Yo'},
                {id:5, message:'You'},
            ],
            newMessageBody:''
        },
        sidebar:{}
    },

    getState(){
        return this._state;
    },

    _callSubscriber() {
        console.log('state');
    },
    
    subscribe (observer){
        this._callSubscriber=observer;
    },

    dispatch(action) {

        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);

      this._callSubscriber(this._state);
    }

}
  
export default store;