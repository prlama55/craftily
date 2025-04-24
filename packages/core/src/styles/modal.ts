export default {
  ".modal": {
    display: "none",
    position: "fixed",
    zIndex: 10,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  ".modal-content": {
    backgroundColor: "white",
    margin: "5% auto",
    padding: "2rem",
    borderRadius: "var(--radius-md, 0.2rem)",
    width: "90%",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },
  ".modal-header": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem"
  },
  ".modal-header h2": {
    margin: 0
  },
  ".close": {
    fontSize: "1.5rem",
    cursor: "pointer"
  }
};
