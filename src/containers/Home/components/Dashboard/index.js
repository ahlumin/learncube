import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

const Dashboard = ({ data, onFieldChange, onToggleShow }) => {
  return (
    <div className={cx("dashboard")}>
      <div className={cx("field")}>
        <label>User ID </label>
        <input
          type="text"
          value={data.userID}
          onChange={onFieldChange("userID")}
        />
      </div>

      <button onClick={onToggleShow}>Log In</button>
    </div>
  );
};

Dashboard.propTypes = {
  data: PropTypes.shape({
    userID: PropTypes.string.isRequired
  }),
  onFieldChange: PropTypes.func.isRequired,
  onToggleShow: PropTypes.func.isRequired
};

export default Dashboard;
