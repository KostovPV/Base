import { Manifest, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Defines a single 'Menu' component with a 'menuItems' field.
 */
export default function MenuComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'MenuComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'menuItems', type: CommonFieldTypes.ContentList },
    ],
  });
}
