import { renderComponent, expect } from '../test_helper';
import CardComponent from '../../src/components/component_card';

describe('component_card', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CardComponent);
  });

  describe('html, style and text', () => {

    describe('must have class', () => {
      it('card-component', () => {
        expect(component).to.have.class('component-card');
      });
      it('col-sm-6 col-md-4', () => {
        expect(component.find('.col-md-4')).to.exist;
        expect(component.find('.col-sm-6')).to.exist;
      });
      it('thumbnail fixed-height-thumbnail', () => {
        expect(component.find('.thumbnail')).to.exist;
        expect(component.find('.fixed-height-thumbnail')).to.exist;
      });
      it('caption', () => {
        expect(component.find('.caption')).to.exist;
      });
      it('bottom-left', () => {
        expect(component.find('.bottom-left')).to.exist;
      });
      it('btn btn-success bottom-left', () => {
        expect(component.find('.btn')).to.exist;
        expect(component.find('.btn-success')).to.exist;
        expect(component.find('.bottom-left')).to.exist;
      });
    });

    describe('must have element', () => {
      it('image', () => {
        expect(component.find('img')).to.exist;
      });
      it('h4 ', () => {
        expect(component.find('h4')).to.exist;
      });
      it('p', () => {
        expect(component.find('p')).to.exist;
      });
      it('button', () => {
        expect(component.find('button')).to.exist;
      });
    });

    describe('must have text', () => {
      it('Add robot to Cart', () => {
        expect(component.find('button')).to.contain('Add robot to Cart');
      })
    })
  });
});
