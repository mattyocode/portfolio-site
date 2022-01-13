import { Reducer, useReducer, useCallback } from 'react';

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

type ResponseData = { [key: string]: string };

type ErrorMessage = { [key: string]: string };

type State = {
  status: string;
  data?: ResponseData | null;
  error?: ErrorMessage | null;
};

type ACTIONTYPE =
  | { type: 'SEND' }
  | { type: 'SUCCESS'; responseData: ResponseData }
  | { type: 'ERROR'; errorMessage: ErrorMessage };

function httpReducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case 'SEND':
      return {
        data: null,
        error: null,
        status: 'pending',
      };
    case 'SUCCESS':
      return {
        data: action.responseData,
        error: null,
        status: 'succeeded',
      };
    case 'ERROR':
      return {
        data: null,
        error: action.errorMessage,
        status: 'rejected',
      };
    default:
      return state;
  }
}

export default function useHttp(requestFunction: (arg: any) => Promise<any>): {
  data?: ResponseData | null;
  error?: ErrorMessage | null;
  status: string;
  sendRequest: (requestData: { [key: string]: string }) => Promise<void>;
} {
  const [httpState, dispatch] = useReducer<Reducer<State, ACTIONTYPE>>(
    httpReducer,
    initialState
  );

  const sendRequest = useCallback(
    async function (requestData: { [key: string]: string }): Promise<void> {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error: any) {
        dispatch({
          type: 'ERROR',
          errorMessage: error.message || 'An error occurred',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}
