import { IResults } from '../../../models/responseTypes';

export interface ModalProps {
  closeModal: () => void,
  cardData: IResults
}
