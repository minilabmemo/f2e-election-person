import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders initial', () => {
  render(<App />);
  const initial = screen.getByText("Loading...");
  expect(initial).toBeInTheDocument();

});
// jest.setTimeout(20000);
// test('renders initial await', async () => {

//   render(<App />);

//   await waitFor(() => {
//     const linkElement = screen.getByText("競選總部");
//     expect(linkElement).toBeInTheDocument();
//   }, { timeout: 10000 }); // 將等待時間設置為 6000 毫秒（6 秒）
// });
describe('App Component', () => {
  test('renders loading message initially and then the content', async () => {
    // Render the App component
    render(<App />);

    // Assert that the loading message is initially rendered
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();

    // Wait for the image to load (assuming it's an asynchronous operation)
    // await waitFor(() => {
    //   // Assert that the loading message is not present anymore
    //   expect(loadingMessage).not.toBeInTheDocument();

    //   // Assert that the content is rendered
    //   const header = screen.getByText('Your Header Text'); // Replace with your actual header text
    //   const content = screen.getByText('Your Content Text'); // Replace with your actual content text
    //   const footer = screen.getByText('Your Footer Text'); // Replace with your actual footer text

    //   expect(header).toBeInTheDocument();
    //   expect(content).toBeInTheDocument();
    //   expect(footer).toBeInTheDocument();
    // });
  });
});
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