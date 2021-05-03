import React from 'react';
import './FormTitle.css';

const FormTitle = ({children, className="", heading}) => {
  return (
    <h2 className={`form__title ${className}`}>
      {heading ? heading : children}
    </h2>
  );
}

/*TODO_REVIEW: можно обернуть в memo дл оптимизации производительности, 
  чтоб реакт не перерендеривал этот компонент каждый раз, так как он статичен.

  Это делается вот так:
  import React, { memo } from 'react'
  export default memo(FormTitle);
*/
export default FormTitle;
