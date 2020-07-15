import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getReservations,
  deleteReservations
} from "../../actions/reservations";
import ArchiveForm from "../archive/ArchiveForm";
import Popup from "reactjs-popup";

export class Reservations extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    reservations: PropTypes.array.isRequired,
    getReservations: PropTypes.func.isRequired,
    deleteReservations: PropTypes.func.isRequired
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
            <strong>Active reservations</strong>
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
                <th>End reservation</th>
              </tr>
            </thead>
            <tbody>
              {this.props.reservations.map(reservations =>
                reservations.active == true ? (
                  <tr key={reservations.id}>
                    <td>{reservations.id}</td>
                    <td>{reservations.car}</td>
                    <td>{reservations.start_date}</td>
                    <td>{reservations.end_date}</td>
                    <td>{reservations.purpose}</td>
                    <td>{reservations.owner}</td>

                    <td>
                      {reservations.owner == user.id ? (
                        <Popup
                          trigger={
                            <button className="btn btn-sm btn-success">
                              {" "}
                              Return the car
                            </button>
                          }
                          position="right center"
                        >
                          <ArchiveForm
                            id={reservations.id}
                            car={reservations.car}
                            start_date={reservations.end_date}
                            purpose={reservations.purpose}
                          />
                        </Popup>
                      ) : (
                        <button className="btn btn-sm btn-success" disabled>
                          Return the car
                        </button>
                      )}
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
  deleteReservations
})(Reservations);
