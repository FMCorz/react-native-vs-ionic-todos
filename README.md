React Native vs. Ionic 2
========================

Here is a (very) simplistic non-persistent TODO app implemented in both Ionic 2 and React Native for the sake of comparing both frameworks.

React Native
------------

The code is here: [rn/todoapp.js](rn/todoapp.js).

To try:

```
cd rn
npm install
react-native run-android
```

Ionic
-----

The code: (based on the _blank template)

- Typescript: [ionic2/app/pages/home/home.ts](ionic2/app/pages/home/home.ts)
- Template: [ionic2/app/pages/home/home.html](ionic2/app/pages/home/home.html)

To try:

```
cd ionic2
npm install
ionic serve
```

Note: In the limited amount of time spent on this I couldn't figure out how to properly style the "Hide done" toggle.

Code quality
------------

The code can, and should, be better. Only one component was used in React Native to contain most of the code in one place. The same goes with Ionic, although there may be more absurdities there as I'm not as familiar with that framework. Feel free to submit a pull request if I've made ridiculous mistakes.

License
-------

Do whatever you want.