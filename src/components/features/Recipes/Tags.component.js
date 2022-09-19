import React from "react";
import _ from "lodash";

const Tags = ({ tags }) => {
  return _.map(_.take(tags, 3), (tag) => (
    <span key={tag._id}>{tag.value}</span>
  ));
};

export default Tags;
