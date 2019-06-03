import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

const Whiteboard = ({ data }) => {
  const pubKey = data.publicKey;
  const roomToken = data.roomToken;

  return (
    <div className={cx("whiteboard")}>
      {data.show && (
        <iframe
          width="100%"
          height="100%"
          allow="microphone; camera"
          src={`https://app.learncube.com/api/virtual-classroom/class/start/?pub_key=${pubKey}&room_token=${roomToken}&userid=${
            data.userID
          }`}
        />
      )}
    </div>
  );
};

Whiteboard.propTypes = {
  data: PropTypes.shape({
    userID: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
  })
};

export default Whiteboard;
