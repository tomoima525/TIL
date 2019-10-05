---
title: "2019-10-04"
date: "2019-10-04"
---

☀️

## Analytics on Segment and Mixpanel

- https://segment.com/docs/destinations/mixpanel/

- How to update mixpanel properties on User?

  - Gotcha: It should be passed as trait of identify

- track location
  - \$IP will converted to location
- Can not override data of AppsFlyer
  - Could be a bug
  - https://github.com/segmentio/analytics-react-native/blob/master/packages/core/docs/classes/analytics.client.md#middleware
    > Middlewares are invoked for all events, including automatically tracked events, and external event sources like Adjust and Optimizely.
  - https://github.com/segmentio/analytics-ios/blob/f07232eb36d7a6827533af89d17378518ded7d21/Analytics/Classes/Internal/SEGSegmentIntegration.m#L648
  - need to report the bug to Segment

## Training

- 40 min 8 km run
