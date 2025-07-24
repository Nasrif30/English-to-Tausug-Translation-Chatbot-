Build me a React or Next.js chatbot web app named Nasrif that I can deploy on Vercel.
The chatbot will translate English words or phrases to Tausug using a separate translations.json file I will provide and update manually.

Features:

Translation Logic

Reads English-to-Tausug mappings from translations.json.

Case-insensitive matching.

If translation is missing, show “No translation found.”

Frontend-only, no API or backend calls.

UI Design

Dark theme with colors: Dark Green (#004225) background and Dark White (#f0f0f0) text.

Chatbot style UI: user messages and bot replies in chat bubbles.

Show a robot avatar (representing Nasrif) in messages or header.

Responsive design: fits mobile screens and adjusts to desktop nicely.

Font should be clean (like Inter or Roboto).

Guidelines / How to Use

Display a small instructions section or help icon explaining:

“Type English words/phrases.”

“Press Translate or Enter to see Tausug meaning.”

“Missing translation? Add to translations.json.”

Secret Message Trigger

If the user types the word “Nananly” (exact match, case-insensitive), instead of translating, show a secret letter/message (I will provide this letter later).

This secret message should appear clearly in the chat area as if Nasrif is revealing it privately.

Behavior

User types in input box → presses button or Enter → bot replies in chat bubble.

Show chatbot name Nasrif in header.

Smooth animations for messages (optional but nice).

Deployment

Must work with Vercel deployment immediately (no special config).

Include clear comments in code for:

Editing translations.json.

Changing the secret message content.

Adjusting styles or colors.