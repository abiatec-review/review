import { LOAD_CONTENTFUL_SUCCESS } from "redux/actions/ContentfulActions"
import { IContentfulAction } from "redux/actions/ContentfulActions/types"

export default function contentfulReducer(state = {}, action: IContentfulAction): any {
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