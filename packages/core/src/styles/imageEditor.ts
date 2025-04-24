export default {
  ".image-preview": {
    "text-align": "center",
    "margin-bottom": "1rem"
  },
  ".image-preview img": {
    "max-width": "100%",
    height: "auto",
    "border-radius": "8px",
    transition: "filter 0.3s ease"
  },
  ".controls": {
    display: "flex",
    "flex-direction": "column",
    gap: "1rem"
  },
  ".control": {
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center"
  },
  ".control label": {
    flex: 1
  },
  ".control input[type='range']": {
    flex: 2
  }
};
