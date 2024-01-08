import React from "react";
import Modal from "react-modal";
import QuestButton from "./button";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  overlay: { zIndex: 1 },
};

const QuestModal = (props) => {
  const { open, setModal } = props;

  return (
    <div className="modal">
      <Modal
        isOpen={open}
        onRequestClose={() => setModal(false)}
        style={customStyles}
        // className="questModal"
        ariaHideApp={false}
      >
        <div className="modal-header">
          <h3 className="modal-title">{props?.title}</h3>
        </div>
        <div className="modal-body">{props?.body}</div>
        <br />
        <br />
        <div
          className="modal-footer"
          style={props.onCancel ? { display: "flex" } : { display: "block" }}
        >
          {props.onConfirm && (
            <QuestButton
              type="button"
              value={props.deleteText ? props.deleteText : "Confirm"}
              theme="secondary"
              onClick={() => {
                props.onConfirm();
              }}
            />
          )}
          {props.onCancel && (
            <QuestButton
              type="button"
              value={props.cancelText ? props.cancelText : "Cancel"}
              theme="primary"
              onClick={() => props.onCancel()}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default QuestModal;
