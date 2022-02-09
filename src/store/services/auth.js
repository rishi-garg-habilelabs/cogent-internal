import request from '../../utils/request';

export const getTodos = () => request.get('todos');

export const getTodo = () => request.get('todos');
