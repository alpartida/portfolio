/* ============================================================
   ALL THE WORDS ON THE SITE

   This is the one file to edit when you want to change text.
   Nothing here is code you can break by rewording it — just keep
   the quotes around each line and the commas between items.

   Rules of thumb:
   - Keep the quotes. "like this"
   - If your text contains an apostrophe, the surrounding quotes
     are backticks: `I'm Alex` — that's already done where needed.
   - Lines starting with // are notes to you and are ignored.
   - Save the file, reload the page, and the change is there.

   The one exception: the case studies live as their own files in
   src/content/work/ — those are plain Markdown and are already
   easy to edit directly.
   ============================================================ */

export const HOME = {
  // The small heading above your intro text.
  name: 'Alex Partida',

  // The short lines under it. Add or remove lines freely.
  intro: [
    'Web Developer. Designer. Los Angeles.',
    `Creating beautiful and engaging digital experiences — and building
     websites that small businesses can actually run themselves.`,
    `Currently a web developer at The Salt Lake Tribune, and taking on a
     small number of freelance projects.`,
  ],

  // The giant words. These are the navigation — keep them short,
  // they're set in a very wide display face.
  bigNav: [
    { text: 'Work', href: '/work' },
    { text: 'Services', href: '/services' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ],

  // The closing invitation, as one sentence: the question, then the words
  // that link to the contact page. Both are set in the serif, so keep them
  // short enough to read as a single line of thought.
  ctaQuote: 'Have something in mind?',
  ctaLink: 'Tell me about it.',
};

export const WORK = {
  title: 'Work',
  intro: [
    `This is a showcase of my work across web design, web apps and product —
     for freelance clients and in a newsroom.`,
    `The world of digital design and web development is constantly evolving
     and so has my role over the last few years. I'm still learning and
     gaining new skills every day.`,
    `The interesting part of each of these is rarely the technology. It's the
     constraint that shaped it.`,
  ],

  // Shown in the browser tab and in Google results.
  metaDescription:
    'Case studies: freelance web design and development for small businesses, an RJI fellowship toolkit for local news publishers, and landing page, newsletter and revenue work at The Salt Lake Tribune.',

  // The bottom of each individual case study.
  caseFootQuote: 'Want something like this?',
  caseFootButton: 'Start a project',
  caseFootBack: 'All work',
  caseLiveButton: 'Visit the live site',
};

export const SERVICES = {
  title: 'Services',
  quote: 'Fixed price, agreed before anything starts.',
  sub: 'No hourly surprises, and no site you need me to maintain forever.',

  metaDescription:
    'How I work with small businesses and independent practitioners: fixed-price projects, design and build, and a handover that leaves you able to update your own site.',

  offeringsHeading: 'What I take on',
  offerings: [
    {
      title: 'A new site, start to finish',
      body: `For a practice or small business that needs a real web presence.
        I write and structure the content with you, design it, build it, and
        set up hosting — you end up owning every part of it. Good fit if you
        have no site, or one you're embarrassed to send people to.`,
    },
    {
      title: `Rescuing a site you can't update`,
      body: `If changing your own hours or prices means emailing a developer
        and waiting, that's fixable. I rebuild the site so the things that
        change often are the things you control, usually in a tool you already
        use. Good fit if your site is accurate the week it launches and wrong
        three months later.`,
    },
    {
      title: 'Faster, findable, accessible',
      body: `Performance, accessibility and the technical side of search on a
        site you otherwise like. This is what decides whether people reach you
        at all, and whether they can use the site when they do. Good fit if you
        suspect yours is slow, invisible in search, or hard to use on a phone.`,
    },
  ],

  processHeading: 'The process',
  steps: [
    {
      n: '01',
      title: 'A conversation',
      body: `Free, half an hour. If I'm not the right person, I'll say so and
        point you somewhere better.`,
    },
    {
      n: '02',
      title: 'A written proposal',
      body: `What I'll build, what it costs, and when it's done — as a fixed
        price, approved before anything starts.`,
    },
    {
      n: '03',
      title: 'Design, then build',
      body: `You see the design before it's built, and the build in progress on
        a real URL rather than in a slide deck.`,
    },
    {
      n: '04',
      title: 'Handover',
      body: `The site goes live on hosting you own, with a written guide to
        updating the parts that change — written for you, not for a developer.`,
    },
  ],

  costHeading: 'What it costs',
  // Each item is a paragraph. <strong>bold</strong> works here.
  costBody: [
    `Every project is quoted as a <strong>fixed price</strong>, agreed in
     writing before any work starts. A straightforward three-page site and a
     site with booking and payments aren't the same job, so I don't pretend one
     rate card covers both. If you have a number in mind, bring it to the first
     call — "I genuinely don't know yet" is a perfectly good answer too.`,
  ],
  costListIntro: `What's true on every project:`,
  costList: [
    'The price is fixed and in writing before work begins.',
    'You own the finished site, the code and the hosting account.',
    'Documentation for updating it yourself is included, not an upsell.',
    'If the scope changes mid-project, we agree the new price before I build it.',
  ],

  dontHeading: `What I don't do`,
  dontBody: `Worth saying plainly, so neither of us wastes a call: I don't take
    on ongoing social media or content marketing and I don't build on page-builder platforms
    like Wix or Squarespace — if that's what you need, you'll be better served
    by someone who specialises in them.`,

  ctaQuote: 'Start with a conversation.',
  ctaBody: `Let's talk, free. Worst case you leave knowing what you
    actually need.`,
  ctaButton: 'Get in touch',
};

export const ABOUT = {
  title: 'About',
  quote: 'From Apparel to Tech',

  metaDescription:
    'Alex Partida is a web developer and designer in Los Angeles. Apparel production manager turned developer, on the web team of a daily newspaper, building sites for small businesses.',

  // Each item is a paragraph. Basic HTML works: <strong>bold</strong> and
  // <a href="/work">a link</a>.
  intro: [
    `Hi 👋 — I'm an apparel production manager turned web developer. Before I
     wrote software I ran production in Los Angeles: schedules, vendors,
     margins, and the specific stress of a deadline that cannot move. I changed
     careers through a coding bootcamp and a web development certificate from
     SheCodes.`,
    `I'm a web developer at <strong>The Salt Lake Tribune</strong>, a nonprofit
     daily newspaper. The work is whatever the site needs: landing pages across
     sltrib.com, the subscription, donation and sponsorship features that fund
     the newsroom, and a migration of the whole newsletter platform from
     Mailchimp to Iterable.`,
    // The speaking line is deliberately tenseless — no "I'm speaking" or
    // "this month" — so it reads correctly before and after the event and
    // never needs a date edit.
    `Beyond the day job: a <strong>Reynolds Journalism Institute</strong>
     fellowship, where I built the Article-as-Homepage toolkit for independent
     local publishers and wrote a series for RJI on rethinking the article
     page.`,
    `I work with the <strong>News Product Alliance</strong> too, which is where
     my Google News Initiative work has run — the News Product Management
     Certification, and Next Gen News Sprint, a project with other newsrooms
     on reaching 18–28 year olds. Plus a speaking slot at the NPA Summit in
     Chicago.`,
    `Alongside that I take on a small number of freelance projects for small
     businesses and independent practitioners — people whose website is a real
     part of how they make a living rather than a brochure. Because I keep the
     list short, the work gets proper attention.`,
  ],

  craftHeading: 'How the production background shows up',
  craft: [
    `Running production teaches you that the handoff is the whole job. A
     beautiful sample means nothing if the factory can't reproduce it, and a
     beautiful website means nothing if its owner can't change the opening
     hours.`,
    `So that's what I optimise for. The most interesting decision on a recent
     project wasn't the design — it was moving the part of the site that
     changes every week into a Google Sheet the client owns, so she updates it
     from her phone without calling me. Every project ends with documentation
     written for the person who has to use it. Have a look at my
     <a href="/work">work</a>, or find me on
     <a href="https://github.com/alpartida">GitHub</a>.`,
  ],

  personalHeading: 'Away from the keyboard',
  personal: [
    `I live in Los Angeles with my partner Zach and our daughters, Surie and
     one-year-old Sasha. We are outnumbered by animals — Otis the miniature
     poodle, Meredith Grey the Nebelung, and Firulais, who turned up on the
     patio one day, got fed once by Surie, and never left. All three were
     adopted, two of them by accident.`,
    `Weekends are horses, the piano in the living room, and everyone old enough
     to read doing it in the same room out of completely different books —
     while Sasha does her best to get hold of one. Learning to code
     changed my life in the obvious ways, and also in one I didn't expect: I
     met Zach on the way through it. My daughters watch their mom work in a
     field without many women in it, which I think about more than I expected
     to.`,
  ],

  cvNote: 'For a full list of my work experience, download my résumé below.',
  cvButton: 'My CV',
  cvLink: 'Start a project',

  // The captions screen readers and search engines use for the photos.
  alts: {
    portrait: 'Alex Partida',
    family: 'Alex with her family in Los Angeles',
    otis: 'Otis, a miniature poodle',
    cats: 'Meredith Grey and Firulais, two rescued cats',
  },
};

export const CONTACT = {
  title: 'Contact',
  quote: `Tell me what you're trying to build.`,
  sub: `The more you can tell me about the problem, the more useful my first
    reply will be. I answer everything within two business days.`,

  metaDescription:
    'Tell me about your project. Fixed-price web design and development for small businesses and independent practitioners in Los Angeles and remote.',

  // The form's field labels and dropdown options.
  labels: {
    name: 'Your name',
    email: 'Email',
    business: 'Business or practice',
    website: 'Current website',
    need: 'What do you need?',
    timeline: 'When do you need it?',
    message: `What's the problem you're trying to solve?`,
    optional: '(optional)',
    submit: 'Send enquiry',
  },

  needOptions: [
    'A new site, start to finish',
    `Rebuilding a site I can't update myself`,
    'Making an existing site faster or findable',
    'Something else',
  ],

  timelineOptions: [
    'As soon as possible',
    'Within a month or two',
    'Within six months',
    'No fixed deadline',
  ],

  nextHeading: 'What happens next',
  nextSteps: [
    'I reply within two business days.',
    'If it looks like a fit, we talk for free.',
    'You get a fixed-price proposal in writing before anything starts.',
  ],

  whereHeading: 'Where I work',
  whereBody: `working with clients here and remotely. Most projects run
    entirely over email and a couple of calls.`,

  elsewhereHeading: 'Elsewhere',
};

export const THANKS = {
  title: 'Thanks',
  quote: `That's in.`,
  body: `I'll read it properly and reply within two business days. If it's
    urgent, reply to my first email and say so — it'll jump the queue.`,
  readWork: 'Read a case study',
  backHome: 'Back home',
};

export const NOT_FOUND = {
  title: '404',
  quote: `That page isn't here.`,
  body: `It may have moved when I rebuilt this site. The work and the contact
    form are both one click away.`,
  seeWork: 'See the work',
  backHome: 'Back home',
};

export const FOOTER = {
  // Also shown at the top of the footer on every page.
  credit: 'Designed and built by me',
};

export const MENU = {
  open: 'Menu',
  close: 'Close',
};
