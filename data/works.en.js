/* English text for each work. Keys match WORKS[].id in works.js. */
window.CATS_EN = {
  all: "All",
  "ai-media": "AI Image & Video",
  automation: "Automation & Workflow",
  commerce: "Commerce & Product Pages",
  content: "Content & Social",
  report: "Data & Reports",
  dev: "Build & Development"
};

window.GROUPS_EN = {
  image: { name: "Images", desc: "AI product images and card news" },
  detail: { name: "Product Pages", desc: "Product detail page planning and design" },
  automation: { name: "Automation", desc: "Tools and web apps that cut repetitive work" }
};

window.WORKS_EN = {
  "ai-wiki": {
    title: "Company AI Wiki: a Knowledge Management System",
    org: "Agricultural brand",
    summary: "A knowledge system that splits company material into raw sources, an AI-maintained wiki and operating rules, and logs every change with git.",
    problem: "Brand tone, product facts, the owner's instructions and customer-service records were scattered. The same explanations had to be repeated, and the standard changed every time I asked AI to do something.",
    process: [
      "Designed three layers: raw sources (read-only), an AI wiki (organized by AI) and operating rules (CLAUDE.md). The raw sources are never edited and stay as the verification standard.",
      "Gave the AI rules: never state unsourced content as fact, mark inference as \"inference\" and anything uncertain as \"needs checking\".",
      "Customer personal data is anonymized before it enters the wiki, and the AI is forbidden to invent health or efficacy claims that could break advertising rules.",
      "Defined ingest, query and lint procedures, logged every task, and version-controlled everything with git.",
      "Set up scheduled cloud routines for regular wiki checks and a daily marketing-trend briefing."
    ],
    result: "The wiki holds about 230 documents and 400 work-log entries (as of Nov 2026). Other automations, such as product pages and Reels, read it as their reference knowledge, which keeps tone and facts consistent. The images below are the real Obsidian screens: the folder structure of 02_AI_Wiki with the AI operating-rules document (CLAUDE.md), and the graph view (each dot is a document, each line a link). Folder names that contain the company name are mosaicked.",
    tools: ["Claude Code", "Obsidian", "git · GitHub", "Scheduled Routine"]
  },
  "product-ai-images": {
    title: "AI Product & Promotion Images Based on Real Product Photos",
    org: "Agricultural brand",
    summary: "Created event promotions, gift sets and product shots with AI, always starting from real product photos.",
    problem: "Images made by AI alone can look different from the real product and mislead customers. I needed a method that uses the real photo as the reference.",
    process: [
      "Used the real product photo as the base image. Shape and color stay true to the product, and only background, props and composition are extended with AI.",
      "For event promotions, swapped only the product in the same layout to produce a series at once (three apple and sweet potato varieties).",
      "For holiday gift sets, kept the product composition as is and made styled shots separately (top-down table setting, a model in hanbok holding the box).",
      "Made the blueberry set in three compositions: on a plate, in hands and in a bowl."
    ],
    result: "Produced a range of product images for event promotions, holiday gift sets and fruit shots. Below is a small selection. Brand logos are mosaic-blurred.",
    tools: ["GPT Image"]
  },
  "cardnews-peach": {
    title: "Peach Card News, 5 Slides",
    org: "Agricultural brand",
    summary: "A set of five 4:5 Instagram card-news slides that answer a customer's questions in order: origin, variety, then sweetness.",
    problem: "Peaches come in many varieties and origins, and customers find it hard to choose, or to trust that they are sweet even in the rainy season. Simply listing product details did not build trust.",
    process: [
      "Built the five slides around the order of questions a customer would ask: a question-style cover hook, origin and brand, variety comparison, sweetness evidence, then a summary of what was checked and ripening advice.",
      "Put in sweetness measured on a farm visit (12 Brix on average, 16 at best) together with the measuring photos, so trust comes from checked facts rather than claims.",
      "Compared two varieties side by side, white peach (Akatsuki) and yellow peach (Jewang), by taste and who each suits.",
      "Made a text-only five-slide draft first, then rebuilt it as a designed version with real product and measuring photos.",
      "Used only confirmed facts with no exaggeration, in a soft, easy tone."
    ],
    result: "Completed five slides that read as one flow, from the cover to the ripening advice. The images below are the actual result. Brand names, logos, a co-brand mark and the measuring device maker's mark are blurred.",
    tools: ["ChatGPT", "AI images"]
  },
  "monthly-letter": {
    title: "Monthly Letter Newsletter Maker",
    org: "Agricultural brand",
    summary: "AI polishes the owner's draft into a letter, and a local web tool turns it into two 4:5 PNG images.",
    problem: "Rebuilding the monthly customer letter in a design tool every time took long, and the look changed from month to month.",
    process: [
      "Designed AI writing instructions so that pasting the draft returns JSON of four block types: greeting, paragraph, notice box and quote.",
      "Built a web tool that lays out two 1080×1350 letters automatically from the JSON. It opens only on my own computer to keep PNG saving secure.",
      "It warns when the text overflows, and the instructions include a rule to shorten to 500-650 characters while keeping key facts and the owner's heart.",
      "Added a double-click launcher and a user guide so non-developers can use it."
    ],
    result: "Paste the draft, press a few buttons, and two newsletter images in the same format for KakaoTalk are ready. Below: the maker screen, two letters actually generated for the August issue, and the first-time user guide.",
    tools: ["Claude", "HTML · CSS · JS", "PowerShell"]
  },
  "review-card": {
    title: "Customer Review Card Generator (Python · Web)",
    org: "Agricultural brand",
    summary: "Enter name, rating, date, review text and a photo, and it produces a review highlight card in the same template.",
    problem: "Laying out each review card by hand made the look differ by product and took a long time.",
    process: [
      "Wrote a Python (Pillow) script with a card-generating function that swaps only text and photo in the same template.",
      "Made it pick the font path automatically so it runs on both Windows and Linux.",
      "Customer photos are used as they are, without retouching. For reviews with no photo, the official logo fills the space so the layout stays identical.",
      "Also built a separate web generator for no-code use, and kept outputs in per-product folders."
    ],
    result: "Even as products grow, review cards in the same template can be made quickly. Below are some actually generated examples, with customer names blurred.",
    tools: ["Python", "Pillow", "HTML", "Claude"]
  },
  "reels-production": {
    title: "Reels and Short-Form Production Workflow",
    org: "Agricultural brand",
    summary: "From one-person shooting scripts to CapCut subtitles and two-voice TTS direction, as one flow.",
    problem: "I had to keep making short-form videos that fit the platform's retention patterns without crew or equipment.",
    process: [
      "Wrote shooting scripts that work with minimal equipment (brand statement, emotional Reels and others).",
      "Wrote SRT subtitles for CapCut and directed two-voice TTS."
    ],
    result: "Built a short-form pipeline I can keep running alone.",
    tools: ["CapCut", "TTS", "Claude"]
  },
  "sketchup-ruby": {
    title: "SketchUp Part-Count Ruby Extension",
    org: "Commissioned by a drafter",
    summary: "I built a SketchUp extension with AI that counts identical parts as one even when colors differ, and exports bolts, nuts and washers to Excel.",
    problem: "Drawings contain tens of thousands of repeated parts such as columns, pins and bolts. Parts that look identical to a person split into separate items in SketchUp, because names become \"#1\", \"#2\" or colors differ, so existing quantity tools could not give the totals in one pass.",
    process: [
      "Wrote a spec before any code: problem definition, scope (included and excluded for version 1), user flow, matching principles, 13 test cases and completion criteria.",
      "Excluded color and material from matching entirely, and stripped the automatic name suffix (#number) so parts with the same name group together.",
      "Computed the real size with scaling applied and compared a geometry fingerprint (SHA-256). Parts with the same name but a different shape are not merged automatically and trigger a warning.",
      "Set the top rule as \"better not to merge than to merge wrongly\", and let the user review each stage's decision, confidence and merge reason.",
      "Counted nested components along every placement path, with a selectable counting mode (top level, all levels, lowest level).",
      "Added a feature that automatically calculates bolt-type and pin-type fastening sets (bolt, nut, washer and so on) for each joint, where faces meet.",
      "Saved results to Excel and CSV (without garbled Korean text), and ran all analysis only on the user's own PC."
    ],
    result: "On a real drawing model it counted 48,604 placed objects as 275 part types, converted 2,133 joints into fastening sets, and produced 8,532 bolts, 8,532 nuts and 6,399 washers in one run. The images below show the real run and the saved Excel. Model names are blurred.",
    tools: ["Ruby", "SketchUp", "Claude"]
  },
  "game-clan": {
    title: "Growth Calculator and Management Web App for a Game Clan",
    org: "Game clan (private, non-commercial use)",
    summary: "I built a Korean-language web app with ChatGPT that brings growth calculation, battle comparison and clan management into one place, and clan members actually use it.",
    problem: "The same game numbers had to be typed into each calculator again, and members had to interpret English-centered information on their own. Clan schedules, notices and tech-research recommendations were also spread across several places.",
    process: [
      "Designed it so the equipment, resources and skills confirmed in game are saved once in a profile, and every calculator uses the same values.",
      "Split it into growth planning (ascension calculator), battle DPS comparison, tech tree, codex and clan management menus, fitted to mobile screens.",
      "Checked game config data per version and wrote a script to convert it with Korean names and icons, with a rule never to hand-edit generated files.",
      "Added OCR that reads number and name candidates from screenshots, but anything uncertain is reviewed by a person before it is applied.",
      "Labeled probability results clearly as \"estimates\" on screen (for example, a 90% safe zone is still not a guarantee) to prevent misunderstanding.",
      "Split viewing and editing of clan notices, records and tech research by approved membership and server permissions, and kept original screenshots and credentials private.",
      "Set the principle of never typing into the game client or automating play.",
      "Maintained automated tests (218) for probability, cost, DPS, OCR parsing and backup, along with work logs and a project index."
    ],
    result: "It became a web app that clan members actually use: growth planning, battle comparison, codex, screenshot analysis and clan schedule and notice management in one place. The images below are real screens, with nicknames blurred.",
    tools: ["ChatGPT", "React", "TypeScript", "Next.js", "Supabase", "Cloudflare Workers", "Tesseract.js"]
  },
  "slicer-log": {
    title: "Meat Slicer Closing-Log Web App (Commissioned by a Restaurant)",
    org: "Commissioned by a shabu-shabu restaurant",
    summary: "I built a web app with ChatGPT that saves the trim weight measured at closing by date and generates the KakaoTalk sharing message in one step.",
    problem: "At every closing, staff had to weigh the trim of brisket, beef belly and pork and retype it into a KakaoTalk message. With records only in chat, past numbers meant searching the conversation, and for days when sharing was missed, the date of each number had to be sorted out separately.",
    process: [
      "Listened to the on-site flow and cut it to four steps: choose date and staff, enter trim weight (g) per meat, save, copy the KakaoTalk message.",
      "Designed for staff entering right after closing on a phone, with large input fields on a single screen.",
      "Saved records go to a shared list and appear on other staff members' open screens within 5 seconds.",
      "The KakaoTalk message is generated from the same numbers without the staff name, and when several days are posted in one message, each is saved under its real closing date.",
      "Added search by date and staff, record editing with deletion recovery, and Excel and CSV download for all or filtered results.",
      "Built the mobile input screen, per-date saving and lookup, Excel download and message copy with ChatGPT, and tested them (React for the screen, Netlify for deployment, PostgreSQL for records, ExcelJS for Excel files).",
      "No AI model or API is connected to the live site. It works only from the input and fixed rules (estimated weight and box conversion are configured calculations, and the message fills a fixed template with saved values).",
      "Because the shop currently measures only trim weight, saving works with trim weight alone, and sliced amount, thawing and inventory are optional fields opened only when needed."
    ],
    result: "Closing entry and KakaoTalk sharing finish in one go, and records land on the actual closing date even when shared late. Even when the staff changes, records can be viewed in one place in the same items and units, and downloaded to Excel to compare trim weight changes by meat. The images below are real screens, with staff names blurred.",
    tools: ["ChatGPT", "React", "Netlify", "PostgreSQL", "ExcelJS"]
  },
  "order-sorter": {
    title: "Order CSV Auto-Sorter for Packing and Delivery Sheets",
    org: "Small farm products seller",
    summary: "I built, with AI, a program that splits an order CSV downloaded from the online shop into packing, delivery and pickup sheets in one step, and used it in daily work.",
    problem: "For every batch of orders I had to open the CSV by hand, count options and quantities to pack, separate direct delivery, courier and in-store pickup, and filter out test orders and pre-order items that must not be packed yet. Whenever an option name changed, the rules drifted and mistakes crept in.",
    process: [
      "Designed the flow so one CSV produces three sheets: packing (with an option-quantity summary), delivery (ordered by nearby addresses) and pickup.",
      "Highlighted rows where one address ordered several options and cells where one option was ordered twice or more, so combined packing is obvious at a glance.",
      "Made test orders with malformed postal codes, farm-direct items and pre-order items excluded by default, with a warning shown instead of silently dropping them.",
      "Moved product recognition rules (keywords and display names) out of the code into a Product tab where they can be added, edited and reordered on screen, so option changes need no code edits.",
      "Packaged it as an exe that runs by double-click on PCs without Python."
    ],
    result: "Pick the order CSV, press one button, and the sheets for each job are created. The images below show the real program run on made-up sample orders and its Excel output; every name, phone number and address is fictional.",
    tools: ["Python", "Tkinter", "openpyxl", "Claude"]
  },
  "youtube-embed": {
    title: "YouTube Embed Code Generator for Product Pages",
    org: "Small farm products seller",
    summary: "A program that turns a pasted YouTube link into an autoplay video embed code ready for shop product pages.",
    problem: "Putting a GIF-like looping video on a product page meant hand-editing the embed code every time. A first web-page version could not play the preview inside its frame, so I needed a way to check playback under the same conditions as the real product page.",
    process: [
      "Extracts the video ID automatically from regular links, Shorts links and links with share parameters.",
      "Choose autoplay, mute, loop, hidden controls and display width, and a responsive 16:9 embed code is generated instantly.",
      "A \"preview in browser\" button builds a temporary page so playback can be tested in a real browser, with on-screen hints for what to check if it fails (embedding allowed, age restriction).",
      "The program also explains how to set a video to Unlisted so it stays out of search but plays on the product page.",
      "Bundled as a single exe that needs no Python, so a colleague only needs the file."
    ],
    result: "Paste a link, press copy, and the code to paste into the product-page HTML editor is ready. The image below is the real screen running with a sample link.",
    tools: ["Python", "Tkinter", "Claude"]
  },
  "link-shortener": {
    title: "Product Link Shortener with Click Stats (Deployed on Cloudflare)",
    org: "Small farm products seller",
    summary: "A web tool, deployed on Cloudflare, that turns shop product URLs into short product-number links and shows click counts per product.",
    problem: "Shop product URLs carry long product names and category paths, which are awkward in social posts and messages, and there was no way to see which product links were actually clicked.",
    process: [
      "Finds the product number inside a URL and builds a short link; several lines can be pasted at once and each is converted.",
      "URLs without a product number are flagged with the reason, and all converted links can be copied in one click.",
      "Split the redirect server (Cloudflare Workers) from the page (Cloudflare Pages), and counted total clicks and unique visitors per link.",
      "Product names are registered automatically, and the stats table supports search, renaming and deletion.",
      "For staff on phones, the table turns into cards on narrow screens and the page can be added to the home screen."
    ],
    result: "Paste a product URL and the short link appears at once; any staff member opens the same address in a browser. The images below show the page on desktop and phone with sample URLs, the real shop address is replaced with an example domain, and the click counts in the stats view are sample values for the demo.",
    tools: ["Cloudflare Workers", "Cloudflare Pages", "JavaScript", "Claude"]
  },
  "smartstore": {
    title: "Building a Small Farm's Smart Store and Its Product Pages",
    org: "Small-scale farm sales",
    summary: "I built the Naver Smart Store for a Jeju tangerine farm and planned and produced the whole product page with AI.",
    problem: "Small farms lack people and budget for product pages, and the more product types and options there are, the harder it is for customers to choose.",
    process: [
      "From the farm's photos and product information, designed a selection structure in the order \"variety first, options second\".",
      "Built a screen comparing open-field and greenhouse tangerines on the same criteria, plus a size and weight guide.",
      "Added sections that tell customers before ordering about taste and size variation and possible bruising in transit, easing worries first.",
      "Closed with storage and delivery guidance in one flow, so the structure reduces customer-service questions.",
      "Used only confirmed facts with no exaggeration, in warm and simple sentences matching the brand tone."
    ],
    result: "Completed a 12-section product page, from the first screen to storage and delivery guidance. The images below are the actual result, with the brand name and people blurred.",
    tools: ["Naver Smart Store", "Canva", "Claude", "AI images"]
  },
  "sample-lotion-detail": {
    title: "Product Page for a Fictional Skincare Lotion (AI Images + Automated Layout)",
    org: "Personal project · fictional product",
    summary: "An 11-section product page sample for a fictional lotion, taken from planning and copy checks through AI images to automated layout.",
    problem: "Product pages usually mean hand-fitting planning, copy, images and design from scratch every time, and cosmetics copy has to avoid risky claims. I wanted a way to rebuild a page quickly from one set of design rules.",
    process: [
      "Planned an 11-section flow, from the hero to the disclaimer, based on the copy and ingredient settings of a fictional product (SAMPLE HYDRA BARRIER LOTION).",
      "Generated product, model and texture images with GPT, choosing ones whose bottle and tone read as a single product, and placed them per section.",
      "Wrote a conversion script that turns one planning file into 96 design commands, laying out an 860px-wide product page automatically.",
      "Checked 56 lines of copy against a list of banned and risky cosmetics expressions, and flagged phrases that could read as efficacy claims.",
      "Reviewed the output and regenerated it three times, fixing Korean line breaks, numeral fonts and the ingredient table layout."
    ],
    result: "Finished a product page made of 11 section images plus one full-length image. It is a fictional product for this portfolio and is not for sale; every image is an AI-generated staged image, and the ingredient amounts and price are made up. The screens below follow the page in its real order.",
    tools: ["GPT Image", "Claude", "Python", "FigCraft"]
  }
};

window.ANALYSIS_EN = [
  { title: "AI and Data-Driven Ad Operations Efficiency Project", desc: "Generative AI and Python automation, sample-data dashboard" },
  { title: "Data Analysis of a Discontinued Teen Anonymous Voting App", desc: "Diagnosed the DAU drop and a relaunch strategy" },
  { title: "Recruitment Platform Application Funnel Diagnosis and Improvements", desc: "Improving conversion at each stage" },
  { title: "ML-Based Payment Conversion Strategy for a Shared Office", desc: "Payment conversion prediction and membership improvements" },
  { title: "Seoul Public Bike Station Ad-Targeting Analysis", desc: "Choosing locations for LED panel ads" }
];
