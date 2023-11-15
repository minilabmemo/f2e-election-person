import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react headers link', () => {
//   render(<App />);
//   const linkElement = screen.getByText("候選人主張", { selector: 'a' });
//   expect(linkElement).toBeInTheDocument();
// });

test('no overflow elements should be found', () => {
  let hasOverflowElement = false;
  render(<App />);
  document.querySelectorAll('*').forEach((elem) => {
    const elementWithOffsetWidth = elem as HTMLElement; // Type assertion
    if (elementWithOffsetWidth.offsetWidth > document.documentElement.offsetWidth) {
      console.log('Problem child: ', elementWithOffsetWidth);
      hasOverflowElement = true;
      // console.log('Text content: ', elementWithOffsetWidth.textContent);

      // console.log('Attributes: ', elementWithOffsetWidth.attributes);
      // console.log('Child elements: ', elementWithOffsetWidth.children);
    }
    // console.log("check", elem.className)
    expect(hasOverflowElement).toBeFalsy();
  });
});