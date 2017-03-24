import { renderComponent, expect } from '../test_helper';
import ComponentCartList from '../../src/components/component_cart_list';

describe('ComponentCartList', () => {
  let component;
  beforeEach(() => {
    const props = {
      itemsInsideCart: [{ title: 'a title' }, { title: 'another title' }, { title: 'yet another title' }],
      itemCounter: 3,
      summurizedPrices: {
        summurizedPrice: 50,
        summurizedFinalPrice: 40
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
      it('panel', () => {
        expect(component.find('.panel')).to.exist;
        expect(component.find('.panel-default')).to.exist;
      });
    });

    describe('must have element', () => {
      it('ul', () => {
        expect(component.find('ul')).to.exist;
      });
      it('h5', () => {
        expect(component.find('h5')).to.exist;
      });
      it('h4', () => {
        expect(component.find('h4')).to.exist;
      });
    });

    describe('data simulation', () => {
      it('list has the correct number of items', () => {
        expect(component.find('li').length).to.equal(3);
      });
      it('item counter works correctly', () => {
        expect(component.find('h3')).to.contain('Items in the Basket:3');
      });
      it('price is correct', () => {
        expect(component.find('.price')).to.contain('Original Price$50');
      });
      it('discount is correct', () => {
        expect(component.find('.discount')).to.contain('Discount- $10');
      });
      it('final price is correct', () => {
        expect(component.find('.final-price')).to.contain('Final Price$40');
      });
    });
  });
});