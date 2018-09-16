import React, { Component } from "react";
import Drop from "components/animation/Animate";
import Option from "./Option";

export class Select extends Component {
  static Option = Option;

  state = {
    isOpen: false,
    display: this.props.defaultValue.display || "-- choose an option --",
    value: this.props.defaultValue.value || null
  };

  onToggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };
  onChange = child => {
    const { onChange } = this.props;
    this.setState(
      state => ({
        display: child.props.children,
        value: child.props.value,
        isOpen: false
      }),
      () =>
        onChange &&
        onChange({
          isOpen: this.state.isOpen,
          display: this.state.display,
          value: this.state.value
        })
    );
  };
  render() {
    const { children } = this.props;
    const { isOpen, display } = this.state;

    return (
      <div className="selector">
        <div onClick={this.onToggle} className="selector__header">
          <div className="selector__heading">Browse by</div>
          <div className="selector__value">{display}</div>
          {isOpen ? (
            <span className="selector__icon">&uarr;</span>
          ) : (
            <span className="selector__icon">&darr;</span>
          )}
        </div>
        <Drop
          unmountOnExit
          in={isOpen}
          timeout={{
            enter: 0,
            exit: 0
          }}
        >
          {status => (
            <ul className={`selector__list drop-${status}`}>
              {React.Children.map(
                children,
                child =>
                  child.props.value !== this.state.value &&
                  React.cloneElement(child, {
                    onClick: () => this.onChange(child)
                  })
              )}
            </ul>
          )}
        </Drop>
      </div>
    );
  }
}

export default Select;
