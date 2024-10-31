---
title: Pricing
slug: pricing
sections:
  - title:
      text: Flexible Pricing
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    # subtitle: This is the subtitle for the pricing section
    plans:
      - title: Standard
        price: Free
        details: No credit card required
        description: >-
          Free membership for serious job seeking professionals to try out our core services and simplify their job search experiences.
        features:
          - AI cover letter based on resume or summary
          - AI answers to interview/application uestions
          - AI networking messages and cold intros
          - Smart parsing for LinkedIn, Indeed and more
          - No GPT key or additional AI setup required
          - Daily 100 tokens for AI generations
        image:
          url: /images/silver-badge.png
          altText: Pricing plan 1
          styles:
            self:
              width: 400px
              height: 400px
          type: ImageBlock
        actions:
          - label: Try It Now
            url: https://chromewebstore.google.com/detail/breadchaser-custom-networ/mgbijplmiommnaannjomlaiinkhhjblb?hl=en-US&utm_source=ext_sidebar
            icon: arrowRight
            iconPosition: right
            style: secondary
            type: Button
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
        type: PricingPlan
      - title: Premium – Monthly w/ 3-day free trial
        price: $7.99
        details: per month (billed monthly)
        description: >-
          Paid membership for committed job seekers who apply, network, and interview on a higher frequency and intensity, billed monthly and cancel anytime.
        features:
          - All the standard tier features
          - Unlimited tokens for AI generations
          - Includes 3-day free trial before being charged
          - MOST POPULAR
        image:
          url: /images/gold-badge.png
          altText: Pricing plan 2
          styles:
            self:
              width: 400px
              height: 400px
          type: ImageBlock
        actions:
          - label: Claim 3-Day Free Trial
            url: https://breadchaser.lemonsqueezy.com/buy/ee0192e9-895f-42ca-82f9-220f30221762
            icon: arrowRight
            iconPosition: right
            style: primary
            type: Button
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
        type: PricingPlan
      - title: Elite – Yearly
        price: $5.83
        details: per month (billed yearly)
        description: >-
          Yearly plan for the paid membership package for those interested in a one-and-done experience that maximizes the utlization of our services at a discounted price.
        features:
          - All the premium tier features, but NO free trial period
          - 27% off
        image:
          url: /images/diamond-badge.png
          altText: Pricing plan 3
          styles:
            self:
              width: 400px
              height: 400px
          type: ImageBlock
        actions:
          - label: Buy Today
            url: https://breadchaser.lemonsqueezy.com/buy/88ef496e-52ce-4f0a-9489-f204811c4761
            icon: arrowRight
            iconPosition: right
            style: secondary
            type: Button
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
        type: PricingPlan
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: PricingSection
seo:
  metaTitle: Pricing | Breadchaser
  metaDescription: This is the pricing page built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
