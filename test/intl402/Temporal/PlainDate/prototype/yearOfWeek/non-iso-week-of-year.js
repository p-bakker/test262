// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.yearofweek
description: >
  Temporal.PlainDate.prototype.yearOfWeek returns undefined for all 
  non-ISO calendars without a well-defined week numbering system.
features: [Temporal]
---*/

// Gregorian calendar has a well defined week-numbering system.

let calendar = new Temporal.Calendar("gregory");
const date = new Temporal.PlainDate(2024, 1, 1, calendar);

assert.sameValue(date.yearOfWeek, 2024);

calendar = new Temporal.Calendar("hebrew");
const nonisodate = new Temporal.PlainDate(2024, 1, 1, calendar);

assert.sameValue(nonisodate.yearOfWeek, undefined);
