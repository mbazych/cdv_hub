import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getArchive } from "../../actions/archive";
import { createMessage } from "../../actions/messages";
export class ArchiveList extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    archive: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getArchive();
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="mt-4">
        <Fragment>
          <h1 className="text">
            <strong>Archive list</strong>
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
                <th>Gas</th>
                <th>Fuel</th>
                <th>Comment</th>
                <th>Mileage</th>
              </tr>
            </thead>
            <tbody>
              {this.props.archive.map(archive => (
                <tr key={archive.id}>
                  <td>{archive.id}</td>
                  <td>{archive.car}</td>
                  <td>{archive.start_date}</td>
                  <td>{archive.end_date}</td>
                  <td>{archive.purpose}</td>
                  <td>{archive.owner}</td>
                  <td>{archive.gas}</td>
                  <td>{archive.fuel}</td>
                  <td>{archive.comment}</td>
                  <td>{archive.mileage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  archive: state.archive.archive,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getArchive
})(ArchiveList);
