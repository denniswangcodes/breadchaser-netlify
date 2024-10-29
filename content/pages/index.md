---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: Expand your network, get hired in tech, and chase that bread.
      color: text-dark
      type: TitleBlock
    subtitle:
    text: >
      Revolutionize your job search experience with our AI-powered Google Chrome extension and a highly customizable journey that aims to showcase your full potential to the available markets.
    actions:
      - label: Download Extension
        altText: ''
        url: https://chromewebstore.google.com/detail/breadchaser-custom-networ/mgbijplmiommnaannjomlaiinkhhjblb?hl=en-US&utm_source=ext_sidebar
        target: '_blank'
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
      # - label: See Tutorials
      #   altText: ''
      #   url: /
      #   showIcon: true
      #   icon: arrowRight
      #   iconPosition: right
      #   style: primary
      #   elementId: ''
      #   type: Link
    media:
      title: Title of the video
      url: /images/app-demo-60-sec.mp4
      controls: true
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          # borderColor: border-dark
          # borderStyle: solid
          # borderWidth: 1
          # borderRadius: large
      type: VideoBlock
      autoplay: true
      loop: true
      muted: true
    badge:
      label: Breadchaser
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-5
          - pl-5
          - pb-5
          - pr-5
    type: DividerSection
  - subtitle: Our users have heard back from
    images:
      - url: /images/empathy-logo.svg
        altText: Empathy logo
        type: ImageBlock
      - url: /images/wellster-logo.svg
        altText: Wellster logo
        type: ImageBlock
      - url: /images/vise-logo.svg
        altText: Vise logo
        type: ImageBlock
      - url: /images/telus-logo.svg
        altText: Telus logo
        type: ImageBlock
      - url: /images/contenful-logo.svg
        altText: Contentful logo
        type: ImageBlock
      - url: /images/sanity-logo.svg
        altText: Sanity logo
        type: ImageBlock
      - url: /images/rangle-logo.svg
        altText: Rangle logo
        type: ImageBlock
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: ImageGallerySection
  - type: FeaturedItemsSection
    title:
      text: Key Benefits
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    # subtitle: Subtitle goes here
    items:
      - type: FeaturedItem
        title: 5x Increased
        subtitle: Network Connections
        text: >-
          Expand your network to reach more connections in your job search journey with easier and faster way to send introduction messages, follow up on referrals, and book meetings.
        actions: []
        elementId: null
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
        image:
          type: ImageBlock
          altText: Lightning bolt symbol on red background
          elementId: ''
          url: /images/icon1.svg
          styles:
            self:
              borderRadius: x-large
      - title: 10x More
        subtitle: Applications Sent
        text: >-
          Complete more applications in shorter time frame with AI enhanced cover letter, answers to application questions, and custom prompting.
        image:
          url: /images/icon2.svg
          altText: Featured icon two
          elementId: ''
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            textAlign: left
            justifyContent: center
        type: FeaturedItem
      - title: 300% Faster
        subtitle: Applying Process
        text: >-
          Complete a high quality and personalized application in less than 60 seconds, supported by smart parsing, multi-platform support, and custom prompting.
        image:
          url: /images/icon3.svg
          altText: Featured icon three
          elementId: ''
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
        type: FeaturedItem
    # actions:
    #   - label: Get started
    #     altText: ''
    #     url: /
    #     showIcon: false
    #     icon: arrowRight
    #     iconPosition: right
    #     style: primary
    #     elementId: ''
    #     type: Button
    elementId: ''
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  # - posts:
  #     - content/pages/blog/case-study-1.md
  #     - content/pages/blog/case-study-2.md
  #     - content/pages/blog/case-study-3.md
  #   showThumbnail: true
  #   showDate: true
  #   showAuthor: true
  #   variant: three-col-grid
  #   colors: bg-light-fg-dark
  #   styles:
  #     self:
  #       padding:
  #         - pt-16
  #         - pl-16
  #         - pb-16
  #         - pr-16
  #       justifyContent: center
  #   type: FeaturedPostsSection
  #   hoverEffect: move-up
  # - title:
  #     text: Key Features
  #     color: text-primary
  #     styles:
  #       self:
  #         textAlign: center
  #     type: TitleBlock
  #   # subtitle: Featured items section subtitle
  #   items:
  #     - title: Feature Item One
  #       # tagline: This is the tagline
  #       # subtitle: This is the item subtitle
  #       text: |
  #         Follow the tutorial to build your first Netlify Create site.
  #       image:
  #         url: /images/abstract-feature1.svg
  #         altText: Placeholder Image
  #         styles:
  #           self:
  #             borderRadius: x-large
  #         type: ImageBlock
  #       colors: bg-light-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-8
  #             - pl-8
  #             - pb-8
  #             - pr-8
  #           borderRadius: x-large
  #           flexDirection: col
  #       type: FeaturedItem
  #     - title: Feature Item Two
  #       # tagline: This is the tagline
  #       # subtitle: This is the item subtitle
  #       text: |
  #         Follow the tutorial to build your first awesome Netlify Create site.
  #       image:
  #         url: /images/abstract-feature2.svg
  #         altText: Placeholder image
  #         styles:
  #           self:
  #             borderRadius: x-large
  #         type: ImageBlock
  #       colors: bg-light-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-8
  #             - pl-8
  #             - pb-8
  #             - pr-8
  #           borderRadius: x-large
  #           flexDirection: col
  #       type: FeaturedItem
  #     - title: Feature Item Three
  #       # tagline: This is the tagline
  #       # subtitle: This is the item subtitle
  #       text: |
  #         Learn from the tutorial and build your first awesome Netlify Create site.
  #       image:
  #         url: /images/abstract-feature1.svg
  #         altText: Placeholder image
  #         styles:
  #           self:
  #             borderRadius: x-large
  #         type: ImageBlock
  #       colors: bg-light-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-8
  #             - pl-8
  #             - pb-8
  #             - pr-8
  #           borderRadius: x-large
  #           flexDirection: col
  #       type: FeaturedItem
  #     - title: Feature Item Two
  #       # tagline: This is the tagline
  #       # subtitle: This is the item subtitle
  #       text: |
  #         Follow the tutorial to build your first awesome Netlify Create site.
  #       image:
  #         url: /images/abstract-feature2.svg
  #         altText: Placeholder image
  #         styles:
  #           self:
  #             borderRadius: x-large
  #         type: ImageBlock
  #       colors: bg-light-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-8
  #             - pl-8
  #             - pb-8
  #             - pr-8
  #           borderRadius: x-large
  #           flexDirection: col
  #       type: FeaturedItem
  #     - title: Feature Item Two
  #       # tagline: This is the tagline
  #       # subtitle: This is the item subtitle
  #       text: |
  #         Follow the tutorial to build your first awesome Netlify Create site.
  #       image:
  #         url: /images/abstract-feature2.svg
  #         altText: Placeholder image
  #         styles:
  #           self:
  #             borderRadius: x-large
  #         type: ImageBlock
  #       colors: bg-light-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-8
  #             - pl-8
  #             - pb-8
  #             - pr-8
  #           borderRadius: x-large
  #           flexDirection: col
  #       type: FeaturedItem
  #     - title: Feature Item Two
  #       # tagline: This is the tagline
  #       # subtitle: This is the item subtitle
  #       text: |
  #         Follow the tutorial to build your first awesome Netlify Create site.
  #       image:
  #         url: /images/abstract-feature2.svg
  #         altText: Placeholder image
  #         styles:
  #           self:
  #             borderRadius: x-large
  #         type: ImageBlock
  #       colors: bg-light-fg-dark
  #       styles:
  #         self:
  #           padding:
  #             - pt-8
  #             - pl-8
  #             - pb-8
  #             - pr-8
  #           borderRadius: x-large
  #           flexDirection: col
  #       type: FeaturedItem
  #   variant: three-col-grid
  #   colors: bg-neutral-fg-dark
  #   styles:
  #     self:
  #       padding:
  #         - pt-16
  #         - pl-8
  #         - pb-16
  #         - pr-8
  #       justifyContent: center
  #     subtitle:
  #       textAlign: center
  #   type: FeaturedItemsSection
  # - title:
  #     text: Grow your business 10x faster
  #     color: text-dark
  #     styles:
  #       self:
  #         textAlign: center
  #     type: TitleBlock
  #   # subtitle: This is a subtitle
  #   text: |-
  #     Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
  #     Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
  #     erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
  #     vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
  #   media:
  #     title: Title of the video
  #     url: /images/placeholder-video.mp4
  #     controls: false
  #     aspectRatio: '16:9'
  #     styles:
  #       self:
  #         padding:
  #           - pt-2
  #           - pb-2
  #           - pl-2
  #           - pr-2
  #         borderColor: border-dark
  #         borderStyle: solid
  #         borderWidth: 1
  #         borderRadius: large
  #     type: VideoBlock
  #     autoplay: true
  #     loop: true
  #     muted: true
  #   # badge:
  #   #   label: Key Benefits
  #   #   color: text-primary
  #   #   styles:
  #   #     self:
  #   #       textAlign: center
  #   #   type: Badge
  #   colors: bg-light-fg-dark
  #   styles:
  #     self:
  #       flexDirection: col
  #       justifyContent: center
  #     subtitle:
  #       textAlign: center
  #   type: GenericSection
  - type: GenericSection
    title:
      text: Cover Letter
      color: text-dark
      type: TitleBlock
    text: >
      Create custom cover letter based on your resume and professional summary for the position or company that you are applying to with the power of AI as well as custom prompting.
    actions: []
    media:
      title: Title of the video
      url: /images/cover-letter-demo-30-sec.mp4
      autoplay: true
      loop: true
      muted: true
      controls: true
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          # borderColor: border-dark
          # borderStyle: solid
          # borderWidth: 1
          # borderRadius: large
      type: VideoBlock
    elementId: null
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
      # subtitle:
      #   textAlign: left
  - title:
      text: Intro Message
      color: text-dark
      type: TitleBlock
    # subtitle: Increase your reach
    text: >
      Create messages or templates for cold introduction, referral introduction, application follow-up, and much more.
    # actions:
    #   - label: Get started
    #     url: /
    #     icon: arrowRight
    #     iconPosition: right
    #     style: secondary
    #     type: Button
    #   - label: See Tutorials
    #     url: /
    #     showIcon: true
    #     icon: arrowRight
    #     iconPosition: right
    #     style: primary
    #     type: Link
    media:
      title: Title of the video
      url: /images/cold-intro-demo-30-sec.mp4
      controls: true
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          # borderColor: border-dark
          # borderStyle: solid
          # borderWidth: 1
          # borderRadius: large
      type: VideoBlock
      autoplay: true
      loop: true
      muted: true
    # badge:
    #   label: This is a badge
    #   color: text-primary
    #   type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
    type: GenericSection
  - title:
      text: Application Question
      color: text-dark
      type: TitleBlock
    # subtitle: Increase your reach
    text: >
      Enter questions asked of you during the application process and populate answer options to help you finalize your response.
    # actions:
    #   - label: Get started
    #     url: /
    #     icon: arrowRight
    #     iconPosition: right
    #     style: secondary
    #     type: Button
    #   - label: See Tutorials
    #     url: /
    #     showIcon: true
    #     icon: arrowRight
    #     iconPosition: right
    #     style: primary
    #     type: Link
    media:
      title: Title of the video
      url: /images/application-questions-demo-30-sec.mp4
      controls: false
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          # borderColor: border-dark
          # borderStyle: solid
          # borderWidth: 1
          # borderRadius: large
      type: VideoBlock
      autoplay: true
      loop: true
      muted: true
    # badge:
    #   label: This is a badge
    #   color: text-primary
    #   type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
    type: GenericSection
  - title:
      text: Book Meeting
      color: text-dark
      type: TitleBlock
    # subtitle: Be in good company
    text: >
      Generate a personalized engagement template to send and initiate a meeting in the varios stages of your application process.
    # actions:
    #   - label: Get started
    #     url: /
    #     icon: arrowRight
    #     iconPosition: right
    #     style: secondary
    #     type: Button
    #   - label: See Tutorials
    #     url: /
    #     showIcon: true
    #     icon: arrowRight
    #     iconPosition: right
    #     style: primary
    #     type: Link
    media:
      title: Title of the video
      url: /images/book-meeting-demo-30-sec.mp4
      controls: false
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          # borderColor: border-dark
          # borderStyle: solid
          # borderWidth: 1
          # borderRadius: large
      type: VideoBlock
      autoplay: true
      loop: true
      muted: true
    # badge:
    #   label: This is a badge
    #   color: text-primary
    #   type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
    type: GenericSection
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-5
          - pl-5
          - pb-5
          - pr-5
    type: DividerSection
  - type: CarouselSection
    title: null
    subtitle: What our users say about us
    items:
      - title: >-
          “Breadchaser helped me sent out more applications in less time and it integrated well with LinkedIn.”
        # tagline: Testimonial
        subtitle: 'Alexander Krut, Wells Fargo'
        text: >-
          Alex is a software engineer at Wells Fargo, a nationally renowned fortune 100 financial institution.
        image:
          url: /images/avatar1.svg
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          "I've used Breadchaser to help me in increasing lead generations and network outreach to better assist those who need my company's services."
        # tagline: Testimonial
        subtitle: 'Nick Montes, Achieve Intelligence'
        text: >-
          Nick is the Founder at Achieve Intelligence, an enterprise architecture consultancy based in Oxford, UK and providing services globally.
        image:
          url: /images/avatar2.svg
          altText: John Doe
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: >-
          "I enjoyed using Breadchaser to customize cold intro messages and cover letter based on the companies I was applying to."
        # tagline: Testimonial
        subtitle: 'Dennis Wang, Nonprofit Circle'
        text: >-
          Dennis is a full-stack developer at Nonprofit Circle, a start up organization that connects other non-protif corganizations with community resources and support.
        image:
          url: /images/avatar3.svg
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
    elementId: null
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
seo:
  metaTitle: Home | Breadchaser
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
