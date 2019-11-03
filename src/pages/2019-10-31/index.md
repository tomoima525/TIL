---
title: "2019-10-31"
date: "2019-10-31"
---

🎃

# Kotlin Coroutines

- https://developer.android.com/kotlin/coroutines
- Dispatchers.IO - This dispatcher is optimized to perform disk or network I/O outside of the main thread. Examples include using the Room component, reading from or writing to files, and running any network operations.
- Should run coroutines inside `runBlocking` https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-blocking.html
- https://proandroiddev.com/async-operations-with-kotlin-coroutines-part-1-c51cc581ad33
- Suspending functions: Suspending functions are at the center of everything coroutines. A suspending function is simply a function that can be paused and resumed at a later time. They can execute a long running operation and wait for it to complete without blocking.

# Load image from URI

- https://stackoverflow.com/questions/5776851/load-image-from-url
- HttpUrlConnection https://developer.android.com/reference/java/net/HttpURLConnection

```
   URL url = new URL("http://www.android.com/");
   HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
   try {
     InputStream in = new BufferedInputStream(urlConnection.getInputStream());
     readStream(in);
   } finally {
     urlConnection.disconnect();
   }
```

- **The input and output streams returned by this class are not buffered. Most callers should wrap the returned streams with BufferedInputStream or BufferedOutputStream** . Callers that do only bulk reads or writes may omit buffering.

- https://stackoverflow.com/questions/8992964/android-load-from-url-to-bitmap

# Convert Integer to Hex String

- https://www.tutorialspoint.com/convert-integer-to-hex-string-in-java
- Integer.toHexString(val1)

# MultiLine EditText View

- https://stackoverflow.com/questions/4233626/allow-multi-line-in-edittext-view-in-android

# Workout

- 6 min abs
