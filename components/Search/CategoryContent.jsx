import React from "react";

const CategoryContent = (props) => {
  return (
    <div className="search_body__description">
      <div className="search_body__description__content u-margin-bottom-medium" dangerouslySetInnerHTML={{ __html: (props.description) ? props.description : '' }} />
    </div>
  );
};

export default CategoryContent
