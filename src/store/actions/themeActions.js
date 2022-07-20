import * as ACTION_TYPES from "../actions/action-types"

export const changeTheme = (theme) => {
  return {
    type: ACTION_TYPES.CHANGE_THEME,
    payload: {
      theme: theme
    }
  }
}
