// import

import {charactersService} from "./axios/endpoints/charecters";
import {episodesService} from "./axios/endpoints/episodes";
import {authService} from "./firebase/endpoints/auth";

export const axiosEndpoints = {
    charactersService,
    episodesService
}

export const firebaseEndpoints = {
    authService
}