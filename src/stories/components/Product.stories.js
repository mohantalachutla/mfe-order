import { fn } from '@storybook/test';
import Order from '../../components/Order';
import { appleWatch } from '../assets';

export default {
  title: 'Components/Product',
  component: Order,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    addToCart: fn(),
  },
};

export const Default = {
  args: {
    name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    description: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    price: 599,
    image: appleWatch,
    rating: 3,
  },
};
