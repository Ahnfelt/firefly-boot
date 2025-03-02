

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Atomic from "../../ff/core/Atomic.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Crypto from "../../ff/core/Crypto.mjs"

import * as ff_core_Date from "../../ff/core/Date.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

import * as ff_core_Js from "../../ff/core/Js.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

import * as ff_core_Json from "../../ff/core/Json.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Lock from "../../ff/core/Lock.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_NodeSystem from "../../ff/core/NodeSystem.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Path from "../../ff/core/Path.mjs"

import * as ff_core_Queue from "../../ff/core/Queue.mjs"

import * as ff_core_Random from "../../ff/core/Random.mjs"

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_SourceLocation from "../../ff/core/SourceLocation.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// newtype Date

// type DateGap
export function DateGap(years_, months_, weeks_, days_, hours_, minutes_, seconds_, milliseconds_, microseconds_, nanoseconds_) {
return {years_, months_, weeks_, days_, hours_, minutes_, seconds_, milliseconds_, microseconds_, nanoseconds_};
}

export const utcTimeZoneId_ = "UTC";

export const isoCalendarId_ = "iso8601";

export const monday_ = 1;

export const tuesday_ = 2;

export const wednesday_ = 3;

export const thursday_ = 4;

export const friday_ = 5;

export const saturday_ = 6;

export const sunday_ = 7;

export const january_ = 1;

export const february_ = 2;

export const march_ = 3;

export const april_ = 4;

export const may_ = 5;

export const june_ = 6;

export const july_ = 7;

export const august_ = 8;

export const september_ = 9;

export const october_ = 10;

export const november_ = 11;

export const december_ = 12;

