import { GET_WELCOME_TEXT } from "../constants/constants";

const INITIAL_STATE = {
    welcometext: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_WELCOME_TEXT:
            return { ...state, welcometext: action.payload };
        default:
            return { ...state };
    }
}