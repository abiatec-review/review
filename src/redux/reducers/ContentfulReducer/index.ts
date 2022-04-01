
import { LOAD_CONTENTFUL, LOAD_CONTENTFUL_SUCCESS } from "../../actions/ContentfulActions"

const initialState: any = {
  items: []
}

export default function contentfulReducer(state = initialState, action: any): any {
  switch (action.type) {
    case LOAD_CONTENTFUL_SUCCESS: {
      return {
        ...state,
        ...action.payload
      }
    }
        default: return state
  }
  
}