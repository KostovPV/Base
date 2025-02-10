// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the InfoComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function InfoComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'InfoComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'teachers', type: CommonFieldTypes.SingleLineText },
      { name: 'members', type: CommonFieldTypes.SingleLineText },
      { name: 'courses', type: CommonFieldTypes.SingleLineText },
      { name: 'countries', type: CommonFieldTypes.SingleLineText },
      { name: 'backgroundImage', type: CommonFieldTypes.Image },

    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
