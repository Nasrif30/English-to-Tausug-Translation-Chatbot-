import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import translations from './translations.json';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to TausugBot - Your English to Tausug Translation Assistant. I am here to help you translate English words and phrases into the Tausug language. Please type your English text, and I will provide you with accurate Tausug translations along with guidance and support.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const isCompleteSentence = (text) => {
    // Check if it ends with punctuation
    if (/[.!?]$/.test(text.trim())) {
      return true;
    }

    // Check if it's a complete phrase (has multiple words or is a known single word)
    const words = text.trim().split(/\s+/);
    if (words.length > 1) {
      return true;
    }

    // Check if it's a single word that exists in our translations
    const lowerInput = text.toLowerCase().trim();
    if (translations[lowerInput]) {
      return true;
    }

    // Check if it's a common complete single-word query
    const completeWords = ['hello', 'hi', 'thanks', 'yes', 'no', 'water', 'food', 'house', 'family', 'friend', 'love', 'good', 'bad', 'big', 'small', 'happy', 'sad'];
    if (completeWords.includes(lowerInput)) {
      return true;
    }

    return false;
  };

  const handleTranslate = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Process translation with typing animation
    setTimeout(() => {
      const lowerInput = inputText.toLowerCase().trim();
      let botResponse;

      // Check for special identity questions
      if (lowerInput === 'who are you?' || lowerInput === 'who are you' || lowerInput === 'isiyu kaw?' || lowerInput === 'isiyu kaw') {
        botResponse = {
          id: Date.now() + 1,
          text: "Created by AlnasrifJH",
          sender: 'bot',
          timestamp: new Date()
        };
      }
      // Check for secret message trigger (Nanalyn)
      else if (lowerInput === 'nanalyn') {
        botResponse = {
          id: Date.now() + 1,
          text: `Hi Nalyn,

If natrigger mu in secret word, I want to say sorry. I never meant to hurt you in any way. I just want you to know that I'm giving you my full support in everything you do. Please keep going, stay motivated for your future, and don't lose hope even when things get hard.

Always trust Allah because He knows what's best for you. Every challenge you face has a reason, and every tear you cry will be replaced with something better. I believe in you, Nalyn, and I know you can do amazing things if you keep moving forward.

<img src="https://media1.tenor.com/m/GAnWQh5LnF0AAAAC/love.gif" alt="Love GIF" style="max-width: 200px; border-radius: 10px; margin: 10px 0;">

<img src="https://c.tenor.com/n8Ql8FxaWTMAAAAM/kitten-love.gif" alt="Kitten Love GIF" style="max-width: 200px; border-radius: 10px; margin: 10px 0;">`,
          sender: 'bot',
          timestamp: new Date(),
          isSecret: true
        };
      }
      // Check for secret message trigger (Petchay)
      else if (lowerInput === 'petchay') {
        botResponse = {
          id: Date.now() + 1,
          text: `Hi Petchayyy,

Good girl (pats head)

I just want you to know that I'm giving you my full support in everything you do. Please keep going, stay motivated for your future and don't lose hope even when things get hard. Always trust Allah because He knows what's best for you. Every challenge you face has a reason and every tear you cry will be replaced with something better. I believe in you, Petchay, and I know you can do amazing things if you keep moving forward. I know you want to be a doctor someday and I hope you never forget that dream. You have what it takes to make it happen, your hard work and patience will pay off. In the end you'll help a lot of people and make your family proud.

<img src="https://media.tenor.com/TAuGPDxIgMwAAAAC/sad-cat-uwu-sad-cat.gif" alt="Cute cat" style="max-width: 200px; border-radius: 10px; margin: 10px 0;">

<img src="https://tse3.mm.bing.net/th/id/OIP.mrHJgjuLHA3p_dJOxrV3gwHaEV?pid=Api&P=0&h=180" alt="Special image" style="max-width: 200px; border-radius: 10px; margin: 10px 0;">`,
          sender: 'bot',
          timestamp: new Date(),
          isSecret: true
        };
      }
      // Check for expressions of problems or sadness
      else if (lowerInput.includes('i have') && (lowerInput.includes('problem') || lowerInput.includes('issue')) ||
               lowerInput.includes('i am sad') || lowerInput.includes('im sad') || lowerInput.includes('i feel sad') ||
               lowerInput.includes('i am depressed') || lowerInput.includes('im depressed') ||
               lowerInput.includes('i am stressed') || lowerInput.includes('im stressed') ||
               lowerInput.includes('i am worried') || lowerInput.includes('im worried') ||
               lowerInput.includes('i need help') || lowerInput.includes('help me') ||
               lowerInput.includes('i am struggling') || lowerInput.includes('im struggling') ||
               lowerInput.includes('life is hard') || lowerInput.includes('difficult time') ||
               lowerInput.includes('going through') && lowerInput.includes('hard')) {
        botResponse = {
          id: Date.now() + 1,
          text: `"Indeed, with hardship comes ease."
(Qur'an 94:6)

Life may feel heavy now, but every hardship you face is never without relief. Allah places challenges in your path not to break you, but to raise you in strength and faith. The patience you show today will become a source of reward tomorrow.

"So be patient. Indeed, the promise of Allah is truth."
(Qur'an 30:60)

Your dreams — whether it's to finish your studies, become a doctor, or help others — are not impossible for Allah. Take every step with effort and prayer, and trust that what is written for you will come at the right moment.

The Prophet Muhammad ﷺ said:
"When Allah wants good for someone, He afflicts them with trials."
(Sahih Bukhari 5645)

This means your struggles are signs that Allah sees good in you. Every tear, every sleepless night, every moment of doubt — they are all purifying you, preparing you for something far better than you can imagine.

"Call upon Me, I will respond to you."
(Qur'an 40:60)

Never stop making du'a. Even in your quiet moments, Allah hears every word and knows every dream in your heart. Keep trusting Him, keep moving forward, and don't give up — because victory belongs to those who are patient and steadfast.`,
          sender: 'bot',
          timestamp: new Date(),
          isSecret: true
        };
      }
      // Check if sentence is complete
      else if (isCompleteSentence(inputText)) {
        // Normal translation logic for complete sentences
        const translation = translations[lowerInput];

        if (translation) {
          botResponse = {
            id: Date.now() + 1,
            text: `Yari in result: "${inputText}" in Tausug is "${translation}"`,
            sender: 'bot',
            timestamp: new Date()
          };
        } else {
          botResponse = {
            id: Date.now() + 1,
            text: "Yari in result: No translation found. Try another word or phrase, or add it to translations.json!",
            sender: 'bot',
            timestamp: new Date()
          };
        }
      }
      // Incomplete sentence
      else {
        botResponse = {
          id: Date.now() + 1,
          text: "Unu yadtu?", // What's that?
          sender: 'bot',
          timestamp: new Date()
        };
      }

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 1500); // Increased delay to show typing animation

    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTranslate();
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="bot-avatar">🤖</div>
          <h1>TausugBot</h1>
          <button 
            className="help-button"
            onClick={() => setShowHelp(!showHelp)}
            title="Help"
          >
            ❓
          </button>
        </div>
      </header>

      {/* Help Section */}
      {showHelp && (
        <div className="help-section">
          <h3>How to Use TausugBot:</h3>
          <ul>
            <li>Type English words/phrases</li>
            <li>Press Translate or Enter to see Tausug meaning</li>
            <li>Complete sentences get "Yari in result:" responses</li>
            <li>Incomplete phrases get "Unu yadtu?" (What's that?)</li>
            <li>Ask "Who are you?" to learn about TausugBot</li>
            <li>Missing translation? Add to translations.json</li>
          </ul>
        </div>
      )}

      {/* Chat Area */}
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender} ${message.isSecret ? 'secret' : ''}`}
            >
              {message.sender === 'bot' && (
                <div className="message-avatar">🤖</div>
              )}
              <div className="message-content">
                <div
                  className="message-text"
                  style={{ whiteSpace: 'pre-line' }}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                ></div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
              {message.sender === 'user' && (
                <div className="message-avatar user-avatar">👤</div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="message bot">
              <div className="message-avatar">🤖</div>
              <div className="message-content typing-indicator">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type English words or phrases..."
            className="message-input"
          />
          <button 
            onClick={handleTranslate}
            className="send-button"
            disabled={!inputText.trim()}
          >
            Translate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
