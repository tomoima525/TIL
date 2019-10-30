---
title: "2019-10-29"
date: "2019-10-29"
---

☀️

# Switching to Cocoa pod from linking

- https://github.com/ivpusic/react-native-image-crop-picker/issues/633
- Unlinking by
  - open the project in Xcode, and check if react-native-image-crop-picker is still in Libraries folder. If yes, remove it
  - check if libRNImageCropPicker is in Build Phases > Link binary with images. If yes, remove it.

# Patching

- http://stephenjungels.com/jungels.net/articles/diff-patch-ten-minutes.html
- In case of this particular issue:
  - Generate a patch file:

```
diff -u Pods/QBImagePickerController/QBImagePicker/QBAssetsViewController.m patches/QBAssetsViewController.m > patches/QBAssetsViewController.patch
A patches/QBAssetsViewController.m file is the same as you find in code, but with an added line that fixes sorting.
```

- Add the following code to your pod file:

```
post_install do |installer|
  puts 'Patching QBAssetsViewController'
  %x(patch Pods/QBImagePickerController/QBImagePicker/QBAssetsViewController.m < patches/QBAssetsViewController.patch)
end
```

# Workout

- 15 min gym
- 6km run
