import { writable } from 'svelte/store';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'state';

// Try to load the initial state from the cookie, or use a default value
const initialState = Cookies.get(COOKIE_NAME)
  ? JSON.parse(Cookies.get(COOKIE_NAME)) : { 
    collapsed: false, 
    showWelcome: true,
    title: '',
    frames: []
};

export const state = writable(initialState);

// Function to store state to the cookie whenever it's updated
export const storeState = (newState) => {
  state.update((currentState) => {
    const updatedState = { ...currentState, ...newState };

    // Store the updated state to the cookie
    Cookies.set(COOKIE_NAME, JSON.stringify(updatedState), { expires: 7 });

    return updatedState;
  });
};