import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addArchive } from "../../actions/archive";
import { createMessage } from "../../actions/messages";
import { deleteReservations } from "../../actions/reservations";

const FUEL_AND_GAS = [
  ("1/4", "1/4"),
  ("2/4", "2/4"),
  ("3/4", "3/4"),
  ("4/4", "4/4")
];

export class ArchiveForm extends Component {
  state = {
    car: "Skoda Superb",
    start_date: "",
    end_date: "",
    purpose: "",
    owner: 1,
    gas: "1/4",
    fuel: "1/4",
    comment: "",
    mileage: 0
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    addArchive: PropTypes.func.isRequired,
    deleteReservations: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    const { id } = this.props.auth.user;
    e.preventDefault();

    var d = new Date();
    var today = d.toISOString().substring(0, 16);

    this.state.owner = id;
    this.state.end_date = today;
    this.state.car = this.props.car;
    this.state.purpose = this.props.purpose;
    this.state.start_date = today;

    const {
      car,
      start_date,
      end_date,
      purpose,
      owner,
      gas,
      fuel,
      comment,
      mileage
    } = this.state;
    const archive = {
      car,
      start_date,
      end_date,
      purpose,
      owner,
      gas,
      fuel,
      comment,
      mileage
    };
    console.log(archive);

    this.props.addArchive(archive);
    this.props.deleteReservations(this.props.id);
    this.setState({
      car: "Skoda Superb",
      start_date: "",
      end_date: "",
      purpose: "",
      owner: id,
      gas: "1/4",
      fuel: "1/4",
      comment: ""
    });
  };

  render() {
    const {
      car,
      start_date,
      end_date,
      purpose,
      owner,
      gas,
      fuel,
      comment,
      mileage
    } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Return the car</h2>
        <form onSubmit={this.onSubmit}>
          {this.props.car == "Skoda Octavia" ? (
            <div className="form-group">
              <label>Gas</label>
              <select
                className="form-control"
                onChange={this.onChange}
                required
                type="text"
                name="gas"
                value={gas}
              >
                <option>{FUEL_AND_GAS[0]}</option>
                <option>{FUEL_AND_GAS[1]}</option>
                <option>{FUEL_AND_GAS[2]}</option>
                <option>{FUEL_AND_GAS[3]}</option>
              </select>
            </div>
          ) : (
            ""
          )}

          <div className="form-group">
            <label>Fuel</label>
            <select
              className="form-control"
              onChange={this.onChange}
              required
              type="text"
              name="fuel"
              value={fuel}
            >
              <option>{FUEL_AND_GAS[0]}</option>
              <option>{FUEL_AND_GAS[1]}</option>
              <option>{FUEL_AND_GAS[2]}</option>
              <option>{FUEL_AND_GAS[3]}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea
              className="form-control"
              type="text"
              name="comment"
              onChange={this.onChange}
              value={comment}
            />
          </div>
          <div className="form-group">
            <label>Mileage</label>
            <textarea
              className="form-control"
              type="text"
              name="mileage"
              onChange={this.onChange}
              value={mileage}
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

export default connect(mapStateToProps, {
  addArchive,
  deleteReservations,
  createMessage
})(ArchiveForm);
