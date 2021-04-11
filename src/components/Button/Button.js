import React from "react";
import PropTypes from "prop-types";

function Button({
  additionalClasses,
  handleClick,
  type,
  tabIndex,
  disabled,
  ariaLabel,
  dataTestId,
  children,
}) {
  return (
    <button
      className={`btn ${additionalClasses || ""}`}
      onClick={handleClick}
      type={type}
      tabIndex={tabIndex}
      disabled={disabled}
      data-testid={dataTestId}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  additionalClasses: PropTypes.string,
  type: PropTypes.string,
  tabIndex: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  dataTestId: PropTypes.string,
  children: PropTypes.node,
};

const PrimaryButton = (props) => (
  <Button
    {...props}
    additionalClasses={`btn--accent ${props.additionalClasses || ""}`}
  />
);
PrimaryButton.propTypes = {
  additionalClasses: PropTypes.string,
};

const InverseButton = (props) => (
  <Button
    {...props}
    additionalClasses={`btn--inverse ${props.additionalClasses || ""}`}
  />
);
InverseButton.propTypes = {
  additionalClasses: PropTypes.string,
};

const NeutralButton = (props) => (
  <Button
    {...props}
    additionalClasses={`btn--neutral ${props.additionalClasses || ""}`}
  />
);
NeutralButton.propTypes = {
  additionalClasses: PropTypes.string,
};

const DangerButton = (props) => (
  <Button
    {...props}
    additionalClasses={`btn--danger ${props.additionalClasses || ""}`}
  />
);
DangerButton.propTypes = {
  additionalClasses: PropTypes.string,
};

const IconButton = (props) => <Button {...props} />;
IconButton.propTypes = {
  additionalClasses: PropTypes.string,
};

export {
  PrimaryButton,
  InverseButton,
  NeutralButton,
  DangerButton,
  IconButton,
};
