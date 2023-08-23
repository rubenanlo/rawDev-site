# Documentation

This document explains how to store the data for the website, along with other
relevant and important features.

## Main features

- [x] Form submission with email validation. Functionality to allow
      only one submitted form per user.
- [x] Add authentication to the website
- [x] Add automatization of image import
- [x] Update automatization of image import byt creating single export variables
      for ach image
- [x] Add function to optimize images
- [x] Responsive design
- [x] Animations
- [ ] A dashboard with API calls to GitHub (upcoming)
- [ ] A centralized way to store all text (upcoming). Potentially creating a
      specific dashboard for admin to control all text from there.
- [ ] A dashboard for admin that will include: 1) RUD functionality for list of
      contacted people (recruiters and clients); 2) RUD functionality to change the
      text of the CV.
      Check this for get requests:
      https://www.mongodb.com/developer/videos/how-to-integrate-vercel---mongodb-step-by-step/
      Also, check this tailwind component for adding new users: https://tailwindui.com/components/application-ui/page-examples/settings-screens
- [ ] Make sure each component has a single responsibility (e.g., the
      `ContactForm` component should only be responsible for the form, not for
      the animation, the same goes for the others e.g., `AboutMe` component). To
      that end, I will have one single file with text for each component;
      another file with animations for each component
- [ ] Add tests
- [x] Add google analytics
- [x] Add SEO functionality
- [ ] Link to a medium article my experience (optional)
- [x] Add loading component for better user experience in contact form
- [ ] CHeck alternatives to nodemailer
      ([sendGrid](https://docs.sendgrid.com/for-developers/sending-email/api-getting-started),
      [rapid api](https://rapidapi.com/tobidaramola77/api/mail-man/) )

## Images

The images need to be stored in the `/public/static/assets` directory.

It is important to note that the images need to be optimized before importing.

Also the filename for images should only be one word and never use '-' except
for when you are specifying the size of the image (e.g., rawdev-sm.png). Further
down in this documentation we explain the relevance of the image size (e.g., for projects).

### Optimizing images

In order to optimize images, update the file `optimize.config.json` with either
the whole assets directory or single files. In either case, please add the full
directory path (e.g., "public/static/assets/collab-1.webp" - if a single file;
"public/static/assets" - if a full directory). Then, run the following command
in the terminal:

```
npm run optimize
```

### Importing images

Once you have optimized the images, run the following script in the terminal to
generate the corresponding import statements in the helper function
`exportImages.js`

This helper generates import statements, an `images` object with all the
imported images, and single export statements for all images located in the
assets directory. This way, the web dev will be able to import in specific
components single images from the same file (i.e., `exportImages.js`), also
import all images through exporting the `images` object for the use of certain helpers.

## Projects

### Structure of the projects

The projects are stored in separate yaml files in the
`/public/static/about/projects` directory. Each file has the following format:

```yaml
id: Number
title: String
highlightFeatures: >-
  String (no more than 20 words)
date: MMMM DD, YYYY
datetime: YYYY-MM-DD
techStack:
  - icon: String (e.g., NEXT)
    alt: String (e.g., NextJS)
  - icon: String (e.g., NODE)
    alt: String (e.g., Node.js)
  # - other techSTack
links:
  - icon: String (e.g., LINK)
    alt: String (e.g., link)
    target: _blank --> determines whether the link opens in a new tab or not (if this not an internal link, it should open in a new tab)
    href: String (e.g., "http://www.rawdev.io")
  # - other links
```

### Cover images

For the cover image, I am importing the image in the `exportImages` helper file
(located in helpers/exportImages.js) so that I can further export it into
wherever I need all images.

The filename for the cover image should be the same as the filename of the yaml
file and adding the size of the image at the end of the filename. For example,
rawdev-sm.gif. The sizes are: sm, md, lg only (for small, medium, and large
screens following the breakpoints of Tailwind).

When importing the image, I import it in uppercase like this "RAWDEV_SM". Follow
the same convention for the other cover images for each project.

All you need to do is to add the image with the right naming convention and
import it into the helper `exportImages`.

### TechStack icons

Each yaml file has a techStack array with the icon and the alt property for
the technologies used in each project. The icons are imported in the
`exportImages` helper, and the icons themselves are saved in the
`public/static/assets` directory.

Whatever naming convention you use to store the icons
in the `/public/static/assets` directory, you need to follow the same convention
as in the yaml file with lowercase. For importing the icon into the
`exportImages` helper, you need to use uppercase. For example, if you have an
icon called `NEXT` in the yaml file, you need to import the icon as `NEXT` in
the `exportImages` helper and save the file as `next.png` in the
`public/static/assets` directory.

### Links for website and github

Each yaml file has a links array with the icon and the alt property for
the external links in each project (i.e., link to the website and github repo). The icons are imported in the
`exportImages` helper, and the icons themselves are saved in the
`public/static/assets` directory.

Whatever naming convention you use to store the icons
in the `/public/static/assets` directory, you need to follow the same convention
as in the yaml file with lowercase. For importing the icon into the
`exportImages` helper, you need to use uppercase. For example, if you have an
icon called `LINK` in the yaml file, you need to import the icon as `LINK` in
the `exportImages` helper and save the file as `link.svg` in the
`public/static/assets` directory.

## Helpers

### Yielding data from yaml files

The way we are yielding the data is by defining the directory dynamically.
Specifically, you need to define the name of the component (by adding const
component = XXXX.name in each site we are using a helper to yield data from
yaml files - e.g., const component = About.name). And pass it as a component
parameter in the helper function located in getStaticProps.

If there is a subfolder, the existing function would take the function variable
and replace "get" with "", so that you obtain the name of the folder. Thus, the
function to get data from a yaml file needs to tie with the folder where the
yaml file is (e.g., getProjects -> folder name is 'projects') with 'get' in
front of it (e.g., getProjects).

The helpers getSnapshot and getBriefBio work a bit differently. In here, since
the files are in the same folder but we need to only yield information from each
file separately, we rely on the same method as in the paragraph above to get the filename.

## Splash component:

If you need to update the text of the animation, you need to update the
following:

```javascript
let string = "ruben andino web Developer";
const acronym = ["r", "a", "w", "Dev"];
```

For the string, feel free to add whatever string you want to display and create
an acronym from. For the acronym, you need to add the acronym you want to use in
the animation. It could be a letter, or a portion of a word.

If you change this, you may need to review the props in the motion tags.

## Lessons learnt:

- When using mongoDB and vercel, it's better to integrate any environment
  variables through the integration of mongodb directly from vercel.

- For nodemailer to work with vercel, I had to turn the transport into a
  promise. See code in the helpers directory.

- In Splash component, there was a flickering issue when reloading the site.
  This was happening because the initial animations were
  not applied immediately, resulting in a brief display of the initial state of
  the elements before the animation kicked in. to avoid this issue, we had to
  create an object with initial, animate, and transition properties to pass them
  thru props in the motion.h3 tag. The same applied for the aboutNavbar
  component. For more details on how I solved it, check out commits:
  dcaea3d4da0b3eff176a46bdf1793913447201db,
  70f35b344d7a686af57f50fb6e3fd21a002bb9c5.

- In order to fix the first row of a table with css, the sticky position only
  works with th tags.
