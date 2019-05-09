import { useState, useCallback } from "react";

export default function useDashboard(
  initState = {
    userID: "",
    show: false,
    showBlock: false,
    publicKey: "",
    roomToken: ""
  }
) {
  const [data, setData] = useState(initState);

  const onFieldChange = useCallback(
    field => e => {
      const { value } = e.target;
      setData(state => ({
        ...state,
        [field]: value
      }));
    },
    []
  );

  const onToggleShow = useCallback(() => {
    setData(state => ({
      ...state,
      show: !state.show
    }));
  }, []);

  const onToggleBlockShow = useCallback(() => {
    setData(state => ({
      ...state,
      showBlock: !state.showBlock
    }));
  }, []);

  return [data, onFieldChange, onToggleShow, onToggleBlockShow, setData];
}
