import { useState, useEffect } from 'react';

function useMergedState<T>(
  defaultStateValue: T,
  options?: { value?: T; defaultValue?: T }
): [T, (newValue: T) => void] {
  const { value, defaultValue } = options || {};

  // Initialize state: Use 'value' (controlled), 'defaultValue', or fallback to 'defaultStateValue'
  const [state, setState] = useState<T>(
    value !== undefined ? value : defaultValue !== undefined ? defaultValue : defaultStateValue
  );

  useEffect(() => {
    if (value !== undefined) {
      setState(value); // Sync state if "value" prop changes (controlled behavior)
    }
  }, [value]);

  const setMergedState = (newValue: T) => {
    if (value === undefined) {
      setState(newValue); // Update state only if uncontrolled
    }
  };

  return [state, setMergedState];
}

export default useMergedState;
