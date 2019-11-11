---
title: "2019-11-06"
date: "2019-11-06"
---

# Android build memory issue on Android

- https://github.com/circleci/circleci-docs/issues/2945#issuecomment-471637158

```
Hi, this has been a tough one to debug, in the end the following line from a CircleCI android orb fixed it for me:

GRADLE_OPTS: -Xmx1536m -XX:+HeapDumpOnOutOfMemoryError -Dorg.gradle.caching=true -Dorg.gradle.configureondemand=true -Dkotlin.compiler.execution.strategy=in-process -Dkotlin.incremental=false

My gradle.properties is pretty default:

org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
org.gradle.parallel=true
Other project dependencies worth mentioning:

API Level 28 (circleci/android:api-28)
Gradle 4.10.2
Android Gradle plugin 3.3.2
Kotlin 1.3.21

```

https://circleci.com/orbs/registry/orb/wordpress-mobile/android

# Modal not showing on Android

- https://github.com/wix/react-native-navigation/issues/4421
- This animation is not supported: content.
- animation object handling is different between Android and iOS
