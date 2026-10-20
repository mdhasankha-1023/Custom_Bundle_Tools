import { extensions } from '@wix/astro/builders'

export default extensions.customElement({
  id: 'c750d901-c7c0-46c8-9ff4-f834566207bc',
  name: 'Custom Bundle Tools',
  width: {
    defaultWidth: 450,
    allowStretch: true
  },
  height: {
    defaultHeight: 250
  },
  installation: {
    autoAdd: true
  },
  presets: [
    {
      id: '9622c167-001b-47b0-afbb-9ce3b8395364',
      name: 'default',
      thumbnailUrl: '{{BASE_URL}}/custom-bundle-tools-thumbnail.png',
    },
  ],
  
  tagName: 'custom-bundle-tools',
  element: './extensions/site/widgets/custom-bundle-tools/custom-bundle-tools.tsx',
  settings: './extensions/site/widgets/custom-bundle-tools/custom-bundle-tools.panel.tsx',
});
