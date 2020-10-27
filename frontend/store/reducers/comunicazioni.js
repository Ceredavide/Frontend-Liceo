import { Alert } from "react-native"

import moment from "moment"

import * as actionTypes from "../actionTypes"
import handleError from "../../utils/handleError"

const initialState = {
  comunicazioni: [],
  tags: [],
  isLoading: false,
  isRefreshing: false,
  isLoadingPost: false,
  isLoadingEdit: false,
  error: null
};

const comunicazioniReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.FETCH_COMUNICAZIONI_START:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.FETCH_COMUNICAZIONI_SUCCESS: {

      const { comunicazioni, tags } = action.payload

      return {
        ...state,
        comunicazioni: comunicazioni.map(item => {
          return {
            ...item,
            immagine: `http://localhost:5000/${item.immagine}`,
            createdAt: moment(item.createdAt).format("DD/MM")
          }
        }),
        tags: tags,
        isLoading: false,
        error: null
      }
    }

    case actionTypes.FETCH_COMUNICAZIONI_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case actionTypes.REFRESH_COMUNICAZIONI_START:
      return {
        ...state,
        isRefreshing: true,
      }

    case actionTypes.REFRESH_COMUNICAZIONI_SUCCESS: {

      const { comunicazioni, tags } = action.payload

      return {
        ...state,
        comunicazioni: comunicazioni.map(item => {
          return {
            ...item,
            immagine: `http://localhost:5000/${item.immagine}`,
            createdAt: moment(item.createdAt).format("DD/MM")
          }
        }),
        tags: tags,
        isRefreshing: false,
        error: null
      }
    }
    case actionTypes.REFRESH_COMUNICAZIONI_ERROR:
      handleError(action.error)
      return {
        ...state,
        isRefreshing: false,
        error: action.error
      }

    case actionTypes.POST_COMUNICAZIONE_START:
      return {
        ...state,
        isLoadingPost: true
      };

    case actionTypes.POST_COMUNICAZIONE_SUCCESS:
      Alert.alert("Comunicazione inviata con successo!")
      return {
        ...state,
        comunicazioni: [...state.comunicazioni, action.comunicazione],
        isLoadingPost: false
      };

    case actionTypes.POST_COMUNICAZIONE_ERROR:
      return {
        ...state,
        isLoadingPost: false
      };

    case actionTypes.EDIT_COMUNICAZIONE_START:
      return {
        ...state,
        isLoadingEdit: true
      }
      
    case actionTypes.EDIT_COMUNICAZIONE_SUCCESS:

      const comunicazioneIdx = state.comunicazioni.findIndex(item => item._id === action.comunicazione._id)

      const newArray = state.comunicazioni.splice(comunicazioneIdx, 1, action.comunicazione)

      return {
        ...state,
        comunicazioni: newArray,
        isLoadingEdit: false
      }

    case actionTypes.EDIT_COMUNICAZIONE_ERROR:
      return {
        ...state,
        isLoadingEdit: false
      }

    case actionTypes.REMOVE_ONE_COMUNICAZIONE:
      const newComunicazioni = state.comunicazioni.filter(item => item._id !== action.id)
      return {
        ...state,
        comunicazioni: newComunicazioni
      };

    default:
      return state;
  }
};

export default comunicazioniReducer;