import React, { useEffect } from "react";
import useDashboard from "./hooks/useDashboard.js";
import Header from "components/Header";
import { extractParameters } from "services/url";
import Dashboard from "./components/Dashboard";
import Whiteboard from "./components/Whiteboard";
import classnames from "classnames/bind";
import style from "./style.scss";
const cx = classnames.bind(style);

export default function Home() {
  const [
    data,
    onFieldChange,
    onToggleShow,
    onToggleBlockShow,
    setData
  ] = useDashboard();

  useEffect(() => {
    const parameters = extractParameters(window.location.href);
    setData(state => ({
      ...state,
      publicKey: parameters.key || "",
      roomToken: parameters.room || ""
    }));
  }, []);

  return (
    <div className={cx("main")}>
      <Header />
      <Dashboard
        data={data}
        onFieldChange={onFieldChange}
        onToggleShow={onToggleShow}
        onToggleBlockShow={onToggleBlockShow}
      />
      <div className={cx("container")}>
        <Whiteboard data={data} />
        {data.showBlock && <div className={cx("glass")} />}
      </div>
    </div>
  );
}
