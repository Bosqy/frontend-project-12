import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { switchState } from '../slices/modalsSlice';

const Add = () => {
  const { t } = useTranslation();
  const opened = useSelector((state) => state.modals.opened);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(switchState(false));
  return (
    <Modal show={opened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modalAddChannel')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <pre>Здесь будет форма</pre>
      </Modal.Body>

    </Modal>
  );
};

export default Add;
