# React Native Boilerplate

## Base Template

[react-native-template](https://github.com/moove-it/react-native-template)

## Prerequisites

- [Node JS >= 16](https://nodejs.org/) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman/)
- [Xcode](https://developer.apple.com/xcode/)
- [Cocoapods](https://cocoapods.org/)
- [JDK > 11](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Android Studio and Android SDK](https://developer.android.com/studio/index.html)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
- [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) as storage solution.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.
- [mobx](https://mobx.js.org/README.html) to manage the global state
- [mobx-react](https://mobx.js.org/react-integration.html) to manage the global state
- [mobx-persist-store](https://github.com/quarrant/mobx-persist-store#readme) to persist the store

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `@shared`: Shared services that used you application.
    - `api`: Controllers and all related with api calls.
    - `stores`: Mobx stores
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `hooks`: Folder to store custom hooks.
  - `utils`: Folder to store mix of utils functions.
  - `localization`: Folder to store the languages files.
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside it's own folder, and inside it a file for its code and a separate one for the styles and tests. Then, the `index.js` is only used to export the final component that will be used on the app.
      - `Screen.js`
      - `Screen.styles.js`
      - `Screen.test.js`
      - `index.js`
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Splash screen customization

To customize the splash screen (logo and background color) use the CLI provided in the [official docs](https://github.com/zoontek/react-native-bootsplash#assets-generation).

## Setup environments

Add the environment variables files in root folder(.env.staging and .env.production)

#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

Start by creating a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "Production"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

Expand the "Build" settings on left

- Click "Pre-actions", and under the plus sign select "New Run Script Action"
- Where it says "Type a script or drag a script file", type: `echo ".env.production" > /tmp/envfile` replacing .env.production with your file

## Styleguide

For coding styling we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).
