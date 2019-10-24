---
title: "2019-10-21"
date: "2019-10-21"
---

☀️

# Gradle build failure with React Native navigation

- https://github.com/wix/react-native-navigation/issues/3388#issuecomment-399071604
- react-native-navigation includes build for backward compatibility
- We need to ignore the build so that we can remove the code that does not exist in the current build
- https://wix.github.io/react-native-navigation/#/docs/Installing

# react-native-firebase

- https://rnfirebase.io/docs/v5.x.x/installation/android

## Process

- Register app
- Download config file
- Add Firebase SDK

# Dependency failing: com.nimbusds:nimbus-jose-jwt:5.1 -> net.minidev:json-smart@[1.3.1,2.3]

- https://github.com/Microsoft/react-native-code-push/issues/1448
- library that has internal access causes depenency failure

```
// add at the bottom
googleServices { disableVersionCheck = true }
```

# Workout

- 6 min abs
