import { renderComponent, expect } from '../test_helper';
import app from '../../src/components/app';

describe('component_app', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(app);
  });
  describe('contains child components', () => {
    it('component_navbar', () => {
      expect(component.find('.component-navbar')).to.exist;
    });
    it('component_content', () => {
      expect(component.find('.component-content')).to.exist;
    });
  })
});