export function new_(timeZoneId_, year_, month_, day_, hour_ = 0, minute_ = 0, second_ = 0, millisecond_ = 0, microsecond_ = 0, nanosecond_ = 0, calendarId_ = "iso8601", offset_ = ff_core_Option.None(), earlier_ = true, later_ = true) {
return Temporal.ZonedDateTime.from({timeZone: timeZoneId_, year: year_, month: month_, day: day_, hour: hour_, minute: minute_, second: second_, millisecond: millisecond_, microsecond: microsecond_, nanosecond: nanosecond_, calendar: calendarId_, offset: ff_core_Option.Option_else(ff_core_Option.Option_map(offset_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export function newEra_(calendarId_, timeZoneId_, era_, eraYear_, month_, day_, hour_ = 0, minute_ = 0, second_ = 0, millisecond_ = 0, microsecond_ = 0, nanosecond_ = 0, offset_ = ff_core_Option.None(), earlier_ = true, later_ = true) {
return Temporal.ZonedDateTime.from({timeZone: timeZoneId_, era: era_, eraYear: eraYear_, month: month_, day: day_, hour: hour_, minute: minute_, second: second_, millisecond: millisecond_, microsecond: microsecond_, nanosecond: nanosecond_, calendar: calendarId_, offset: ff_core_Option.Option_else(ff_core_Option.Option_map(offset_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export function newEpochMilliseconds_(timeZoneId_, epochMilliseconds_, calendarId_ = "iso8601") {
const zoned_ = Temporal.Instant.fromEpochMilliseconds(epochMilliseconds_).toZonedDateTimeISO(timeZoneId_);
if((calendarId_ !== "iso8601")) {
return zoned_.withCalendar(calendarId_)
} else {
return zoned_
}
}

export function newRfc9557_(rfc9557_) {
return Temporal.ZonedDateTime.from(rfc9557_)
}

export function gap_(iso8601_) {
const duration_ = Temporal.Duration.from(iso8601_);
return ff_core_Date.DateGap(duration_.years, duration_.months, duration_.weeks, duration_.days, duration_.hours, duration_.minutes, duration_.seconds, duration_.milliseconds, duration_.microseconds, duration_.nanoseconds)
}

export function internalDisambiguation_(earlier_, later_) {
return {disambiguation: ((earlier_ && later_)
? "compatible"
: earlier_
? "earlier"
: later_
? "later"
: "reject")}
}

export async function new_$(timeZoneId_, year_, month_, day_, hour_ = 0, minute_ = 0, second_ = 0, millisecond_ = 0, microsecond_ = 0, nanosecond_ = 0, calendarId_ = "iso8601", offset_ = ff_core_Option.None(), earlier_ = true, later_ = true, $task) {
return Temporal.ZonedDateTime.from({timeZone: timeZoneId_, year: year_, month: month_, day: day_, hour: hour_, minute: minute_, second: second_, millisecond: millisecond_, microsecond: microsecond_, nanosecond: nanosecond_, calendar: calendarId_, offset: ff_core_Option.Option_else(ff_core_Option.Option_map(offset_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export async function newEra_$(calendarId_, timeZoneId_, era_, eraYear_, month_, day_, hour_ = 0, minute_ = 0, second_ = 0, millisecond_ = 0, microsecond_ = 0, nanosecond_ = 0, offset_ = ff_core_Option.None(), earlier_ = true, later_ = true, $task) {
return Temporal.ZonedDateTime.from({timeZone: timeZoneId_, era: era_, eraYear: eraYear_, month: month_, day: day_, hour: hour_, minute: minute_, second: second_, millisecond: millisecond_, microsecond: microsecond_, nanosecond: nanosecond_, calendar: calendarId_, offset: ff_core_Option.Option_else(ff_core_Option.Option_map(offset_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export async function newEpochMilliseconds_$(timeZoneId_, epochMilliseconds_, calendarId_ = "iso8601", $task) {
const zoned_ = Temporal.Instant.fromEpochMilliseconds(epochMilliseconds_).toZonedDateTimeISO(timeZoneId_);
if((calendarId_ !== "iso8601")) {
return zoned_.withCalendar(calendarId_)
} else {
return zoned_
}
}

export async function newRfc9557_$(rfc9557_, $task) {
return Temporal.ZonedDateTime.from(rfc9557_)
}

export async function gap_$(iso8601_, $task) {
const duration_ = Temporal.Duration.from(iso8601_);
return ff_core_Date.DateGap(duration_.years, duration_.months, duration_.weeks, duration_.days, duration_.hours, duration_.minutes, duration_.seconds, duration_.milliseconds, duration_.microseconds, duration_.nanoseconds)
}

export async function internalDisambiguation_$(earlier_, later_, $task) {
return {disambiguation: ((earlier_ && later_)
? "compatible"
: earlier_
? "earlier"
: later_
? "later"
: "reject")}
}

export function Date_timeZoneId(self_) {
return self_.timeZoneId
}

export function Date_calendarId(self_) {
return self_.calendarId
}

export function Date_day(self_) {
return self_.day
}

export function Date_dayOfWeek(self_) {
return self_.dayOfWeek
}

export function Date_dayOfYear(self_) {
return self_.dayOfYear
}

export function Date_daysInWeek(self_) {
return self_.daysInWeek
}

export function Date_daysInMonth(self_) {
return self_.daysInMonth
}

export function Date_daysInYear(self_) {
return self_.daysInYear
}

export function Date_epochMilliseconds(self_) {
return self_.epochMilliseconds
}

export function Date_era(self_) {
const era_ = self_.era;
if((!ff_core_JsValue.JsValue_isNullOrUndefined(era_))) {
return ff_core_Option.Some(era_)
} else return ff_core_Option.None()
}

export function Date_eraYear(self_) {
const eraYear_ = self_.eraYear;
if((!ff_core_JsValue.JsValue_isNullOrUndefined(eraYear_))) {
return ff_core_Option.Some(eraYear_)
} else return ff_core_Option.None()
}

export function Date_hour(self_) {
return self_.hour
}

export function Date_hoursInDay(self_) {
return self_.hoursInDay
}

export function Date_inLeapYear(self_) {
return self_.inLeapYear
}

export function Date_microsecond(self_) {
return self_.microsecond
}

export function Date_millisecond(self_) {
return self_.millisecond
}

export function Date_minute(self_) {
return self_.minute
}

export function Date_month(self_) {
return self_.month
}

export function Date_monthCode(self_) {
return self_.monthCode
}

export function Date_monthsInYear(self_) {
return self_.monthsInYear
}

export function Date_nanosecond(self_) {
return self_.nanosecond
}

export function Date_offset(self_) {
return self_.offset
}

export function Date_offsetNanoseconds(self_) {
return self_.offsetNanoseconds
}

export function Date_second(self_) {
return self_.second
}

export function Date_weekOfYear(self_) {
return self_.weekOfYear
}

export function Date_year(self_) {
return self_.year
}

export function Date_yearOfWeek(self_) {
return self_.yearOfWeek
}

export function Date_nextTimeZoneTransition(self_) {
return self_.getTimeZoneTransition("next")
}

export function Date_previousTimeZoneTransition(self_) {
return self_.getTimeZoneTransition("previous")
}

export function Date_startOfYear(self_) {
return self_.with({year: ff_core_Date.Date_year(self_), month: 1, day: 1}).startOfDay()
}

export function Date_startOfMonth(self_) {
return self_.with({year: ff_core_Date.Date_year(self_), month: ff_core_Date.Date_month(self_), day: 1}).startOfDay()
}

export function Date_startOfWeek(self_, firstDayOfWeek_ = 1) {
const offset_ = (((ff_core_Date.Date_dayOfWeek(self_) - firstDayOfWeek_) + ff_core_Date.Date_daysInWeek(self_)) % ff_core_Date.Date_daysInWeek(self_));
return self_.subtract({day: offset_}).startOfDay()
}

export function Date_startOfDay(self_) {
return self_.startOfDay()
}

export function Date_startOfHour(self_) {
return self_.round({smallestUnit: "hour", roundingMode: "floor"})
}

export function Date_startOfMinute(self_) {
return self_.round({smallestUnit: "minute", roundingMode: "floor"})
}

export function Date_startOfSecond(self_) {
return self_.round({smallestUnit: "second", roundingMode: "floor"})
}

export function Date_startOfMillisecond(self_) {
return self_.round({smallestUnit: "millisecond", roundingMode: "floor"})
}

export function Date_startOfMicrosecond(self_) {
return self_.round({smallestUnit: "microsecond", roundingMode: "floor"})
}

export function Date_toRfc9557(self_, smallestUnit_ = ff_core_Option.None(), fractionalSecondDigits_ = ff_core_Option.None(), timeZone_ = true, offset_ = true, calendar_ = true) {
return self_.toString({calendarName: (calendar_
? "auto"
: "never"), fractionalSecondDigits: ff_core_Option.Option_else(ff_core_Option.Option_map(fractionalSecondDigits_, ((_w1) => {
return _w1
})), (() => {
return "auto"
})), smallestUnit: ff_core_Option.Option_else(ff_core_Option.Option_map(smallestUnit_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), timeZoneName: (timeZone_
? "auto"
: "never"), offset: (offset_
? "auto"
: "never")})
}

export function Date_withCalendar(self_, calendarId_) {
return self_.withCalendar(calendarId_)
}

export function Date_withTimeZone(self_, timeZoneId_) {
return self_.withTimeZone(timeZoneId_)
}

export function Date_withEra(self_, era_, eraYear_, monthCode_ = ff_core_Option.None(), day_ = ff_core_Option.None(), earlier_ = true, later_ = true) {
return self_.with({era: era_, eraYear: eraYear_, monthCode: ff_core_Option.Option_else(ff_core_Option.Option_map(monthCode_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), day: ff_core_Option.Option_else(ff_core_Option.Option_map(day_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export function Date_withMonthCode(self_, monthCode_, day_ = ff_core_Option.None(), earlier_ = true, later_ = true) {
return self_.with({monthCode: monthCode_, day: ff_core_Option.Option_else(ff_core_Option.Option_map(day_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export function Date_with(self_, year_ = ff_core_Option.None(), month_ = ff_core_Option.None(), week_ = ff_core_Option.None(), day_ = ff_core_Option.None(), hour_ = ff_core_Option.None(), minute_ = ff_core_Option.None(), second_ = ff_core_Option.None(), millisecond_ = ff_core_Option.None(), microsecond_ = ff_core_Option.None(), nanosecond_ = ff_core_Option.None(), offset_ = ff_core_Option.None(), earlier_ = true, later_ = true) {
return self_.with({year: ff_core_Option.Option_else(ff_core_Option.Option_map(year_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), month: ff_core_Option.Option_else(ff_core_Option.Option_map(month_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), week: ff_core_Option.Option_else(ff_core_Option.Option_map(week_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), day: ff_core_Option.Option_else(ff_core_Option.Option_map(day_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), hour: ff_core_Option.Option_else(ff_core_Option.Option_map(hour_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), minute: ff_core_Option.Option_else(ff_core_Option.Option_map(minute_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), second: ff_core_Option.Option_else(ff_core_Option.Option_map(second_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), millisecond: ff_core_Option.Option_else(ff_core_Option.Option_map(millisecond_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), microsecond: ff_core_Option.Option_else(ff_core_Option.Option_map(microsecond_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), nanosecond: ff_core_Option.Option_else(ff_core_Option.Option_map(nanosecond_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), offset: ff_core_Option.Option_else(ff_core_Option.Option_map(offset_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export function Date_add(self_, years_ = 0, months_ = 0, weeks_ = 0, days_ = 0, hours_ = 0, minutes_ = 0, seconds_ = 0, milliseconds_ = 0, microseconds_ = 0, nanoseconds_ = 0) {
return self_.add({years: years_, months: months_, weeks: weeks_, days: days_, hours: hours_, minutes: minutes_, seconds: seconds_, milliseconds: milliseconds_, microseconds: microseconds_, nanoseconds: nanoseconds_})
}

export function Date_subtract(self_, years_ = 0, months_ = 0, weeks_ = 0, days_ = 0, hours_ = 0, minutes_ = 0, seconds_ = 0, milliseconds_ = 0, microseconds_ = 0, nanoseconds_ = 0) {
return self_.subtract({years: years_, months: months_, weeks: weeks_, days: days_, hours: hours_, minutes: minutes_, seconds: seconds_, milliseconds: milliseconds_, microseconds: microseconds_, nanoseconds: nanoseconds_})
}

export function Date_addGap(self_, gap_) {
return self_.add({years: gap_.years_, months: gap_.months_, weeks: gap_.weeks_, days: gap_.days_, hours: gap_.hours_, minutes: gap_.minutes_, seconds: gap_.seconds_, milliseconds: gap_.milliseconds_, microseconds: gap_.microseconds_, nanoseconds: gap_.nanoseconds_})
}

export function Date_subtractGap(self_, gap_) {
return self_.add({years: gap_.years_, months: gap_.months_, weeks: gap_.weeks_, days: gap_.days_, hours: gap_.hours_, minutes: gap_.minutes_, seconds: gap_.seconds_, milliseconds: gap_.milliseconds_, microseconds: gap_.microseconds_, nanoseconds: gap_.nanoseconds_})
}

export function Date_since(self_, that_) {
const duration_ = self_.since(that_);
return ff_core_Date.DateGap(duration_.years, duration_.months, duration_.weeks, duration_.days, duration_.hours, duration_.minutes, duration_.seconds, duration_.milliseconds, duration_.microseconds, duration_.nanoseconds)
}

export function Date_until(self_, that_) {
const duration_ = self_.until(that_);
return ff_core_Date.DateGap(duration_.years, duration_.months, duration_.weeks, duration_.days, duration_.hours, duration_.minutes, duration_.seconds, duration_.milliseconds, duration_.microseconds, duration_.nanoseconds)
}

export function Date_yearsSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "years", relativeTo: that_})
}

export function Date_monthsSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "months", relativeTo: that_})
}

export function Date_weeksSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "weeks", relativeTo: that_})
}

export function Date_daysSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "days", relativeTo: that_})
}

export function Date_hoursSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "hours", relativeTo: that_})
}

export function Date_minutesSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "minutes", relativeTo: that_})
}

export function Date_secondsSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "seconds", relativeTo: that_})
}

export function Date_millisecondsSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "milliseconds", relativeTo: that_})
}

export function Date_microsecondsSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "microseconds", relativeTo: that_})
}

export function Date_nanosecondsSince(self_, that_) {
const duration_ = self_.since(that_);
return duration_.total({unit: "nanoseconds", relativeTo: that_})
}

export function Date_schedule(self_, nextDate_) {
let current_ = self_;
return ff_core_Stream.Stream_addAll(ff_core_List.List_toStream([self_], false), ff_core_Stream.new_((() => {
current_ = nextDate_(current_);
return ff_core_Option.Some(current_)
}), (() => {

})))
}

export async function Date_timeZoneId$(self_, $task) {
return self_.timeZoneId
}

export async function Date_calendarId$(self_, $task) {
return self_.calendarId
}

export async function Date_day$(self_, $task) {
return self_.day
}

export async function Date_dayOfWeek$(self_, $task) {
return self_.dayOfWeek
}

export async function Date_dayOfYear$(self_, $task) {
return self_.dayOfYear
}

export async function Date_daysInWeek$(self_, $task) {
return self_.daysInWeek
}

export async function Date_daysInMonth$(self_, $task) {
return self_.daysInMonth
}

export async function Date_daysInYear$(self_, $task) {
return self_.daysInYear
}

export async function Date_epochMilliseconds$(self_, $task) {
return self_.epochMilliseconds
}

export async function Date_era$(self_, $task) {
const era_ = self_.era;
if((!ff_core_JsValue.JsValue_isNullOrUndefined(era_))) {
return ff_core_Option.Some(era_)
} else return ff_core_Option.None()
}

export async function Date_eraYear$(self_, $task) {
const eraYear_ = self_.eraYear;
if((!ff_core_JsValue.JsValue_isNullOrUndefined(eraYear_))) {
return ff_core_Option.Some(eraYear_)
} else return ff_core_Option.None()
}

export async function Date_hour$(self_, $task) {
return self_.hour
}

export async function Date_hoursInDay$(self_, $task) {
return self_.hoursInDay
}

export async function Date_inLeapYear$(self_, $task) {
return self_.inLeapYear
}

export async function Date_microsecond$(self_, $task) {
return self_.microsecond
}

export async function Date_millisecond$(self_, $task) {
return self_.millisecond
}

export async function Date_minute$(self_, $task) {
return self_.minute
}

export async function Date_month$(self_, $task) {
return self_.month
}

export async function Date_monthCode$(self_, $task) {
return self_.monthCode
}

export async function Date_monthsInYear$(self_, $task) {
return self_.monthsInYear
}

export async function Date_nanosecond$(self_, $task) {
return self_.nanosecond
}

export async function Date_offset$(self_, $task) {
return self_.offset
}

export async function Date_offsetNanoseconds$(self_, $task) {
return self_.offsetNanoseconds
}

export async function Date_second$(self_, $task) {
return self_.second
}

export async function Date_weekOfYear$(self_, $task) {
return self_.weekOfYear
}

export async function Date_year$(self_, $task) {
return self_.year
}

export async function Date_yearOfWeek$(self_, $task) {
return self_.yearOfWeek
}

export async function Date_nextTimeZoneTransition$(self_, $task) {
return self_.getTimeZoneTransition("next")
}

export async function Date_previousTimeZoneTransition$(self_, $task) {
return self_.getTimeZoneTransition("previous")
}

export async function Date_startOfYear$(self_, $task) {
return self_.with({year: ff_core_Date.Date_year(self_), month: 1, day: 1}).startOfDay()
}

export async function Date_startOfMonth$(self_, $task) {
return self_.with({year: ff_core_Date.Date_year(self_), month: ff_core_Date.Date_month(self_), day: 1}).startOfDay()
}

export async function Date_startOfWeek$(self_, firstDayOfWeek_ = 1, $task) {
const offset_ = (((ff_core_Date.Date_dayOfWeek(self_) - firstDayOfWeek_) + ff_core_Date.Date_daysInWeek(self_)) % ff_core_Date.Date_daysInWeek(self_));
return self_.subtract({day: offset_}).startOfDay()
}

export async function Date_startOfDay$(self_, $task) {
return self_.startOfDay()
}

export async function Date_startOfHour$(self_, $task) {
return self_.round({smallestUnit: "hour", roundingMode: "floor"})
}

export async function Date_startOfMinute$(self_, $task) {
return self_.round({smallestUnit: "minute", roundingMode: "floor"})
}

export async function Date_startOfSecond$(self_, $task) {
return self_.round({smallestUnit: "second", roundingMode: "floor"})
}

export async function Date_startOfMillisecond$(self_, $task) {
return self_.round({smallestUnit: "millisecond", roundingMode: "floor"})
}

export async function Date_startOfMicrosecond$(self_, $task) {
return self_.round({smallestUnit: "microsecond", roundingMode: "floor"})
}

export async function Date_toRfc9557$(self_, smallestUnit_ = ff_core_Option.None(), fractionalSecondDigits_ = ff_core_Option.None(), timeZone_ = true, offset_ = true, calendar_ = true, $task) {
return self_.toString({calendarName: (calendar_
? "auto"
: "never"), fractionalSecondDigits: ff_core_Option.Option_else(ff_core_Option.Option_map(fractionalSecondDigits_, ((_w1) => {
return _w1
})), (() => {
return "auto"
})), smallestUnit: ff_core_Option.Option_else(ff_core_Option.Option_map(smallestUnit_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), timeZoneName: (timeZone_
? "auto"
: "never"), offset: (offset_
? "auto"
: "never")})
}

export async function Date_withCalendar$(self_, calendarId_, $task) {
return self_.withCalendar(calendarId_)
}

export async function Date_withTimeZone$(self_, timeZoneId_, $task) {
return self_.withTimeZone(timeZoneId_)
}

export async function Date_withEra$(self_, era_, eraYear_, monthCode_ = ff_core_Option.None(), day_ = ff_core_Option.None(), earlier_ = true, later_ = true, $task) {
return self_.with({era: era_, eraYear: eraYear_, monthCode: ff_core_Option.Option_else(ff_core_Option.Option_map(monthCode_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), day: ff_core_Option.Option_else(ff_core_Option.Option_map(day_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export async function Date_withMonthCode$(self_, monthCode_, day_ = ff_core_Option.None(), earlier_ = true, later_ = true, $task) {
return self_.with({monthCode: monthCode_, day: ff_core_Option.Option_else(ff_core_Option.Option_map(day_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export async function Date_with$(self_, year_ = ff_core_Option.None(), month_ = ff_core_Option.None(), week_ = ff_core_Option.None(), day_ = ff_core_Option.None(), hour_ = ff_core_Option.None(), minute_ = ff_core_Option.None(), second_ = ff_core_Option.None(), millisecond_ = ff_core_Option.None(), microsecond_ = ff_core_Option.None(), nanosecond_ = ff_core_Option.None(), offset_ = ff_core_Option.None(), earlier_ = true, later_ = true, $task) {
return self_.with({year: ff_core_Option.Option_else(ff_core_Option.Option_map(year_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), month: ff_core_Option.Option_else(ff_core_Option.Option_map(month_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), week: ff_core_Option.Option_else(ff_core_Option.Option_map(week_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), day: ff_core_Option.Option_else(ff_core_Option.Option_map(day_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), hour: ff_core_Option.Option_else(ff_core_Option.Option_map(hour_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), minute: ff_core_Option.Option_else(ff_core_Option.Option_map(minute_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), second: ff_core_Option.Option_else(ff_core_Option.Option_map(second_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), millisecond: ff_core_Option.Option_else(ff_core_Option.Option_map(millisecond_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), microsecond: ff_core_Option.Option_else(ff_core_Option.Option_map(microsecond_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), nanosecond: ff_core_Option.Option_else(ff_core_Option.Option_map(nanosecond_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), offset: ff_core_Option.Option_else(ff_core_Option.Option_map(offset_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
}))}, ff_core_Date.internalDisambiguation_(earlier_, later_))
}

export async function Date_add$(self_, years_ = 0, months_ = 0, weeks_ = 0, days_ = 0, hours_ = 0, minutes_ = 0, seconds_ = 0, milliseconds_ = 0, microseconds_ = 0, nanoseconds_ = 0, $task) {
return self_.add({years: years_, months: months_, weeks: weeks_, days: days_, hours: hours_, minutes: minutes_, seconds: seconds_, milliseconds: milliseconds_, microseconds: microseconds_, nanoseconds: nanoseconds_})
}

export async function Date_subtract$(self_, years_ = 0, months_ = 0, weeks_ = 0, days_ = 0, hours_ = 0, minutes_ = 0, seconds_ = 0, milliseconds_ = 0, microseconds_ = 0, nanoseconds_ = 0, $task) {
return self_.subtract({years: years_, months: months_, weeks: weeks_, days: days_, hours: hours_, minutes: minutes_, seconds: seconds_, milliseconds: milliseconds_, microseconds: microseconds_, nanoseconds: nanoseconds_})
}

export async function Date_addGap$(self_, gap_, $task) {
return self_.add({years: gap_.years_, months: gap_.months_, weeks: gap_.weeks_, days: gap_.days_, hours: gap_.hours_, minutes: gap_.minutes_, seconds: gap_.seconds_, milliseconds: gap_.milliseconds_, microseconds: gap_.microseconds_, nanoseconds: gap_.nanoseconds_})
}

export async function Date_subtractGap$(self_, gap_, $task) {
return self_.add({years: gap_.years_, months: gap_.months_, weeks: gap_.weeks_, days: gap_.days_, hours: gap_.hours_, minutes: gap_.minutes_, seconds: gap_.seconds_, milliseconds: gap_.milliseconds_, microseconds: gap_.microseconds_, nanoseconds: gap_.nanoseconds_})
}

export async function Date_since$(self_, that_, $task) {
const duration_ = self_.since(that_);
return ff_core_Date.DateGap(duration_.years, duration_.months, duration_.weeks, duration_.days, duration_.hours, duration_.minutes, duration_.seconds, duration_.milliseconds, duration_.microseconds, duration_.nanoseconds)
}

export async function Date_until$(self_, that_, $task) {
const duration_ = self_.until(that_);
return ff_core_Date.DateGap(duration_.years, duration_.months, duration_.weeks, duration_.days, duration_.hours, duration_.minutes, duration_.seconds, duration_.milliseconds, duration_.microseconds, duration_.nanoseconds)
}

export async function Date_yearsSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "years", relativeTo: that_})
}

export async function Date_monthsSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "months", relativeTo: that_})
}

export async function Date_weeksSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "weeks", relativeTo: that_})
}

export async function Date_daysSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "days", relativeTo: that_})
}

export async function Date_hoursSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "hours", relativeTo: that_})
}

export async function Date_minutesSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "minutes", relativeTo: that_})
}

export async function Date_secondsSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "seconds", relativeTo: that_})
}

export async function Date_millisecondsSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "milliseconds", relativeTo: that_})
}

export async function Date_microsecondsSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "microseconds", relativeTo: that_})
}

export async function Date_nanosecondsSince$(self_, that_, $task) {
const duration_ = self_.since(that_);
return duration_.total({unit: "nanoseconds", relativeTo: that_})
}

export async function Date_schedule$(self_, nextDate_, $task) {
let current_ = self_;
return (await ff_core_Stream.Stream_addAll$((await ff_core_List.List_toStream$([self_], false, $task)), (await ff_core_Stream.new_$((async ($task) => {
current_ = (await nextDate_(current_, $task));
return ff_core_Option.Some(current_)
}), (async ($task) => {

}), $task)), $task))
}

export function DateGap_toIso8601(self_, smallestUnit_ = ff_core_Option.None(), fractionalSecondDigits_ = ff_core_Option.None()) {
const duration_ = Temporal.Duration.from({years: self_.years_, months: self_.months_, weeks: self_.weeks_, days: self_.days_, hours: self_.hours_, minutes: self_.minutes_, seconds: self_.seconds_, milliseconds: self_.milliseconds_, microseconds: self_.microseconds_, nanoseconds: self_.nanoseconds_});
return duration_.toString({smallestUnit: ff_core_Option.Option_else(ff_core_Option.Option_map(smallestUnit_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), fractionalSecondDigits: ff_core_Option.Option_else(ff_core_Option.Option_map(fractionalSecondDigits_, ((_w1) => {
return _w1
})), (() => {
return "auto"
}))})
}

export async function DateGap_toIso8601$(self_, smallestUnit_ = ff_core_Option.None(), fractionalSecondDigits_ = ff_core_Option.None(), $task) {
const duration_ = Temporal.Duration.from({years: self_.years_, months: self_.months_, weeks: self_.weeks_, days: self_.days_, hours: self_.hours_, minutes: self_.minutes_, seconds: self_.seconds_, milliseconds: self_.milliseconds_, microseconds: self_.microseconds_, nanoseconds: self_.nanoseconds_});
return duration_.toString({smallestUnit: ff_core_Option.Option_else(ff_core_Option.Option_map(smallestUnit_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})), fractionalSecondDigits: ff_core_Option.Option_else(ff_core_Option.Option_map(fractionalSecondDigits_, ((_w1) => {
return _w1
})), (() => {
return "auto"
}))})
}

export const ff_core_Equal_Equal$ff_core_Date_Date = {
equals_(x_, y_) {
return x_.equals(y_)
},
async equals_$(x_, y_, $task) {
return x_.equals(y_)
}
};

export const ff_core_Ordering_Order$ff_core_Date_Date = {
compare_(x_, y_) {
const instant_ = Temporal.ZonedDateTime.compare(x_, y_);
if((instant_ !== 0)) {
return ff_core_Ordering.fromInt_(instant_)
} else {
const timeZone_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(ff_core_Date.Date_timeZoneId(x_), ff_core_Date.Date_timeZoneId(y_));
if((timeZone_ !== ff_core_Ordering.OrderingSame())) {
return timeZone_
} else {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(ff_core_Date.Date_calendarId(x_), ff_core_Date.Date_calendarId(y_))
}
}
},
async compare_$(x_, y_, $task) {
const instant_ = Temporal.ZonedDateTime.compare(x_, y_);
if((instant_ !== 0)) {
return ff_core_Ordering.fromInt_(instant_)
} else {
const timeZone_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(ff_core_Date.Date_timeZoneId(x_), ff_core_Date.Date_timeZoneId(y_));
if((timeZone_ !== ff_core_Ordering.OrderingSame())) {
return timeZone_
} else {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(ff_core_Date.Date_calendarId(x_), ff_core_Date.Date_calendarId(y_))
}
}
}
};

export const ff_core_Any_HasAnyTag$ff_core_Date_Date = {
anyTag_() {
return ff_core_Any.internalAnyTag_("ff:core/Date.Date[]")
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_("ff:core/Date.Date[]")
}
};

export const ff_core_Show_Show$ff_core_Date_Date = {
show_(value_) {
return ff_core_Date.Date_toRfc9557(value_, ff_core_Option.None(), ff_core_Option.None(), true, true, true)
},
async show_$(value_, $task) {
return ff_core_Date.Date_toRfc9557(value_, ff_core_Option.None(), ff_core_Option.None(), true, true, true)
}
};

export const ff_core_Serializable_Serializable$ff_core_Date_Date = {
serializeUsing_(serialization_, value_) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, ff_core_Date.Date_toRfc9557(value_, ff_core_Option.None(), ff_core_Option.None(), true, true, true))
},
deserializeUsing_(serialization_) {
return ff_core_Date.newRfc9557_(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
},
async serializeUsing_$(serialization_, value_, $task) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, ff_core_Date.Date_toRfc9557(value_, ff_core_Option.None(), ff_core_Option.None(), true, true, true))
},
async deserializeUsing_$(serialization_, $task) {
return ff_core_Date.newRfc9557_(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
};


