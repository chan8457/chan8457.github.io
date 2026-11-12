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
    result: "The wiki holds about 230 documents and 400 work-log entries (as of Nov 2026). Other automations, such as product pages and Reels, read it as their reference knowledge, which keeps tone and facts consistent.",
    tools: ["Claude Code", "Obsidian", "git · GitHub", "Scheduled Routine"]
  },
  "chuseok-ad": {
    title: "Chuseok Fruit Gift Set: AI Video Ad (15 sec, vertical)",
    org: "Agricultural brand",
    summary: "A 15-second vertical ad made with Google Flow (Veo). I solved the mascot's face-consistency problem through motion design.",
    problem: "In AI video, the character's face kept drifting and its movement kept sliding.",
    process: [
      "Revised prompts repeatedly to narrow down the causes of face distortion and sliding.",
      "Changed the motion concept so the AI has less to redraw.",
      "Compared tools such as Higgsfield, Kling and Pika, and assigned each a role."
    ],
    result: "Established a way to work around tool limits through direction design rather than prompting alone.",
    tools: ["Google Flow", "Veo", "Kling", "Higgsfield"]
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
  "photoreal": {
    title: "A Prompt Method for Photorealistic AI Images",
    org: "Personal research",
    summary: "Dropping keywords like \"cinematic, 8K\" and writing in camera specs and photojournalism language removes the CG look.",
    problem: "AI images looked like CG or illustration and were hard to use in ads and content.",
    process: [
      "Compared adjective-heavy prompts against prompts built on camera model, aperture and shooting situation.",
      "Verified the same principle on a surreal concept (a moon and snow over downtown Seoul)."
    ],
    result: "Wrote down prompt principles that reliably produce photo-like results.",
    tools: ["GPT Image", "Midjourney"]
  },
  "detail-modules": {
    title: "Product Page Design Template and AI Copy Generation System",
    org: "Agricultural brand",
    summary: "Fill in one spreadsheet row and the AI writes or verifies product page copy by checking it against the product wiki.",
    problem: "Building each product page from scratch made quality uneven, and there was a risk of unsupported efficacy claims slipping in.",
    process: [
      "Built a mobile-width HTML design template and marked the points to edit, so it can be reused for other products by changing values.",
      "Defined the spreadsheet input form and designed a system prompt so the AI fills in copy once only factual information is entered.",
      "Put rules in the prompt: no numbers, efficacy claims, certifications or reviews that are not in the wiki, and no health claims for products under advertising review.",
      "Used the same prompt for two scenarios: generating new copy and verifying existing copy.",
      "Applied planning data to the design in bulk with Canva Bulk Create."
    ],
    result: "Filling in product information produces consistent copy and layout, and exaggerated claims are filtered out at the writing stage.",
    tools: ["Claude", "HTML", "Spreadsheet", "Canva"]
  },
  "threads-growth": {
    title: "Threads Account Operation SOP and Data-Based Topic Adjustment",
    org: "Agricultural brand",
    summary: "I turned the operating principle of gathering people who really talk, rather than chasing numbers, into an SOP, and adjusted topics and flow by watching response data.",
    problem: "Restarting the account from scratch required a consistent voice, activity rules and evidence for what works.",
    process: [
      "Analyzed posts and operating styles of Threads users who get strong responses, applied what worked to my own content, and fixed the procedure as an SOP.",
      "Tallied post responses regularly to find which types work (such as personal-appeal posts) and adjusted topics and tone.",
      "Scheduled several posts a day in a batch with a Threads auto-posting tool (Buffer) to cut daily operating time.",
      "Built a landing page, checked the response, then dropped it. Decided to link the profile directly to an open chat and recorded the decision."
    ],
    result: "Documented an operating flow in which AI writes in the account's tone and response data corrects direction, in documents and logs.",
    tools: ["Threads", "Buffer", "Claude", "Google Drive"]
  },
  "momcafe-posts": {
    title: "Weekly Store-News Posts for a Parenting Community Cafe (AI Analysis of the Owner's Voice)",
    org: "Agricultural brand",
    summary: "Analyzed the owner's way of speaking with AI and ran a weekly flow that publishes store-news posts to a parenting community cafe.",
    problem: "Store-news posts easily changed tone from post to post, and posting regularly was a burden in itself.",
    process: [
      "Analyzed the owner's voice and expression habits with AI and organized them into a base tone for posts.",
      "Wrote one store-news post a week.",
      "Set up the flow to publish the posts to the cafe automatically so they could go out steadily."
    ],
    result: "Posted store-news in the owner's voice every week without gaps.",
    tools: ["Claude", "Parenting community cafe"]
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
  "crm-campaign": {
    title: "Member Data RFM Report and CRM Campaign Strategy",
    org: "Agricultural brand",
    summary: "Analyzed online-store member data into a report and planned a text-message CRM campaign for members with no purchase history.",
    problem: "Many members had signed up without ever buying, and there was no standard for whom to contact or how.",
    process: [
      "Analyzed members by purchase history and tier to pick first-purchase targets, and cross-checked marketing consent using member tier as a proxy.",
      "Ruled out manual or macro sending through personal KakaoTalk because of terms-of-service and account-suspension risk, and chose scheduled sending through a text-message API.",
      "Estimated sending cost and lead time, and designed the schedule around the daily sending limit.",
      "Summarized the RFM result as a slide report."
    ],
    result: "Produced an executable plan and report with evidence: whom to send to, through which channel, by when, with cost and duration.",
    tools: ["Claude", "Excel · CSV", "PowerPoint"]
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
  }
};

window.ANALYSIS_EN = [
  { title: "AI and Data-Driven Ad Operations Efficiency Project", desc: "Generative AI and Python automation, sample-data dashboard" },
  { title: "LLM-Based Travel Recommendation Platform (in progress)", desc: "Integrated travel and restaurant data, natural-language recommendations" },
  { title: "Data Analysis of a Discontinued Teen Anonymous Voting App", desc: "Diagnosed the DAU drop and a relaunch strategy" },
  { title: "Recruitment Platform Application Funnel Diagnosis and Improvements", desc: "Improving conversion at each stage" },
  { title: "ML-Based Payment Conversion Strategy for a Shared Office", desc: "Payment conversion prediction and membership improvements" },
  { title: "Seoul Public Bike Station Ad-Targeting Analysis", desc: "Choosing locations for LED panel ads" }
];
