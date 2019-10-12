---
title: "2019-10-11"
date: "2019-10-11"
---

☀️

# Android X support for React Native

## From the discussion about Android X support on React Native

https://github.com/react-native-community/discussions-and-proposals/issues/129#issuecomment-507010053

```
- release RN0.60 with the AndroidX breaking change
- instruct users to add jetifier as a devDependency, run it once as npx jetify, and hook it in package.json postinstall via call to 'jetify'
```

- If we are using RN 0.59.x then we should use jetifier anyway.

## How to do it?

- Read the document or discussion about migration to understand how it should be done
  - https://developer.android.com/jetpack/androidx/migrate
  - https://github.com/react-native-community/discussions-and-proposals/issues/129
- Read blogs
  - https://medium.com/@begalesagar/migrate-an-existing-project-to-androidx-from-support-libraries-adbac897089b
- For native code: Use Android Studio's refactor tool
- For external libraries: Use https://github.com/mikehardy/jetifier to convert libraries
- Check if jetifier works(build passes) with libraries you are using https://github.com/mikehardy/rn-androidx-demo
- The project has a bunch of work around for many libraries, you should definitely have a look
- Try to upate the library to the latest as much as possible so that you can prevent unexpected issue

## What needed to be updated in our project

- react-native-fastimage
  - jetifier did not work with annotation
  - Update `glideVersion` Glide has support from 4.8.0
  - https://github.com/bumptech/glide/issues/3080
  - Removing `com.github.bumptech.glide:annotations` and adding `androidx.annotation:annotation` solved the issue
    - https://github.com/DylanVann/react-native-fast-image/issues/499#issuecomment-541251477
- react-native-fbsdk
  - Issue with constructor of AccessToken (updating to 0.10.0 solved the issue)
  - https://github.com/facebook/react-native-fbsdk/issues/577
- @segment/analytics-react-native-appsflyer
  - Kotlin version was hard coded.
  - Wrote a script to over write the `build.gradle` file
- Kotlin class merge issue
  - exclude files related to kotlin_module. `exclude "/META-INF/*.kotlin_module"`
  - https://stackoverflow.com/questions/41052868/what-are-kotlin-builtins-files-and-can-i-omit-them-from-my-uberjars
  - `And if you don't use reflection on built-in classes, I think it's safe to exclude .kotlin_builtins files completely from the resulting jar.`

# Workout

- 6min abs
- 60 push ups
