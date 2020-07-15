import React, { Fragment } from "react";
import ArchiveList from "./ArchiveList";
import ArchiveForm from "./ArchiveForm";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="popup">
        <div className="popup_inner">
          <ArchiveList />
        </div>
      </div>
    </Fragment>
  );
}
