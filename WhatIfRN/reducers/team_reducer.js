const _state = {
  team: {},
  members: 0
}

export default (state = _state, action) => {
  switch (action.type) {
    case "RECEIVE_TEAM":
      return Object.assign({}, state, { team: action.team, members: action.members });
    case "RECEIVE_TEAM_AND_USER":
      return Object.assign({}, state, { team: action.team, members: action.members });
    default:
      return state;
  }
}