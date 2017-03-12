import { renderComponent, expect } from '../test_helper';
import ComponentNavigationBar from '../../src/components/component_navbar';

describe('component_navbar', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(ComponentNavigationBar);
  });

  describe('contains child components', () => {
    //todo test child component if any
  });

  describe('html, style and text', () => {

    describe('must have class', () => {
      it('navigation-bar', () => {
        expect(component).to.have.class('component-navbar');
      });
      it('navigation-bar', () => {
        expect(component.find('.navigation-bar')).to.exist;
      });
      it('navbar navbar-default', () => {
        expect(component.find('.navbar')).to.exist;
        expect(component.find('.navbar-default')).to.exist;
      });
      it('container-fluid', () => {
        expect(component.find('.container-fluid')).to.exist;
      });
      it('navbar-header', () => {
        expect(component.find('.navbar-header')).to.exist;
      });
      it('navbar-brand', () => {
        expect(component.find('.navbar-brand')).to.exist;
      });
      it('collapse navbar-collapse', () => {
        expect(component.find('.navbar-collapse')).to.exist;
        expect(component.find('.collapse')).to.exist;
      });
      it('nav navbar-nav navbar-right', () => {
        expect(component.find('.nav')).to.exist;
        expect(component.find('.navbar-nav')).to.exist;
        expect(component.find('.navbar-right')).to.exist;
      });
      it('navbar-text', () => {
        expect(component.find('.navbar-text')).to.exist;
      });
      it('badge', () => {
        expect(component.find('.badge')).to.exist;
      });

    });

    describe('must have text', () => {
      it('Shopping Chart', () => {
        expect(component.find('.navbar-brand')).to.contain('Shopping Chart')
      });
    })
  })
});