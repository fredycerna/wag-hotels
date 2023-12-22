import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

interface InputFieldProps {
  labelFor: string;
  labelText: string;
  type: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  labelFor,
  labelText,
  type,
  id,
  value,
  placeholder,
  onChange,
}) => (
  <div>
    <label htmlFor={labelFor} className={styles.inputLabel}>
      {labelText}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      aria-label={labelText}
    />
  </div>
);

InputField.propTypes = {
  labelFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
