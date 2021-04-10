import React from "react";
import PropTypes from "prop-types";

function Input({
  labelText,
  placeholder,
  type,
  name,
  role,
  isLabelHidden,
  containerClass,
  isRequired,
  describedBy,
  autoComplete,
  minLength,
  value,
  handleChange,
  tabIndex,
  handleBlur,
  children,
}) {
  return (
    <div className={`form-group ${containerClass}`}>
      <label
        className={`form-group__label${isLabelHidden ? " sr-only" : ""}`}
        htmlFor={name}
      >
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        role={role}
        isLabelHidden={isLabelHidden}
        autoComplete={autoComplete}
        aria-required={isRequired}
        aria-describedby={describedBy}
        required={isRequired}
        minLength={minLength}
        className="form-group__input"
        tabIndex={tabIndex}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {children}
    </div>
  );
}

const InputText = (props) => <Input {...props} type="text" />;
const InputEmail = (props) => (
  <Input {...props} type="email" autoComplete="email" isRequired />
);
const InputPassword = (props) => (
  <Input
    {...props}
    type="password"
    minLength={props.minLength || 8}
    autoComplete="current-password"
    isRequired
  />
);

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  isRequired: PropTypes.bool,
  containerClass: PropTypes.string,
  isLabelHidden: PropTypes.string,
  describedBy: PropTypes.string,
  autoComplete: PropTypes.string,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  tabIndex: PropTypes.string,
  handleBlur: PropTypes.func,
  children: PropTypes.node,
};

InputPassword.propTypes = {
  minLength: PropTypes.number,
};

export default Input;
export { InputText, InputEmail, InputPassword };
