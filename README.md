# Documentation

This document explains how to store the data for the website, along with other
relevant and important features.

## Upcoming tasks

- [x] Form submission with email validation
- [x] Add authentication to the website
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
- [x] Email verification system when submitting a form. Functionality to allow
      only one for submission per user.
- [ ] CHeck alternatives to nodemailer
      ([sendGrid](https://docs.sendgrid.com/for-developers/sending-email/api-getting-started),
      [rapid api](https://rapidapi.com/tobidaramola77/api/mail-man/) )

## Images

The images need to be stored in the `/public/static/assets` directory.

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

## Lessons learnt:

- When using mongoDB and vercel, it's better to integrate any environment
  variables through the integration of mongodb directly from vercel.

- For nodemailer to work with vercel, I had to turn the transport into a
  promise. See code in the helpers directory.
