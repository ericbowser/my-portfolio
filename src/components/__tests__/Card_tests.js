/** @type {import('jest').Config} */
import jest from 'jest';
import {expect, it, describe, test, afterEach} from '@jest/globals';
import {waitFor, render, getByText, getByLabelText, getByTestId} from '@testing-library/react';
import {defaults} from 'jest-config';
import Cards from '../Cards';

describe('the Card component', () => {
  it.only('renders', () => {
    const {getByTestId} = render(<Cards/>);
    
    expect(getByTestId('CardSkill')).toHaveLength(1);

  });
})