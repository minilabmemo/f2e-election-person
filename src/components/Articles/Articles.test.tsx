import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Articles from './Articles';
import a2_photo from "../../assets/images/a2_photo.png"
import a2_photo_webp from "../../assets/images/a2_photo.webp"

const mockOpenModal = jest.fn();// Mock openModal function

describe('Articles Component toBeCalledTimes', () => {
  it('should render the button and handle click event', () => {
    const { getByText } = render(<Articles openModal={mockOpenModal} />);
    const button = getByText('查看更多');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockOpenModal).toBeCalledTimes(1);
  });
});

// jest.mock('../../utils/articles_config', () => ({  //FIXME mock data failed CRA issue? ...
//   __esModule: true,
//   ...jest.requireActual('../../utils/articles_config'),
//   articleItems: [
//     {
//       imageNode: <img src="mock_image_1.jpg" alt="Mock Image 1" />,
//       time: '2023-01-01',
//       title: 'Mock Article 1',
//       content: 'Mock content 1',
//     },
//     // ...mock data for other articles
//   ],
// }));

describe('Articles Component', () => {
  it('should render the button and handle click event', () => {
    const { getByText } = render(<Articles openModal={mockOpenModal} />);
    const button = getByText('查看更多');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockOpenModal).toHaveBeenCalledWith(
      {
        time: '2023/12/25',
        title: '一起參與台北聖誕寵物論壇，裝扮大賽等你',
        content: '聖誕寵物裝扮，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
        imageNode: <picture>
          <source
            srcSet={a2_photo_webp}
            type="image/png" />
          <img alt="article_photo" src={a2_photo} />
        </picture>
      },
      4
    );
  });
});
