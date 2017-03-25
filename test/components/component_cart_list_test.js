import { renderComponent, expect } from '../test_helper';
import ComponentCartList from '../../src/components/component_cart_list';

describe('component_cart_list', () => {
  let component;
  beforeEach(() => {
    const props = {
      itemsInsideCart: [{ title: 'a title' }, { title: 'another title' }, { title: 'yet another title' }],
      itemCounter: 3,
      totalPrices: {
        totalPrice: 50,
        totalDiscountedPrice: 40
      }
    };
    component = renderComponent(ComponentCartList, null, props);
  });

  describe('html, style and text', () => {
    describe('must have class', () => {
      it('card-component', () => {
        expect(component).to.have.class('component-cart-list');
      });
      it('list-group', () => {
        expect(component.find('.list-group')).to.exist;
      });
    });

    describe('must have element', () => {
      it('ul', () => {
        expect(component.find('ul')).to.exist;
      });
      it('h3', () => {
        expect(component.find('h3')).to.exist;
      });
      it('h4', () => {
        expect(component.find('h4')).to.exist;
      });
      it('h5', () => {
        expect(component.find('h5')).to.exist;
      });
    });

    describe('data simulation', () => {
      it('list has the correct number of items', () => {
        expect(component.find('li').length).to.equal(3);
      });
      it('item counter works correctly', () => {
        expect(component.find('h3')).to.contain('Items in the Basket: 3');
      });
      it('gets discounted correctly', () => {
        expect(component.find('h5')).to.contain('You got discount of $10');
      });
      it('price is correct', () => {
        expect(component.find('.price')).to.contain('Price: $50');
      });
      it('discounted price is correct', () => {
        expect(component.find('.discounted-price')).to.contain('Discounted Price: $40');
      });
    });
  });
});