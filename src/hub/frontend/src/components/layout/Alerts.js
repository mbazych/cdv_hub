import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.car)
        alert.error("There was an error. Please select the car again.");
      if (error.msg.start_date) alert.error("Select the proper starting date.");
      if (error.msg.end_date) alert.error("Select the proper ending date.");
      if (error.msg.purpose)
        alert.error(
          "Please fill the purpose field. It should be between 1 to 32 characters."
        );
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.name.join());
    }

    if (message !== prevProps.message) {
      if (message.invalidDate) alert.error(message.invalidDate);
      if (message.reservationAdded) alert.success(message.reservationAdded);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
      if (message.carRented) alert.success(message.carRented);
      if (message.wrongUser) alert.error(message.wrongUser);
      if (message.archiveAdded) alert.success(message.archiveAdded);
      if (message.invalidPassword) alert.error(message.invalidPassword);
      if (message.invalidEndDate) alert.error(message.invalidEndDate);
      if (message.invalidStartDate) alert.error(message.invalidStartDate);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert(Alerts));
