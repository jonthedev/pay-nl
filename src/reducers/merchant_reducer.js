const merchants_reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'FETCH_MERCHANTS_LOADING':
      return { ...state, merchants_loading: true }

    case 'FETCH_MERCHANTS':
      return {
        ...state,
        merchants_loading: false,
        merchants: payload
      }

    case 'FETCH_MERCHANTS_ERROR':
      return {
        ...state,
        merchants_loading: false,
        merchants_error: true
      }

    default:
      throw new Error(`No Matching "${type}" - action type`)
  }
}

export default merchants_reducer
