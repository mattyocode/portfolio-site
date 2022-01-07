import { useReducer, useCallback } from 'react';

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

type State = {
  status: string;
  data?: { [key: string]: string } | null;
  error?: { [key: string]: string } | null;
};

type ResponseData = { [key: string]: string };

type ErrorMessage = { [key: string]: string };

type ACTIONTYPE =
  | { type: 'SEND' }
  | { type: 'SUCCESS'; responseData: ResponseData }
  | { type: 'ERROR'; errorMessage: ErrorMessage };

function httpReducer(state: State, action: ACTIONTYPE) {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'succeeded',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'rejected',
    };
  }
}

export default function useHttp(
  requestFunction: (arg0: { [key: string]: string }) => Promise<{
    detail: string;
  }>
): {
  data: ResponseData;
  error: any;
  status: string;
  sendRequest: (requestData: any) => Promise<any>;
} {
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
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
