import React, { useReducer } from 'react'

function useSetState(initialState: unknown) {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState,
  )

  return [state, setState]
}

export { useSetState }