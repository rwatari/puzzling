import React from 'react';
import {isEmpty} from 'lodash';

const ScrollingPreview = ({header, content, noContentMessage}) => {
  let scrollingContent;
  if (isEmpty(content)) {
    scrollingContent = <h5>{noContentMessage}</h5>;
  } else {
    const scrollingItems = Object.keys(content).map(id => (
      <li key={id}>
        <h5>{content[id].title}</h5>
      </li>
    ));
    
    scrollingContent = <ul>{scrollingItems}</ul>;
  }

  return (
    <div className='scrolling-preview'>
      <h4>{header}</h4>
      <div className='scroll-content'>
        {scrollingContent}
      </div>
    </div>
  );
};

export default ScrollingPreview;
