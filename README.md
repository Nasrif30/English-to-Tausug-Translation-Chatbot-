# TausugBot

A React.js chatbot web application that translates English words and phrases to Tausug language.

## Features

- **Translation**: Translates English to Tausug using a local translations.json file
- **Responsive Design**: Works perfectly on both desktop and mobile devices
- **Dark Theme**: Beautiful dark green theme with clean typography
- **Chat Interface**: Modern chatbot-style UI with message bubbles
- **Secret Message**: Hidden feature triggered by typing "Nananly"
- **Help Section**: Built-in instructions for users

## How to Use

1. Type English words or phrases in the input field
2. Press "Translate" or hit Enter to see the Tausug translation
3. Click the help button (❓) for usage instructions
4. Try typing "Nananly" for a special surprise!

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Running the App
```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production
```bash
npm run build
```

## Deployment

This app is ready for immediate deployment on Vercel:

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy with default settings

## Customization

### Adding Translations
Edit `src/translations.json` to add new English-to-Tausug translations:

```json
{
  "hello": "marayaw",
  "goodbye": "assalam",
  "your_word": "tausug_translation"
}
```

### Changing the Secret Message
In `src/App.js`, find the secret message section and modify the text:

```javascript
// Look for this section in the handleTranslate function
if (inputText.toLowerCase().trim() === 'nananly') {
  botResponse = {
    // ... modify the text property here
    text: "Your custom secret message here!",
    // ...
  };
}
```

### Styling
- Main styles: `src/App.css`
- Global styles: `src/index.css`
- Colors can be changed by modifying the CSS custom properties

## Technologies Used

- React.js
- CSS3 with Flexbox and Grid
- Google Fonts (Inter)
- Responsive design principles

## License

This project is open source and available under the MIT License.
