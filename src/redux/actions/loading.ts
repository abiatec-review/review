import { LoadingAction, LoadingActionType } from "@redux/models/actions";

export function startLoadingAction(): LoadingAction {
  return { type: LoadingActionType.START };
}

export function stopLoadingAction(): LoadingAction {
  return { type: LoadingActionType.STOP };
}
