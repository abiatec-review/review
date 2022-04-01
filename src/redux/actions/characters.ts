import { actionsTypes } from "./actionsType"


export const getCharaters = (payload: any) => {
	console.log(1, payload);
	return ({
		type: actionsTypes.GET_CHARACTERS,
		payload
	})
}

export const getCharatersSucsess = () => {
	return ({
		type: actionsTypes.GET_CHARACTERS_SUCSESS
	})
}