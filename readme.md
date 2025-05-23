# ☀️ Weather App

A responsive and theme-aware weather app built with **React Native**, **Expo**, and **expo-router**. It fetches real-time weather data and allows users to switch between light and dark themes, with persistent settings using AsyncStorage.

---

## 📦 Tech Stack

- ⚛️ React Native `v0.79.2` + React `v19`
- 🚀 [Expo](https://expo.dev/) with `expo-router` for routing
- 🌦️ `axios` for fetching weather data
- 🌙 Theme toggle with `@react-native-async-storage/async-storage`
- 🧠 State handling using `React Context`
- 🎨 Icons with `@expo/vector-icons`
- ✅ TypeScript
- 🧪 Testing with `@testing-library/react-native` and `jest-expo`
- 🧹 Prettier for code formatting

---

## 📁 Folder Structure

```bash
.
├── app/                   # expo-router entry points (screens/routes)
│   ├── __tests__/         # tests folder
│   ├── assets/            # assets folder
│   ├── components/        # Reusable global UI components
│   ├── features/          # different features of the application
│   │       └── weather/   # feature weather 
│   │              ├── components/   # weather related components
│   │              ├── context/      # weather contexts 
│   │              └── hooks/        # weather hooks
│   ├── screens/           # screens folder
│   ├── types/             # reusesable types 
│   ├── index.tsx          
│   └── _layout.tsx        # Common layout
├── services/              # services 
├── context/              # ThemeContext and other providers
├── App.tsx              
└── ...
```

## Architecture Decision
```
I’ve built the weather app with a structure that makes it easy to grow and maintain over time. Everything is organized in a way that allows me to add new features or make changes easily.
The data handling process related to the APIs is centralized in services.
Reusable components are placed directly under the app folder, which can store all global UI components, whereas components related to specific features can be placed into their specific feature folder atm its weather here. Each feature holds its related components, context, and hooks which helps to avoid conflicts between multiple features when the app grows.
This setup makes it simple to add future features, for example, we can add saved locations in the future. 
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16.x
- Expo CLI: npm install -g expo-cli
- Expo Go (for testing on device)

#### Setup
1 Clone the repo:
``` bash
git clone https://github.com/likita1234/weather-app.git
cd weather-app
```

2 Clone the repo:
``` bash
yarn install
# or
npm install
```

3 Start the app:
``` bash
npx expo start
```

Open it:
```
- On your mobile: scan the QR code using Expo Go
- On emulator: press i for iOS or a for Android
```

## 🔌 API Configuration
- This app uses a weather API (e.g. OpenWeatherMap).

### Create a .env file:
```
WEATHER_API_KEY=your_api_key_here
```

## 🧪 Testing
- Run the test suite using:

``` bash
npm run test
```

- The project uses:

#### jest-expo preset
#### @testing-library/react-native

## 🎨 Formatting
- Format code with Prettier:
``` bash
yarn format
# or
npm run format
```
