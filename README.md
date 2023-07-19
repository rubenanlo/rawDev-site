# Features

This is a static website that includes the following features:

- [x] Form submission with email validation
- [x] Responsive design
- [x] Animations
- [ ] A dashboard with API calls to GitHub (upcoming)
- [ ] A centralized way to store all text (upcoming). Potentially creating a
      specific dashboard for admin to control all text from there.
- [ ] A dashboard for admin that will include: 1) RUD functionality for list of
      contacted people (recruiters and clients); 2) RUD functionality to change the
      text of the CV.
- [ ] Refactor de code to reduce repetitive code
- [ ] Make sure each component has a single responsibility (e.g., the
      `ContactForm` component should only be responsible for the form, not for
      the animation, the same goes for the others e.g., `AboutMe` component). To
      that end, I will have one single file with text for each component;
      another file with animations for each component
- [ ] Add tests
- [ ] Add google analytics
- [ ] Add SEO functionality
- [ ] Link to a medium article my experience
- [ ] Add navigation dots for project carousel

# Documentation

## Images

The images need to be stored in the `/public/static/assets` directory.

## Projects

### Structure of the projects

The projects are stored in separate yaml files in the
`/public/static/about/projects` directory. Each file has the following format:

```yaml
id: 1
title: rawDev
highlightFeatures: >-
  Website application for web development services, including a dashboard for clients, form submission, authentication, REST API, CRUD functionality, and authentication.
date: July 11, 2023
datetime: "2023-07-11"
techStack:
  - icon: NEXT
    alt: NextJS
  - icon: NODE
    alt: Node.js
  - icon: MONGO
    alt: Mongo DB
  - icon: TAILWIND
    alt: Tailwind
links:
  - icon: LINK
    alt: link
    target: _blank
    href: "http://www.rawdev.io"
  - icon: GITHUB
    alt: Github
    target: _blank
    href: "https://github.com/rubenanlo/rawDev-site"
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
