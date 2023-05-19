#Introduction:

This repo is a template for any web application that SDSN wants to build based on NextJS and Tailwind stack. Note that there are some items to be considered while working off this template:

1. You will need to define the following variables from the config.js file located at the root level:

   1.1. Google Analytics ID: GA_TRACKING_ID
   1.2. META_IMAGE referring to the preview image shown in social networks and when sharing on messengers, like WhatsApp and others.
   1.3. META_DESCRIPTION referring to the description shown in google search results and on social media network. Note that the url should be absolute (e.g., https://www.domain.com/static/preview.jpg), and the recommended size is 1200 x 627.
   1.4. URL of the deployed page

2. If you are planning on having a download feature, you can uncomment the code in gtag.js file to ensure that google analytics tracks downloads from the web application.
