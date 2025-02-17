import { Manifest, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Defines the MobileMenuComponent with fields for a menu icon and menu items.
 */
export default function MobileMenuComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'MobileMenuComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'menuIcon', type: CommonFieldTypes.Image },
      { name: 'menuItems', type: CommonFieldTypes.ContentList },
    ],
  });
}
