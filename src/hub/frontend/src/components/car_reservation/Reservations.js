import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getReservations,
  deleteReservations,
  addRental
} from "../../actions/reservations";
import { createMessage } from "../../actions/messages";
export class Reservations extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    reservations: PropTypes.array.isRequired,
    getReservations: PropTypes.func.isRequired,
    deleteReservations: PropTypes.func.isRequired,
    addRental: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getReservations();
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <Fragment>
          <h1 className="text">
            <strong>Unactive reservations</strong>
          </h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Car</th>
                <th>Starting date</th>
                <th>Ending date</th>
                <th>Purpose</th>
                <th>Who</th>
                <th>Rent the car</th>
              </tr>
            </thead>
            <tbody>
              {this.props.reservations.map(reservations =>
                reservations.active == false ? (
                  <tr key={reservations.id}>
                    <td>{reservations.id}</td>
                    <td>{reservations.car}</td>
                    <td>{reservations.start_date}</td>
                    <td>{reservations.end_date}</td>
                    <td>{reservations.purpose}</td>
                    <td>{reservations.owner}</td>
                    <td>
                      <button
                        onClick={a =>
                          user.id == reservations.owner
                            ? this.props.addRental.bind(
                                this,
                                reservations.id
                              )(this.props.getReservations())
                            : this.props.createMessage.bind({
                                wrongUser:
                                  "You can't rent other people's reservations."
                              })
                        }
                        className="btn-success btn-sm btn"
                      >
                        Rent
                      </button>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reservations: state.reservations.reservations,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getReservations,
  deleteReservations,
  addRental,
  createMessage
})(Reservations);
