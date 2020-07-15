import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addReservations } from "../../actions/reservations";
import { createMessage } from "../../actions/messages";

const CAR_CHOICES = [
  ("Skoda Superb", "Skoda Superb"),
  ("Skoda Octavia", "Skoda Octavia")
];

export class Form extends Component {
  // redux state
  state = {
    car: "Skoda Superb",
    start_date: new Date().toISOString().substring(0, 16),
    end_date: new Date().toISOString().substring(0, 16),
    purpose: "",
    owner: 1,
    formValid: false,
    endDateValid: false,
    startDateValid: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    addReservations: PropTypes.func.isRequired
  };

  // onChange function that changes value of forms on user input
  // onChange = e =>
  //   this.setState({ [e.target.name]: e.target.value }, () => {
  //     this.validateField(e.target.name, e.target.value);
  //   });
  onChange = e => this.handleUserInput(e);

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => this.validateField(name, value));
  }

  // field validator
  validateField(fieldName, value) {
    let startDateValid = this.state.startDateValid;
    let endDateValid = this.state.endDateValid;

    switch (fieldName) {
      case "start_date":
        // check if start_date is atleast today's date
        var d = new Date();
        var today = d.toISOString().substring(0, 16);

        if (value > today) {
          this.setState({
            start_date: value
          });
          startDateValid = true;
        }

        break;
      case "end_date":
        // check if end_date is atleast today's date
        var d = new Date();
        var today = d.toISOString().substring(0, 16);

        if (value > today && value > this.state.start_date) {
          endDateValid = true;
        }
        break;
    }
    this.setState(
      {
        endDateValid: endDateValid,
        startDateValid: startDateValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.endDateValid && this.state.startDateValid
    });
  }

  // onSubmit function that is run when form is submitted
  onSubmit = e => {
    const { id, username, email } = this.props.auth.user;
    e.preventDefault();

    this.state.owner = id;

    // map state to variables and create reservation object
    const { car, start_date, end_date, purpose, owner } = this.state;
    const reservation = { car, start_date, end_date, purpose, owner };

    if (this.state.formValid) {
      this.props.addReservations(reservation);
      this.setState({
        car: "Skoda Superb",
        start_date: new Date().toISOString().substring(0, 16),
        end_date: new Date().toISOString().substring(0, 16),
        purpose: "",
        owner: id
      });
    } else {

      this.props.createMessage({
        invalidDate: "Select proper starting or ending date."
      });
    }
  };

  render() {
    const { car, start_date, end_date, purpose, owner } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Reservations</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Car</label>
            <select
              className="form-control"
              onChange={this.onChange}
              required
              type="text"
              name="car"
              value={car}
            >
              <option>{CAR_CHOICES[0]}</option>
              <option>{CAR_CHOICES[1]}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start date</label>
            <input
              className="form-control"
              type="datetime-local"
              name="start_date"
              onChange={this.onChange}
              value={start_date}
              min={start_date}
              max="2021-12-30T00:00"
            />
          </div>
          <div className="form-group">
            <label>End date</label>
            <input
              className="form-control"
              type="datetime-local"
              name="end_date"
              onChange={this.onChange}
              value={end_date}
              min={end_date}
              max="2020-12-31T00:00"
            />
          </div>
          <div className="form-group">
            <label>Purpose</label>
            <textarea
              className="form-control"
              type="text"
              name="purpose"
              onChange={this.onChange}
              value={purpose}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addReservations, createMessage })(
  Form
);
