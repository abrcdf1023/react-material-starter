import { handleOpen, handleClose, setTitle, setMessage } from './actions';

export const HANDLE_OPEN = handleOpen().type;
export const HANDLE_CLOSE = handleClose().type;
export const SET_TITLE = setTitle().type;
export const SET_MESSAGE = setMessage().type;
