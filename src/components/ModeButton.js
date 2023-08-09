import { useSelector, useDispatch } from "react-redux";
import { darkMode, lightMode } from "./ModeSlice";

export default function ModeButton() {
  const mode = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ "background-color": mode.color4 }}>
      <button
        onClick={() =>
          mode.darkMode ? dispatchEvent(lightMode()) : dispatchEvent(darkMode())
        }
      >
        {mode.darkMode ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}
