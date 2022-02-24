import React, { useEffect, useContext, useReducer } from 'react'
import axios from 'axios'

import merchant_reducer from '../reducers/merchant_reducer'
import { MERCHANT_URL } from '../utils/constants'

const initialState = {
  merchants: [],
  merchants_loading: false,
  merchants_error: false
}

const MerchantContext = React.createContext()

export const MerchantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(merchant_reducer, initialState)

  useEffect(() => {
    getMerchants()
  }, [])

  const getMerchants = async () => {
    dispatch({ type: 'FETCH_MERCHANTS_LOADING' })
    try {
      const { data: merchants } = await axios.get(MERCHANT_URL)
      dispatch({ type: 'FETCH_MERCHANTS', payload: merchants })
    } catch (error) {
      dispatch({ type: 'FETCH_MERCHANTS_ERROR' })
    }
  }

  return (
    <MerchantContext.Provider value={{ ...state }}>
      {children}
    </MerchantContext.Provider>
  )
}

export const useMerchantContext = () => {
  return useContext(MerchantContext)
}
