
/**
 * 
 * @param {*} param0 
 * @returns 
 */
const Modal = ({ onClose }) => {
    return (
      <div style={backdropStyle} onClick={onClose}>
        <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
          <h2>Modal Title</h2>
          <p>This is a pop-up modal.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
  };
  