import { renderComponent, expect } from '../test_helper';
import ComponentContent from '../../src/components/component_content';

describe('component_content', () => {
  let component;
  beforeEach(() => {
    const props = {
      items: [{
        "id": 1,
        "title": "Assistant Professor",
        "image": "https://robohash.org/earumlaboriosamet.png?size=200x200&set=set1",
        "price": 79,
        "description": "morph cross-media communities",
        "itemsUntilDiscount": 3,
        "discount": 37
      }, {
        "id": 2,
        "title": "Senior Sales Associate",
        "image": "https://robohash.org/occaecatiataperiam.png?size=200x200&set=set1",
        "price": 80,
        "description": "architect compelling initiatives",
        "itemsUntilDiscount": 7,
        "discount": 26
      }]
    };
    component = renderComponent(ComponentContent, null, props);
  });

  describe('contains child components', () => {
    it('constains child component component_card', () => {
      expect(component.find('.component-card')).to.exist;
    });
  });

  describe('html, style and text', () => {

    describe('must have class', () => {
      it('component-content', () => {
        expect(component).to.have.class('component-content')
      });
      it('row', () => {
        expect(component.find('.row')).to.exist;
      });
      it('col-sm-9 padding-left-none', () => {
        expect(component.find('.col-sm-9')).to.exist;
        expect(component.find('.padding-left-none')).to.exist;
      });
      it('col-sm-3', () => {
        expect(component.find('.col-sm-3')).to.exist;
      });
    });

    describe('must have element', () => {
    });

    describe('must have text', () => {
    })
  });

  // todo fix this
  it('has 2 items', () => {
    console.log(component.find('.component-card').length);
    expect(component.find('.component-card').length).to.equal(2);
  });
});