import { GET_WELCOME_TEXT } from "../constants/constants";

export const getWelcomeText = () => {
    return {
        type: GET_WELCOME_TEXT,
        payload: 'Welcome at my react-redux boilerplate.'
    }
}