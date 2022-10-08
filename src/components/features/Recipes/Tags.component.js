import React from "react";
import _ from "lodash";
import Tag from "./Tag.component";

const Tags = ({ tags }) => {
  return _.map(_.take(tags, 3), ({ value, _id }) => (
    <Tag key={_id} value={value} />
  ));
};

export default Tags;
