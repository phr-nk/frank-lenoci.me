import React from "react";
import Github3DSkyline from "../header/Github3DSkyline";
function my404() {
  return (
    <div className="error_section">
      <h1>Page Not Found!</h1>
      <Github3DSkyline object="404.glb" shaders={true} animation="rotate" />
    </div>
  );
}

export default my404;
