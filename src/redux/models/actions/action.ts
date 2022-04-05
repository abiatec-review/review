export interface SuccessAction<ActionType, DataType> {
  type: ActionType;
  payload: { data: DataType };
}

export interface FailedAction<ActionType> {
  type: ActionType;
  payload: { error: string };
}
