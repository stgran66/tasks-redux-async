export const getTasks = state => state.tasks.items;

export const getIsLoading = state => state.tasks.getIsLoading;

export const getError = state => state.tasks.error;

export const getStatusFilter = state => state.filter.value;
