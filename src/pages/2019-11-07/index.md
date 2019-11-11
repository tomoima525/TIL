---
title: "2019-11-07"
date: "2019-11-07"
---

☀️

# Downloadable font kotlin

- https://github.com/android/user-interface-samples/tree/master/DownloadableFontsKotlin

# Coroutine lifecycle

- https://www.youtube.com/watch?v=BOHK_w09pVA&t=410s
- https://medium.com/corouteam/exploring-kotlin-coroutines-and-lifecycle-architectural-components-integration-on-android-c63bb8a9156f

# Caching bitmap on Android

- https://developer.android.com/topic/performance/graphics/cache-bitmap
- DiskLru explained https://medium.com/mindorks/this-post-is-about-the-implementation-details-of-jake-whartons-famous-disklrucache-9a87d90206fe

# DiskLruCache

- https://medium.com/mindorks/this-post-is-about-the-implementation-details-of-jake-whartons-famous-disklrucache-9a87d90206fe
- Example implementation https://github.com/FlowCrypt/flowcrypt-android/blob/23089892004bbd787cb5cd73d95f0d3540009a25/FlowCrypt/src/main/java/com/flowcrypt/email/api/email/MsgsCacheManager.kt

# Bitmap to InputStream

- https://stackoverflow.com/questions/7698409/android-transform-a-bitmap-into-an-input-stream

```
ByteArrayOutputStream bos = new ByteArrayOutputStream();
bitmap.compress(CompressFormat.PNG, 0 /*ignored for PNG*/, bos);
byte[] bitmapdata = bos.toByteArray();
ByteArrayInputStream bs = new ByteArrayInputStream(bitmapdata);
```
