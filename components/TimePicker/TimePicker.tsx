import { useState } from 'react';
import { Icon } from '../Icon';
import { Input, InputProps } from '../Input';

// ✅ Cap the time at 23:59 if the user enters an invalid value.
// ✅ Auto-correct single-digit hours and minutes (e.g., 12 → 12:00, 12:1 → 12:01).

export interface TimePickerProps extends Omit<InputProps, 'value' | 'onChange'> {
  value?: string;
  onChange?: (time: string) => void;
}

export const TimePicker = ({ value, onChange, ...rest }: TimePickerProps) => {
  const [time, setTime] = useState(value || '');
  const [isValid, setIsValid] = useState(true);

  const formatTime = (value: string) => {
    // Allow clearing input
    if (value === '') return '';

    // Remove non-numeric characters
    const cleaned = value.replace(/\D/g, '');

    // Format input dynamically
    const hours = cleaned.slice(0, 2);
    const minutes = cleaned.slice(2, 4);

    const hh = parseInt(hours, 10) || 0;
    const mm = parseInt(minutes, 10) || 0;

    if (hh > 23) {
      return cleaned.length >= 3 ? `${23}:${minutes}` : cleaned;
    }

    if (mm > 59) {
      return cleaned.length >= 3 ? `${hours}:${59}` : cleaned;
    }

    return cleaned.length >= 3 ? `${hours}:${minutes}` : cleaned;
  };

  const validateTime = (value: string): boolean => /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);

  const handleBlur = () => {
    if (time) {
      let [hours, minutes] = time.split(':');
      if (!minutes) minutes = '00';
      if (hours.length === 1) hours = `0${hours}`;
      if (minutes.length === 1) minutes = `0${minutes}`;

      let hh = parseInt(hours, 10);
      let mm = parseInt(minutes, 10);

      if (hh > 23) hh = 23;
      if (mm > 59) mm = 59;

      const formattedTime = `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`;

      setTime(formattedTime);
      onChange?.(formattedTime);
      setIsValid(!formattedTime || validateTime(formattedTime));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedTime = formatTime(e.target.value);
    setTime(formattedTime);
    setIsValid(!formattedTime || validateTime(formattedTime));
  };

  return (
    <Input
      value={time}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="hh:mm"
      maxLength={5} // hh:mm format
      prefix={<Icon name="icon-clock" />}
      status={isValid ? 'error' : undefined}
      {...rest}
    />
  );
};
