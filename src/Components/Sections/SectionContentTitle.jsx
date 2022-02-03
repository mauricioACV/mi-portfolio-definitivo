import React from "react";

export default function SectionContentTitle({title}) {
  return (
    <div className="section-title-container">
      <p className="tag-section-title">&#60;</p>
      <h2 className="section-title">{title}</h2>
      <p className="tag-section-title">&#47;&#62;</p>
    </div>
  );
}
