import * as ACTION_TYPES from "../actions/action-types"

const initialState = "dark"

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CHANGE_THEME:
      return payload.theme
    default:
      return state
  }
}
