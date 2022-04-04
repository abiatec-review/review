export const enum LoadingActionType {
  START = "START",
  STOP = "STOP"
}

export interface LoadingAction {
  type: LoadingActionType;
}
