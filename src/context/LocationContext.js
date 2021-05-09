import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch(action.type){
        case 'add_current_location':
            return{...state, currentLocation: action.payload};
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] };
        default:
            return state;
    }
};

const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location });
    if(recording){
        dispatch({type: 'add_location', payload: location});
    }
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    { addLocation },
    { locations: [], currentLocation: null}
    
);