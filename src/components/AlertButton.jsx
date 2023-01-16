import { Info } from "@mui/icons-material";
import { Button } from "@mui/material";

// AlertButton.js
function AlertButton() {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => alert("Alert Button Clicked!")}
        color="info"
        startIcon={<Info />}
      >
        Alert Button
      </Button>
    </div>
  );
}
export default AlertButton;
