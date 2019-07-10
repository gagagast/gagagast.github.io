import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import Image from '.';
import beard from '../../../assets/beard.jpg';

storiesOf('Components/Image', module)
  .addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Default', () => <Image />)
  .add('Circle with fallback', () => <Image isCircle />)
  .add('With src', () => <Image src={beard} />)
  .add('Circle with src', () => <Image src={beard} isCircle />)
  .add('With knobs', () => {
    const width = number('Width', 300);
    const height = number('Height', 300);
    const src = boolean('With source', false);
    const alt = text('Alt', 'some image');
    return (
      <Image
        width={width}
        height={height}
        src={src ? beard : undefined}
        alt={alt}
      />
    );
  });

const StoryWrapper = styled.div`
  padding: 20px;
`;
