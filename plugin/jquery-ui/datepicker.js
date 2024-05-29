!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.bulmaCalendar = t() : e.bulmaCalendar = t()
}(window, function () {
    return n = [function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (t) {
            return function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = e.width ? String(e.width) : t.defaultWidth;
                return t.formats[e] || t.formats[t.defaultWidth]
            }
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (i) {
            return function (e, t) {
                var a, n = t || {};
                return ("formatting" === (n.context ? String(n.context) : "standalone") && i.formattingValues ? (a = i.defaultFormattingWidth || i.defaultWidth, t = n.width ? String(n.width) : a, i.formattingValues[t] || i.formattingValues[a]) : (a = i.defaultWidth, n = n.width ? String(n.width) : i.defaultWidth, i.values[n] || i.values[a]))[i.argumentCallback ? i.argumentCallback(e) : e]
            }
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (r) {
            return function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, a = t.width, n = a && r.matchPatterns[a] || r.matchPatterns[r.defaultMatchWidth], n = e.match(n);
                if (!n) return null;
                var i = n[0], a = a && r.parsePatterns[a] || r.parsePatterns[r.defaultParseWidth], a = Array.isArray(a) ? function i(e, t) {
                    for (var a = 0; a < e.length; a++) if (t(e[a])) return a
                }(a, function (e) {
                    return e.test(i)
                }) : function n(e, t) {
                    for (var a in e) if (e.hasOwnProperty(a) && t(e[a])) return a
                }(a, function (e) {
                    return e.test(i)
                }), a = r.valueCallback ? r.valueCallback(a) : a;
                return {value: a = t.valueCallback ? t.valueCallback(a) : a, rest: e.slice(i.length)}
            }
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (i) {
            return function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, a = e.match(i.matchPattern);
                if (!a) return null;
                var n = a[0], a = e.match(i.parsePattern);
                if (!a) return null;
                a = i.valueCallback ? i.valueCallback(a[0]) : a[0];
                return {value: a = t.valueCallback ? t.valueCallback(a) : a, rest: e.slice(n.length)}
            }
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            (0, i.default)(2, arguments);
            e = (0, n.default)(e, a), a = (0, n.default)(t, a);
            return e.getTime() === a.getTime()
        };
        var n = r(a(398)), i = r(a(12));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = {lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P"};
        t.default = function (e, t, a, n) {
            return i[e]
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e), e = a % 100;
                if (20 < e || e < 10) switch (e % 10) {
                    case 1:
                        return a + "st";
                    case 2:
                        return a + "nd";
                    case 3:
                        return a + "rd"
                }
                return a + "th"
            },
            era          : (0, a.default)({values: {narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return e - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["S", "M", "T", "W", "T", "F", "S"], short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night"}, abbreviated: {am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night"}, wide: {am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night"}, abbreviated: {am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night"}, wide: {am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^b/i, /^(a|c)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = {
            lessThanXSeconds: {one: "less than a second", other: "less than {{count}} seconds"},
            xSeconds        : {one: "1 second", other: "{{count}} seconds"},
            halfAMinute     : "half a minute",
            lessThanXMinutes: {one: "less than a minute", other: "less than {{count}} minutes"},
            xMinutes        : {one: "1 minute", other: "{{count}} minutes"},
            aboutXHours     : {one: "about 1 hour", other: "about {{count}} hours"},
            xHours          : {one: "1 hour", other: "{{count}} hours"},
            xDays           : {one: "1 day", other: "{{count}} days"},
            aboutXWeeks     : {one: "about 1 week", other: "about {{count}} weeks"},
            xWeeks          : {one: "1 week", other: "{{count}} weeks"},
            aboutXMonths    : {one: "about 1 month", other: "about {{count}} months"},
            xMonths         : {one: "1 month", other: "{{count}} months"},
            aboutXYears     : {one: "about 1 year", other: "about {{count}} years"},
            xYears          : {one: "1 year", other: "{{count}} years"},
            overXYears      : {one: "over 1 year", other: "over {{count}} years"},
            almostXYears    : {one: "almost 1 year", other: "almost {{count}} years"}
        };
        t.default = function (e, t, a) {
            e = n[e], t = "string" == typeof e ? e : 1 === t ? e.one : e.other.replace("{{count}}", t.toString());
            return null != a && a.addSuffix ? a.comparison && 0 < a.comparison ? "in " + t : t + " ago" : t
        }, e.exports = t.default
    }, , function (e, t, a) {
        var n = {
            "./_lib/buildFormatLongFn/index.js"     : 0,
            "./_lib/buildLocalizeFn/index.js"       : 1,
            "./_lib/buildMatchFn/index.js"          : 2,
            "./_lib/buildMatchPatternFn/index.js"   : 3,
            "./af/_lib/formatDistance/index.js"     : 22,
            "./af/_lib/formatLong/index.js"         : 23,
            "./af/_lib/formatRelative/index.js"     : 24,
            "./af/_lib/localize/index.js"           : 25,
            "./af/_lib/match/index.js"              : 26,
            "./af/index.js"                         : 392,
            "./ar-DZ/_lib/formatDistance/index.js"  : 27,
            "./ar-DZ/_lib/formatLong/index.js"      : 28,
            "./ar-DZ/_lib/formatRelative/index.js"  : 29,
            "./ar-DZ/_lib/localize/index.js"        : 30,
            "./ar-DZ/_lib/match/index.js"           : 31,
            "./ar-DZ/index.js"                      : 393,
            "./ar-MA/_lib/formatDistance/index.js"  : 32,
            "./ar-MA/_lib/formatLong/index.js"      : 33,
            "./ar-MA/_lib/formatRelative/index.js"  : 34,
            "./ar-MA/_lib/localize/index.js"        : 35,
            "./ar-MA/_lib/match/index.js"           : 36,
            "./ar-MA/index.js"                      : 394,
            "./ar-SA/_lib/formatDistance/index.js"  : 37,
            "./ar-SA/_lib/formatLong/index.js"      : 38,
            "./ar-SA/_lib/formatRelative/index.js"  : 39,
            "./ar-SA/_lib/localize/index.js"        : 40,
            "./ar-SA/_lib/match/index.js"           : 41,
            "./ar-SA/index.js"                      : 395,
            "./ar-TN/_lib/formatDistance/index.js"  : 42,
            "./ar-TN/_lib/formatLong/index.js"      : 43,
            "./ar-TN/_lib/formatRelative/index.js"  : 44,
            "./ar-TN/_lib/localize/index.js"        : 45,
            "./ar-TN/_lib/match/index.js"           : 46,
            "./ar-TN/index.js"                      : 396,
            "./az/_lib/formatDistance/index.js"     : 47,
            "./az/_lib/formatLong/index.js"         : 48,
            "./az/_lib/formatRelative/index.js"     : 49,
            "./az/_lib/localize/index.js"           : 50,
            "./az/_lib/match/index.js"              : 51,
            "./az/index.js"                         : 397,
            "./be/_lib/formatDistance/index.js"     : 52,
            "./be/_lib/formatLong/index.js"         : 53,
            "./be/_lib/formatRelative/index.js"     : 54,
            "./be/_lib/localize/index.js"           : 55,
            "./be/_lib/match/index.js"              : 56,
            "./be/index.js"                         : 401,
            "./bg/_lib/formatDistance/index.js"     : 57,
            "./bg/_lib/formatLong/index.js"         : 58,
            "./bg/_lib/formatRelative/index.js"     : 59,
            "./bg/_lib/localize/index.js"           : 60,
            "./bg/_lib/match/index.js"              : 61,
            "./bg/index.js"                         : 402,
            "./bn/_lib/formatDistance/index.js"     : 62,
            "./bn/_lib/formatLong/index.js"         : 63,
            "./bn/_lib/formatRelative/index.js"     : 64,
            "./bn/_lib/localize/index.js"           : 13,
            "./bn/_lib/match/index.js"              : 65,
            "./bn/index.js"                         : 403,
            "./bs/_lib/formatDistance/index.js"     : 66,
            "./bs/_lib/formatLong/index.js"         : 67,
            "./bs/_lib/formatRelative/index.js"     : 68,
            "./bs/_lib/localize/index.js"           : 69,
            "./bs/_lib/match/index.js"              : 70,
            "./bs/index.js"                         : 404,
            "./ca/_lib/formatDistance/index.js"     : 71,
            "./ca/_lib/formatLong/index.js"         : 72,
            "./ca/_lib/formatRelative/index.js"     : 73,
            "./ca/_lib/localize/index.js"           : 74,
            "./ca/_lib/match/index.js"              : 75,
            "./ca/index.js"                         : 405,
            "./cs/_lib/formatDistance/index.js"     : 76,
            "./cs/_lib/formatLong/index.js"         : 77,
            "./cs/_lib/formatRelative/index.js"     : 78,
            "./cs/_lib/localize/index.js"           : 79,
            "./cs/_lib/match/index.js"              : 80,
            "./cs/index.js"                         : 406,
            "./cy/_lib/formatDistance/index.js"     : 81,
            "./cy/_lib/formatLong/index.js"         : 82,
            "./cy/_lib/formatRelative/index.js"     : 83,
            "./cy/_lib/localize/index.js"           : 84,
            "./cy/_lib/match/index.js"              : 85,
            "./cy/index.js"                         : 407,
            "./da/_lib/formatDistance/index.js"     : 86,
            "./da/_lib/formatLong/index.js"         : 87,
            "./da/_lib/formatRelative/index.js"     : 88,
            "./da/_lib/localize/index.js"           : 89,
            "./da/_lib/match/index.js"              : 90,
            "./da/index.js"                         : 408,
            "./de-AT/_lib/localize/index.js"        : 91,
            "./de-AT/index.js"                      : 409,
            "./de/_lib/formatDistance/index.js"     : 14,
            "./de/_lib/formatLong/index.js"         : 15,
            "./de/_lib/formatRelative/index.js"     : 16,
            "./de/_lib/localize/index.js"           : 92,
            "./de/_lib/match/index.js"              : 17,
            "./de/index.js"                         : 410,
            "./el/_lib/formatDistance/index.js"     : 93,
            "./el/_lib/formatLong/index.js"         : 94,
            "./el/_lib/formatRelative/index.js"     : 95,
            "./el/_lib/localize/index.js"           : 96,
            "./el/_lib/match/index.js"              : 97,
            "./el/index.js"                         : 411,
            "./en-AU/_lib/formatLong/index.js"      : 98,
            "./en-AU/index.js"                      : 412,
            "./en-CA/_lib/formatDistance/index.js"  : 99,
            "./en-CA/_lib/formatLong/index.js"      : 100,
            "./en-CA/index.js"                      : 413,
            "./en-GB/_lib/formatLong/index.js"      : 101,
            "./en-GB/index.js"                      : 414,
            "./en-IN/_lib/formatLong/index.js"      : 102,
            "./en-IN/index.js"                      : 415,
            "./en-NZ/_lib/formatLong/index.js"      : 103,
            "./en-NZ/index.js"                      : 416,
            "./en-US/_lib/formatDistance/index.js"  : 8,
            "./en-US/_lib/formatLong/index.js"      : 104,
            "./en-US/_lib/formatRelative/index.js"  : 5,
            "./en-US/_lib/localize/index.js"        : 6,
            "./en-US/_lib/match/index.js"           : 7,
            "./en-US/index.js"                      : 417,
            "./en-ZA/_lib/formatLong/index.js"      : 105,
            "./en-ZA/index.js"                      : 418,
            "./eo/_lib/formatDistance/index.js"     : 106,
            "./eo/_lib/formatLong/index.js"         : 107,
            "./eo/_lib/formatRelative/index.js"     : 108,
            "./eo/_lib/localize/index.js"           : 109,
            "./eo/_lib/match/index.js"              : 110,
            "./eo/index.js"                         : 419,
            "./es/_lib/formatDistance/index.js"     : 111,
            "./es/_lib/formatLong/index.js"         : 112,
            "./es/_lib/formatRelative/index.js"     : 113,
            "./es/_lib/localize/index.js"           : 114,
            "./es/_lib/match/index.js"              : 115,
            "./es/index.js"                         : 420,
            "./et/_lib/formatDistance/index.js"     : 116,
            "./et/_lib/formatLong/index.js"         : 117,
            "./et/_lib/formatRelative/index.js"     : 118,
            "./et/_lib/localize/index.js"           : 119,
            "./et/_lib/match/index.js"              : 120,
            "./et/index.js"                         : 421,
            "./eu/_lib/formatDistance/index.js"     : 121,
            "./eu/_lib/formatLong/index.js"         : 122,
            "./eu/_lib/formatRelative/index.js"     : 123,
            "./eu/_lib/localize/index.js"           : 124,
            "./eu/_lib/match/index.js"              : 125,
            "./eu/index.js"                         : 422,
            "./fa-IR/_lib/formatDistance/index.js"  : 126,
            "./fa-IR/_lib/formatLong/index.js"      : 127,
            "./fa-IR/_lib/formatRelative/index.js"  : 128,
            "./fa-IR/_lib/localize/index.js"        : 129,
            "./fa-IR/_lib/match/index.js"           : 130,
            "./fa-IR/index.js"                      : 423,
            "./fi/_lib/formatDistance/index.js"     : 131,
            "./fi/_lib/formatLong/index.js"         : 132,
            "./fi/_lib/formatRelative/index.js"     : 133,
            "./fi/_lib/localize/index.js"           : 134,
            "./fi/_lib/match/index.js"              : 135,
            "./fi/index.js"                         : 424,
            "./fr-CA/_lib/formatLong/index.js"      : 136,
            "./fr-CA/index.js"                      : 425,
            "./fr-CH/_lib/formatDistance/index.js"  : 137,
            "./fr-CH/_lib/formatLong/index.js"      : 138,
            "./fr-CH/_lib/formatRelative/index.js"  : 139,
            "./fr-CH/_lib/formatters/index.js"      : 426,
            "./fr-CH/_lib/localize/index.js"        : 140,
            "./fr-CH/_lib/match/index.js"           : 141,
            "./fr-CH/index.js"                      : 427,
            "./fr/_lib/formatDistance/index.js"     : 18,
            "./fr/_lib/formatLong/index.js"         : 142,
            "./fr/_lib/formatRelative/index.js"     : 19,
            "./fr/_lib/formatters/index.js"         : 428,
            "./fr/_lib/localize/index.js"           : 20,
            "./fr/_lib/match/index.js"              : 21,
            "./fr/index.js"                         : 429,
            "./gd/_lib/formatDistance/index.js"     : 143,
            "./gd/_lib/formatLong/index.js"         : 144,
            "./gd/_lib/formatRelative/index.js"     : 145,
            "./gd/_lib/localize/index.js"           : 146,
            "./gd/_lib/match/index.js"              : 147,
            "./gd/index.js"                         : 430,
            "./gl/_lib/formatDistance/index.js"     : 148,
            "./gl/_lib/formatLong/index.js"         : 149,
            "./gl/_lib/formatRelative/index.js"     : 150,
            "./gl/_lib/localize/index.js"           : 151,
            "./gl/_lib/match/index.js"              : 152,
            "./gl/index.js"                         : 431,
            "./gu/_lib/formatDistance/index.js"     : 153,
            "./gu/_lib/formatLong/index.js"         : 154,
            "./gu/_lib/formatRelative/index.js"     : 155,
            "./gu/_lib/localize/index.js"           : 156,
            "./gu/_lib/match/index.js"              : 157,
            "./gu/index.js"                         : 432,
            "./he/_lib/formatDistance/index.js"     : 158,
            "./he/_lib/formatLong/index.js"         : 159,
            "./he/_lib/formatRelative/index.js"     : 160,
            "./he/_lib/localize/index.js"           : 161,
            "./he/_lib/match/index.js"              : 162,
            "./he/index.js"                         : 433,
            "./hi/_lib/formatDistance/index.js"     : 163,
            "./hi/_lib/formatLong/index.js"         : 164,
            "./hi/_lib/formatRelative/index.js"     : 165,
            "./hi/_lib/localize/index.js"           : 11,
            "./hi/_lib/match/index.js"              : 166,
            "./hi/index.js"                         : 434,
            "./hr/_lib/formatDistance/index.js"     : 167,
            "./hr/_lib/formatLong/index.js"         : 168,
            "./hr/_lib/formatRelative/index.js"     : 169,
            "./hr/_lib/localize/index.js"           : 170,
            "./hr/_lib/match/index.js"              : 171,
            "./hr/index.js"                         : 435,
            "./ht/_lib/formatDistance/index.js"     : 172,
            "./ht/_lib/formatLong/index.js"         : 173,
            "./ht/_lib/formatRelative/index.js"     : 174,
            "./ht/_lib/formatters/index.js"         : 436,
            "./ht/_lib/localize/index.js"           : 175,
            "./ht/_lib/match/index.js"              : 176,
            "./ht/index.js"                         : 437,
            "./hu/_lib/formatDistance/index.js"     : 177,
            "./hu/_lib/formatLong/index.js"         : 178,
            "./hu/_lib/formatRelative/index.js"     : 179,
            "./hu/_lib/localize/index.js"           : 180,
            "./hu/_lib/match/index.js"              : 181,
            "./hu/index.js"                         : 438,
            "./hy/_lib/formatDistance/index.js"     : 182,
            "./hy/_lib/formatLong/index.js"         : 183,
            "./hy/_lib/formatRelative/index.js"     : 184,
            "./hy/_lib/localize/index.js"           : 185,
            "./hy/_lib/match/index.js"              : 186,
            "./hy/index.js"                         : 439,
            "./id/_lib/formatDistance/index.js"     : 187,
            "./id/_lib/formatLong/index.js"         : 188,
            "./id/_lib/formatRelative/index.js"     : 189,
            "./id/_lib/localize/index.js"           : 190,
            "./id/_lib/match/index.js"              : 191,
            "./id/index.js"                         : 440,
            "./is/_lib/formatDistance/index.js"     : 192,
            "./is/_lib/formatLong/index.js"         : 193,
            "./is/_lib/formatRelative/index.js"     : 194,
            "./is/_lib/localize/index.js"           : 195,
            "./is/_lib/match/index.js"              : 196,
            "./is/index.js"                         : 441,
            "./it/_lib/formatDistance/index.js"     : 197,
            "./it/_lib/formatLong/index.js"         : 198,
            "./it/_lib/formatRelative/index.js"     : 199,
            "./it/_lib/localize/index.js"           : 200,
            "./it/_lib/match/index.js"              : 201,
            "./it/index.js"                         : 442,
            "./ja-Hira/_lib/formatDistance/index.js": 202,
            "./ja-Hira/_lib/formatLong/index.js"    : 203,
            "./ja-Hira/_lib/formatRelative/index.js": 204,
            "./ja-Hira/_lib/localize/index.js"      : 205,
            "./ja-Hira/_lib/match/index.js"         : 206,
            "./ja-Hira/index.js"                    : 443,
            "./ja/_lib/formatDistance/index.js"     : 207,
            "./ja/_lib/formatLong/index.js"         : 208,
            "./ja/_lib/formatRelative/index.js"     : 209,
            "./ja/_lib/localize/index.js"           : 210,
            "./ja/_lib/match/index.js"              : 211,
            "./ja/index.js"                         : 444,
            "./ka/_lib/formatDistance/index.js"     : 212,
            "./ka/_lib/formatLong/index.js"         : 213,
            "./ka/_lib/formatRelative/index.js"     : 214,
            "./ka/_lib/localize/index.js"           : 215,
            "./ka/_lib/match/index.js"              : 216,
            "./ka/index.js"                         : 445,
            "./kk/_lib/formatDistance/index.js"     : 217,
            "./kk/_lib/formatLong/index.js"         : 218,
            "./kk/_lib/formatRelative/index.js"     : 219,
            "./kk/_lib/localize/index.js"           : 220,
            "./kk/_lib/match/index.js"              : 221,
            "./kk/index.js"                         : 446,
            "./kn/_lib/formatDistance/index.js"     : 222,
            "./kn/_lib/formatLong/index.js"         : 223,
            "./kn/_lib/formatRelative/index.js"     : 224,
            "./kn/_lib/localize/index.js"           : 225,
            "./kn/_lib/match/index.js"              : 226,
            "./kn/index.js"                         : 447,
            "./ko/_lib/formatDistance/index.js"     : 227,
            "./ko/_lib/formatLong/index.js"         : 228,
            "./ko/_lib/formatRelative/index.js"     : 229,
            "./ko/_lib/localize/index.js"           : 230,
            "./ko/_lib/match/index.js"              : 231,
            "./ko/index.js"                         : 448,
            "./lb/_lib/formatDistance/index.js"     : 232,
            "./lb/_lib/formatLong/index.js"         : 233,
            "./lb/_lib/formatRelative/index.js"     : 234,
            "./lb/_lib/localize/index.js"           : 235,
            "./lb/_lib/match/index.js"              : 236,
            "./lb/index.js"                         : 449,
            "./lt/_lib/formatDistance/index.js"     : 237,
            "./lt/_lib/formatLong/index.js"         : 238,
            "./lt/_lib/formatRelative/index.js"     : 239,
            "./lt/_lib/localize/index.js"           : 240,
            "./lt/_lib/match/index.js"              : 241,
            "./lt/index.js"                         : 450,
            "./lv/_lib/formatDistance/index.js"     : 242,
            "./lv/_lib/formatLong/index.js"         : 243,
            "./lv/_lib/formatRelative/index.js"     : 244,
            "./lv/_lib/localize/index.js"           : 245,
            "./lv/_lib/match/index.js"              : 246,
            "./lv/index.js"                         : 451,
            "./mk/_lib/formatDistance/index.js"     : 247,
            "./mk/_lib/formatLong/index.js"         : 248,
            "./mk/_lib/formatRelative/index.js"     : 249,
            "./mk/_lib/localize/index.js"           : 250,
            "./mk/_lib/match/index.js"              : 251,
            "./mk/index.js"                         : 452,
            "./mn/_lib/formatDistance/index.js"     : 252,
            "./mn/_lib/formatLong/index.js"         : 253,
            "./mn/_lib/formatRelative/index.js"     : 254,
            "./mn/_lib/localize/index.js"           : 255,
            "./mn/_lib/match/index.js"              : 256,
            "./mn/index.js"                         : 453,
            "./ms/_lib/formatDistance/index.js"     : 257,
            "./ms/_lib/formatLong/index.js"         : 258,
            "./ms/_lib/formatRelative/index.js"     : 259,
            "./ms/_lib/localize/index.js"           : 260,
            "./ms/_lib/match/index.js"              : 261,
            "./ms/index.js"                         : 454,
            "./mt/_lib/formatDistance/index.js"     : 262,
            "./mt/_lib/formatLong/index.js"         : 263,
            "./mt/_lib/formatRelative/index.js"     : 264,
            "./mt/_lib/localize/index.js"           : 265,
            "./mt/_lib/match/index.js"              : 266,
            "./mt/index.js"                         : 455,
            "./nb/_lib/formatDistance/index.js"     : 267,
            "./nb/_lib/formatLong/index.js"         : 268,
            "./nb/_lib/formatRelative/index.js"     : 269,
            "./nb/_lib/localize/index.js"           : 270,
            "./nb/_lib/match/index.js"              : 271,
            "./nb/index.js"                         : 456,
            "./nl-BE/_lib/formatDistance/index.js"  : 272,
            "./nl-BE/_lib/formatLong/index.js"      : 273,
            "./nl-BE/_lib/formatRelative/index.js"  : 274,
            "./nl-BE/_lib/localize/index.js"        : 275,
            "./nl-BE/_lib/match/index.js"           : 276,
            "./nl-BE/index.js"                      : 457,
            "./nl/_lib/formatDistance/index.js"     : 277,
            "./nl/_lib/formatLong/index.js"         : 278,
            "./nl/_lib/formatRelative/index.js"     : 279,
            "./nl/_lib/localize/index.js"           : 280,
            "./nl/_lib/match/index.js"              : 281,
            "./nl/index.js"                         : 458,
            "./nn/_lib/formatDistance/index.js"     : 282,
            "./nn/_lib/formatLong/index.js"         : 283,
            "./nn/_lib/formatRelative/index.js"     : 284,
            "./nn/_lib/localize/index.js"           : 285,
            "./nn/_lib/match/index.js"              : 286,
            "./nn/index.js"                         : 459,
            "./pl/_lib/formatDistance/index.js"     : 287,
            "./pl/_lib/formatLong/index.js"         : 288,
            "./pl/_lib/formatRelative/index.js"     : 289,
            "./pl/_lib/localize/index.js"           : 290,
            "./pl/_lib/match/index.js"              : 291,
            "./pl/index.js"                         : 460,
            "./pt-BR/_lib/formatDistance/index.js"  : 292,
            "./pt-BR/_lib/formatLong/index.js"      : 293,
            "./pt-BR/_lib/formatRelative/index.js"  : 294,
            "./pt-BR/_lib/localize/index.js"        : 295,
            "./pt-BR/_lib/match/index.js"           : 296,
            "./pt-BR/index.js"                      : 461,
            "./pt/_lib/formatDistance/index.js"     : 297,
            "./pt/_lib/formatLong/index.js"         : 298,
            "./pt/_lib/formatRelative/index.js"     : 299,
            "./pt/_lib/localize/index.js"           : 300,
            "./pt/_lib/match/index.js"              : 301,
            "./pt/index.js"                         : 462,
            "./ro/_lib/formatDistance/index.js"     : 302,
            "./ro/_lib/formatLong/index.js"         : 303,
            "./ro/_lib/formatRelative/index.js"     : 304,
            "./ro/_lib/localize/index.js"           : 305,
            "./ro/_lib/match/index.js"              : 306,
            "./ro/index.js"                         : 463,
            "./ru/_lib/formatDistance/index.js"     : 307,
            "./ru/_lib/formatLong/index.js"         : 308,
            "./ru/_lib/formatRelative/index.js"     : 309,
            "./ru/_lib/localize/index.js"           : 310,
            "./ru/_lib/match/index.js"              : 311,
            "./ru/index.js"                         : 464,
            "./sk/_lib/formatDistance/index.js"     : 312,
            "./sk/_lib/formatLong/index.js"         : 313,
            "./sk/_lib/formatRelative/index.js"     : 314,
            "./sk/_lib/localize/index.js"           : 315,
            "./sk/_lib/match/index.js"              : 316,
            "./sk/index.js"                         : 465,
            "./sl/_lib/formatDistance/index.js"     : 317,
            "./sl/_lib/formatLong/index.js"         : 318,
            "./sl/_lib/formatRelative/index.js"     : 319,
            "./sl/_lib/localize/index.js"           : 320,
            "./sl/_lib/match/index.js"              : 321,
            "./sl/index.js"                         : 466,
            "./sq/_lib/formatDistance/index.js"     : 322,
            "./sq/_lib/formatLong/index.js"         : 323,
            "./sq/_lib/formatRelative/index.js"     : 324,
            "./sq/_lib/localize/index.js"           : 325,
            "./sq/_lib/match/index.js"              : 326,
            "./sq/index.js"                         : 467,
            "./sr-Latn/_lib/formatDistance/index.js": 327,
            "./sr-Latn/_lib/formatLong/index.js"    : 328,
            "./sr-Latn/_lib/formatRelative/index.js": 329,
            "./sr-Latn/_lib/localize/index.js"      : 330,
            "./sr-Latn/_lib/match/index.js"         : 331,
            "./sr-Latn/index.js"                    : 468,
            "./sr/_lib/formatDistance/index.js"     : 332,
            "./sr/_lib/formatLong/index.js"         : 333,
            "./sr/_lib/formatRelative/index.js"     : 334,
            "./sr/_lib/localize/index.js"           : 335,
            "./sr/_lib/match/index.js"              : 336,
            "./sr/index.js"                         : 469,
            "./sv/_lib/formatDistance/index.js"     : 337,
            "./sv/_lib/formatLong/index.js"         : 338,
            "./sv/_lib/formatRelative/index.js"     : 339,
            "./sv/_lib/localize/index.js"           : 340,
            "./sv/_lib/match/index.js"              : 341,
            "./sv/index.js"                         : 470,
            "./ta/_lib/formatDistance/index.js"     : 342,
            "./ta/_lib/formatLong/index.js"         : 343,
            "./ta/_lib/formatRelative/index.js"     : 344,
            "./ta/_lib/localize/index.js"           : 345,
            "./ta/_lib/match/index.js"              : 346,
            "./ta/index.js"                         : 471,
            "./te/_lib/formatDistance/index.js"     : 347,
            "./te/_lib/formatLong/index.js"         : 348,
            "./te/_lib/formatRelative/index.js"     : 349,
            "./te/_lib/localize/index.js"           : 350,
            "./te/_lib/match/index.js"              : 351,
            "./te/index.js"                         : 472,
            "./th/_lib/formatDistance/index.js"     : 352,
            "./th/_lib/formatLong/index.js"         : 353,
            "./th/_lib/formatRelative/index.js"     : 354,
            "./th/_lib/localize/index.js"           : 355,
            "./th/_lib/match/index.js"              : 356,
            "./th/index.js"                         : 473,
            "./tr/_lib/formatDistance/index.js"     : 357,
            "./tr/_lib/formatLong/index.js"         : 358,
            "./tr/_lib/formatRelative/index.js"     : 359,
            "./tr/_lib/localize/index.js"           : 360,
            "./tr/_lib/match/index.js"              : 361,
            "./tr/index.js"                         : 474,
            "./ug/_lib/formatDistance/index.js"     : 362,
            "./ug/_lib/formatLong/index.js"         : 363,
            "./ug/_lib/formatRelative/index.js"     : 364,
            "./ug/_lib/localize/index.js"           : 365,
            "./ug/_lib/match/index.js"              : 366,
            "./ug/index.js"                         : 475,
            "./uk/_lib/formatDistance/index.js"     : 367,
            "./uk/_lib/formatLong/index.js"         : 368,
            "./uk/_lib/formatRelative/index.js"     : 369,
            "./uk/_lib/localize/index.js"           : 370,
            "./uk/_lib/match/index.js"              : 371,
            "./uk/index.js"                         : 476,
            "./uz/_lib/formatDistance/index.js"     : 372,
            "./uz/_lib/formatLong/index.js"         : 373,
            "./uz/_lib/formatRelative/index.js"     : 374,
            "./uz/_lib/localize/index.js"           : 375,
            "./uz/_lib/match/index.js"              : 376,
            "./uz/index.js"                         : 477,
            "./vi/_lib/formatDistance/index.js"     : 377,
            "./vi/_lib/formatLong/index.js"         : 378,
            "./vi/_lib/formatRelative/index.js"     : 379,
            "./vi/_lib/localize/index.js"           : 380,
            "./vi/_lib/match/index.js"              : 381,
            "./vi/index.js"                         : 478,
            "./zh-CN/_lib/formatDistance/index.js"  : 382,
            "./zh-CN/_lib/formatLong/index.js"      : 383,
            "./zh-CN/_lib/formatRelative/index.js"  : 384,
            "./zh-CN/_lib/localize/index.js"        : 385,
            "./zh-CN/_lib/match/index.js"           : 386,
            "./zh-CN/index.js"                      : 479,
            "./zh-TW/_lib/formatDistance/index.js"  : 387,
            "./zh-TW/_lib/formatLong/index.js"      : 388,
            "./zh-TW/_lib/formatRelative/index.js"  : 389,
            "./zh-TW/_lib/localize/index.js"        : 390,
            "./zh-TW/_lib/match/index.js"           : 391,
            "./zh-TW/index.js"                      : 480
        };

        function i(e) {
            e = r(e);
            return a(e)
        }

        function r(e) {
            if (a.o(n, e)) return n[e];
            e = new Error("Cannot find module '" + e + "'");
            throw e.code = "MODULE_NOT_FOUND", e
        }

        i.keys = function () {
            return Object.keys(n)
        }, i.resolve = r, (e.exports = i).id = 10
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = (a = a(1)) && a.__esModule ? a : {default: a}, n = {locale: {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}, number: {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"}}, i = {
            localeToNumber: function (e) {
                e = e.toString().replace(/[१२३४५६७८९०]/g, function (e) {
                    return n.number[e]
                });
                return Number(e)
            },
            numberToLocale: function (e) {
                return e.toString().replace(/\d/g, function (e) {
                    return n.locale[e]
                })
            },
            ordinalNumber : function (e) {
                var e = i.localeToNumber(e), t = i.numberToLocale(e);
                switch (e % 10) {
                    case 2:
                    case 3:
                    case 4:
                    case 6:
                    case 1:
                    case 5:
                    case 7:
                    case 8:
                    case 9:
                    case 0:
                        return t
                }
            },
            era           : (0, a.default)({values: {narrow: ["ईसा-पूर्व", "ईस्वी"], abbreviated: ["ईसा-पूर्व", "ईस्वी"], wide: ["ईसा-पूर्व", "ईसवी सन"]}, defaultWidth: "wide"}),
            quarter       : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["ति1", "ति2", "ति3", "ति4"], wide: ["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month         : (0, a.default)({values: {narrow: ["ज", "फ़", "मा", "अ", "मई", "जू", "जु", "अग", "सि", "अक्तू", "न", "दि"], abbreviated: ["जन", "फ़र", "मार्च", "अप्रैल", "मई", "जून", "जुल", "अग", "सित", "अक्तू", "नव", "दिस"], wide: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्तूबर", "नवंबर", "दिसंबर"]}, defaultWidth: "wide"}),
            day           : (0, a.default)({values: {narrow: ["र", "सो", "मं", "बु", "गु", "शु", "श"], short: ["र", "सो", "मं", "बु", "गु", "शु", "श"], abbreviated: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"], wide: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]}, defaultWidth: "wide"}),
            dayPeriod     : (0, a.default)({
                values                : {narrow: {am: "पूर्वाह्न", pm: "अपराह्न", midnight: "मध्यरात्रि", noon: "दोपहर", morning: "सुबह", afternoon: "दोपहर", evening: "शाम", night: "रात"}, abbreviated: {am: "पूर्वाह्न", pm: "अपराह्न", midnight: "मध्यरात्रि", noon: "दोपहर", morning: "सुबह", afternoon: "दोपहर", evening: "शाम", night: "रात"}, wide: {am: "पूर्वाह्न", pm: "अपराह्न", midnight: "मध्यरात्रि", noon: "दोपहर", morning: "सुबह", afternoon: "दोपहर", evening: "शाम", night: "रात"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "पूर्वाह्न", pm: "अपराह्न", midnight: "मध्यरात्रि", noon: "दोपहर", morning: "सुबह", afternoon: "दोपहर", evening: "शाम", night: "रात"}, abbreviated: {am: "पूर्वाह्न", pm: "अपराह्न", midnight: "मध्यरात्रि", noon: "दोपहर", morning: "सुबह", afternoon: "दोपहर", evening: "शाम", night: "रात"}, wide: {am: "पूर्वाह्न", pm: "अपराह्न", midnight: "मध्यरात्रि", noon: "दोपहर", morning: "सुबह", afternoon: "दोपहर", evening: "शाम", night: "रात"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = i, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
            if (t.length < e) throw new TypeError(e + " argument" + (1 < e ? "s" : "") + " required, but only " + t.length + " present")
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = (a = a(1)) && a.__esModule ? a : {default: a}, n = {locale: {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"}, number: {"১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0"}}, i = {
            localeToNumber: function (e) {
                e = e.toString().replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                    return n.number[e]
                });
                return Number(e)
            },
            numberToLocale: function (e) {
                return e.toString().replace(/\d/g, function (e) {
                    return n.locale[e]
                })
            },
            ordinalNumber : function (e, t) {
                var a = i.localeToNumber(e), n = i.numberToLocale(a);
                if ("date" === t.unit) return function (e) {
                    if (18 < a && a <= 31) return e + "শে";
                    switch (a) {
                        case 1:
                            return e + "লা";
                        case 2:
                        case 3:
                            return e + "রা";
                        case 4:
                            return e + "ঠা";
                        default:
                            return e + "ই"
                    }
                }(n);
                if (10 < a || 0 === a) return n + "তম";
                switch (a % 10) {
                    case 2:
                    case 3:
                        return n + "য়";
                    case 4:
                        return n + "র্থ";
                    case 6:
                        return n + "ষ্ঠ";
                    case 1:
                    case 5:
                    case 7:
                    case 8:
                    case 9:
                    case 0:
                        return n + "ম"
                }
            },
            era           : (0, a.default)({values: {narrow: ["খ্রিঃপূঃ", "খ্রিঃ"], abbreviated: ["খ্রিঃপূর্ব", "খ্রিঃ"], wide: ["খ্রিস্টপূর্ব", "খ্রিস্টাব্দ"]}, defaultWidth: "wide"}),
            quarter       : (0, a.default)({
                values: {narrow: ["১", "২", "৩", "৪"], abbreviated: ["১ত্রৈ", "২ত্রৈ", "৩ত্রৈ", "৪ত্রৈ"], wide: ["১ম ত্রৈমাসিক", "২য় ত্রৈমাসিক", "৩য় ত্রৈমাসিক", "৪র্থ ত্রৈমাসিক"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month         : (0, a.default)({values: {narrow: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্ট", "অক্টো", "নভে", "ডিসে"], abbreviated: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্ট", "অক্টো", "নভে", "ডিসে"], wide: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]}, defaultWidth: "wide"}),
            day           : (0, a.default)({values: {narrow: ["র", "সো", "ম", "বু", "বৃ", "শু", "শ"], short: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"], abbreviated: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"], wide: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার ", "শুক্রবার", "শনিবার"]}, defaultWidth: "wide"}),
            dayPeriod     : (0, a.default)({
                values                : {narrow: {am: "পূ", pm: "অপ", midnight: "মধ্যরাত", noon: "মধ্যাহ্ন", morning: "সকাল", afternoon: "বিকাল", evening: "সন্ধ্যা", night: "রাত"}, abbreviated: {am: "পূর্বাহ্ন", pm: "অপরাহ্ন", midnight: "মধ্যরাত", noon: "মধ্যাহ্ন", morning: "সকাল", afternoon: "বিকাল", evening: "সন্ধ্যা", night: "রাত"}, wide: {am: "পূর্বাহ্ন", pm: "অপরাহ্ন", midnight: "মধ্যরাত", noon: "মধ্যাহ্ন", morning: "সকাল", afternoon: "বিকাল", evening: "সন্ধ্যা", night: "রাত"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "পূ", pm: "অপ", midnight: "মধ্যরাত", noon: "মধ্যাহ্ন", morning: "সকাল", afternoon: "বিকাল", evening: "সন্ধ্যা", night: "রাত"}, abbreviated: {am: "পূর্বাহ্ন", pm: "অপরাহ্ন", midnight: "মধ্যরাত", noon: "মধ্যাহ্ন", morning: "সকাল", afternoon: "বিকাল", evening: "সন্ধ্যা", night: "রাত"}, wide: {am: "পূর্বাহ্ন", pm: "অপরাহ্ন", midnight: "মধ্যরাত", noon: "মধ্যাহ্ন", morning: "সকাল", afternoon: "বিকাল", evening: "সন্ধ্যা", night: "রাত"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = i, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = {
            lessThanXSeconds: {standalone: {one: "weniger als 1 Sekunde", other: "weniger als {{count}} Sekunden"}, withPreposition: {one: "weniger als 1 Sekunde", other: "weniger als {{count}} Sekunden"}},
            xSeconds        : {standalone: {one: "1 Sekunde", other: "{{count}} Sekunden"}, withPreposition: {one: "1 Sekunde", other: "{{count}} Sekunden"}},
            halfAMinute     : {standalone: "halbe Minute", withPreposition: "halben Minute"},
            lessThanXMinutes: {standalone: {one: "weniger als 1 Minute", other: "weniger als {{count}} Minuten"}, withPreposition: {one: "weniger als 1 Minute", other: "weniger als {{count}} Minuten"}},
            xMinutes        : {standalone: {one: "1 Minute", other: "{{count}} Minuten"}, withPreposition: {one: "1 Minute", other: "{{count}} Minuten"}},
            aboutXHours     : {standalone: {one: "etwa 1 Stunde", other: "etwa {{count}} Stunden"}, withPreposition: {one: "etwa 1 Stunde", other: "etwa {{count}} Stunden"}},
            xHours          : {standalone: {one: "1 Stunde", other: "{{count}} Stunden"}, withPreposition: {one: "1 Stunde", other: "{{count}} Stunden"}},
            xDays           : {standalone: {one: "1 Tag", other: "{{count}} Tage"}, withPreposition: {one: "1 Tag", other: "{{count}} Tagen"}},
            aboutXWeeks     : {standalone: {one: "etwa 1 Woche", other: "etwa {{count}} Wochen"}, withPreposition: {one: "etwa 1 Woche", other: "etwa {{count}} Wochen"}},
            xWeeks          : {standalone: {one: "1 Woche", other: "{{count}} Wochen"}, withPreposition: {one: "1 Woche", other: "{{count}} Wochen"}},
            aboutXMonths    : {standalone: {one: "etwa 1 Monat", other: "etwa {{count}} Monate"}, withPreposition: {one: "etwa 1 Monat", other: "etwa {{count}} Monaten"}},
            xMonths         : {standalone: {one: "1 Monat", other: "{{count}} Monate"}, withPreposition: {one: "1 Monat", other: "{{count}} Monaten"}},
            aboutXYears     : {standalone: {one: "etwa 1 Jahr", other: "etwa {{count}} Jahre"}, withPreposition: {one: "etwa 1 Jahr", other: "etwa {{count}} Jahren"}},
            xYears          : {standalone: {one: "1 Jahr", other: "{{count}} Jahre"}, withPreposition: {one: "1 Jahr", other: "{{count}} Jahren"}},
            overXYears      : {standalone: {one: "mehr als 1 Jahr", other: "mehr als {{count}} Jahre"}, withPreposition: {one: "mehr als 1 Jahr", other: "mehr als {{count}} Jahren"}},
            almostXYears    : {standalone: {one: "fast 1 Jahr", other: "fast {{count}} Jahre"}, withPreposition: {one: "fast 1 Jahr", other: "fast {{count}} Jahren"}}
        };
        t.default = function (e, t, a) {
            e = null != a && a.addSuffix ? n[e].withPreposition : n[e].standalone, t = "string" == typeof e ? e : 1 === t ? e.one : e.other.replace("{{count}}", String(t));
            return null != a && a.addSuffix ? a.comparison && 0 < a.comparison ? "in " + t : "vor " + t : t
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'um' {{time}}", long: "{{date}} 'um' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i = {lastWeek: "'letzten' eeee 'um' p", yesterday: "'gestern um' p", today: "'heute um' p", tomorrow: "'morgen um' p", nextWeek: "eeee 'um' p", other: "P"};
        t.default = function (e, t, a, n) {
            return i[e]
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)(\.)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^v/i, /^n/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? Quartal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i, wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[smdmf]/i, short: /^(so|mo|di|mi|do|fr|sa)/i, abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i, wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i, wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i}, defaultMatchWidth: "wide", parsePatterns: {any: {am: /^v/i, pm: /^n/i, midnight: /^Mitte/i, noon: /^Mitta/i, morning: /morgens/i, afternoon: /nachmittags/i, evening: /abends/i, night: /nachts/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "dans " + t : "il y a " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "moins d’une seconde", other: "moins de {{count}} secondes"},
            xSeconds        : {one: "1 seconde", other: "{{count}} secondes"},
            halfAMinute     : "30 secondes",
            lessThanXMinutes: {one: "moins d’une minute", other: "moins de {{count}} minutes"},
            xMinutes        : {one: "1 minute", other: "{{count}} minutes"},
            aboutXHours     : {one: "environ 1 heure", other: "environ {{count}} heures"},
            xHours          : {one: "1 heure", other: "{{count}} heures"},
            xDays           : {one: "1 jour", other: "{{count}} jours"},
            aboutXWeeks     : {one: "environ 1 semaine", other: "environ {{count}} semaines"},
            xWeeks          : {one: "1 semaine", other: "{{count}} semaines"},
            aboutXMonths    : {one: "environ 1 mois", other: "environ {{count}} mois"},
            xMonths         : {one: "1 mois", other: "{{count}} mois"},
            aboutXYears     : {one: "environ 1 an", other: "environ {{count}} ans"},
            xYears          : {one: "1 an", other: "{{count}} ans"},
            overXYears      : {one: "plus d’un an", other: "plus de {{count}} ans"},
            almostXYears    : {one: "presqu’un an", other: "presque {{count}} ans"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'dernier à' p", yesterday: "'hier à' p", today: "'aujourd’hui à' p", tomorrow: "'demain à' p'", nextWeek: "eeee 'prochain à' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                e = Number(e), t = String((t || {}).unit);
                return 0 === e ? e : e + ("year" === t || "hour" === t || "week" === t ? 1 === e ? "ère" : "ème" : 1 === e ? "er" : "ème")
            },
            era          : (0, a.default)({values: {narrow: ["av. J.-C", "ap. J.-C"], abbreviated: ["av. J.-C", "ap. J.-C"], wide: ["avant Jésus-Christ", "après Jésus-Christ"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["T1", "T2", "T3", "T4"], abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."], wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], wide: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["D", "L", "M", "M", "J", "V", "S"], short: ["di", "lu", "ma", "me", "je", "ve", "sa"], abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "mat.", afternoon: "ap.m.", evening: "soir", night: "mat."}, abbreviated: {am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "matin", afternoon: "après-midi", evening: "soir", night: "matin"}, wide: {am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "du matin", afternoon: "de l’après-midi", evening: "du soir", night: "du matin"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i, abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i, wide: /^(avant Jésus-Christ|après Jésus-Christ)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^av/i, /^ap/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^t[1234]/i, wide: /^[1234](er|ème|e)? trimestre/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i, wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[lmjvsd]/i, short: /^(di|lu|ma|me|je|ve|sa)/i, abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i, wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i, any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^min/i, noon: /^mid/i, morning: /mat/i, afternoon: /ap/i, evening: /soir/i, night: /nuit/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "oor " + t : t + " gelede" : t
        };
        var n = {
            lessThanXSeconds: {one: "minder as 'n sekonde", other: "minder as {{count}} sekondes"},
            xSeconds        : {one: "1 sekonde", other: "{{count}} sekondes"},
            halfAMinute     : "'n halwe minuut",
            lessThanXMinutes: {one: "minder as 'n minuut", other: "minder as {{count}} minute"},
            xMinutes        : {one: "'n minuut", other: "{{count}} minute"},
            aboutXHours     : {one: "ongeveer 1 uur", other: "ongeveer {{count}} ure"},
            xHours          : {one: "1 uur", other: "{{count}} ure"},
            xDays           : {one: "1 dag", other: "{{count}} dae"},
            aboutXWeeks     : {one: "ongeveer 1 week", other: "ongeveer {{count}} weke"},
            xWeeks          : {one: "1 week", other: "{{count}} weke"},
            aboutXMonths    : {one: "ongeveer 1 maand", other: "ongeveer {{count}} maande"},
            xMonths         : {one: "1 maand", other: "{{count}} maande"},
            aboutXYears     : {one: "ongeveer 1 jaar", other: "ongeveer {{count}} jaar"},
            xYears          : {one: "1 jaar", other: "{{count}} jaar"},
            overXYears      : {one: "meer as 1 jaar", other: "meer as {{count}} jaar"},
            almostXYears    : {one: "byna 1 jaar", other: "byna {{count}} jaar"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "yyyy/MM/dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            return n[e]
        };
        var n = {lastWeek: "'verlede' eeee 'om' p", yesterday: "'gister om' p", today: "'vandag om' p", tomorrow: "'môre om' p", nextWeek: "eeee 'om' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                var t = Number(e), e = t % 100;
                if (e < 20) switch (e) {
                    case 1:
                    case 8:
                        return t + "ste";
                    default:
                        return t + "de"
                }
                return t + "ste"
            },
            era          : (0, a.default)({values: {narrow: ["vC", "nC"], abbreviated: ["vC", "nC"], wide: ["voor Christus", "na Christus"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1ste kwartaal", "2de kwartaal", "3de kwartaal", "4de kwartaal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], wide: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["S", "M", "D", "W", "D", "V", "S"], short: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"], abbreviated: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"], wide: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "vm", pm: "nm", midnight: "middernag", noon: "middaguur", morning: "oggend", afternoon: "middag", evening: "laat middag", night: "aand"}, abbreviated: {am: "vm", pm: "nm", midnight: "middernag", noon: "middaguur", morning: "oggend", afternoon: "middag", evening: "laat middag", night: "aand"}, wide: {am: "vm", pm: "nm", midnight: "middernag", noon: "middaguur", morning: "oggend", afternoon: "middag", evening: "laat middag", night: "aand"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "vm", pm: "nm", midnight: "middernag", noon: "uur die middag", morning: "uur die oggend", afternoon: "uur die middag", evening: "uur die aand", night: "uur die aand"}, abbreviated: {am: "vm", pm: "nm", midnight: "middernag", noon: "uur die middag", morning: "uur die oggend", afternoon: "uur die middag", evening: "uur die aand", night: "uur die aand"}, wide: {am: "vm", pm: "nm", midnight: "middernag", noon: "uur die middag", morning: "uur die oggend", afternoon: "uur die middag", evening: "uur die aand", night: "uur die aand"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(ste|de)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?C\.?)/, wide: /^((voor|na) Christus)/}, defaultMatchWidth: "wide", parsePatterns: {any: [/^v/, /^n/]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234](st|d)e kwartaal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i, wide: /^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^J/i, /^F/i, /^M/i, /^A/i, /^M/i, /^J/i, /^J/i, /^A/i, /^S/i, /^O/i, /^N/i, /^D/i], any: [/^Jan/i, /^Feb/i, /^Mrt/i, /^Apr/i, /^Mei/i, /^Jun/i, /^Jul/i, /^Aug/i, /^Sep/i, /^Okt/i, /^Nov/i, /^Dec/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[smdwv]/i, short: /^(So|Ma|Di|Wo|Do|Vr|Sa)/i, abbreviated: /^(Son|Maa|Din|Woe|Don|Vry|Sat)/i, wide: /^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^S/i, /^M/i, /^D/i, /^W/i, /^D/i, /^V/i, /^S/i], any: [/^So/i, /^Ma/i, /^Di/i, /^Wo/i, /^Do/i, /^Vr/i, /^Sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^vm/i, pm: /^nm/i, midnight: /^middernag/i, noon: /^middaguur/i, morning: /oggend/i, afternoon: /middag/i, evening: /laat middag/i, night: /aand/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : 2 === t ? n[e].two : (t <= 10 ? n[e].threeToTen : n[e].other).replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "في خلال " + t : "منذ " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "أقل من ثانية واحدة", two: "أقل من ثانتين", threeToTen: "أقل من {{count}} ثواني", other: "أقل من {{count}} ثانية"},
            xSeconds        : {one: "ثانية واحدة", two: "ثانتين", threeToTen: "{{count}} ثواني", other: "{{count}} ثانية"},
            halfAMinute     : "نصف دقيقة",
            lessThanXMinutes: {one: "أقل من دقيقة", two: "أقل من دقيقتين", threeToTen: "أقل من {{count}} دقائق", other: "أقل من {{count}} دقيقة"},
            xMinutes        : {one: "دقيقة واحدة", two: "دقيقتين", threeToTen: "{{count}} دقائق", other: "{{count}} دقيقة"},
            aboutXHours     : {one: "ساعة واحدة تقريباً", two: "ساعتين تقريباً", threeToTen: "{{count}} ساعات تقريباً", other: "{{count}} ساعة تقريباً"},
            xHours          : {one: "ساعة واحدة", two: "ساعتين", threeToTen: "{{count}} ساعات", other: "{{count}} ساعة"},
            xDays           : {one: "يوم واحد", two: "يومين", threeToTen: "{{count}} أيام", other: "{{count}} يوم"},
            aboutXWeeks     : {one: "أسبوع واحد تقريباً", two: "أسبوعين تقريباً", threeToTen: "{{count}} أسابيع تقريباً", other: "{{count}} أسبوع تقريباً"},
            xWeeks          : {one: "أسبوع واحد", two: "أسبوعين", threeToTen: "{{count}} أسابيع", other: "{{count}} أسبوع"},
            aboutXMonths    : {one: "شهر واحد تقريباً", two: "شهرين تقريباً", threeToTen: "{{count}} أشهر تقريباً", other: "{{count}} شهر تقريباً"},
            xMonths         : {one: "شهر واحد", two: "شهرين", threeToTen: "{{count}} أشهر", other: "{{count}} شهر"},
            aboutXYears     : {one: "عام واحد تقريباً", two: "عامين تقريباً", threeToTen: "{{count}} أعوام تقريباً", other: "{{count}} عام تقريباً"},
            xYears          : {one: "عام واحد", two: "عامين", threeToTen: "{{count}} أعوام", other: "{{count}} عام"},
            overXYears      : {one: "أكثر من عام", two: "أكثر من عامين", threeToTen: "أكثر من {{count}} أعوام", other: "أكثر من {{count}} عام"},
            almostXYears    : {one: "عام واحد تقريباً", two: "عامين تقريباً", threeToTen: "{{count}} أعوام تقريباً", other: "{{count}} عام تقريباً"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'عند' {{time}}", long: "{{date}} 'عند' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'أخر' eeee 'عند' p", yesterday: "'أمس عند' p", today: "'اليوم عند' p", tomorrow: "'غداً عند' p", nextWeek: "eeee 'عند' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return String(e)
            },
            era          : (0, a.default)({values: {narrow: ["ق", "ب"], abbreviated: ["ق.م.", "ب.م."], wide: ["قبل الميلاد", "بعد الميلاد"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["ر1", "ر2", "ر3", "ر4"], wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["ج", "ف", "م", "أ", "م", "ج", "ج", "أ", "س", "أ", "ن", "د"], abbreviated: ["جانـ", "فيفـ", "مارس", "أفريل", "مايـ", "جوانـ", "جويـ", "أوت", "سبتـ", "أكتـ", "نوفـ", "ديسـ"], wide: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"], short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"], abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"], wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ص", pm: "م", midnight: "ن", noon: "ظ", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً"}, abbreviated: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً"}, wide: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "ص", pm: "م", midnight: "ن", noon: "ظ", morning: "في الصباح", afternoon: "بعد الظـهر", evening: "في المساء", night: "في الليل"}, abbreviated: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "في الصباح", evening: "في المساء", night: "في الليل"}, wide: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", afternoon: "بعد الظـهر", evening: "في المساء", night: "في الليل"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ق|ب)/i, abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i, wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^قبل/i, /^بعد/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^ر[1234]/i, wide: /^الربع [1234]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[جفمأسند]/i, abbreviated: /^(جان|فيف|مار|أفر|ماي|جوا|جوي|أوت|سبت|أكت|نوف|ديس)/i, wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ج/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ج/i, /^ج/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i], any: [/^جان/i, /^فيف/i, /^مار/i, /^أفر/i, /^ماي/i, /^جوا/i, /^جوي/i, /^أوت/i, /^سبت/i, /^أكت/i, /^نوف/i, /^ديس/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[حنثرخجس]/i, short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i, wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : 2 === t ? n[e].two : (t <= 10 ? n[e].threeToTen : n[e].other).replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "في خلال " + t : "منذ " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "أقل من ثانية واحدة", two: "أقل من ثانتين", threeToTen: "أقل من {{count}} ثواني", other: "أقل من {{count}} ثانية"},
            xSeconds        : {one: "ثانية واحدة", two: "ثانتين", threeToTen: "{{count}} ثواني", other: "{{count}} ثانية"},
            halfAMinute     : "نصف دقيقة",
            lessThanXMinutes: {one: "أقل من دقيقة", two: "أقل من دقيقتين", threeToTen: "أقل من {{count}} دقائق", other: "أقل من {{count}} دقيقة"},
            xMinutes        : {one: "دقيقة واحدة", two: "دقيقتين", threeToTen: "{{count}} دقائق", other: "{{count}} دقيقة"},
            aboutXHours     : {one: "ساعة واحدة تقريباً", two: "ساعتين تقريباً", threeToTen: "{{count}} ساعات تقريباً", other: "{{count}} ساعة تقريباً"},
            xHours          : {one: "ساعة واحدة", two: "ساعتين", threeToTen: "{{count}} ساعات", other: "{{count}} ساعة"},
            xDays           : {one: "يوم واحد", two: "يومين", threeToTen: "{{count}} أيام", other: "{{count}} يوم"},
            aboutXWeeks     : {one: "أسبوع واحد تقريباً", two: "أسبوعين تقريباً", threeToTen: "{{count}} أسابيع تقريباً", other: "{{count}} أسبوع تقريباً"},
            xWeeks          : {one: "أسبوع واحد", two: "أسبوعين", threeToTen: "{{count}} أسابيع", other: "{{count}} أسبوع"},
            aboutXMonths    : {one: "شهر واحد تقريباً", two: "شهرين تقريباً", threeToTen: "{{count}} أشهر تقريباً", other: "{{count}} شهر تقريباً"},
            xMonths         : {one: "شهر واحد", two: "شهرين", threeToTen: "{{count}} أشهر", other: "{{count}} شهر"},
            aboutXYears     : {one: "عام واحد تقريباً", two: "عامين تقريباً", threeToTen: "{{count}} أعوام تقريباً", other: "{{count}} عام تقريباً"},
            xYears          : {one: "عام واحد", two: "عامين", threeToTen: "{{count}} أعوام", other: "{{count}} عام"},
            overXYears      : {one: "أكثر من عام", two: "أكثر من عامين", threeToTen: "أكثر من {{count}} أعوام", other: "أكثر من {{count}} عام"},
            almostXYears    : {one: "عام واحد تقريباً", two: "عامين تقريباً", threeToTen: "{{count}} أعوام تقريباً", other: "{{count}} عام تقريباً"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'عند' {{time}}", long: "{{date}} 'عند' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'أخر' eeee 'عند' p", yesterday: "'أمس عند' p", today: "'اليوم عند' p", tomorrow: "'غداً عند' p", nextWeek: "eeee 'عند' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return String(e)
            },
            era          : (0, a.default)({values: {narrow: ["ق", "ب"], abbreviated: ["ق.م.", "ب.م."], wide: ["قبل الميلاد", "بعد الميلاد"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["ر1", "ر2", "ر3", "ر4"], wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "غ", "ش", "أ", "ن", "د"], abbreviated: ["ينا", "فبر", "مارس", "أبريل", "ماي", "يونـ", "يولـ", "غشت", "شتنـ", "أكتـ", "نونـ", "دجنـ"], wide: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"], short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"], abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"], wide: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ص", pm: "م", midnight: "ن", noon: "ظ", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً"}, abbreviated: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً"}, wide: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "ص", pm: "م", midnight: "ن", noon: "ظ", morning: "في الصباح", afternoon: "بعد الظـهر", evening: "في المساء", night: "في الليل"}, abbreviated: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "في الصباح", evening: "في المساء", night: "في الليل"}, wide: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", afternoon: "بعد الظـهر", evening: "في المساء", night: "في الليل"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ق|ب)/i, abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i, wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^قبل/i, /^بعد/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^ر[1234]/i, wide: /^الربع [1234]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[يفمأمسند]/i, abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i, wide: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^غ/i, /^ش/i, /^أ/i, /^ن/i, /^د/i], any: [/^ين/i, /^فب/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^غشت/i, /^ش/i, /^أك/i, /^ن/i, /^د/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[حنثرخجس]/i, short: /^(أحد|إثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|إثن|ثلا|أرب|خمي|جمعة|سبت)/i, wide: /^(الأحد|الإثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الإثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^إث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : 2 === t ? n[e].two : (t <= 10 ? n[e].threeToTen : n[e].other).replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "في خلال " + t : "منذ " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "أقل من ثانية واحدة", two: "أقل من ثانتين", threeToTen: "أقل من {{count}} ثواني", other: "أقل من {{count}} ثانية"},
            xSeconds        : {one: "ثانية واحدة", two: "ثانتين", threeToTen: "{{count}} ثواني", other: "{{count}} ثانية"},
            halfAMinute     : "نصف دقيقة",
            lessThanXMinutes: {one: "أقل من دقيقة", two: "أقل من دقيقتين", threeToTen: "أقل من {{count}} دقائق", other: "أقل من {{count}} دقيقة"},
            xMinutes        : {one: "دقيقة واحدة", two: "دقيقتين", threeToTen: "{{count}} دقائق", other: "{{count}} دقيقة"},
            aboutXHours     : {one: "ساعة واحدة تقريباً", two: "ساعتين تقريباً", threeToTen: "{{count}} ساعات تقريباً", other: "{{count}} ساعة تقريباً"},
            xHours          : {one: "ساعة واحدة", two: "ساعتين", threeToTen: "{{count}} ساعات", other: "{{count}} ساعة"},
            xDays           : {one: "يوم واحد", two: "يومين", threeToTen: "{{count}} أيام", other: "{{count}} يوم"},
            aboutXWeeks     : {one: "أسبوع واحد تقريباً", two: "أسبوعين تقريباً", threeToTen: "{{count}} أسابيع تقريباً", other: "{{count}} أسبوع تقريباً"},
            xWeeks          : {one: "أسبوع واحد", two: "أسبوعين", threeToTen: "{{count}} أسابيع", other: "{{count}} أسبوع"},
            aboutXMonths    : {one: "شهر واحد تقريباً", two: "شهرين تقريباً", threeToTen: "{{count}} أشهر تقريباً", other: "{{count}} شهر تقريباً"},
            xMonths         : {one: "شهر واحد", two: "شهرين", threeToTen: "{{count}} أشهر", other: "{{count}} شهر"},
            aboutXYears     : {one: "عام واحد تقريباً", two: "عامين تقريباً", threeToTen: "{{count}} أعوام تقريباً", other: "{{count}} عام تقريباً"},
            xYears          : {one: "عام واحد", two: "عامين", threeToTen: "{{count}} أعوام", other: "{{count}} عام"},
            overXYears      : {one: "أكثر من عام", two: "أكثر من عامين", threeToTen: "أكثر من {{count}} أعوام", other: "أكثر من {{count}} عام"},
            almostXYears    : {one: "عام واحد تقريباً", two: "عامين تقريباً", threeToTen: "{{count}} أعوام تقريباً", other: "{{count}} عام تقريباً"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'عند' {{time}}", long: "{{date}} 'عند' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'أخر' eeee 'عند' p", yesterday: "'أمس عند' p", today: "'اليوم عند' p", tomorrow: "'غداً عند' p", nextWeek: "eeee 'عند' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return String(e)
            },
            era          : (0, a.default)({values: {narrow: ["ق", "ب"], abbreviated: ["ق.م.", "ب.م."], wide: ["قبل الميلاد", "بعد الميلاد"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["ر1", "ر2", "ر3", "ر4"], wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "أ", "س", "أ", "ن", "د"], abbreviated: ["ينا", "فبر", "مارس", "أبريل", "مايو", "يونـ", "يولـ", "أغسـ", "سبتـ", "أكتـ", "نوفـ", "ديسـ"], wide: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"], short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"], abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"], wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ص", pm: "م", midnight: "ن", noon: "ظ", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً"}, abbreviated: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً"}, wide: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "صباحاً", afternoon: "بعد الظهر", evening: "مساءاً", night: "ليلاً"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "ص", pm: "م", midnight: "ن", noon: "ظ", morning: "في الصباح", afternoon: "بعد الظـهر", evening: "في المساء", night: "في الليل"}, abbreviated: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", morning: "في الصباح", evening: "في المساء", night: "في الليل"}, wide: {am: "ص", pm: "م", midnight: "نصف الليل", noon: "ظهر", afternoon: "بعد الظـهر", evening: "في المساء", night: "في الليل"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ق|ب)/i, abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i, wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^قبل/i, /^بعد/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^ر[1234]/i, wide: /^الربع [1234]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[يفمأمسند]/i, abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i, wide: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i], any: [/^ين/i, /^ف/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^أغ/i, /^س/i, /^أك/i, /^ن/i, /^د/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[حنثرخجس]/i, short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i, wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = {
            lessThanXSeconds: {one: "أقل من ثانية", two: "أقل من زوز ثواني", threeToTen: "أقل من {{count}} ثواني", other: "أقل من {{count}} ثانية"},
            xSeconds        : {one: "ثانية", two: "زوز ثواني", threeToTen: "{{count}} ثواني", other: "{{count}} ثانية"},
            halfAMinute     : "نص دقيقة",
            lessThanXMinutes: {one: "أقل من دقيقة", two: "أقل من دقيقتين", threeToTen: "أقل من {{count}} دقايق", other: "أقل من {{count}} دقيقة"},
            xMinutes        : {one: "دقيقة", two: "دقيقتين", threeToTen: "{{count}} دقايق", other: "{{count}} دقيقة"},
            aboutXHours     : {one: "ساعة تقريب", two: "ساعتين تقريب", threeToTen: "{{count}} سوايع تقريب", other: "{{count}} ساعة تقريب"},
            xHours          : {one: "ساعة", two: "ساعتين", threeToTen: "{{count}} سوايع", other: "{{count}} ساعة"},
            xDays           : {one: "نهار", two: "نهارين", threeToTen: "{{count}} أيام", other: "{{count}} يوم"},
            aboutXWeeks     : {one: "جمعة تقريب", two: "جمعتين تقريب", threeToTen: "{{count}} جماع تقريب", other: "{{count}} جمعة تقريب"},
            xWeeks          : {one: "جمعة", two: "جمعتين", threeToTen: "{{count}} جماع", other: "{{count}} جمعة"},
            aboutXMonths    : {one: "شهر تقريب", two: "شهرين تقريب", threeToTen: "{{count}} أشهرة تقريب", other: "{{count}} شهر تقريب"},
            xMonths         : {one: "شهر", two: "شهرين", threeToTen: "{{count}} أشهرة", other: "{{count}} شهر"},
            aboutXYears     : {one: "عام تقريب", two: "عامين تقريب", threeToTen: "{{count}} أعوام تقريب", other: "{{count}} عام تقريب"},
            xYears          : {one: "عام", two: "عامين", threeToTen: "{{count}} أعوام", other: "{{count}} عام"},
            overXYears      : {one: "أكثر من عام", two: "أكثر من عامين", threeToTen: "أكثر من {{count}} أعوام", other: "أكثر من {{count}} عام"},
            almostXYears    : {one: "عام تقريب", two: "عامين تقريب", threeToTen: "{{count}} أعوام تقريب", other: "{{count}} عام تقريب"}
        };
        t.default = function (e, t, a) {
            e = n[e], t = "string" == typeof e ? e : 1 === t ? e.one : 2 === t ? e.two : (t <= 10 ? e.threeToTen : e.other).replace("{{count}}", String(t));
            return null != a && a.addSuffix ? a.comparison && 0 < a.comparison ? "في " + t : "عندو " + t : t
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE، do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss", long: "HH:mm:ss", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'مع' {{time}}", long: "{{date}} 'مع' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = {lastWeek: "eeee 'إلي فات مع' p", yesterday: "'البارح مع' p", today: "'اليوم مع' p", tomorrow: "'غدوة مع' p", nextWeek: "eeee 'الجمعة الجاية مع' p 'نهار'", other: "P"};
        t.default = function (e) {
            return n[e]
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return String(e)
            },
            era          : (0, a.default)({values: {narrow: ["ق", "ب"], abbreviated: ["ق.م.", "ب.م."], wide: ["قبل الميلاد", "بعد الميلاد"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["ر1", "ر2", "ر3", "ر4"], wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return e - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["د", "ن", "أ", "س", "أ", "ج", "ج", "م", "أ", "م", "ف", "ج"], abbreviated: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], wide: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"], short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"], abbreviated: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"], wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ص", pm: "ع", morning: "الصباح", noon: "القايلة", afternoon: "بعد القايلة", evening: "العشية", night: "الليل", midnight: "نص الليل"}, abbreviated: {am: "ص", pm: "ع", morning: "الصباح", noon: "القايلة", afternoon: "بعد القايلة", evening: "العشية", night: "الليل", midnight: "نص الليل"}, wide: {am: "ص", pm: "ع", morning: "الصباح", noon: "القايلة", afternoon: "بعد القايلة", evening: "العشية", night: "الليل", midnight: "نص الليل"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "ص", pm: "ع", morning: "في الصباح", noon: "في القايلة", afternoon: "بعد القايلة", evening: "في العشية", night: "في الليل", midnight: "نص الليل"}, abbreviated: {am: "ص", pm: "ع", morning: "في الصباح", noon: "في القايلة", afternoon: "بعد القايلة", evening: "في العشية", night: "في الليل", midnight: "نص الليل"}, wide: {am: "ص", pm: "ع", morning: "في الصباح", noon: "في القايلة", afternoon: "بعد القايلة", evening: "في العشية", night: "في الليل", midnight: "نص الليل"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /[قب]/, abbreviated: /[قب]\.م\./, wide: /(قبل|بعد) الميلاد/}, defaultMatchWidth: "wide", parsePatterns: {any: [/قبل/, /بعد/]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /ر[1234]/, wide: /الربع (الأول|الثاني|الثالث|الرابع)/}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[جفمأسند]/, abbreviated: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/, wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ج/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ج/i, /^ج/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i], any: [/^جانفي/i, /^فيفري/i, /^مارس/i, /^أفريل/i, /^ماي/i, /^جوان/i, /^جويلية/i, /^أوت/i, /^سبتمبر/i, /^أكتوبر/i, /^نوفمبر/i, /^ديسمبر/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[حنثرخجس]/i, short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i, wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i], wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i], any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(ص|ع|ن ل|ل|(في|مع) (صباح|قايلة|عشية|ليل))/, any: /^([صع]|نص الليل|قايلة|(في|مع) (صباح|قايلة|عشية|ليل))/}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^ص/, pm: /^ع/, midnight: /نص الليل/, noon: /قايلة/, afternoon: /بعد القايلة/, morning: /صباح/, evening: /عشية/, night: /ليل/}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + " əvvəl" : t + " sonra" : t
        };
        var n = {
            lessThanXSeconds: {one: "bir saniyədən az", other: "{{count}} bir saniyədən az"},
            xSeconds        : {one: "1 saniyə", other: "{{count}} saniyə"},
            halfAMinute     : "yarım dəqiqə",
            lessThanXMinutes: {one: "bir dəqiqədən az", other: "{{count}} bir dəqiqədən az"},
            xMinutes        : {one: "bir dəqiqə", other: "{{count}} dəqiqə"},
            aboutXHours     : {one: "təxminən 1 saat", other: "təxminən {{count}} saat"},
            xHours          : {one: "1 saat", other: "{{count}} saat"},
            xDays           : {one: "1 gün", other: "{{count}} gün"},
            aboutXWeeks     : {one: "təxminən 1 həftə", other: "təxminən {{count}} həftə"},
            xWeeks          : {one: "1 həftə", other: "{{count}} həftə"},
            aboutXMonths    : {one: "təxminən 1 ay", other: "təxminən {{count}} ay"},
            xMonths         : {one: "1 ay", other: "{{count}} ay"},
            aboutXYears     : {one: "təxminən 1 il", other: "təxminən {{count}} il"},
            xYears          : {one: "1 il", other: "{{count}} il"},
            overXYears      : {one: "1 ildən çox", other: "{{count}} ildən çox"},
            almostXYears    : {one: "demək olar ki 1 il", other: "demək olar ki {{count}} il"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM y 'il'", long: "do MMMM y 'il'", medium: "d MMM y 'il'", short: "dd.MM.yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}} - 'də'", long: "{{date}} {{time}} - 'də'", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'sonuncu' eeee p -'də'", yesterday: "'dünən' p -'də'", today: "'bugün' p -'də'", tomorrow: "'sabah' p -'də'", nextWeek: "eeee p -'də'", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = (a = a(1)) && a.__esModule ? a : {default: a}, n = {1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı"}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e);
                return a + function () {
                    if (0 === a) return a + "-ıncı";
                    var e = a % 10;
                    return n[e] || n[a % 100 - e] || n[100 <= a ? 100 : null]
                }()
            },
            era          : (0, a.default)({values: {narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Hz. İsa'dan öncə", "Anno Domini"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1ci kvartal", "2ci kvartal", "3cü kvartal", "4cü kvartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], abbreviated: ["Yan", "Fev", "Mar", "Apr", "May", "İyun", "İyul", "Avq", "Sen", "Okt", "Noy", "Dek"], wide: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."], short: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."], abbreviated: ["Baz", "Baz.e", "Çər.a", "Çər", "Cüm.a", "Cüm", "Şə"], wide: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "am", pm: "pm", midnight: "gecəyarı", noon: "gün", morning: "səhər", afternoon: "gündüz", evening: "axşam", night: "gecə"}, abbreviated: {am: "AM", pm: "PM", midnight: "gecəyarı", noon: "gün", morning: "səhər", afternoon: "gündüz", evening: "axşam", night: "gecə"}, wide: {am: "a.m.", pm: "p.m.", midnight: "gecəyarı", noon: "gün", morning: "səhər", afternoon: "gündüz", evening: "axşam", night: "gecə"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "gecəyarı", noon: "gün", morning: "səhər", afternoon: "gündüz", evening: "axşam", night: "gecə"}, abbreviated: {am: "AM", pm: "PM", midnight: "gecəyarı", noon: "gün", morning: "səhər", afternoon: "gündüz", evening: "axşam", night: "gecə"}, wide: {am: "a.m.", pm: "p.m.", midnight: "gecəyarı", noon: "gün", morning: "səhər", afternoon: "gündüz", evening: "axşam", night: "gecə"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(b|a)$/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i, wide: /^(Hz. İsa'dan öncə|ümumi eradan əvvəl|anno domini|ümumi dövr)$/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^b$/i, /^(a|c)$/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]$/i, abbreviated: /^K[1234]$/i, wide: /^[1234](ci)? kvartal$/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({
                matchPatterns    : {narrow: /^[(?-i)yfmaisond]$/i, abbreviated: /^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i, wide: /^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},
                defaultMatchWidth: "wide",
                parsePatterns    : {narrow: [/^[(?-i)y]$/i, /^[(?-i)f]$/i, /^[(?-i)m]$/i, /^[(?-i)a]$/i, /^[(?-i)m]$/i, /^[(?-i)i]$/i, /^[(?-i)i]$/i, /^[(?-i)a]$/i, /^[(?-i)s]$/i, /^[(?-i)o]$/i, /^[(?-i)n]$/i, /^[(?-i)d]$/i], abbreviated: [/^Yan$/i, /^Fev$/i, /^Mar$/i, /^Apr$/i, /^May$/i, /^İyun$/i, /^İyul$/i, /^Avg$/i, /^Sen$/i, /^Okt$/i, /^Noy$/i, /^Dek$/i], wide: [/^Yanvar$/i, /^Fevral$/i, /^Mart$/i, /^Aprel$/i, /^May$/i, /^İyun$/i, /^İyul$/i, /^Avgust$/i, /^Sentyabr$/i, /^Oktyabr$/i, /^Noyabr$/i, /^Dekabr$/i]},
                defaultParseWidth: "any"
            }),
            day          : (0, a.default)({
                matchPatterns    : {narrow: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i, short: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i, abbreviated: /^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i, wide: /^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i},
                defaultMatchWidth: "wide",
                parsePatterns    : {narrow: [/^B\.$/i, /^B\.e$/i, /^Ç\.a$/i, /^Ç\.$/i, /^C\.a$/i, /^C\.$/i, /^Ş\.$/i], abbreviated: [/^Baz\.e$/i, /^Çər$/i, /^Çər\.a$/i, /^Cüm$/i, /^Cüm\.a$/i, /^Şə$/i], wide: [/^Bazar$/i, /^Bazar ertəsi$/i, /^Çərşənbə axşamı$/i, /^Çərşənbə$/i, /^Cümə axşamı$/i, /^Cümə$/i, /^Şənbə$/i], any: [/^B\.$/i, /^B\.e$/i, /^Ç\.a$/i, /^Ç\.$/i, /^C\.a$/i, /^C\.$/i, /^Ş\.$/i]},
                defaultParseWidth: "any"
            }),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i, any: /^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a$/i, pm: /^p$/i, midnight: /^gecəyarı$/i, noon: /^gün$/i, morning: /səhər$/i, afternoon: /gündüz$/i, evening: /axşam$/i, night: /gecə$/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";

        function n(e, t) {
            if (void 0 !== e.one && 1 === t) return e.one;
            var a = t % 10, n = t % 100;
            return (1 == a && 11 != n ? e.singularNominative : 2 <= a && a <= 4 && (n < 10 || 20 < n) ? e.singularGenitive : e.pluralGenitive).replace("{{count}}", t)
        }

        function i(a) {
            return function (e, t) {
                return t.addSuffix ? 0 < t.comparison ? a.future ? n(a.future, e) : "праз " + n(a.regular, e) : a.past ? n(a.past, e) : n(a.regular, e) + " таму" : n(a.regular, e)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return r[e](t, a = a || {})
        };
        var r = {
            lessThanXSeconds: i({regular: {one: "менш за секунду", singularNominative: "менш за {{count}} секунду", singularGenitive: "менш за {{count}} секунды", pluralGenitive: "менш за {{count}} секунд"}, future: {one: "менш, чым праз секунду", singularNominative: "менш, чым праз {{count}} секунду", singularGenitive: "менш, чым праз {{count}} секунды", pluralGenitive: "менш, чым праз {{count}} секунд"}}),
            xSeconds        : i({regular: {singularNominative: "{{count}} секунда", singularGenitive: "{{count}} секунды", pluralGenitive: "{{count}} секунд"}, past: {singularNominative: "{{count}} секунду таму", singularGenitive: "{{count}} секунды таму", pluralGenitive: "{{count}} секунд таму"}, future: {singularNominative: "праз {{count}} секунду", singularGenitive: "праз {{count}} секунды", pluralGenitive: "праз {{count}} секунд"}}),
            halfAMinute     : function (e, t) {
                return t.addSuffix ? 0 < t.comparison ? "праз паўхвіліны" : "паўхвіліны таму" : "паўхвіліны"
            },
            lessThanXMinutes: i({regular: {one: "менш за хвіліну", singularNominative: "менш за {{count}} хвіліну", singularGenitive: "менш за {{count}} хвіліны", pluralGenitive: "менш за {{count}} хвілін"}, future: {one: "менш, чым праз хвіліну", singularNominative: "менш, чым праз {{count}} хвіліну", singularGenitive: "менш, чым праз {{count}} хвіліны", pluralGenitive: "менш, чым праз {{count}} хвілін"}}),
            xMinutes        : i({regular: {singularNominative: "{{count}} хвіліна", singularGenitive: "{{count}} хвіліны", pluralGenitive: "{{count}} хвілін"}, past: {singularNominative: "{{count}} хвіліну таму", singularGenitive: "{{count}} хвіліны таму", pluralGenitive: "{{count}} хвілін таму"}, future: {singularNominative: "праз {{count}} хвіліну", singularGenitive: "праз {{count}} хвіліны", pluralGenitive: "праз {{count}} хвілін"}}),
            aboutXHours     : i({regular: {singularNominative: "каля {{count}} гадзіны", singularGenitive: "каля {{count}} гадзін", pluralGenitive: "каля {{count}} гадзін"}, future: {singularNominative: "прыблізна праз {{count}} гадзіну", singularGenitive: "прыблізна праз {{count}} гадзіны", pluralGenitive: "прыблізна праз {{count}} гадзін"}}),
            xHours          : i({regular: {singularNominative: "{{count}} гадзіна", singularGenitive: "{{count}} гадзіны", pluralGenitive: "{{count}} гадзін"}, past: {singularNominative: "{{count}} гадзіну таму", singularGenitive: "{{count}} гадзіны таму", pluralGenitive: "{{count}} гадзін таму"}, future: {singularNominative: "праз {{count}} гадзіну", singularGenitive: "праз {{count}} гадзіны", pluralGenitive: "праз {{count}} гадзін"}}),
            xDays           : i({regular: {singularNominative: "{{count}} дзень", singularGenitive: "{{count}} дні", pluralGenitive: "{{count}} дзён"}}),
            aboutXWeeks     : i({regular: {singularNominative: "каля {{count}} месяца", singularGenitive: "каля {{count}} месяцаў", pluralGenitive: "каля {{count}} месяцаў"}, future: {singularNominative: "прыблізна праз {{count}} месяц", singularGenitive: "прыблізна праз {{count}} месяцы", pluralGenitive: "прыблізна праз {{count}} месяцаў"}}),
            xWeeks          : i({regular: {singularNominative: "{{count}} месяц", singularGenitive: "{{count}} месяцы", pluralGenitive: "{{count}} месяцаў"}}),
            aboutXMonths    : i({regular: {singularNominative: "каля {{count}} месяца", singularGenitive: "каля {{count}} месяцаў", pluralGenitive: "каля {{count}} месяцаў"}, future: {singularNominative: "прыблізна праз {{count}} месяц", singularGenitive: "прыблізна праз {{count}} месяцы", pluralGenitive: "прыблізна праз {{count}} месяцаў"}}),
            xMonths         : i({regular: {singularNominative: "{{count}} месяц", singularGenitive: "{{count}} месяцы", pluralGenitive: "{{count}} месяцаў"}}),
            aboutXYears     : i({regular: {singularNominative: "каля {{count}} года", singularGenitive: "каля {{count}} гадоў", pluralGenitive: "каля {{count}} гадоў"}, future: {singularNominative: "прыблізна праз {{count}} год", singularGenitive: "прыблізна праз {{count}} гады", pluralGenitive: "прыблізна праз {{count}} гадоў"}}),
            xYears          : i({regular: {singularNominative: "{{count}} год", singularGenitive: "{{count}} гады", pluralGenitive: "{{count}} гадоў"}}),
            overXYears      : i({regular: {singularNominative: "больш за {{count}} год", singularGenitive: "больш за {{count}} гады", pluralGenitive: "больш за {{count}} гадоў"}, future: {singularNominative: "больш, чым праз {{count}} год", singularGenitive: "больш, чым праз {{count}} гады", pluralGenitive: "больш, чым праз {{count}} гадоў"}}),
            almostXYears    : i({regular: {singularNominative: "амаль {{count}} год", singularGenitive: "амаль {{count}} гады", pluralGenitive: "амаль {{count}} гадоў"}, future: {singularNominative: "амаль праз {{count}} год", singularGenitive: "амаль праз {{count}} гады", pluralGenitive: "амаль праз {{count}} гадоў"}})
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM y 'г.'", long: "d MMMM y 'г.'", medium: "d MMM y 'г.'", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {any: "{{date}}, {{time}}"}, defaultWidth: "any"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = u[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = (a = a(4)) && a.__esModule ? a : {default: a}, r = ["нядзелю", "панядзелак", "аўторак", "сераду", "чацвер", "пятніцу", "суботу"];

        function o(e) {
            return "'у " + r[e] + " а' p"
        }

        var u = {
            lastWeek    : function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "'у мінулую " + e + " а' p";
                        case 1:
                        case 2:
                        case 4:
                            return "'у мінулы " + e + " а' p"
                    }
                }()
            }, yesterday: "'учора а' p", today: "'сёння а' p", tomorrow: "'заўтра а' p", nextWeek: function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "'у наступную " + e + " а' p";
                        case 1:
                        case 2:
                        case 4:
                            return "'у наступны " + e + " а' p"
                    }
                }()
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                t = String((t || {}).unit), e = Number(e);
                return e + ("date" === t ? "-га" : "hour" === t || "minute" === t || "second" === t ? "-я" : e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? "-ы" : "-і")
            },
            era          : (0, a.default)({values: {narrow: ["да н.э.", "н.э."], abbreviated: ["да н. э.", "н. э."], wide: ["да нашай эры", "нашай эры"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1-ы кв.", "2-і кв.", "3-і кв.", "4-ы кв."], wide: ["1-ы квартал", "2-і квартал", "3-і квартал", "4-ы квартал"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["С", "Л", "С", "К", "М", "Ч", "Л", "Ж", "В", "К", "Л", "С"], abbreviated: ["студз.", "лют.", "сак.", "крас.", "май", "чэрв.", "ліп.", "жн.", "вер.", "кастр.", "ліст.", "снеж."], wide: ["студзень", "люты", "сакавік", "красавік", "май", "чэрвень", "ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["С", "Л", "С", "К", "М", "Ч", "Л", "Ж", "В", "К", "Л", "С"], abbreviated: ["студз.", "лют.", "сак.", "крас.", "мая", "чэрв.", "ліп.", "жн.", "вер.", "кастр.", "ліст.", "снеж."], wide: ["студзеня", "лютага", "сакавіка", "красавіка", "мая", "чэрвеня", "ліпеня", "жніўня", "верасня", "кастрычніка", "лістапада", "снежня"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["Н", "П", "А", "С", "Ч", "П", "С"], short: ["нд", "пн", "аў", "ср", "чц", "пт", "сб"], abbreviated: ["нядз", "пан", "аўт", "сер", "чац", "пят", "суб"], wide: ["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ДП", pm: "ПП", midnight: "поўн.", noon: "поўд.", morning: "ран.", afternoon: "дзень", evening: "веч.", night: "ноч"}, abbreviated: {am: "ДП", pm: "ПП", midnight: "поўн.", noon: "поўд.", morning: "ран.", afternoon: "дзень", evening: "веч.", night: "ноч"}, wide: {am: "ДП", pm: "ПП", midnight: "поўнач", noon: "поўдзень", morning: "раніца", afternoon: "дзень", evening: "вечар", night: "ноч"}},
                defaultWidth          : "any",
                formattingValues      : {narrow: {am: "ДП", pm: "ПП", midnight: "поўн.", noon: "поўд.", morning: "ран.", afternoon: "дня", evening: "веч.", night: "ночы"}, abbreviated: {am: "ДП", pm: "ПП", midnight: "поўн.", noon: "поўд.", morning: "ран.", afternoon: "дня", evening: "веч.", night: "ночы"}, wide: {am: "ДП", pm: "ПП", midnight: "поўнач", noon: "поўдзень", morning: "раніцы", afternoon: "дня", evening: "вечара", night: "ночы"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^((да )?н\.?\s?э\.?)/i, abbreviated: /^((да )?н\.?\s?э\.?)/i, wide: /^(да нашай эры|нашай эры|наша эра)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^д/i, /^н/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234](-?[ыі]?)? кв.?/i, wide: /^[1234](-?[ыі]?)? квартал/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[слкмчжв]/i, abbreviated: /^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i, wide: /^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^с/i, /^л/i, /^с/i, /^к/i, /^м/i, /^ч/i, /^л/i, /^ж/i, /^в/i, /^к/i, /^л/i, /^с/i], any: [/^ст/i, /^лю/i, /^са/i, /^кр/i, /^ма/i, /^ч/i, /^ліп/i, /^ж/i, /^в/i, /^ка/i, /^ліс/i, /^сн/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[нпасч]/i, short: /^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i, abbreviated: /^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i, wide: /^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^н/i, /^п/i, /^а/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^н/i, /^п[ан]/i, /^а/i, /^с[ер]/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i, abbreviated: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i, wide: /^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i}, defaultMatchWidth: "wide", parsePatterns: {any: {am: /^дп/i, pm: /^пп/i, midnight: /^поўн/i, noon: /^поўд/i, morning: /^р/i, afternoon: /^д[зн]/i, evening: /^в/i, night: /^н/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "след " + t : "преди " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "по-малко от секунда", other: "по-малко от {{count}} секунди"},
            xSeconds        : {one: "1 секунда", other: "{{count}} секунди"},
            halfAMinute     : "половин минута",
            lessThanXMinutes: {one: "по-малко от минута", other: "по-малко от {{count}} минути"},
            xMinutes        : {one: "1 минута", other: "{{count}} минути"},
            aboutXHours     : {one: "около час", other: "около {{count}} часа"},
            xHours          : {one: "1 час", other: "{{count}} часа"},
            xDays           : {one: "1 ден", other: "{{count}} дни"},
            aboutXWeeks     : {one: "около седмица", other: "около {{count}} седмици"},
            xWeeks          : {one: "1 седмица", other: "{{count}} седмици"},
            aboutXMonths    : {one: "около месец", other: "около {{count}} месеца"},
            xMonths         : {one: "1 месец", other: "{{count}} месеца"},
            aboutXYears     : {one: "около година", other: "около {{count}} години"},
            xYears          : {one: "1 година", other: "{{count}} години"},
            overXYears      : {one: "над година", other: "над {{count}} години"},
            almostXYears    : {one: "почти година", other: "почти {{count}} години"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {any: "{{date}} {{time}}"}, defaultWidth: "any"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = u[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = (a = a(4)) && a.__esModule ? a : {default: a}, r = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];

        function o(e) {
            var t = r[e];
            return 2 === e ? "'във " + t + " в' p" : "'в " + t + " в' p"
        }

        var u = {
            lastWeek    : function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 3:
                        case 6:
                            return "'миналата " + e + " в' p";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "'миналия " + e + " в' p"
                    }
                }()
            }, yesterday: "'вчера в' p", today: "'днес в' p", tomorrow: "'утре в' p", nextWeek: function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 3:
                        case 6:
                            return "'следващата " + e + " в' p";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "'следващия " + e + " в' p"
                    }
                }()
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a};

        function r(e, t, a, n, i) {
            return e + "-" + ("quarter" === t ? i : "year" === t || "week" === t || "minute" === t || "second" === t ? n : a)
        }

        a = {
            ordinalNumber: function (e, t) {
                var a = String((t || {}).unit), n = Number(e);
                if (0 === n) return r(0, a, "ев", "ева", "ево");
                if (n % 1e3 == 0) return r(n, a, "ен", "на", "но");
                if (n % 100 == 0) return r(n, a, "тен", "тна", "тно");
                e = n % 100;
                if (20 < e || e < 10) switch (e % 10) {
                    case 1:
                        return r(n, a, "ви", "ва", "во");
                    case 2:
                        return r(n, a, "ри", "ра", "ро");
                    case 7:
                    case 8:
                        return r(n, a, "ми", "ма", "мо")
                }
                return r(n, a, "ти", "та", "то")
            },
            era          : (0, a.default)({values: {narrow: ["пр.н.е.", "н.е."], abbreviated: ["преди н. е.", "н. е."], wide: ["преди новата ера", "новата ера"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1-во тримес.", "2-ро тримес.", "3-то тримес.", "4-то тримес."], wide: ["1-во тримесечие", "2-ро тримесечие", "3-то тримесечие", "4-то тримесечие"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {abbreviated: ["яну", "фев", "мар", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"], wide: ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["Н", "П", "В", "С", "Ч", "П", "С"], short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"], abbreviated: ["нед", "пон", "вто", "сря", "чет", "пет", "съб"], wide: ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {wide: {am: "преди обяд", pm: "след обяд", midnight: "в полунощ", noon: "на обяд", morning: "сутринта", afternoon: "следобед", evening: "вечерта", night: "през нощта"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^((пр)?н\.?\s?е\.?)/i, abbreviated: /^((пр)?н\.?\s?е\.?)/i, wide: /^(преди новата ера|новата ера|нова ера)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^п/i, /^н/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i, wide: /^[1234](-?[врт]?о?)? тримесечие/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i, wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[нпвсч]/i, short: /^(нд|пн|вт|ср|чт|пт|сб)/i, abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i, wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^преди о/i, pm: /^след о/i, midnight: /^в пол/i, noon: /^на об/i, morning: /^сут/i, afternoon: /^следо/i, evening: /^веч/i, night: /^през н/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one : i[e].other.replace("{{count}}", n.default.numberToLocale(t)), a.addSuffix ? 0 < a.comparison ? t + " এর মধ্যে" : t + " আগে" : t
        };
        var n = (a = a(13)) && a.__esModule ? a : {default: a}, i = {
            lessThanXSeconds: {one: "প্রায় ১ সেকেন্ড", other: "প্রায় {{count}} সেকেন্ড"},
            xSeconds        : {one: "১ সেকেন্ড", other: "{{count}} সেকেন্ড"},
            halfAMinute     : "আধ মিনিট",
            lessThanXMinutes: {one: "প্রায় ১ মিনিট", other: "প্রায় {{count}} মিনিট"},
            xMinutes        : {one: "১ মিনিট", other: "{{count}} মিনিট"},
            aboutXHours     : {one: "প্রায় ১ ঘন্টা", other: "প্রায় {{count}} ঘন্টা"},
            xHours          : {one: "১ ঘন্টা", other: "{{count}} ঘন্টা"},
            xDays           : {one: "১ দিন", other: "{{count}} দিন"},
            aboutXWeeks     : {one: "প্রায় ১ সপ্তাহ", other: "প্রায় {{count}} সপ্তাহ"},
            xWeeks          : {one: "১ সপ্তাহ", other: "{{count}} সপ্তাহ"},
            aboutXMonths    : {one: "প্রায় ১ মাস", other: "প্রায় {{count}} মাস"},
            xMonths         : {one: "১ মাস", other: "{{count}} মাস"},
            aboutXYears     : {one: "প্রায় ১ বছর", other: "প্রায় {{count}} বছর"},
            xYears          : {one: "১ বছর", other: "{{count}} বছর"},
            overXYears      : {one: "১ বছরের বেশি", other: "{{count}} বছরের বেশি"},
            almostXYears    : {one: "প্রায় ১ বছর", other: "প্রায় {{count}} বছর"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}} 'সময়'", long: "{{date}} {{time}} 'সময়'", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'গত' eeee 'সময়' p", yesterday: "'গতকাল' 'সময়' p", today: "'আজ' 'সময়' p", tomorrow: "'আগামীকাল' 'সময়' p", nextWeek: "eeee 'সময়' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(খ্রিঃপূঃ|খ্রিঃ)/i, abbreviated: /^(খ্রিঃপূর্ব|খ্রিঃ)/i, wide: /^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^খ্রিঃপূঃ/i, /^খ্রিঃ/i], abbreviated: [/^খ্রিঃপূর্ব/i, /^খ্রিঃ/i], wide: [/^খ্রিস্টপূর্ব/i, /^খ্রিস্টাব্দ/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[১২৩৪]/i, abbreviated: /^[১২৩৪]ত্রৈ/i, wide: /^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/১/i, /২/i, /৩/i, /৪/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i, abbreviated: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i, wide: /^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^জানু/i, /^ফেব্রু/i, /^মার্চ/i, /^এপ্রিল/i, /^মে/i, /^জুন/i, /^জুলাই/i, /^আগস্ট/i, /^সেপ্ট/i, /^অক্টো/i, /^নভে/i, /^ডিসে/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^(র|সো|ম|বু|বৃ|শু|শ)+/i, short: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i, abbreviated: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i, wide: /^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^র/i, /^সো/i, /^ম/i, /^বু/i, /^বৃ/i, /^শু/i, /^শ/i], short: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i], abbreviated: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i], wide: [/^রবিবার/i, /^সোমবার/i, /^মঙ্গলবার/i, /^বুধবার/i, /^বৃহস্পতিবার /i, /^শুক্রবার/i, /^শনিবার/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i, abbreviated: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i, wide: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^পূ/i, pm: /^অপ/i, midnight: /^মধ্যরাত/i, noon: /^মধ্যাহ্ন/i, morning: /সকাল/i, afternoon: /বিকাল/i, evening: /সন্ধ্যা/i, night: /রাত/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? a.addSuffix ? 0 < a.comparison ? n[e].one.withPrepositionIn : n[e].one.withPrepositionAgo : n[e].one.standalone : (1 < t % 10 && t % 10 < 5 && "1" !== String(t).substr(-2, 1) ? n[e].dual : n[e].other).replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "za " + t : "prije " + t : t
        };
        var n = {
            lessThanXSeconds: {one: {standalone: "manje od 1 sekunde", withPrepositionAgo: "manje od 1 sekunde", withPrepositionIn: "manje od 1 sekundu"}, dual: "manje od {{count}} sekunde", other: "manje od {{count}} sekundi"},
            xSeconds        : {one: {standalone: "1 sekunda", withPrepositionAgo: "1 sekunde", withPrepositionIn: "1 sekundu"}, dual: "{{count}} sekunde", other: "{{count}} sekundi"},
            halfAMinute     : "pola minute",
            lessThanXMinutes: {one: {standalone: "manje od 1 minute", withPrepositionAgo: "manje od 1 minute", withPrepositionIn: "manje od 1 minutu"}, dual: "manje od {{count}} minute", other: "manje od {{count}} minuta"},
            xMinutes        : {one: {standalone: "1 minuta", withPrepositionAgo: "1 minute", withPrepositionIn: "1 minutu"}, dual: "{{count}} minute", other: "{{count}} minuta"},
            aboutXHours     : {one: {standalone: "oko 1 sat", withPrepositionAgo: "oko 1 sat", withPrepositionIn: "oko 1 sat"}, dual: "oko {{count}} sata", other: "oko {{count}} sati"},
            xHours          : {one: {standalone: "1 sat", withPrepositionAgo: "1 sat", withPrepositionIn: "1 sat"}, dual: "{{count}} sata", other: "{{count}} sati"},
            xDays           : {one: {standalone: "1 dan", withPrepositionAgo: "1 dan", withPrepositionIn: "1 dan"}, dual: "{{count}} dana", other: "{{count}} dana"},
            aboutXWeeks     : {one: {standalone: "oko 1 sedmicu", withPrepositionAgo: "oko 1 sedmicu", withPrepositionIn: "oko 1 sedmicu"}, dual: "oko {{count}} sedmice", other: "oko {{count}} sedmice"},
            xWeeks          : {one: {standalone: "1 sedmicu", withPrepositionAgo: "1 sedmicu", withPrepositionIn: "1 sedmicu"}, dual: "{{count}} sedmice", other: "{{count}} sedmice"},
            aboutXMonths    : {one: {standalone: "oko 1 mjesec", withPrepositionAgo: "oko 1 mjesec", withPrepositionIn: "oko 1 mjesec"}, dual: "oko {{count}} mjeseca", other: "oko {{count}} mjeseci"},
            xMonths         : {one: {standalone: "1 mjesec", withPrepositionAgo: "1 mjesec", withPrepositionIn: "1 mjesec"}, dual: "{{count}} mjeseca", other: "{{count}} mjeseci"},
            aboutXYears     : {one: {standalone: "oko 1 godinu", withPrepositionAgo: "oko 1 godinu", withPrepositionIn: "oko 1 godinu"}, dual: "oko {{count}} godine", other: "oko {{count}} godina"},
            xYears          : {one: {standalone: "1 godina", withPrepositionAgo: "1 godine", withPrepositionIn: "1 godinu"}, dual: "{{count}} godine", other: "{{count}} godina"},
            overXYears      : {one: {standalone: "preko 1 godinu", withPrepositionAgo: "preko 1 godinu", withPrepositionIn: "preko 1 godinu"}, dual: "preko {{count}} godine", other: "preko {{count}} godina"},
            almostXYears    : {one: {standalone: "gotovo 1 godinu", withPrepositionAgo: "gotovo 1 godinu", withPrepositionIn: "gotovo 1 godinu"}, dual: "gotovo {{count}} godine", other: "gotovo {{count}} godina"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d. MMMM yyyy.", long: "d. MMMM yyyy.", medium: "d. MMM yy.", short: "dd. MM. yy."}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'u' {{time}}", long: "{{date}} 'u' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = i[e];
            return "function" == typeof e ? e(t) : e
        };
        var i = {
            lastWeek    : function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'prošle nedjelje u' p";
                    case 3:
                        return "'prošle srijede u' p";
                    case 6:
                        return "'prošle subote u' p";
                    default:
                        return "'prošli' EEEE 'u' p"
                }
            }, yesterday: "'juče u' p", today: "'danas u' p", tomorrow: "'sutra u' p", nextWeek: function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'sljedeće nedjelje u' p";
                    case 3:
                        return "'sljedeću srijedu u' p";
                    case 6:
                        return "'sljedeću subotu u' p";
                    default:
                        return "'sljedeći' EEEE 'u' p"
                }
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                e = Number(e);
                return String(e).concat(".")
            },
            era          : (0, a.default)({values: {narrow: ["pr.n.e.", "AD"], abbreviated: ["pr. Hr.", "po. Hr."], wide: ["Prije Hrista", "Poslije Hrista"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], wide: ["januar", "februar", "mart", "april", "maj", "juni", "juli", "avgust", "septembar", "oktobar", "novembar", "decembar"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], wide: ["januar", "februar", "mart", "april", "maj", "juni", "juli", "avgust", "septembar", "oktobar", "novembar", "decembar"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["N", "P", "U", "S", "Č", "P", "S"], short: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"], abbreviated: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"], wide: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uveče", night: "noću"}, abbreviated: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uveče", night: "noću"}, wide: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "poslije podne", evening: "uveče", night: "noću"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uveče", night: "noću"}, abbreviated: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uveče", night: "noću"}, wide: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "poslije podne", evening: "uveče", night: "noću"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)\./i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(pr\.n\.e\.|AD)/i, abbreviated: /^(pr\.\s?Hr\.|po\.\s?Hr\.)/i, wide: /^(Prije Hrista|prije nove ere|Poslije Hrista|nova era)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^pr/i, /^(po|nova)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?kv\.?/i, wide: /^[1234]\. kvartal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^(10|11|12|[123456789])\./i, abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i, wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(juni|juna)|(juli|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/(10|11|12|[123456789])/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^avg/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[npusčc]/i, short: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i, abbreviated: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i, wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {any: /^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|poslije podne|ujutru)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^pono/i, noon: /^pod/i, morning: /jutro/i, afternoon: /(poslije\s|po)+podne/i, evening: /(uvece|uveče)/i, night: /(nocu|noću)/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : 11 === t && n[e].eleven ? n[e].eleven : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "en " + t : "fa " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "menys d'un segon", eleven: "menys d'onze segons", other: "menys de {{count}} segons"},
            xSeconds        : {one: "1 segon", other: "{{count}} segons"},
            halfAMinute     : "mig minut",
            lessThanXMinutes: {one: "menys d'un minut", eleven: "menys d'onze minuts", other: "menys de {{count}} minuts"},
            xMinutes        : {one: "1 minut", other: "{{count}} minuts"},
            aboutXHours     : {one: "aproximadament una hora", other: "aproximadament {{count}} hores"},
            xHours          : {one: "1 hora", other: "{{count}} hores"},
            xDays           : {one: "1 dia", other: "{{count}} dies"},
            aboutXWeeks     : {one: "aproximadament una setmana", other: "aproximadament {{count}} setmanes"},
            xWeeks          : {one: "1 setmana", other: "{{count}} setmanes"},
            aboutXMonths    : {one: "aproximadament un mes", other: "aproximadament {{count}} mesos"},
            xMonths         : {one: "1 mes", other: "{{count}} mesos"},
            aboutXYears     : {one: "aproximadament un any", other: "aproximadament {{count}} anys"},
            xYears          : {one: "1 any", other: "{{count}} anys"},
            overXYears      : {one: "més d'un any", eleven: "més d'onze anys", other: "més de {{count}} anys"},
            almostXYears    : {one: "gairebé un any", other: "gairebé {{count}} anys"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d 'de' MMMM y", long: "d 'de' MMMM y", medium: "d MMM y", short: "dd/MM/y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'a les' {{time}}", long: "{{date}} 'a les' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return (1 !== t.getUTCHours() ? r : i)[e]
        };
        var i = {lastWeek: "'el' eeee 'passat a la' LT", yesterday: "'ahir a la' p", today: "'avui a la' p", tomorrow: "'demà a la' p", nextWeek: "eeee 'a la' p", other: "P"}, r = {lastWeek: "'el' eeee 'passat a les' p", yesterday: "'ahir a les' p", today: "'avui a les' p", tomorrow: "'demà a les' p", nextWeek: "eeee 'a les' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e), e = a % 100;
                if (20 < e || e < 10) switch (e % 10) {
                    case 1:
                        return a + "r";
                    case 2:
                        return a + "n";
                    case 3:
                        return a + "r";
                    case 4:
                        return a + "t"
                }
                return a + "è"
            },
            era          : (0, a.default)({values: {narrow: ["aC", "dC"], abbreviated: ["a. de C.", "d. de C."], wide: ["abans de Crist", "després de Crist"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["GN", "FB", "MÇ", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"], abbreviated: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."], wide: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."], short: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."], abbreviated: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."], wide: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "am", pm: "pm", midnight: "mitjanit", noon: "migdia", morning: "matí", afternoon: "tarda", evening: "vespre", night: "nit"}, abbreviated: {am: "a.m.", pm: "p.m.", midnight: "mitjanit", noon: "migdia", morning: "matí", afternoon: "tarda", evening: "vespre", night: "nit"}, wide: {am: "ante meridiem", pm: "post meridiem", midnight: "mitjanit", noon: "migdia", morning: "matí", afternoon: "tarda", evening: "vespre", night: "nit"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "am", pm: "pm", midnight: "de la mitjanit", noon: "del migdia", morning: "del matí", afternoon: "de la tarda", evening: "del vespre", night: "de la nit"}, abbreviated: {am: "AM", pm: "PM", midnight: "de la mitjanit", noon: "del migdia", morning: "del matí", afternoon: "de la tarda", evening: "del vespre", night: "de la nit"}, wide: {am: "ante meridiem", pm: "post meridiem", midnight: "de la mitjanit", noon: "del migdia", morning: "del matí", afternoon: "de la tarda", evening: "del vespre", night: "de la nit"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)(è|r|n|r|t)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(aC|dC)/i, abbreviated: /^(a. de C.|d. de C.)/i, wide: /^(abans de Crist|despr[eé]s de Crist)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^aC/i, /^dC/i], abbreviated: [/^(a. de C.)/i, /^(d. de C.)/i], wide: [/^(abans de Crist)/i, /^(despr[eé]s de Crist)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](è|r|n|r|t)? trimestre/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({
                matchPatterns    : {narrow: /^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i, abbreviated: /^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i, wide: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},
                defaultMatchWidth: "wide",
                parsePatterns    : {narrow: [/^GN/i, /^FB/i, /^MÇ/i, /^AB/i, /^MG/i, /^JN/i, /^JL/i, /^AG/i, /^ST/i, /^OC/i, /^NV/i, /^DS/i], abbreviated: [/^gen./i, /^febr./i, /^març/i, /^abr./i, /^maig/i, /^juny/i, /^jul./i, /^ag./i, /^set./i, /^oct./i, /^nov./i, /^des./i], wide: [/^gener/i, /^febrer/i, /^març/i, /^abril/i, /^maig/i, /^juny/i, /^juliol/i, /^agost/i, /^setembre/i, /^octubre/i, /^novembre/i, /^desembre/i]},
                defaultParseWidth: "any"
            }),
            day          : (0, n.default)({matchPatterns: {narrow: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i, short: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i, abbreviated: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i, wide: /^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i], abbreviated: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i], wide: [/^diumenge/i, /^dilluns/i, /^dimarts/i, /^dimecres/i, /^dijous/i, /^divendres/i, /^disssabte/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {narrow: /^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i, abbreviated: /^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i, wide: /^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mitjanit/i, noon: /^migdia/i, morning: /matí/i, afternoon: /tarda/i, evening: /vespre/i, night: /nit/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            var n = r[e], i = "object" == typeof n.other ? "other" : 1 === t ? "one" : 1 < t && t < 5 || 0 === t ? "few" : "many", e = !0 === (a = a || {}).addSuffix, a = a.comparison;
            return n[i][e && -1 === a ? "past" : e && 1 === a ? "future" : "regular"].replace("{{count}}", t)
        };
        var r = {
            lessThanXSeconds: {one: {regular: "méně než sekunda", past: "před méně než sekundou", future: "za méně než sekundu"}, few: {regular: "méně než {{count}} sekundy", past: "před méně než {{count}} sekundami", future: "za méně než {{count}} sekundy"}, many: {regular: "méně než {{count}} sekund", past: "před méně než {{count}} sekundami", future: "za méně než {{count}} sekund"}},
            xSeconds        : {one: {regular: "sekunda", past: "před sekundou", future: "za sekundu"}, few: {regular: "{{count}} sekundy", past: "před {{count}} sekundami", future: "za {{count}} sekundy"}, many: {regular: "{{count}} sekund", past: "před {{count}} sekundami", future: "za {{count}} sekund"}},
            halfAMinute     : {other: {regular: "půl minuty", past: "před půl minutou", future: "za půl minuty"}},
            lessThanXMinutes: {one: {regular: "méně než minuta", past: "před méně než minutou", future: "za méně než minutu"}, few: {regular: "méně než {{count}} minuty", past: "před méně než {{count}} minutami", future: "za méně než {{count}} minuty"}, many: {regular: "méně než {{count}} minut", past: "před méně než {{count}} minutami", future: "za méně než {{count}} minut"}},
            xMinutes        : {one: {regular: "minuta", past: "před minutou", future: "za minutu"}, few: {regular: "{{count}} minuty", past: "před {{count}} minutami", future: "za {{count}} minuty"}, many: {regular: "{{count}} minut", past: "před {{count}} minutami", future: "za {{count}} minut"}},
            aboutXHours     : {one: {regular: "přibližně hodina", past: "přibližně před hodinou", future: "přibližně za hodinu"}, few: {regular: "přibližně {{count}} hodiny", past: "přibližně před {{count}} hodinami", future: "přibližně za {{count}} hodiny"}, many: {regular: "přibližně {{count}} hodin", past: "přibližně před {{count}} hodinami", future: "přibližně za {{count}} hodin"}},
            xHours          : {one: {regular: "hodina", past: "před hodinou", future: "za hodinu"}, few: {regular: "{{count}} hodiny", past: "před {{count}} hodinami", future: "za {{count}} hodiny"}, many: {regular: "{{count}} hodin", past: "před {{count}} hodinami", future: "za {{count}} hodin"}},
            xDays           : {one: {regular: "den", past: "před dnem", future: "za den"}, few: {regular: "{{count}} dny", past: "před {{count}} dny", future: "za {{count}} dny"}, many: {regular: "{{count}} dní", past: "před {{count}} dny", future: "za {{count}} dní"}},
            aboutXWeeks     : {one: {regular: "přibližně týden", past: "přibližně před týdnem", future: "přibližně za týden"}, few: {regular: "přibližně {{count}} týdny", past: "přibližně před {{count}} týdny", future: "přibližně za {{count}} týdny"}, many: {regular: "přibližně {{count}} týdnů", past: "přibližně před {{count}} týdny", future: "přibližně za {{count}} týdnů"}},
            xWeeks          : {one: {regular: "týden", past: "před týdnem", future: "za týden"}, few: {regular: "{{count}} týdny", past: "před {{count}} týdny", future: "za {{count}} týdny"}, many: {regular: "{{count}} týdnů", past: "před {{count}} týdny", future: "za {{count}} týdnů"}},
            aboutXMonths    : {one: {regular: "přibližně měsíc", past: "přibližně před měsícem", future: "přibližně za měsíc"}, few: {regular: "přibližně {{count}} měsíce", past: "přibližně před {{count}} měsíci", future: "přibližně za {{count}} měsíce"}, many: {regular: "přibližně {{count}} měsíců", past: "přibližně před {{count}} měsíci", future: "přibližně za {{count}} měsíců"}},
            xMonths         : {one: {regular: "měsíc", past: "před měsícem", future: "za měsíc"}, few: {regular: "{{count}} měsíce", past: "před {{count}} měsíci", future: "za {{count}} měsíce"}, many: {regular: "{{count}} měsíců", past: "před {{count}} měsíci", future: "za {{count}} měsíců"}},
            aboutXYears     : {one: {regular: "přibližně rok", past: "přibližně před rokem", future: "přibližně za rok"}, few: {regular: "přibližně {{count}} roky", past: "přibližně před {{count}} roky", future: "přibližně za {{count}} roky"}, many: {regular: "přibližně {{count}} roků", past: "přibližně před {{count}} roky", future: "přibližně za {{count}} roků"}},
            xYears          : {one: {regular: "rok", past: "před rokem", future: "za rok"}, few: {regular: "{{count}} roky", past: "před {{count}} roky", future: "za {{count}} roky"}, many: {regular: "{{count}} roků", past: "před {{count}} roky", future: "za {{count}} roků"}},
            overXYears      : {one: {regular: "více než rok", past: "před více než rokem", future: "za více než rok"}, few: {regular: "více než {{count}} roky", past: "před více než {{count}} roky", future: "za více než {{count}} roky"}, many: {regular: "více než {{count}} roků", past: "před více než {{count}} roky", future: "za více než {{count}} roků"}},
            almostXYears    : {one: {regular: "skoro rok", past: "skoro před rokem", future: "skoro za rok"}, few: {regular: "skoro {{count}} roky", past: "skoro před {{count}} roky", future: "skoro za {{count}} roky"}, many: {regular: "skoro {{count}} roků", past: "skoro před {{count}} roky", future: "skoro za {{count}} roků"}}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d. MMMM yyyy", long: "d. MMMM yyyy", medium: "d. M. yyyy", short: "dd.MM.yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'v' {{time}}", long: "{{date}} 'v' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = i[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var n = ["neděli", "pondělí", "úterý", "středu", "čtvrtek", "pátek", "sobotu"], i = {
            lastWeek: "'poslední' eeee 've' p", yesterday: "'včera v' p", today: "'dnes v' p", tomorrow: "'zítra v' p", nextWeek: function (e, t, a) {
                e = e.getUTCDay();
                return "'v " + n[e] + " o' p"
            }, other: "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {narrow: ["př. n. l.", "n. l."], abbreviated: ["př. n. l.", "n. l."], wide: ["před naším letopočtem", "našeho letopočtu"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"], wide: ["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"], abbreviated: ["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"], wide: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"], abbreviated: ["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"], wide: ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["ne", "po", "út", "st", "čt", "pá", "so"], short: ["ne", "po", "út", "st", "čt", "pá", "so"], abbreviated: ["ned", "pon", "úte", "stř", "čtv", "pát", "sob"], wide: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "dop.", pm: "odp.", midnight: "půlnoc", noon: "poledne", morning: "ráno", afternoon: "odpoledne", evening: "večer", night: "noc"}, abbreviated: {am: "dop.", pm: "odp.", midnight: "půlnoc", noon: "poledne", morning: "ráno", afternoon: "odpoledne", evening: "večer", night: "noc"}, wide: {am: "dopoledne", pm: "odpoledne", midnight: "půlnoc", noon: "poledne", morning: "ráno", afternoon: "odpoledne", evening: "večer", night: "noc"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "dop.", pm: "odp.", midnight: "půlnoc", noon: "poledne", morning: "ráno", afternoon: "odpoledne", evening: "večer", night: "noc"}, abbreviated: {am: "dop.", pm: "odp.", midnight: "půlnoc", noon: "poledne", morning: "ráno", afternoon: "odpoledne", evening: "večer", night: "noc"}, wide: {am: "dopoledne", pm: "odpoledne", midnight: "půlnoc", noon: "poledne", morning: "ráno", afternoon: "odpoledne", evening: "večer", night: "noc"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)\.?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(p[řr]ed Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i, abbreviated: /^(pe[řr]ed Kr\.|pe[řr]ed n\. l\.|po Kr\.|n\. l\.)/i, wide: /^(p[řr]ed Kristem|pred na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^p[řr]/i, /^(po|n)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i, wide: /^[1234]\. [čc]tvrtlet[íi]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({
                matchPatterns    : {narrow: /^[lúubdkčcszřrlp]/i, abbreviated: /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i, wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},
                defaultMatchWidth: "wide",
                parsePatterns    : {narrow: [/^l/i, /^[úu]/i, /^b/i, /^d/i, /^k/i, /^[čc]/i, /^[čc]/i, /^s/i, /^z/i, /^[řr]/i, /^l/i, /^p/i], any: [/^led/i, /^[úu]n/i, /^b[řr]e/i, /^dub/i, /^kv[ěe]/i, /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i, /^[čc]vc|[čc]erven(ec|ce)/i, /^srp/i, /^z[áa][řr]/i, /^[řr][íi]j/i, /^lis/i, /^pro/i]},
                defaultParseWidth: "any"
            }),
            day          : (0, n.default)({matchPatterns: {narrow: /^[npuúsčps]/i, short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i, abbreviated: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i, wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i], any: [/^ne/i, /^po/i, /^ut/i, /^st/i, /^[čc]t/i, /^p/i, /^so/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {any: /^dopoledne|dop\.?|odpoledne|odp\.?|půlnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^dop/i, pm: /^odp/i, midnight: /^p[ůu]lnoc/i, noon: /^poledne/i, morning: /r[áa]no/i, afternoon: /odpoledne/i, evening: /ve[čc]er/i, night: /noc/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : 2 === t && n[e].two ? n[e].two : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "mewn " + t : t + " yn ôl" : t
        };
        var n = {
            lessThanXSeconds: {one: "llai na eiliad", other: "llai na {{count}} eiliad"},
            xSeconds        : {one: "1 eiliad", other: "{{count}} eiliad"},
            halfAMinute     : "hanner munud",
            lessThanXMinutes: {one: "llai na munud", two: "llai na 2 funud", other: "llai na {{count}} munud"},
            xMinutes        : {one: "1 munud", two: "2 funud", other: "{{count}} munud"},
            aboutXHours     : {one: "tua 1 awr", other: "tua {{count}} awr"},
            xHours          : {one: "1 awr", other: "{{count}} awr"},
            xDays           : {one: "1 diwrnod", two: "2 ddiwrnod", other: "{{count}} diwrnod"},
            aboutXWeeks     : {one: "tua 1 wythnos", two: "tua pythefnos", other: "tua {{count}} wythnos"},
            xWeeks          : {one: "1 wythnos", two: "pythefnos", other: "{{count}} wythnos"},
            aboutXMonths    : {one: "tua 1 mis", two: "tua 2 fis", other: "tua {{count}} mis"},
            xMonths         : {one: "1 mis", two: "2 fis", other: "{{count}} mis"},
            aboutXYears     : {one: "tua 1 flwyddyn", two: "tua 2 flynedd", other: "tua {{count}} mlynedd"},
            xYears          : {one: "1 flwyddyn", two: "2 flynedd", other: "{{count}} mlynedd"},
            overXYears      : {one: "dros 1 flwyddyn", two: "dros 2 flynedd", other: "dros {{count}} mlynedd"},
            almostXYears    : {one: "bron 1 flwyddyn", two: "bron 2 flynedd", other: "bron {{count}} mlynedd"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'am' {{time}}", long: "{{date}} 'am' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'diwethaf am' p", yesterday: "'ddoe am' p", today: "'heddiw am' p", tomorrow: "'yfory am' p", nextWeek: "eeee 'am' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e);
                if (a < 20) switch (a) {
                    case 0:
                        return a + "fed";
                    case 1:
                        return a + "af";
                    case 2:
                        return a + "ail";
                    case 3:
                    case 4:
                        return a + "ydd";
                    case 5:
                    case 6:
                        return a + "ed";
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 12:
                    case 15:
                    case 18:
                        return a + "fed";
                    case 11:
                    case 13:
                    case 14:
                    case 16:
                    case 17:
                    case 19:
                        return a + "eg"
                } else if (50 <= a && a <= 60 || 80 === a || 100 <= a) return a + "fed";
                return a + "ain"
            },
            era          : (0, a.default)({values: {narrow: ["C", "O"], abbreviated: ["CC", "OC"], wide: ["Cyn Crist", "Ar ôl Crist"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Ch1", "Ch2", "Ch3", "Ch4"], wide: ["Chwarter 1af", "2ail chwarter", "3ydd chwarter", "4ydd chwarter"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["I", "Ch", "Ma", "E", "Mi", "Me", "G", "A", "Md", "H", "T", "Rh"], abbreviated: ["Ion", "Chwe", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rhag"], wide: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["S", "Ll", "M", "M", "I", "G", "S"], short: ["Su", "Ll", "Ma", "Me", "Ia", "Gw", "Sa"], abbreviated: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"], wide: ["dydd Sul", "dydd Llun", "dydd Mawrth", "dydd Mercher", "dydd Iau", "dydd Gwener", "dydd Sadwrn"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "b", pm: "h", midnight: "hn", noon: "hd", morning: "bore", afternoon: "prynhawn", evening: "gyda'r nos", night: "nos"}, abbreviated: {am: "yb", pm: "yh", midnight: "hanner nos", noon: "hanner dydd", morning: "bore", afternoon: "prynhawn", evening: "gyda'r nos", night: "nos"}, wide: {am: "y.b.", pm: "y.h.", midnight: "hanner nos", noon: "hanner dydd", morning: "bore", afternoon: "prynhawn", evening: "gyda'r nos", night: "nos"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "b", pm: "h", midnight: "hn", noon: "hd", morning: "yn y bore", afternoon: "yn y prynhawn", evening: "gyda'r nos", night: "yn y nos"}, abbreviated: {am: "yb", pm: "yh", midnight: "hanner nos", noon: "hanner dydd", morning: "yn y bore", afternoon: "yn y prynhawn", evening: "gyda'r nos", night: "yn y nos"}, wide: {am: "y.b.", pm: "y.h.", midnight: "hanner nos", noon: "hanner dydd", morning: "yn y bore", afternoon: "yn y prynhawn", evening: "gyda'r nos", night: "yn y nos"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(c|o)/i, abbreviated: /^(c\.?\s?c\.?|o\.?\s?c\.?)/i, wide: /^(cyn christ|ar ôl crist|ar ol crist)/i}, defaultMatchWidth: "wide", parsePatterns: {wide: [/^c/i, /^(ar ôl crist|ar ol crist)/i], any: [/^c/i, /^o/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^ch[1234]/i, wide: /^(chwarter 1af)|([234](ail|ydd)? chwarter)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^(i|ch|m|e|g|a|h|t|rh)/i, abbreviated: /^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i, wide: /^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^i/i, /^ch/i, /^m/i, /^e/i, /^m/i, /^m/i, /^g/i, /^a/i, /^m/i, /^h/i, /^t/i, /^rh/i], any: [/^io/i, /^ch/i, /^maw/i, /^e/i, /^mai/i, /^meh/i, /^g/i, /^a/i, /^med/i, /^h/i, /^t/i, /^rh/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^(s|ll|m|i|g)/i, short: /^(su|ll|ma|me|ia|gw|sa)/i, abbreviated: /^(sul|llun|maw|mer|iau|gwe|sad)/i, wide: /^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^ll/i, /^m/i, /^m/i, /^i/i, /^g/i, /^s/i], wide: [/^dydd su/i, /^dydd ll/i, /^dydd ma/i, /^dydd me/i, /^dydd i/i, /^dydd g/i, /^dydd sa/i], any: [/^su/i, /^ll/i, /^ma/i, /^me/i, /^i/i, /^g/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i, any: /^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^b|(y\.?\s?b\.?)/i, pm: /^h|(y\.?\s?h\.?)|(yr hwyr)/i, midnight: /^hn|hanner nos/i, noon: /^hd|hanner dydd/i, morning: /bore/i, afternoon: /prynhawn/i, evening: /^gyda'r nos$/i, night: /blah/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "om " + t : t + " siden" : t
        };
        var n = {
            lessThanXSeconds: {one: "mindre end ét sekund", other: "mindre end {{count}} sekunder"},
            xSeconds        : {one: "1 sekund", other: "{{count}} sekunder"},
            halfAMinute     : "ét halvt minut",
            lessThanXMinutes: {one: "mindre end ét minut", other: "mindre end {{count}} minutter"},
            xMinutes        : {one: "1 minut", other: "{{count}} minutter"},
            aboutXHours     : {one: "cirka 1 time", other: "cirka {{count}} timer"},
            xHours          : {one: "1 time", other: "{{count}} timer"},
            xDays           : {one: "1 dag", other: "{{count}} dage"},
            aboutXWeeks     : {one: "cirka 1 uge", other: "cirka {{count}} uger"},
            xWeeks          : {one: "1 uge", other: "{{count}} uger"},
            aboutXMonths    : {one: "cirka 1 måned", other: "cirka {{count}} måneder"},
            xMonths         : {one: "1 måned", other: "{{count}} måneder"},
            aboutXYears     : {one: "cirka 1 år", other: "cirka {{count}} år"},
            xYears          : {one: "1 år", other: "{{count}} år"},
            overXYears      : {one: "over 1 år", other: "over {{count}} år"},
            almostXYears    : {one: "næsten 1 år", other: "næsten {{count}} år"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE 'den' d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd/MM/y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'kl'. {{time}}", long: "{{date}} 'kl'. {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'sidste' eeee 'kl.' p", yesterday: "'i går kl.' p", today: "'i dag kl.' p", tomorrow: "'i morgen kl.' p", nextWeek: "'på' eeee 'kl.' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {narrow: ["fvt", "vt"], abbreviated: ["f.v.t.", "v.t."], wide: ["før vesterlandsk tidsregning", "vesterlandsk tidsregning"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["sø", "ma", "ti", "on", "to", "fr", "lø"], abbreviated: ["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."], wide: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "midnat", noon: "middag", morning: "morgen", afternoon: "eftermiddag", evening: "aften", night: "nat"}, abbreviated: {am: "AM", pm: "PM", midnight: "midnat", noon: "middag", morning: "morgen", afternoon: "eftermiddag", evening: "aften", night: "nat"}, wide: {am: "a.m.", pm: "p.m.", midnight: "midnat", noon: "middag", morning: "morgen", afternoon: "eftermiddag", evening: "aften", night: "nat"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "midnat", noon: "middag", morning: "om morgenen", afternoon: "om eftermiddagen", evening: "om aftenen", night: "om natten"}, abbreviated: {am: "AM", pm: "PM", midnight: "midnat", noon: "middag", morning: "om morgenen", afternoon: "om eftermiddagen", evening: "om aftenen", night: "om natten"}, wide: {am: "a.m.", pm: "p.m.", midnight: "midnat", noon: "middag", morning: "om morgenen", afternoon: "om eftermiddagen", evening: "om aftenen", night: "om natten"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)(\.)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(fKr|fvt|eKr|vt)/i, abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i, wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^f/i, /^(v|e)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]. kvt\./i, wide: /^[1234]\.? kvartal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[smtofl]/i, short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i, abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i, wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i], any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {narrow: /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i, any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /midnat/i, noon: /middag/i, morning: /morgen/i, afternoon: /eftermiddag/i, evening: /aften/i, night: /nat/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = (i = a(1)) && i.__esModule ? i : {default: i}, a = {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], wide: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]}, i = {narrow: a.narrow, abbreviated: ["Jän.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], wide: a.wide}, n = {
            ordinalNumber: function (e, t) {
                return Number(e) + "."
            },
            era          : (0, n.default)({values: {narrow: ["v.Chr.", "n.Chr."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["vor Christus", "nach Christus"]}, defaultWidth: "wide"}),
            quarter      : (0, n.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return e - 1
                }
            }),
            month        : (0, n.default)({values: a, formattingValues: i, defaultWidth: "wide"}),
            day          : (0, n.default)({values: {narrow: ["S", "M", "D", "M", "D", "F", "S"], short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, n.default)({
                values                : {narrow: {am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachm.", evening: "Abend", night: "Nacht"}, abbreviated: {am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht"}, wide: {am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachm.", evening: "abends", night: "nachts"}, abbreviated: {am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts"}, wide: {am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = (i = a(1)) && i.__esModule ? i : {default: i}, a = {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], wide: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]}, i = {narrow: a.narrow, abbreviated: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."], wide: a.wide}, n = {
            ordinalNumber: function (e) {
                return Number(e) + "."
            },
            era          : (0, n.default)({values: {narrow: ["v.Chr.", "n.Chr."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["vor Christus", "nach Christus"]}, defaultWidth: "wide"}),
            quarter      : (0, n.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return e - 1
                }
            }),
            month        : (0, n.default)({values: a, formattingValues: i, defaultWidth: "wide"}),
            day          : (0, n.default)({values: {narrow: ["S", "M", "D", "M", "D", "F", "S"], short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, n.default)({
                values                : {narrow: {am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachm.", evening: "Abend", night: "Nacht"}, abbreviated: {am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht"}, wide: {am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "Morgen", afternoon: "Nachmittag", evening: "Abend", night: "Nacht"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "vm.", pm: "nm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachm.", evening: "abends", night: "nachts"}, abbreviated: {am: "vorm.", pm: "nachm.", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts"}, wide: {am: "vormittags", pm: "nachmittags", midnight: "Mitternacht", noon: "Mittag", morning: "morgens", afternoon: "nachmittags", evening: "abends", night: "nachts"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "σε " + t : t + " πριν" : t
        };
        var n = {
            lessThanXSeconds: {one: "λιγότερο από ένα δευτερόλεπτο", other: "λιγότερο από {{count}} δευτερόλεπτα"},
            xSeconds        : {one: "1 δευτερόλεπτο", other: "{{count}} δευτερόλεπτα"},
            halfAMinute     : "μισό λεπτό",
            lessThanXMinutes: {one: "λιγότερο από ένα λεπτό", other: "λιγότερο από {{count}} λεπτά"},
            xMinutes        : {one: "1 λεπτό", other: "{{count}} λεπτά"},
            aboutXHours     : {one: "περίπου 1 ώρα", other: "περίπου {{count}} ώρες"},
            xHours          : {one: "1 ώρα", other: "{{count}} ώρες"},
            xDays           : {one: "1 ημέρα", other: "{{count}} ημέρες"},
            aboutXWeeks     : {one: "περίπου 1 εβδομάδα", other: "περίπου {{count}} εβδομάδες"},
            xWeeks          : {one: "1 εβδομάδα", other: "{{count}} εβδομάδες"},
            aboutXMonths    : {one: "περίπου 1 μήνας", other: "περίπου {{count}} μήνες"},
            xMonths         : {one: "1 μήνας", other: "{{count}} μήνες"},
            aboutXYears     : {one: "περίπου 1 χρόνο", other: "περίπου {{count}} χρόνια"},
            xYears          : {one: "1 χρόνο", other: "{{count}} χρόνια"},
            overXYears      : {one: "πάνω από 1 χρόνο", other: "πάνω από {{count}} χρόνια"},
            almostXYears    : {one: "περίπου 1 χρόνο", other: "περίπου {{count}} χρόνια"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "d/M/yy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} - {{time}}", long: "{{date}} - {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = i[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = {
            lastWeek    : function (e) {
                return 6 !== e.getUTCDay() ? "'την προηγούμενη' eeee 'στις' p" : "'το προηγούμενο' eeee 'στις' p"
            }, yesterday: "'χθες στις' p", today: "'σήμερα στις' p", tomorrow: "'αύριο στις' p", nextWeek: "eeee 'στις' p", other: "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                t = String((t || {}).unit);
                return e + ("year" === t || "month" === t ? "ος" : "week" === t || "dayOfYear" === t || "day" === t || "hour" === t || "date" === t ? "η" : "ο")
            },
            era          : (0, a.default)({values: {narrow: ["πΧ", "μΧ"], abbreviated: ["π.Χ.", "μ.Χ."], wide: ["προ Χριστού", "μετά Χριστόν"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Τ1", "Τ2", "Τ3", "Τ4"], wide: ["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"], abbreviated: ["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"], wide: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"], abbreviated: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐ", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"], wide: ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["Κ", "Δ", "T", "Τ", "Π", "Π", "Σ"], short: ["Κυ", "Δε", "Τρ", "Τε", "Πέ", "Πα", "Σά"], abbreviated: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"], wide: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "πμ", pm: "μμ", midnight: "μεσάνυχτα", noon: "μεσημέρι", morning: "πρωί", afternoon: "απόγευμα", evening: "βράδυ", night: "νύχτα"}, abbreviated: {am: "π.μ.", pm: "μ.μ.", midnight: "μεσάνυχτα", noon: "μεσημέρι", morning: "πρωί", afternoon: "απόγευμα", evening: "βράδυ", night: "νύχτα"}, wide: {am: "π.μ.", pm: "μ.μ.", midnight: "μεσάνυχτα", noon: "μεσημέρι", morning: "πρωί", afternoon: "απόγευμα", evening: "βράδυ", night: "νύχτα"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(ος|η|ο)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(πΧ|μΧ)/i, abbreviated: /^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i, wide: /^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^π/i, /^(μ|κ)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^τ[1234]/i, wide: /^[1234]ο? τρ(ί|ι)μηνο/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[ιφμαμιιασονδ]/i, abbreviated: /^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i, wide: /^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ι/i, /^φ/i, /^μ/i, /^α/i, /^μ/i, /^ι/i, /^ι/i, /^α/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i], any: [/^ια/i, /^φ/i, /^μ[άα]ρ/i, /^απ/i, /^μ[άα][ιΐ]/i, /^ιο[ύυ]ν/i, /^ιο[ύυ]λ/i, /^α[ύυ]/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[κδτπσ]/i, short: /^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i, abbreviated: /^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i, wide: /^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^κ/i, /^δ/i, /^τ/i, /^τ/i, /^π/i, /^π/i, /^σ/i], any: [/^κ/i, /^δ/i, /^τρ/i, /^τε/i, /^π[εέ]/i, /^π[αά]/i, /^σ/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i, any: /^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^πμ|π\.\s?μ\./i, pm: /^μμ|μ\.\s?μ\./i, midnight: /^μεσάν/i, noon: /^μεσημ(έ|ε)/i, morning: /πρω(ί|ι)/i, afternoon: /απ(ό|ο)γευμα/i, evening: /βρ(ά|α)δυ/i, night: /ν(ύ|υ)χτα/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = {
            lessThanXSeconds: {one: "less than a second", other: "less than {{count}} seconds"},
            xSeconds        : {one: "a second", other: "{{count}} seconds"},
            halfAMinute     : "half a minute",
            lessThanXMinutes: {one: "less than a minute", other: "less than {{count}} minutes"},
            xMinutes        : {one: "a minute", other: "{{count}} minutes"},
            aboutXHours     : {one: "about an hour", other: "about {{count}} hours"},
            xHours          : {one: "an hour", other: "{{count}} hours"},
            xDays           : {one: "a day", other: "{{count}} days"},
            aboutXWeeks     : {one: "about a week", other: "about {{count}} weeks"},
            xWeeks          : {one: "a week", other: "{{count}} weeks"},
            aboutXMonths    : {one: "about a month", other: "about {{count}} months"},
            xMonths         : {one: "a month", other: "{{count}} months"},
            aboutXYears     : {one: "about a year", other: "about {{count}} years"},
            xYears          : {one: "a year", other: "{{count}} years"},
            overXYears      : {one: "over a year", other: "over {{count}} years"},
            almostXYears    : {one: "almost a year", other: "almost {{count}} years"}
        };
        t.default = function (e, t, a) {
            e = n[e], t = "string" == typeof e ? e : 1 === t ? e.one : e.other.replace("{{count}}", t.toString());
            return null != a && a.addSuffix ? a.comparison && 0 < a.comparison ? "in " + t : t + " ago" : t
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM do, yyyy", long: "MMMM do, yyyy", medium: "MMM d, yyyy", short: "yyyy-MM-dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM, yyyy", medium: "d MMM, yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "post " + t : "antaŭ " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "malpli ol sekundo", other: "malpli ol {{count}} sekundoj"},
            xSeconds        : {one: "1 sekundo", other: "{{count}} sekundoj"},
            halfAMinute     : "duonminuto",
            lessThanXMinutes: {one: "malpli ol minuto", other: "malpli ol {{count}} minutoj"},
            xMinutes        : {one: "1 minuto", other: "{{count}} minutoj"},
            aboutXHours     : {one: "proksimume 1 horo", other: "proksimume {{count}} horoj"},
            xHours          : {one: "1 horo", other: "{{count}} horoj"},
            xDays           : {one: "1 tago", other: "{{count}} tagoj"},
            aboutXMonths    : {one: "proksimume 1 monato", other: "proksimume {{count}} monatoj"},
            xWeeks          : {one: "1 semajno", other: "{{count}} semajnoj"},
            aboutXWeeks     : {one: "proksimume 1 semajno", other: "proksimume {{count}} semajnoj"},
            xMonths         : {one: "1 monato", other: "{{count}} monatoj"},
            aboutXYears     : {one: "proksimume 1 jaro", other: "proksimume {{count}} jaroj"},
            xYears          : {one: "1 jaro", other: "{{count}} jaroj"},
            overXYears      : {one: "pli ol 1 jaro", other: "pli ol {{count}} jaroj"},
            almostXYears    : {one: "preskaŭ 1 jaro", other: "preskaŭ {{count}} jaroj"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do 'de' MMMM y", long: "y-MMMM-dd", medium: "y-MMM-dd", short: "yyyy-MM-dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "Ho 'horo kaj' m:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {any: "{{date}} {{time}}"}, defaultWidth: "any"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'pasinta' eeee 'je' p", yesterday: "'hieraŭ je' p", today: "'hodiaŭ je' p", tomorrow: "'morgaŭ je' p", nextWeek: "eeee 'je' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "-a"
            },
            era          : (0, a.default)({values: {narrow: ["aK", "pK"], abbreviated: ["a.K.E.", "p.K.E."], wide: ["antaŭ Komuna Erao", "Komuna Erao"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1-a kvaronjaro", "2-a kvaronjaro", "3-a kvaronjaro", "4-a kvaronjaro"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aŭg", "sep", "okt", "nov", "dec"], wide: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "aŭgusto", "septembro", "oktobro", "novembro", "decembro"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["D", "L", "M", "M", "Ĵ", "V", "S"], short: ["di", "lu", "ma", "me", "ĵa", "ve", "sa"], abbreviated: ["dim", "lun", "mar", "mer", "ĵaŭ", "ven", "sab"], wide: ["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "a", pm: "p", midnight: "noktomezo", noon: "tagmezo", morning: "matene", afternoon: "posttagmeze", evening: "vespere", night: "nokte"}, abbreviated: {am: "a.t.m.", pm: "p.t.m.", midnight: "noktomezo", noon: "tagmezo", morning: "matene", afternoon: "posttagmeze", evening: "vespere", night: "nokte"}, wide: {am: "antaŭtagmeze", pm: "posttagmeze", midnight: "noktomezo", noon: "tagmezo", morning: "matene", afternoon: "posttagmeze", evening: "vespere", night: "nokte"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(-?a)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^([ap]k)/i, abbreviated: /^([ap]\.?\s?k\.?\s?e\.?)/i, wide: /^((antaǔ |post )?komuna erao)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^a/i, /^[kp]/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^k[1234]/i, wide: /^[1234](-?a)? kvaronjaro/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i, wide: /^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^a(u|ŭ)/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[dlmĵjvs]/i, short: /^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i, abbreviated: /^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i, wide: /^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^(j|ĵ)/i, /^v/i, /^s/i], any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i, abbreviated: /^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i, wide: /^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i}, defaultMatchWidth: "wide", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^noktom/i, noon: /^t/i, morning: /^m/i, afternoon: /^posttagmeze/i, evening: /^v/i, night: /^n/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "en " + t : "hace " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "menos de un segundo", other: "menos de {{count}} segundos"},
            xSeconds        : {one: "1 segundo", other: "{{count}} segundos"},
            halfAMinute     : "medio minuto",
            lessThanXMinutes: {one: "menos de un minuto", other: "menos de {{count}} minutos"},
            xMinutes        : {one: "1 minuto", other: "{{count}} minutos"},
            aboutXHours     : {one: "alrededor de 1 hora", other: "alrededor de {{count}} horas"},
            xHours          : {one: "1 hora", other: "{{count}} horas"},
            xDays           : {one: "1 día", other: "{{count}} días"},
            aboutXWeeks     : {one: "alrededor de 1 semana", other: "alrededor de {{count}} semanas"},
            xWeeks          : {one: "1 semana", other: "{{count}} semanas"},
            aboutXMonths    : {one: "alrededor de 1 mes", other: "alrededor de {{count}} meses"},
            xMonths         : {one: "1 mes", other: "{{count}} meses"},
            aboutXYears     : {one: "alrededor de 1 año", other: "alrededor de {{count}} años"},
            xYears          : {one: "1 año", other: "{{count}} años"},
            overXYears      : {one: "más de 1 año", other: "más de {{count}} años"},
            almostXYears    : {one: "casi 1 año", other: "casi {{count}} años"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'a las' {{time}}", long: "{{date}} 'a las' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return (1 !== t.getUTCHours() ? r : i)[e]
        };
        var i = {lastWeek: "'el' eeee 'pasado a la' LT", yesterday: "'ayer a la' p", today: "'hoy a la' p", tomorrow: "'mañana a la' p", nextWeek: "eeee 'a la' p", other: "P"}, r = {lastWeek: "'el' eeee 'pasado a las' p", yesterday: "'ayer a las' p", today: "'hoy a las' p", tomorrow: "'mañana a las' p", nextWeek: "eeee 'a las' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "º"
            },
            era          : (0, a.default)({values: {narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "después de cristo"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["do", "lu", "ma", "mi", "ju", "vi", "sa"], abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"], wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "mn", noon: "md", morning: "mañana", afternoon: "tarde", evening: "tarde", night: "noche"}, abbreviated: {am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "mañana", afternoon: "tarde", evening: "tarde", night: "noche"}, wide: {am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "mañana", afternoon: "tarde", evening: "tarde", night: "noche"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "mn", noon: "md", morning: "de la mañana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche"}, abbreviated: {am: "AM", pm: "PM", midnight: "medianoche", noon: "mediodia", morning: "de la mañana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche"}, wide: {am: "a.m.", pm: "p.m.", midnight: "medianoche", noon: "mediodia", morning: "de la mañana", afternoon: "de la tarde", evening: "de la tarde", night: "de la noche"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(º)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i, wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^ac/i, /^dc/i], wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[efmajsond]/i, abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i, wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[dlmjvs]/i, short: /^(do|lu|ma|mi|ju|vi|sa)/i, abbreviated: /^(dom|lun|mar|mie|jue|vie|sab)/i, wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i, any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /^md/i, morning: /mañana/i, afternoon: /tarde/i, evening: /tarde/i, night: /noche/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            e = (a = a || {}).addSuffix ? n[e].withPreposition : n[e].standalone, t = "string" == typeof e ? e : 1 === t ? e.one : e.other.replace("{{count}}", t);
            return a.addSuffix ? 0 < a.comparison ? t + " pärast" : t + " eest" : t
        };
        var n = {
            lessThanXSeconds: {standalone: {one: "vähem kui üks sekund", other: "vähem kui {{count}} sekundit"}, withPreposition: {one: "vähem kui ühe sekundi", other: "vähem kui {{count}} sekundi"}},
            xSeconds        : {standalone: {one: "üks sekund", other: "{{count}} sekundit"}, withPreposition: {one: "ühe sekundi", other: "{{count}} sekundi"}},
            halfAMinute     : {standalone: "pool minutit", withPreposition: "poole minuti"},
            lessThanXMinutes: {standalone: {one: "vähem kui üks minut", other: "vähem kui {{count}} minutit"}, withPreposition: {one: "vähem kui ühe minuti", other: "vähem kui {{count}} minuti"}},
            xMinutes        : {standalone: {one: "üks minut", other: "{{count}} minutit"}, withPreposition: {one: "ühe minuti", other: "{{count}} minuti"}},
            aboutXHours     : {standalone: {one: "umbes üks tund", other: "umbes {{count}} tundi"}, withPreposition: {one: "umbes ühe tunni", other: "umbes {{count}} tunni"}},
            xHours          : {standalone: {one: "üks tund", other: "{{count}} tundi"}, withPreposition: {one: "ühe tunni", other: "{{count}} tunni"}},
            xDays           : {standalone: {one: "üks päev", other: "{{count}} päeva"}, withPreposition: {one: "ühe päeva", other: "{{count}} päeva"}},
            aboutXWeeks     : {standalone: {one: "umbes üks nädal", other: "umbes {{count}} nädalat"}, withPreposition: {one: "umbes ühe nädala", other: "umbes {{count}} nädala"}},
            xWeeks          : {standalone: {one: "üks nädal", other: "{{count}} nädalat"}, withPreposition: {one: "ühe nädala", other: "{{count}} nädala"}},
            aboutXMonths    : {standalone: {one: "umbes üks kuu", other: "umbes {{count}} kuud"}, withPreposition: {one: "umbes ühe kuu", other: "umbes {{count}} kuu"}},
            xMonths         : {standalone: {one: "üks kuu", other: "{{count}} kuud"}, withPreposition: {one: "ühe kuu", other: "{{count}} kuu"}},
            aboutXYears     : {standalone: {one: "umbes üks aasta", other: "umbes {{count}} aastat"}, withPreposition: {one: "umbes ühe aasta", other: "umbes {{count}} aasta"}},
            xYears          : {standalone: {one: "üks aasta", other: "{{count}} aastat"}, withPreposition: {one: "ühe aasta", other: "{{count}} aasta"}},
            overXYears      : {standalone: {one: "rohkem kui üks aasta", other: "rohkem kui {{count}} aastat"}, withPreposition: {one: "rohkem kui ühe aasta", other: "rohkem kui {{count}} aasta"}},
            almostXYears    : {standalone: {one: "peaaegu üks aasta", other: "peaaegu {{count}} aastat"}, withPreposition: {one: "peaaegu ühe aasta", other: "peaaegu {{count}} aasta"}}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "eeee, d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'kell' {{time}}", long: "{{date}} 'kell' {{time}}", medium: "{{date}}. {{time}}", short: "{{date}}. {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'eelmine' eeee 'kell' p", yesterday: "'eile kell' p", today: "'täna kell' p", tomorrow: "'homme kell' p", nextWeek: "'järgmine' eeee 'kell' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = (i = a(1)) && i.__esModule ? i : {default: i}, a = {narrow: ["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"], wide: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"]}, i = {narrow: ["P", "E", "T", "K", "N", "R", "L"], short: ["P", "E", "T", "K", "N", "R", "L"], abbreviated: ["pühap.", "esmasp.", "teisip.", "kolmap.", "neljap.", "reede.", "laup."], wide: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"]}, n = {
            ordinalNumber: function (e) {
                return Number(e) + "."
            },
            era          : (0, n.default)({values: {narrow: ["e.m.a", "m.a.j"], abbreviated: ["e.m.a", "m.a.j"], wide: ["enne meie ajaarvamist", "meie ajaarvamise järgi"]}, defaultWidth: "wide"}),
            quarter      : (0, n.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, n.default)({values: a, formattingValues: a, defaultWidth: "wide"}),
            day          : (0, n.default)({values: i, formattingValues: i, defaultWidth: "wide"}),
            dayPeriod    : (0, n.default)({
                values          : {narrow: {am: "AM", pm: "PM", midnight: "kesköö", noon: "keskpäev", morning: "hommik", afternoon: "pärastlõuna", evening: "õhtu", night: "öö"}, abbreviated: {am: "AM", pm: "PM", midnight: "kesköö", noon: "keskpäev", morning: "hommik", afternoon: "pärastlõuna", evening: "õhtu", night: "öö"}, wide: {am: "AM", pm: "PM", midnight: "kesköö", noon: "keskpäev", morning: "hommik", afternoon: "pärastlõuna", evening: "õhtu", night: "öö"}},
                formattingValues: {narrow: {am: "AM", pm: "PM", midnight: "keskööl", noon: "keskpäeval", morning: "hommikul", afternoon: "pärastlõunal", evening: "õhtul", night: "öösel"}, abbreviated: {am: "AM", pm: "PM", midnight: "keskööl", noon: "keskpäeval", morning: "hommikul", afternoon: "pärastlõunal", evening: "õhtul", night: "öösel"}, wide: {am: "AM", pm: "PM", midnight: "keskööl", noon: "keskpäeval", morning: "hommikul", afternoon: "pärastlõunal", evening: "õhtul", night: "öösel"}},
                defaultWidth    : "wide"
            })
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^\d+\./i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i, abbreviated: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i, wide: /^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^e/i, /^(m|p)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234](\.)? kvartal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jvmasond]/i, abbreviated: /^('jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets')/i, wide: /^('jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember')/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^v/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^v/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[petknrl]/i, short: /^[petknrl]/i, abbreviated: /^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i, wide: /^('pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev')/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^p/i, /^e/i, /^t/i, /^k/i, /^n/i, /^r/i, /^l/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(am|pm|kesköö|keskpäev|hommik|pärastlõuna|õhtu|öö)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^keskö/i, noon: /^keskp/i, morning: /hommik/i, afternoon: /pärastlõuna/i, evening: /õhtu/i, night: /öö/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "en " + t : "duela " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "segundo bat baino gutxiago", other: "{{count}} segundo baino gutxiago"},
            xSeconds        : {one: "1 segundo", other: "{{count}} segundo"},
            halfAMinute     : "minutu erdi",
            lessThanXMinutes: {one: "minutu bat baino gutxiago", other: "{{count}} minutu baino gutxiago"},
            xMinutes        : {one: "1 minutu", other: "{{count}} minutu"},
            aboutXHours     : {one: "1 ordu gutxi gorabehera", other: "{{count}} ordu gutxi gorabehera"},
            xHours          : {one: "1 ordu", other: "{{count}} ordu"},
            xDays           : {one: "1 egun", other: "{{count}} egun"},
            aboutXWeeks     : {one: "aste 1 inguru", other: "{{count}} aste inguru"},
            xWeeks          : {one: "1 aste", other: "{{count}} astean"},
            aboutXMonths    : {one: "1 hilabete gutxi gorabehera", other: "{{count}} hilabete gutxi gorabehera"},
            xMonths         : {one: "1 hilabete", other: "{{count}} hilabete"},
            aboutXYears     : {one: "1 urte gutxi gorabehera", other: "{{count}} urte gutxi gorabehera"},
            xYears          : {one: "1 urte", other: "{{count}} urte"},
            overXYears      : {one: "1 urte baino gehiago", other: "{{count}} urte baino gehiago"},
            almostXYears    : {one: "ia 1 urte", other: "ia {{count}} urte"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, y'ko' MMMM'ren' d'a' y'ren'", long: "y'ko' MMMM'ren' d'a'", medium: "y MMM d", short: "yy/MM/dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'tan' {{time}}", long: "{{date}} 'tan' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return (1 !== t.getUTCHours() ? r : i)[e]
        };
        var i = {lastWeek: "'joan den' eeee, LT", yesterday: "'atzo,' p", today: "'gaur,' p", tomorrow: "'bihar,' p", nextWeek: "eeee, p", other: "P"}, r = {lastWeek: "'joan den' eeee, p", yesterday: "'atzo,' p", today: "'gaur,' p", tomorrow: "'bihar,' p", nextWeek: "eeee, p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {narrow: ["k.a.", "k.o."], abbreviated: ["k.a.", "k.o."], wide: ["kristo aurretik", "kristo ondoren"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1H", "2H", "3H", "4H"], wide: ["1. hiruhilekoa", "2. hiruhilekoa", "3. hiruhilekoa", "4. hiruhilekoa"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["u", "o", "m", "a", "m", "e", "u", "a", "i", "u", "a", "a"], abbreviated: ["urt", "ots", "mar", "api", "mai", "eka", "uzt", "abu", "ira", "urr", "aza", "abe"], wide: ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["i", "a", "a", "a", "o", "o", "l"], short: ["ig", "al", "as", "az", "og", "or", "lr"], abbreviated: ["iga", "ast", "ast", "ast", "ost", "ost", "lar"], wide: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "ge", noon: "eg", morning: "goiza", afternoon: "arratsaldea", evening: "arratsaldea", night: "gaua"}, abbreviated: {am: "AM", pm: "PM", midnight: "gauerdia", noon: "eguerdia", morning: "goiza", afternoon: "arratsaldea", evening: "arratsaldea", night: "gaua"}, wide: {am: "a.m.", pm: "p.m.", midnight: "gauerdia", noon: "eguerdia", morning: "goiza", afternoon: "arratsaldea", evening: "arratsaldea", night: "gaua"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "ge", noon: "eg", morning: "goizean", afternoon: "arratsaldean", evening: "arratsaldean", night: "gauean"}, abbreviated: {am: "AM", pm: "PM", midnight: "gauerdia", noon: "eguerdia", morning: "goizean", afternoon: "arratsaldean", evening: "arratsaldean", night: "gauean"}, wide: {am: "a.m.", pm: "p.m.", midnight: "gauerdia", noon: "eguerdia", morning: "goizean", afternoon: "arratsaldean", evening: "arratsaldean", night: "gauean"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(.)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(k.a.|k.o.)/i, abbreviated: /^(k.a.|k.o.)/i, wide: /^(kristo aurretik|kristo ondoren)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^k.a./i, /^k.o./i], abbreviated: [/^(k.a.)/i, /^(k.o.)/i], wide: [/^(kristo aurretik)/i, /^(kristo ondoren)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]H/i, wide: /^[1234](.)? hiruhilekoa/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[uomaei]/i, abbreviated: /^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i, wide: /^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^u/i, /^o/i, /^m/i, /^a/i, /^m/i, /^e/i, /^u/i, /^a/i, /^i/i, /^u/i, /^a/i, /^a/i], any: [/^urt/i, /^ots/i, /^mar/i, /^api/i, /^mai/i, /^eka/i, /^uzt/i, /^abu/i, /^ira/i, /^urr/i, /^aza/i, /^abe/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[iaol]/i, short: /^(ig|al|as|az|og|or|lr)/i, abbreviated: /^(iga|ast|ast|ast|ost|ost|lar)/i, wide: /^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^i/i, /^a/i, /^a/i, /^a/i, /^o/i, /^o/i, /^l/i], short: [/^ig/i, /^al/i, /^as/i, /^az/i, /^og/i, /^or/i, /^lr/i], abbreviated: [/^iga/i, /^ast/i, /^ast/i, /^ast/i, /^ost/i, /^ost/i, /^lar/i], wide: [/^igandea/i, /^astelehena/i, /^asteartea/i, /^asteazkena/i, /^osteguna/i, /^ostirala/i, /^larunbata/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i, any: /^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i}, defaultMatchWidth: "any", parsePatterns: {narrow: {am: /^a/i, pm: /^p/i, midnight: /^ge/i, noon: /^eg/i, morning: /goiz/i, afternoon: /arratsaldea/i, evening: /arratsaldea/i, night: /gau/i}, any: {am: /^a/i, pm: /^p/i, midnight: /^gauerdia/i, noon: /^eguerdia/i, morning: /goiz/i, afternoon: /arratsaldea/i, evening: /arratsaldea/i, night: /gau/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "در " + t : t + " قبل" : t
        };
        var n = {
            lessThanXSeconds: {one: "کمتر از یک ثانیه", other: "کمتر از {{count}} ثانیه"},
            xSeconds        : {one: "1 ثانیه", other: "{{count}} ثانیه"},
            halfAMinute     : "نیم دقیقه",
            lessThanXMinutes: {one: "کمتر از یک دقیقه", other: "کمتر از {{count}} دقیقه"},
            xMinutes        : {one: "1 دقیقه", other: "{{count}} دقیقه"},
            aboutXHours     : {one: "حدود 1 ساعت", other: "حدود {{count}} ساعت"},
            xHours          : {one: "1 ساعت", other: "{{count}} ساعت"},
            xDays           : {one: "1 روز", other: "{{count}} روز"},
            aboutXWeeks     : {one: "حدود 1 هفته", other: "حدود {{count}} هفته"},
            xWeeks          : {one: "1 هفته", other: "{{count}} هفته"},
            aboutXMonths    : {one: "حدود 1 ماه", other: "حدود {{count}} ماه"},
            xMonths         : {one: "1 ماه", other: "{{count}} ماه"},
            aboutXYears     : {one: "حدود 1 سال", other: "حدود {{count}} سال"},
            xYears          : {one: "1 سال", other: "{{count}} سال"},
            overXYears      : {one: "بیشتر از 1 سال", other: "بیشتر از {{count}} سال"},
            almostXYears    : {one: "نزدیک 1 سال", other: "نزدیک {{count}} سال"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "yyyy/MM/dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'در' {{time}}", long: "{{date}} 'در' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'گذشته در' p", yesterday: "'دیروز در' p", today: "'امروز در' p", tomorrow: "'فردا در' p", nextWeek: "eeee 'در' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return String(e)
            },
            era          : (0, a.default)({values: {narrow: ["ق", "ب"], abbreviated: ["ق.م.", "ب.م."], wide: ["قبل از میلاد", "بعد از میلاد"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["س‌م1", "س‌م2", "س‌م3", "س‌م4"], wide: ["سه‌ماهه 1", "سه‌ماهه 2", "سه‌ماهه 3", "سه‌ماهه 4"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["ژ", "ف", "م", "آ", "م", "ج", "ج", "آ", "س", "ا", "ن", "د"], abbreviated: ["ژانـ", "فور", "مارس", "آپر", "می", "جون", "جولـ", "آگو", "سپتـ", "اکتـ", "نوامـ", "دسامـ"], wide: ["ژانویه", "فوریه", "مارس", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ی", "د", "س", "چ", "پ", "ج", "ش"], short: ["1ش", "2ش", "3ش", "4ش", "5ش", "ج", "ش"], abbreviated: ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], wide: ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ق", pm: "ب", midnight: "ن", noon: "ظ", morning: "ص", afternoon: "ب.ظ.", evening: "ع", night: "ش"}, abbreviated: {am: "ق.ظ.", pm: "ب.ظ.", midnight: "نیمه‌شب", noon: "ظهر", morning: "صبح", afternoon: "بعدازظهر", evening: "عصر", night: "شب"}, wide: {am: "قبل‌ازظهر", pm: "بعدازظهر", midnight: "نیمه‌شب", noon: "ظهر", morning: "صبح", afternoon: "بعدازظهر", evening: "عصر", night: "شب"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "ق", pm: "ب", midnight: "ن", noon: "ظ", morning: "ص", afternoon: "ب.ظ.", evening: "ع", night: "ش"}, abbreviated: {am: "ق.ظ.", pm: "ب.ظ.", midnight: "نیمه‌شب", noon: "ظهر", morning: "صبح", afternoon: "بعدازظهر", evening: "عصر", night: "شب"}, wide: {am: "قبل‌ازظهر", pm: "بعدازظهر", midnight: "نیمه‌شب", noon: "ظهر", morning: "صبح", afternoon: "بعدازظهر", evening: "عصر", night: "شب"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ق|ب)/i, abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?د\.?\s?م\.?|م\.?\s?|د\.?\s?م\.?)/i, wide: /^(قبل از میلاد|قبل از دوران مشترک|میلادی|دوران مشترک|بعد از میلاد)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^قبل/i, /^بعد/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^س‌م[1234]/i, wide: /^سه‌ماهه [1234]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({
                matchPatterns    : {narrow: /^[جژفمآاماسند]/i, abbreviated: /^(جنو|ژانـ|ژانویه|فوریه|فور|مارس|آوریل|آپر|مه|می|ژوئن|جون|جول|جولـ|ژوئیه|اوت|آگو|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نوامـ|دسامبر|دسامـ|دسم)/i, wide: /^(ژانویه|جنوری|فبروری|فوریه|مارچ|مارس|آپریل|اپریل|ایپریل|آوریل|مه|می|ژوئن|جون|جولای|ژوئیه|آگست|اگست|آگوست|اوت|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نومبر|دسامبر|دسمبر)/i},
                defaultMatchWidth: "wide",
                parsePatterns    : {narrow: [/^(ژ|ج)/i, /^ف/i, /^م/i, /^(آ|ا)/i, /^م/i, /^(ژ|ج)/i, /^(ج|ژ)/i, /^(آ|ا)/i, /^س/i, /^ا/i, /^ن/i, /^د/i], any: [/^ژا/i, /^ف/i, /^ما/i, /^آپ/i, /^(می|مه)/i, /^(ژوئن|جون)/i, /^(ژوئی|جول)/i, /^(اوت|آگ)/i, /^س/i, /^(اوک|اک)/i, /^ن/i, /^د/i]},
                defaultParseWidth: "any"
            }),
            day          : (0, a.default)({matchPatterns: {narrow: /^[شیدسچپج]/i, short: /^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i, abbreviated: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i, wide: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ی/i, /^دو/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i], any: [/^(ی|1ش|یکشنبه)/i, /^(د|2ش|دوشنبه)/i, /^(س|3ش|سه‌شنبه)/i, /^(چ|4ش|چهارشنبه)/i, /^(پ|5ش|پنجشنبه)/i, /^(ج|جمعه)/i, /^(ش|شنبه)/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i, abbreviated: /^(ق.ظ.|ب.ظ.|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i, wide: /^(قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^(ق|ق.ظ.|قبل‌ازظهر)/i, pm: /^(ب|ب.ظ.|بعدازظهر)/i, midnight: /^(‌نیمه‌شب|ن)/i, noon: /^(ظ|ظهر)/i, morning: /(ص|صبح)/i, afternoon: /(ب|ب.ظ.|بعدازظهر)/i, evening: /(ع|عصر)/i, night: /(ش|شب)/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";

        function n(e) {
            return e.replace(/sekuntia?/, "sekunnin")
        }

        function i(e) {
            return e.replace(/minuuttia?/, "minuutin")
        }

        function r(e) {
            return e.replace(/tuntia?/, "tunnin")
        }

        function o(e) {
            return e.replace(/(viikko|viikkoa)/, "viikon")
        }

        function u(e) {
            return e.replace(/(kuukausi|kuukautta)/, "kuukauden")
        }

        function d(e) {
            return e.replace(/(vuosi|vuotta)/, "vuoden")
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            a = a || {};
            e = s[e], t = 1 === t ? e.one : e.other.replace("{{count}}", t);
            return a.addSuffix ? 0 < a.comparison ? e.futureTense(t) + " kuluttua" : t + " sitten" : t
        };
        var s = {
            lessThanXSeconds   : {one: "alle sekunti", other: "alle {{count}} sekuntia", futureTense: n}, xSeconds: {one: "sekunti", other: "{{count}} sekuntia", futureTense: n}, halfAMinute: {
                one: "puoli minuuttia", other: "puoli minuuttia", futureTense: function (e) {
                    return "puolen minuutin"
                }
            }, lessThanXMinutes: {one: "alle minuutti", other: "alle {{count}} minuuttia", futureTense: i}, xMinutes: {one: "minuutti", other: "{{count}} minuuttia", futureTense: i}, aboutXHours: {one: "noin tunti", other: "noin {{count}} tuntia", futureTense: r}, xHours: {one: "tunti", other: "{{count}} tuntia", futureTense: r}, xDays: {
                one: "päivä", other: "{{count}} päivää", futureTense: function (e) {
                    return e.replace(/päivää?/, "päivän")
                }
            }, aboutXWeeks     : {one: "noin viikko", other: "noin {{count}} viikkoa", futureTense: o}, xWeeks: {one: "viikko", other: "{{count}} viikkoa", futureTense: o}, aboutXMonths: {one: "noin kuukausi", other: "noin {{count}} kuukautta", futureTense: u}, xMonths: {one: "kuukausi", other: "{{count}} kuukautta", futureTense: u}, aboutXYears: {one: "noin vuosi", other: "noin {{count}} vuotta", futureTense: d}, xYears: {one: "vuosi", other: "{{count}} vuotta", futureTense: d}, overXYears: {one: "yli vuosi", other: "yli {{count}} vuotta", futureTense: d}, almostXYears: {one: "lähes vuosi", other: "lähes {{count}} vuotta", futureTense: d}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "eeee d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "d.M.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH.mm.ss zzzz", long: "HH.mm.ss z", medium: "HH.mm.ss", short: "HH.mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'klo' {{time}}", long: "{{date}} 'klo' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'viime' eeee 'klo' p", yesterday: "'eilen klo' p", today: "'tänään klo' p", tomorrow: "'huomenna klo' p", nextWeek: "'ensi' eeee 'klo' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = (o = a(1)) && o.__esModule ? o : {default: o}, i = {narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"], abbreviated: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"], wide: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"]}, r = {
            narrow: i.narrow, abbreviated: i.abbreviated, wide: i.wide.map(function (e) {
                return e + "ta"
            })
        }, a = {narrow: ["S", "M", "T", "K", "T", "P", "L"], short: ["su", "ma", "ti", "ke", "to", "pe", "la"], abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"], wide: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]}, o = {
            narrow: a.narrow, short: a.short, abbreviated: a.abbreviated, wide: a.wide.map(function (e) {
                return e + "na"
            })
        }, n = {
            ordinalNumber: function (e) {
                return Number(e) + "."
            }, era       : (0, n.default)({values: {narrow: ["eaa.", "jaa."], abbreviated: ["eaa.", "jaa."], wide: ["ennen ajanlaskun alkua", "jälkeen ajanlaskun alun"]}, defaultWidth: "wide"}), quarter: (0, n.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }), month    : (0, n.default)({values: i, formattingValues: r, defaultWidth: "wide"}), day: (0, n.default)({values: a, formattingValues: o, defaultWidth: "wide"}), dayPeriod: (0, n.default)({values: {narrow: {am: "ap", pm: "ip", midnight: "keskiyö", noon: "keskipäivä", morning: "ap", afternoon: "ip", evening: "illalla", night: "yöllä"}, abbreviated: {am: "ap", pm: "ip", midnight: "keskiyö", noon: "keskipäivä", morning: "ap", afternoon: "ip", evening: "illalla", night: "yöllä"}, wide: {am: "ap", pm: "ip", midnight: "keskiyöllä", noon: "keskipäivällä", morning: "aamupäivällä", afternoon: "iltapäivällä", evening: "illalla", night: "yöllä"}}, defaultWidth: "wide"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(\.)/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(e|j)/i, abbreviated: /^(eaa.|jaa.)/i, wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^e/i, /^j/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]\.? kvartaali/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[thmkeslj]/i, abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i, wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i], any: [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[smtkpl]/i, short: /^(su|ma|ti|ke|to|pe|la)/i, abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i, wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i], any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i, any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^ap/i, pm: /^ip/i, midnight: /^keskiyö/i, noon: /^keskipäivä/i, morning: /aamupäivällä/i, afternoon: /iltapäivällä/i, evening: /illalla/i, night: /yöllä/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "yy-MM-dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'à' {{time}}", long: "{{date}} 'à' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "dans " + t : "il y a " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "moins d’une seconde", other: "moins de {{count}} secondes"},
            xSeconds        : {one: "1 seconde", other: "{{count}} secondes"},
            halfAMinute     : "30 secondes",
            lessThanXMinutes: {one: "moins d’une minute", other: "moins de {{count}} minutes"},
            xMinutes        : {one: "1 minute", other: "{{count}} minutes"},
            aboutXHours     : {one: "environ 1 heure", other: "environ {{count}} heures"},
            xHours          : {one: "1 heure", other: "{{count}} heures"},
            xDays           : {one: "1 jour", other: "{{count}} jours"},
            aboutXWeeks     : {one: "environ 1 semaine", other: "environ {{count}} semaines"},
            xWeeks          : {one: "1 semaine", other: "{{count}} semaines"},
            aboutXMonths    : {one: "environ 1 mois", other: "environ {{count}} mois"},
            xMonths         : {one: "1 mois", other: "{{count}} mois"},
            aboutXYears     : {one: "environ 1 an", other: "environ {{count}} ans"},
            xYears          : {one: "1 an", other: "{{count}} ans"},
            overXYears      : {one: "plus d’un an", other: "plus de {{count}} ans"},
            almostXYears    : {one: "presqu’un an", other: "presque {{count}} ans"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'à' {{time}}", long: "{{date}} 'à' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'la semaine dernière à' p", yesterday: "'hier à' p", today: "'aujourd’hui à' p", tomorrow: "'demain à' p'", nextWeek: "eeee 'la semaine prochaine à' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                e = Number(e), t = String((t || {}).unit);
                return 0 === e ? e : e + ("year" === t || "hour" === t || "week" === t ? 1 === e ? "ère" : "ème" : 1 === e ? "er" : "ème")
            },
            era          : (0, a.default)({values: {narrow: ["av. J.-C", "ap. J.-C"], abbreviated: ["av. J.-C", "ap. J.-C"], wide: ["avant Jésus-Christ", "après Jésus-Christ"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["T1", "T2", "T3", "T4"], abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."], wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], wide: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["D", "L", "M", "M", "J", "V", "S"], short: ["di", "lu", "ma", "me", "je", "ve", "sa"], abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "mat.", afternoon: "ap.m.", evening: "soir", night: "mat."}, abbreviated: {am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "matin", afternoon: "après-midi", evening: "soir", night: "matin"}, wide: {am: "AM", pm: "PM", midnight: "minuit", noon: "midi", morning: "du matin", afternoon: "de l’après-midi", evening: "du soir", night: "du matin"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i, abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i, wide: /^(avant Jésus-Christ|après Jésus-Christ)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^av/i, /^ap/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^t[1234]/i, wide: /^[1234](er|ème|e)? trimestre/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i, wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[lmjvsd]/i, short: /^(di|lu|ma|me|je|ve|sa)/i, abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i, wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i, any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^min/i, noon: /^mid/i, morning: /mat/i, afternoon: /ap/i, evening: /soir/i, night: /nuit/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'à' {{time}}", long: "{{date}} 'à' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : 2 === t && n[e].two ? n[e].two : 9 === t && n[e].nine ? n[e].nine : 20 === t && n[e].twenty ? n[e].twenty : 30 === t && n[e].thirty ? n[e].thirty : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "ann an " + t : "o chionn " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "nas lugha na diog", other: "nas lugha na {{count}} diogan"},
            xSeconds        : {one: "1 diog", two: "2 dhiog", twenty: "20 diog", other: "{{count}} diogan"},
            halfAMinute     : "leth mhionaid",
            lessThanXMinutes: {one: "nas lugha na mionaid", other: "nas lugha na {{count}} mionaidean"},
            xMinutes        : {one: "1 mionaid", two: "2 mhionaid", twenty: "20 mionaid", other: "{{count}} mionaidean"},
            aboutXHours     : {one: "mu uair de thìde", other: "mu {{count}} uairean de thìde"},
            xHours          : {one: "1 uair de thìde", two: "2 uair de thìde", twenty: "20 uair de thìde", other: "{{count}} uairean de thìde"},
            xDays           : {one: "1 là", other: "{{count}} là"},
            aboutXWeeks     : {one: "mu 1 seachdain", other: "mu {{count}} seachdainean"},
            xWeeks          : {one: "1 seachdain", other: "{{count}} seachdainean"},
            aboutXMonths    : {one: "mu mhìos", other: "mu {{count}} mìosan"},
            xMonths         : {one: "1 mìos", other: "{{count}} mìosan"},
            aboutXYears     : {one: "mu bhliadhna", other: "mu {{count}} bliadhnaichean"},
            xYears          : {one: "1 bhliadhna", other: "{{count}} bliadhna"},
            overXYears      : {one: "còrr is bliadhna", other: "còrr is {{count}} bliadhnaichean"},
            almostXYears    : {one: "cha mhòr bliadhna", other: "cha mhòr {{count}} bliadhnaichean"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'aig' {{time}}", long: "{{date}} 'aig' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'mu dheireadh' eeee 'aig' p", yesterday: "'an-dè aig' p", today: "'an-diugh aig' p", tomorrow: "'a-màireach aig' p", nextWeek: "eeee 'aig' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e), e = a % 100;
                if (20 < e || e < 10) switch (e % 10) {
                    case 1:
                        return a + "d";
                    case 2:
                        return a + "na"
                }
                return 12 == e ? a + "na" : a + "mh"
            },
            era          : (0, a.default)({values: {narrow: ["R", "A"], abbreviated: ["RC", "AD"], wide: ["ro Chrìosta", "anno domini"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["C1", "C2", "C3", "C4"], wide: ["a' chiad chairteal", "an dàrna cairteal", "an treas cairteal", "an ceathramh cairteal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["F", "G", "M", "G", "C", "Ò", "I", "L", "S", "D", "S", "D"], abbreviated: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"], wide: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["D", "L", "M", "C", "A", "H", "S"], short: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"], abbreviated: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], wide: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "m", pm: "f", midnight: "m.o.", noon: "m.l.", morning: "madainn", afternoon: "feasgar", evening: "feasgar", night: "oidhche"}, abbreviated: {am: "M.", pm: "F.", midnight: "meadhan oidhche", noon: "meadhan là", morning: "madainn", afternoon: "feasgar", evening: "feasgar", night: "oidhche"}, wide: {am: "m.", pm: "f.", midnight: "meadhan oidhche", noon: "meadhan là", morning: "madainn", afternoon: "feasgar", evening: "feasgar", night: "oidhche"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "m", pm: "f", midnight: "m.o.", noon: "m.l.", morning: "sa mhadainn", afternoon: "feasgar", evening: "feasgar", night: "air an oidhche"}, abbreviated: {am: "M.", pm: "F.", midnight: "meadhan oidhche", noon: "meadhan là", morning: "sa mhadainn", afternoon: "feasgar", evening: "feasgar", night: "air an oidhche"}, wide: {am: "m.", pm: "f.", midnight: "meadhan oidhche", noon: "meadhan là", morning: "sa mhadainn", afternoon: "feasgar", evening: "feasgar", night: "air an oidhche"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(d|na|tr|mh)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(r|a)/i, abbreviated: /^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i, wide: /^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^b/i, /^(a|c)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^c[1234]/i, wide: /^[1234](cd|na|tr|mh)? cairteal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[fgmcòilsd]/i, abbreviated: /^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i, wide: /^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^f/i, /^g/i, /^m/i, /^g/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^s/i, /^d/i, /^s/i, /^d/i], any: [/^fa/i, /^ge/i, /^mà/i, /^gi/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^su/i, /^d/i, /^sa/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[dlmcahs]/i, short: /^(dò|lu|mà|ci|ar|ha|sa)/i, abbreviated: /^(did|dil|dim|dic|dia|dih|dis)/i, wide: /^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i], any: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i, any: /^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^m/i, pm: /^f/i, midnight: /^meadhan oidhche/i, noon: /^meadhan là/i, morning: /sa mhadainn/i, afternoon: /feasgar/i, evening: /feasgar/i, night: /air an oidhche/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "en " + t : "hai " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "menos dun segundo", other: "menos de {{count}} segundos"},
            xSeconds        : {one: "1 segundo", other: "{{count}} segundos"},
            halfAMinute     : "medio minuto",
            lessThanXMinutes: {one: "menos dun minuto", other: "menos de {{count}} minutos"},
            xMinutes        : {one: "1 minuto", other: "{{count}} minutos"},
            aboutXHours     : {one: "arredor dunha hora", other: "arredor de {{count}} horas"},
            xHours          : {one: "1 hora", other: "{{count}} horas"},
            xDays           : {one: "1 día", other: "{{count}} días"},
            aboutXWeeks     : {one: "arredor dunha semana", other: "arredor de {{count}} semanas"},
            xWeeks          : {one: "1 semana", other: "{{count}} semanas"},
            aboutXMonths    : {one: "arredor de 1 mes", other: "arredor de {{count}} meses"},
            xMonths         : {one: "1 mes", other: "{{count}} meses"},
            aboutXYears     : {one: "arredor dun ano", other: "arredor de {{count}} anos"},
            xYears          : {one: "1 ano", other: "{{count}} anos"},
            overXYears      : {one: "máis dun ano", other: "máis de {{count}} anos"},
            almostXYears    : {one: "case un ano", other: "case {{count}} anos"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d 'de' MMMM y", long: "d 'de' MMMM y", medium: "d MMM y", short: "dd/MM/y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'ás' {{time}}", long: "{{date}} 'ás' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return (1 !== t.getUTCHours() ? r : i)[e]
        };
        var i = {lastWeek: "'o' eeee 'pasado á' LT", yesterday: "'onte á' p", today: "'hoxe á' p", tomorrow: "'mañá á' p", nextWeek: "eeee 'á' p", other: "P"}, r = {lastWeek: "'o' eeee 'pasado ás' p", yesterday: "'onte ás' p", today: "'hoxe ás' p", tomorrow: "'mañá ás' p", nextWeek: "eeee 'ás' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "º"
            },
            era          : (0, a.default)({values: {narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "despois de cristo"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["xan", "feb", "mar", "abr", "mai", "xun", "xul", "ago", "set", "out", "nov", "dec"], wide: ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["do", "lu", "ma", "me", "xo", "ve", "sa"], abbreviated: ["dom", "lun", "mar", "mer", "xov", "ven", "sab"], wide: ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "mn", noon: "md", morning: "mañá", afternoon: "tarde", evening: "tarde", night: "noite"}, abbreviated: {am: "AM", pm: "PM", midnight: "medianoite", noon: "mediodía", morning: "mañá", afternoon: "tarde", evening: "tardiña", night: "noite"}, wide: {am: "a.m.", pm: "p.m.", midnight: "medianoite", noon: "mediodía", morning: "mañá", afternoon: "tarde", evening: "tardiña", night: "noite"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "mn", noon: "md", morning: "da mañá", afternoon: "da tarde", evening: "da tardiña", night: "da noite"}, abbreviated: {am: "AM", pm: "PM", midnight: "medianoite", noon: "mediodía", morning: "da mañá", afternoon: "da tarde", evening: "da tardiña", night: "da noite"}, wide: {am: "a.m.", pm: "p.m.", midnight: "medianoite", noon: "mediodía", morning: "da mañá", afternoon: "da tarde", evening: "da tardiña", night: "da noite"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(º)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i, wide: /^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^ac/i, /^dc/i], wide: [/^(antes de cristo|antes da era com[uú]n)/i, /^(despois de cristo|era com[uú]n)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[xfmasond]/i, abbreviated: /^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i, wide: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^x/i, /^f/i, /^m/i, /^a/i, /^m/i, /^x/i, /^x/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xun/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[dlmxvs]/i, short: /^(do|lu|ma|me|xo|ve|sa)/i, abbreviated: /^(dom|lun|mar|mer|xov|ven|sab)/i, wide: /^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^x/i, /^v/i, /^s/i], any: [/^do/i, /^lu/i, /^ma/i, /^me/i, /^xo/i, /^ve/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i, any: /^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /^md/i, morning: /mañ[aá]/i, afternoon: /tarde/i, evening: /tardiña/i, night: /noite/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + "માં" : t + " પહેલાં" : t
        };
        var n = {
            lessThanXSeconds: {one: "હમણાં", other: "​આશરે {{count}} સેકંડ"},
            xSeconds        : {one: "1 સેકંડ", other: "{{count}} સેકંડ"},
            halfAMinute     : "અડધી મિનિટ",
            lessThanXMinutes: {one: "આ મિનિટ", other: "​આશરે {{count}} મિનિટ"},
            xMinutes        : {one: "1 મિનિટ", other: "{{count}} મિનિટ"},
            aboutXHours     : {one: "​આશરે 1 કલાક", other: "​આશરે {{count}} કલાક"},
            xHours          : {one: "1 કલાક", other: "{{count}} કલાક"},
            xDays           : {one: "1 દિવસ", other: "{{count}} દિવસ"},
            aboutXWeeks     : {one: "આશરે 1 અઠવાડિયું", other: "આશરે {{count}} અઠવાડિયા"},
            xWeeks          : {one: "1 અઠવાડિયું", other: "{{count}} અઠવાડિયા"},
            aboutXMonths    : {one: "આશરે 1 મહિનો", other: "આશરે {{count}} મહિના"},
            xMonths         : {one: "1 મહિનો", other: "{{count}} મહિના"},
            aboutXYears     : {one: "આશરે 1 વર્ષ", other: "આશરે {{count}} વર્ષ"},
            xYears          : {one: "1 વર્ષ", other: "{{count}} વર્ષ"},
            overXYears      : {one: "1 વર્ષથી વધુ", other: "{{count}} વર્ષથી વધુ"},
            almostXYears    : {one: "લગભગ 1 વર્ષ", other: "લગભગ {{count}} વર્ષ"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM, y", long: "d MMMM, y", medium: "d MMM, y", short: "d/M/yy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "hh:mm:ss a zzzz", long: "hh:mm:ss a z", medium: "hh:mm:ss a", short: "hh:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'પાછલા' eeee p", yesterday: "'ગઈકાલે' p", today: "'આજે' p", tomorrow: "'આવતીકાલે' p", nextWeek: "eeee p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e)
            },
            era          : (0, a.default)({values: {narrow: ["ઈસપૂ", "ઈસ"], abbreviated: ["ઈ.સ.પૂર્વે", "ઈ.સ."], wide: ["ઈસવીસન પૂર્વે", "ઈસવીસન"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1લો ત્રિમાસ", "2જો ત્રિમાસ", "3જો ત્રિમાસ", "4થો ત્રિમાસ"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["જા", "ફે", "મા", "એ", "મે", "જૂ", "જુ", "ઓ", "સ", "ઓ", "ન", "ડિ"], abbreviated: ["જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટે", "ઓક્ટો", "નવે", "ડિસે"], wide: ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઇ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"], short: ["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"], abbreviated: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"], wide: ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "AM", pm: "PM", midnight: "મ.રાત્રિ", noon: "બ.", morning: "સવારે", afternoon: "બપોરે", evening: "સાંજે", night: "રાત્રે"}, abbreviated: {am: "AM", pm: "PM", midnight: "​મધ્યરાત્રિ", noon: "બપોરે", morning: "સવારે", afternoon: "બપોરે", evening: "સાંજે", night: "રાત્રે"}, wide: {am: "AM", pm: "PM", midnight: "​મધ્યરાત્રિ", noon: "બપોરે", morning: "સવારે", afternoon: "બપોરે", evening: "સાંજે", night: "રાત્રે"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "AM", pm: "PM", midnight: "મ.રાત્રિ", noon: "બપોરે", morning: "સવારે", afternoon: "બપોરે", evening: "સાંજે", night: "રાત્રે"}, abbreviated: {am: "AM", pm: "PM", midnight: "મધ્યરાત્રિ", noon: "બપોરે", morning: "સવારે", afternoon: "બપોરે", evening: "સાંજે", night: "રાત્રે"}, wide: {am: "AM", pm: "PM", midnight: "​મધ્યરાત્રિ", noon: "બપોરે", morning: "સવારે", afternoon: "બપોરે", evening: "સાંજે", night: "રાત્રે"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ઈસપૂ|ઈસ)/i, abbreviated: /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i, wide: /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(ઈસપૂ|ઈસ)/i, /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i, /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](લો|જો|થો)? ત્રિમાસ/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[જાફેમાએમેજૂજુઓસઓનડિ]/i, abbreviated: /^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i, wide: /^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i], any: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i, short: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i, abbreviated: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i, wide: /^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i], any: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|મ\.?|સ|બ|સાં|રા)/i, any: /^(a|p|મ\.?|સ|બ|સાં|રા)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^મ\.?/i, noon: /^બ/i, morning: /સ/i, afternoon: /બ/i, evening: /સાં/i, night: /રા/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            if (a = a || {}, "xDays" === e && a.addSuffix && t <= 2) return (0 < a.comparison ? {1: "מחר", 2: "מחרתיים"} : {1: "אתמול", 2: "שלשום"})[t];
            t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : 2 === t ? n[e].two : n[e].other.replace("{{count}}", t);
            return a.addSuffix ? 0 < a.comparison ? "בעוד " + t : "לפני " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "פחות משנייה", two: "פחות משתי שניות", other: "פחות מ־{{count}} שניות"},
            xSeconds        : {one: "שנייה", two: "שתי שניות", other: "{{count}} שניות"},
            halfAMinute     : "חצי דקה",
            lessThanXMinutes: {one: "פחות מדקה", two: "פחות משתי דקות", other: "פחות מ־{{count}} דקות"},
            xMinutes        : {one: "דקה", two: "שתי דקות", other: "{{count}} דקות"},
            aboutXHours     : {one: "כשעה", two: "כשעתיים", other: "כ־{{count}} שעות"},
            xHours          : {one: "שעה", two: "שעתיים", other: "{{count}} שעות"},
            xDays           : {one: "יום", two: "יומיים", other: "{{count}} ימים"},
            aboutXWeeks     : {one: "כשבוע", two: "כשבועיים", other: "כ־{{count}} שבועות"},
            xWeeks          : {one: "שבוע", two: "שבועיים", other: "{{count}} שבועות"},
            aboutXMonths    : {one: "כחודש", two: "כחודשיים", other: "כ־{{count}} חודשים"},
            xMonths         : {one: "חודש", two: "חודשיים", other: "{{count}} חודשים"},
            aboutXYears     : {one: "כשנה", two: "כשנתיים", other: "כ־{{count}} שנים"},
            xYears          : {one: "שנה", two: "שנתיים", other: "{{count}} שנים"},
            overXYears      : {one: "יותר משנה", two: "יותר משנתיים", other: "יותר מ־{{count}} שנים"},
            almostXYears    : {one: "כמעט שנה", two: "כמעט שנתיים", other: "כמעט {{count}} שנים"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d בMMMM y", long: "d בMMMM y", medium: "d בMMM y", short: "d.M.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'בשעה' {{time}}", long: "{{date}} 'בשעה' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'שעבר בשעה' p", yesterday: "'אתמול בשעה' p", today: "'היום בשעה' p", tomorrow: "'מחר בשעה' p", nextWeek: "eeee 'בשעה' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                e = Number(e);
                if (e <= 0 || 10 < e) return e;
                t = String((t || {}).unit), e -= 1;
                return (0 <= ["year", "hour", "minute", "second"].indexOf(t) ? ["ראשונה", "שנייה", "שלישית", "רביעית", "חמישית", "שישית", "שביעית", "שמינית", "תשיעית", "עשירית"] : ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שביעי", "שמיני", "תשיעי", "עשירי"])[e]
            },
            era          : (0, a.default)({values: {narrow: ["לפנה״ס", "לספירה"], abbreviated: ["לפנה״ס", "לספירה"], wide: ["לפני הספירה", "לספירה"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["רבעון 1", "רבעון 2", "רבעון 3", "רבעון 4"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"], wide: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], short: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"], abbreviated: ["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"], wide: ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בוקר", afternoon: "אחר הצהריים", evening: "ערב", night: "לילה"}, abbreviated: {am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בוקר", afternoon: "אחר הצהריים", evening: "ערב", night: "לילה"}, wide: {am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בוקר", afternoon: "אחר הצהריים", evening: "ערב", night: "לילה"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בבוקר", afternoon: "בצהריים", evening: "בערב", night: "בלילה"}, abbreviated: {am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בבוקר", afternoon: "אחר הצהריים", evening: "בערב", night: "בלילה"}, wide: {am: "לפנה״צ", pm: "אחה״צ", midnight: "חצות", noon: "צהריים", morning: "בבוקר", afternoon: "אחר הצהריים", evening: "בערב", night: "בלילה"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var i = ["רא", "שנ", "של", "רב", "ח", "שי", "שב", "שמ", "ת", "ע"], a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i, parsePattern: /^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i, valueCallback: function (e) {
                    var t = parseInt(e, 10);
                    return isNaN(t) ? i.indexOf(e) + 1 : t
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^ל(ספירה|פנה״ס)/i, abbreviated: /^ל(ספירה|פנה״ס)/i, wide: /^ל(פני ה)?ספירה/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^לפ/i, /^לס/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^רבעון [1234]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^\d+/i, abbreviated: /^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i, wide: /^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^1$/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i], any: [/^ינ/i, /^פ/i, /^מר/i, /^אפ/i, /^מא/i, /^יונ/i, /^יול/i, /^אוג/i, /^ס/i, /^אוק/i, /^נ/i, /^ד/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[אבגדהוש]׳/i, short: /^[אבגדהוש]׳/i, abbreviated: /^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i, wide: /^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i}, defaultMatchWidth: "wide", parsePatterns: {abbreviated: [/א׳$/i, /ב׳$/i, /ג׳$/i, /ד׳$/i, /ה׳$/i, /ו׳$/i, /^ש/i], wide: [/ן$/i, /ני$/i, /לישי$/i, /עי$/i, /מישי$/i, /שישי$/i, /ת$/i], any: [/^א/i, /^ב/i, /^ג/i, /^ד/i, /^ה/i, /^ו/i, /^ש/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^לפ/i, pm: /^אחה/i, midnight: /^ח/i, noon: /^צ/i, morning: /בוקר/i, afternoon: /בצ|אחר/i, evening: /ערב/i, night: /לילה/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one : i[e].other.replace("{{count}}", n.default.numberToLocale(t)), a.addSuffix ? 0 < a.comparison ? t + "मे " : t + " पहले" : t
        };
        var n = (a = a(11)) && a.__esModule ? a : {default: a}, i = {
            lessThanXSeconds: {one: "१ सेकंड से कम", other: "{{count}} सेकंड से कम"},
            xSeconds        : {one: "१ सेकंड", other: "{{count}} सेकंड"},
            halfAMinute     : "आधा मिनट",
            lessThanXMinutes: {one: "१ मिनट से कम", other: "{{count}} मिनट से कम"},
            xMinutes        : {one: "१ मिनट", other: "{{count}} मिनट"},
            aboutXHours     : {one: "लगभग १ घंटा", other: "लगभग {{count}} घंटे"},
            xHours          : {one: "१ घंटा", other: "{{count}} घंटे"},
            xDays           : {one: "१ दिन", other: "{{count}} दिन"},
            aboutXWeeks     : {one: "लगभग १ सप्ताह", other: "लगभग {{count}} सप्ताह"},
            xWeeks          : {one: "१ सप्ताह", other: "{{count}} सप्ताह"},
            aboutXMonths    : {one: "लगभग १ महीना", other: "लगभग {{count}} महीने"},
            xMonths         : {one: "१ महीना", other: "{{count}} महीने"},
            aboutXYears     : {one: "लगभग १ वर्ष", other: "लगभग {{count}} वर्ष"},
            xYears          : {one: "१ वर्ष", other: "{{count}} वर्ष"},
            overXYears      : {one: "१ वर्ष से अधिक", other: "{{count}} वर्ष से अधिक"},
            almostXYears    : {one: "लगभग १ वर्ष", other: "लगभग {{count}} वर्ष"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'को' {{time}}", long: "{{date}} 'को' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'पिछले' eeee p", yesterday: "'कल' p", today: "'आज' p", tomorrow: "'कल' p", nextWeek: "eeee 'को' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = o(a(3)), i = o(a(2)), a = o(a(11));

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        i = {
            ordinalNumber: (0, n.default)({matchPattern: /^[०१२३४५६७८९]+/i, parsePattern: /^[०१२३४५६७८९]+/i, valueCallback: a.default.localeToNumber}),
            era          : (0, i.default)({matchPatterns: {narrow: /^(ईसा-पूर्व|ईस्वी)/i, abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i, wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^b/i, /^(a|c)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, i.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^ति[1234]/i, wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, i.default)({matchPatterns: {narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i, abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i, wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i], any: [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i]}, defaultParseWidth: "any"}),
            day          : (0, i.default)({matchPatterns: {narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i, short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i, wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i], any: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, i.default)({matchPatterns: {narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i, any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^पूर्वाह्न/i, pm: /^अपराह्न/i, midnight: /^मध्य/i, noon: /^दो/i, morning: /सु/i, afternoon: /दो/i, evening: /शा/i, night: /रा/i}}, defaultParseWidth: "any"})
        };
        t.default = i, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? a.addSuffix ? 0 < a.comparison ? n[e].one.withPrepositionIn : n[e].one.withPrepositionAgo : n[e].one.standalone : (1 < t % 10 && t % 10 < 5 && "1" !== String(t).substr(-2, 1) ? n[e].dual : n[e].other).replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "za " + t : "prije " + t : t
        };
        var n = {
            lessThanXSeconds: {one: {standalone: "manje od 1 sekunde", withPrepositionAgo: "manje od 1 sekunde", withPrepositionIn: "manje od 1 sekundu"}, dual: "manje od {{count}} sekunde", other: "manje od {{count}} sekundi"},
            xSeconds        : {one: {standalone: "1 sekunda", withPrepositionAgo: "1 sekunde", withPrepositionIn: "1 sekundu"}, dual: "{{count}} sekunde", other: "{{count}} sekundi"},
            halfAMinute     : "pola minute",
            lessThanXMinutes: {one: {standalone: "manje od 1 minute", withPrepositionAgo: "manje od 1 minute", withPrepositionIn: "manje od 1 minutu"}, dual: "manje od {{count}} minute", other: "manje od {{count}} minuta"},
            xMinutes        : {one: {standalone: "1 minuta", withPrepositionAgo: "1 minute", withPrepositionIn: "1 minutu"}, dual: "{{count}} minute", other: "{{count}} minuta"},
            aboutXHours     : {one: {standalone: "oko 1 sat", withPrepositionAgo: "oko 1 sat", withPrepositionIn: "oko 1 sat"}, dual: "oko {{count}} sata", other: "oko {{count}} sati"},
            xHours          : {one: {standalone: "1 sat", withPrepositionAgo: "1 sat", withPrepositionIn: "1 sat"}, dual: "{{count}} sata", other: "{{count}} sati"},
            xDays           : {one: {standalone: "1 dan", withPrepositionAgo: "1 dan", withPrepositionIn: "1 dan"}, dual: "{{count}} dana", other: "{{count}} dana"},
            aboutXWeeks     : {one: {standalone: "oko 1 tjedan", withPrepositionAgo: "oko 1 tjedan", withPrepositionIn: "oko 1 tjedan"}, dual: "oko {{count}} tjedna", other: "oko {{count}} tjedana"},
            xWeeks          : {one: {standalone: "1 tjedan", withPrepositionAgo: "1 tjedan", withPrepositionIn: "1 tjedan"}, dual: "{{count}} tjedna", other: "{{count}} tjedana"},
            aboutXMonths    : {one: {standalone: "oko 1 mjesec", withPrepositionAgo: "oko 1 mjesec", withPrepositionIn: "oko 1 mjesec"}, dual: "oko {{count}} mjeseca", other: "oko {{count}} mjeseci"},
            xMonths         : {one: {standalone: "1 mjesec", withPrepositionAgo: "1 mjesec", withPrepositionIn: "1 mjesec"}, dual: "{{count}} mjeseca", other: "{{count}} mjeseci"},
            aboutXYears     : {one: {standalone: "oko 1 godinu", withPrepositionAgo: "oko 1 godinu", withPrepositionIn: "oko 1 godinu"}, dual: "oko {{count}} godine", other: "oko {{count}} godina"},
            xYears          : {one: {standalone: "1 godina", withPrepositionAgo: "1 godine", withPrepositionIn: "1 godinu"}, dual: "{{count}} godine", other: "{{count}} godina"},
            overXYears      : {one: {standalone: "preko 1 godinu", withPrepositionAgo: "preko 1 godinu", withPrepositionIn: "preko 1 godinu"}, dual: "preko {{count}} godine", other: "preko {{count}} godina"},
            almostXYears    : {one: {standalone: "gotovo 1 godinu", withPrepositionAgo: "gotovo 1 godinu", withPrepositionIn: "gotovo 1 godinu"}, dual: "gotovo {{count}} godine", other: "gotovo {{count}} godina"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d. MMMM y.", long: "d. MMMM y.", medium: "d. MMM y.", short: "dd. MM. y."}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'u' {{time}}", long: "{{date}} 'u' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = i[e];
            return "function" == typeof e ? e(t) : e
        };
        var i = {
            lastWeek    : function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'prošlu nedjelju u' p";
                    case 3:
                        return "'prošlu srijedu u' p";
                    case 6:
                        return "'prošlu subotu u' p";
                    default:
                        return "'prošli' EEEE 'u' p"
                }
            }, yesterday: "'jučer u' p", today: "'danas u' p", tomorrow: "'sutra u' p", nextWeek: function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'iduću nedjelju u' p";
                    case 3:
                        return "'iduću srijedu u' p";
                    case 6:
                        return "'iduću subotu u' p";
                    default:
                        return "'prošli' EEEE 'u' p"
                }
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                e = Number(e);
                return String(e).concat(".")
            },
            era          : (0, a.default)({values: {narrow: ["pr.n.e.", "AD"], abbreviated: ["pr. Kr.", "po. Kr."], wide: ["Prije Krista", "Poslije Krista"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], wide: ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], wide: ["siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["N", "P", "U", "S", "Č", "P", "S"], short: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"], abbreviated: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"], wide: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "navečer", night: "noću"}, abbreviated: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "navečer", night: "noću"}, wide: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutro", afternoon: "poslije podne", evening: "navečer", night: "noću"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "navečer", night: "noću"}, abbreviated: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutro", afternoon: "popodne", evening: "navečer", night: "noću"}, wide: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutro", afternoon: "poslije podne", evening: "navečer", night: "noću"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)\./i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(pr\.n\.e\.|AD)/i, abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i, wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^pr/i, /^(po|nova)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?kv\.?/i, wide: /^[1234]\. kvartal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({
                matchPatterns    : {narrow: /^(10|11|12|[123456789])\./i, abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i, wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i},
                defaultMatchWidth: "wide",
                parsePatterns    : {narrow: [/(10|11|12|[123456789])/i], abbreviated: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i], wide: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i]},
                defaultParseWidth: "wide"
            }),
            day          : (0, n.default)({matchPatterns: {narrow: /^[npusčc]/i, short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i, abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i, wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^pono/i, noon: /^pod/i, morning: /jutro/i, afternoon: /(poslije\s|po)+podne/i, evening: /(navece|naveče)/i, night: /(nocu|noću)/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "nan " + t : "sa fè " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "mwens pase yon segond", other: "mwens pase {{count}} segond"},
            xSeconds        : {one: "1 segond", other: "{{count}} segond"},
            halfAMinute     : "30 segond",
            lessThanXMinutes: {one: "mwens pase yon minit", other: "mwens pase {{count}} minit"},
            xMinutes        : {one: "1 minit", other: "{{count}} minit"},
            aboutXHours     : {one: "anviwon inè", other: "anviwon {{count}} è"},
            xHours          : {one: "1 lè", other: "{{count}} lè"},
            xDays           : {one: "1 jou", other: "{{count}} jou"},
            aboutXWeeks     : {one: "anviwon 1 semèn", other: "anviwon {{count}} semèn"},
            xWeeks          : {one: "1 semèn", other: "{{count}} semèn"},
            aboutXMonths    : {one: "anviwon 1 mwa", other: "anviwon {{count}} mwa"},
            xMonths         : {one: "1 mwa", other: "{{count}} mwa"},
            aboutXYears     : {one: "anviwon 1 an", other: "anviwon {{count}} an"},
            xYears          : {one: "1 an", other: "{{count}} an"},
            overXYears      : {one: "plis pase 1 an", other: "plis pase {{count}} an"},
            almostXYears    : {one: "prèske 1 an", other: "prèske {{count}} an"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'nan lè' {{time}}", long: "{{date}} 'nan lè' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'pase nan lè' p", yesterday: "'yè nan lè' p", today: "'jodi a' p", tomorrow: "'demen nan lè' p'", nextWeek: "eeee 'pwochen nan lè' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                e = Number(e);
                return String((t || {}).unit), 0 === e ? e : e + (1 === e ? "ye" : "yèm")
            },
            era          : (0, a.default)({values: {narrow: ["av. J.-K", "ap. J.-K"], abbreviated: ["av. J.-K", "ap. J.-K"], wide: ["anvan Jezi Kris", "apre Jezi Kris"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["T1", "T2", "T3", "T4"], abbreviated: ["1ye trim.", "2yèm trim.", "3yèm trim.", "4yèm trim."], wide: ["1ye trimès", "2yèm trimès", "3yèm trimès", "4yèm trimès"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"], abbreviated: ["janv.", "fevr.", "mas", "avr.", "me", "jen", "jiyè", "out", "sept.", "okt.", "nov.", "des."], wide: ["janvye", "fevrye", "mas", "avril", "me", "jen", "jiyè", "out", "septanm", "oktòb", "novanm", "desanm"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["D", "L", "M", "M", "J", "V", "S"], short: ["di", "le", "ma", "mè", "je", "va", "sa"], abbreviated: ["dim.", "len.", "mad.", "mèk.", "jed.", "van.", "sam."], wide: ["dimanch", "lendi", "madi", "mèkredi", "jedi", "vandredi", "samdi"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "AM", pm: "PM", midnight: "minwit", noon: "midi", morning: "mat.", afternoon: "ap.m.", evening: "swa", night: "mat."}, abbreviated: {am: "AM", pm: "PM", midnight: "minwit", noon: "midi", morning: "maten", afternoon: "aprèmidi", evening: "swa", night: "maten"}, wide: {am: "AM", pm: "PM", midnight: "minwit", noon: "midi", morning: "nan maten", afternoon: "nan aprèmidi", evening: "nan aswè", night: "nan maten"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(ye|yèm)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(av\.J\.K|ap\.J\.K|ap\.J\.-K)/i, abbreviated: /^(av\.J\.-K|av\.J-K|apr\.J\.-K|apr\.J-K|ap\.J-K)/i, wide: /^(avan Jezi Kris|apre Jezi Kris)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^av/i, /^ap/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^t[1234]/i, wide: /^[1234](ye|yèm)? trimès/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(janv|fevr|mas|avr|me|jen|jiyè|out|sept|okt|nov|des)\.?/i, wide: /^(janvye|fevrye|mas|avril|me|jen|jiyè|out|septanm|oktòb|novanm|desanm)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^o/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^ma/i, /^av/i, /^me/i, /^je/i, /^ji/i, /^ou/i, /^s/i, /^ok/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[lmjvsd]/i, short: /^(di|le|ma|me|je|va|sa)/i, abbreviated: /^(dim|len|mad|mèk|jed|van|sam)\.?/i, wide: /^(dimanch|lendi|madi|mèkredi|jedi|vandredi|samdi)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^di/i, /^le/i, /^ma/i, /^mè/i, /^je/i, /^va/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|minwit|midi|mat\.?|ap\.?m\.?|swa)/i, any: /^([ap]\.?\s?m\.?|nan maten|nan aprèmidi|nan aswè)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^min/i, noon: /^mid/i, morning: /mat/i, afternoon: /ap/i, evening: /sw/i, night: /nwit/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            a = a || {};
            var n = e.match(/about|over|almost|lessthan/i), e = e.replace(n, ""), a = function (e, t, a, n) {
                n = t ? o[a][n] : r[a];
                return "halfaminute" === a ? n : e + n
            }(t, a.addSuffix, e.toLowerCase(), a.comparison);
            return a = n ? i[n[0].toLowerCase()] + " " + a : a
        };
        var i = {about: "körülbelül", over: "több mint", almost: "majdnem", lessthan: "kevesebb mint"}, r = {xseconds: " másodperc", halfaminute: "fél perc", xminutes: " perc", xhours: " óra", xdays: " nap", xweeks: " hét", xmonths: " hónap", xyears: " év"},
            o = {xseconds: {"-1": " másodperccel ezelőtt", 1: " másodperc múlva", 0: " másodperce"}, halfaminute: {"-1": "fél perccel ezelőtt", 1: "fél perc múlva", 0: "fél perce"}, xminutes: {"-1": " perccel ezelőtt", 1: " perc múlva", 0: " perce"}, xhours: {"-1": " órával ezelőtt", 1: " óra múlva", 0: " órája"}, xdays: {"-1": " nappal ezelőtt", 1: " nap múlva", 0: " napja"}, xweeks: {"-1": " héttel ezelőtt", 1: " hét múlva", 0: " hete"}, xmonths: {"-1": " hónappal ezelőtt", 1: " hónap múlva", 0: " hónapja"}, xyears: {"-1": " évvel ezelőtt", 1: " év múlva", 0: " éve"}};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "y. MMMM d., EEEE", long: "y. MMMM d.", medium: "y. MMM d.", short: "y. MM. dd."}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = o[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var r = ["vasárnap", "hétfőn", "kedden", "szerdán", "csütörtökön", "pénteken", "szombaton"];

        function i(n) {
            return function (e, t, a) {
                e = e.getUTCDay();
                return (n ? "" : "'múlt' ") + "'" + r[e] + "' p'-kor'"
            }
        }

        var o = {lastWeek: i(!1), yesterday: "'tegnap' p'-kor'", today: "'ma' p'-kor'", tomorrow: "'holnap' p'-kor'", nextWeek: i(!0), other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {narrow: ["ie.", "isz."], abbreviated: ["i. e.", "i. sz."], wide: ["Krisztus előtt", "időszámításunk szerint"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. n.év", "2. n.év", "3. n.év", "4. n.év"], wide: ["1. negyedév", "2. negyedév", "3. negyedév", "4. negyedév"]}, defaultWidth: "wide", formattingValues: {narrow: ["I.", "II.", "III.", "IV."], abbreviated: ["I. n.év", "II. n.év", "III. n.év", "IV. n.év"], wide: ["I. negyedév", "II. negyedév", "III. negyedév", "IV. negyedév"]}, argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"], abbreviated: ["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."], wide: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"], short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], wide: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "de.", pm: "du.", midnight: "éjfél", noon: "dél", morning: "reggel", afternoon: "du.", evening: "este", night: "éjjel"}, abbreviated: {am: "de.", pm: "du.", midnight: "éjfél", noon: "dél", morning: "reggel", afternoon: "du.", evening: "este", night: "éjjel"}, wide: {am: "de.", pm: "du.", midnight: "éjfél", noon: "dél", morning: "reggel", afternoon: "délután", evening: "este", night: "éjjel"}}, defaultWidth: "wide", defaultFormattingWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)\.?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ie\.|isz\.)/i, abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i, wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/ie/i, /isz/i], abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i], any: [/előtt/i, /(szerint|i. sz.)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]\.?/i, abbreviated: /^[1234]?\.?\s?n\.év/i, wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmaásond]|sz/i, abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i, wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^([vhkpc]|sz|cs|sz)/i, short: /^([vhkp]|sze|cs|szo)/i, abbreviated: /^([vhkp]|sze|cs|szo)/i, wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i], any: [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^de\.?/i, pm: /^du\.?/i, midnight: /^éjf/i, noon: /^dé/i, morning: /reg/i, afternoon: /^délu\.?/i, evening: /es/i, night: /éjj/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + " հետո" : t + " առաջ" : t
        };
        var n = {
            lessThanXSeconds: {one: "ավելի քիչ քան 1 վայրկյան", other: "ավելի քիչ քան {{count}} վայրկյան"},
            xSeconds        : {one: "1 վայրկյան", other: "{{count}} վայրկյան"},
            halfAMinute     : "կես րոպե",
            lessThanXMinutes: {one: "ավելի քիչ քան 1 րոպե", other: "ավելի քիչ քան {{count}} րոպե"},
            xMinutes        : {one: "1 րոպե", other: "{{count}} րոպե"},
            aboutXHours     : {one: "մոտ 1 ժամ", other: "մոտ {{count}} ժամ"},
            xHours          : {one: "1 ժամ", other: "{{count}} ժամ"},
            xDays           : {one: "1 օր", other: "{{count}} օր"},
            aboutXWeeks     : {one: "մոտ 1 շաբաթ", other: "մոտ {{count}} շաբաթ"},
            xWeeks          : {one: "1 շաբաթ", other: "{{count}} շաբաթ"},
            aboutXMonths    : {one: "մոտ 1 ամիս", other: "մոտ {{count}} ամիս"},
            xMonths         : {one: "1 ամիս", other: "{{count}} ամիս"},
            aboutXYears     : {one: "մոտ 1 տարի", other: "մոտ {{count}} տարի"},
            xYears          : {one: "1 տարի", other: "{{count}} տարի"},
            overXYears      : {one: "ավելի քան 1 տարի", other: "ավելի քան {{count}} տարի"},
            almostXYears    : {one: "համարյա 1 տարի", other: "համարյա {{count}} տարի"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "d MMMM, y, EEEE", long: "d MMMM, y", medium: "d MMM, y", short: "dd.MM.yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'ժ․'{{time}}", long: "{{date}} 'ժ․'{{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'նախորդ' eeee p'֊ին'", yesterday: "'երեկ' p'֊ին'", today: "'այսօր' p'֊ին'", tomorrow: "'վաղը' p'֊ին'", nextWeek: "'հաջորդ' eeee p'֊ին'", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e), e = a % 100;
                return e < 10 && e % 10 == 1 ? a + "֊ին" : a + "֊րդ"
            },
            era          : (0, a.default)({values: {narrow: ["Ք", "Մ"], abbreviated: ["ՔԱ", "ՄԹ"], wide: ["Քրիստոսից առաջ", "Մեր թվարկության"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Ք1", "Ք2", "Ք3", "Ք4"], wide: ["1֊ին քառորդ", "2֊րդ քառորդ", "3֊րդ քառորդ", "4֊րդ քառորդ"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["Հ", "Փ", "Մ", "Ա", "Մ", "Հ", "Հ", "Օ", "Ս", "Հ", "Ն", "Դ"], abbreviated: ["հուն", "փետ", "մար", "ապր", "մայ", "հուն", "հուլ", "օգս", "սեպ", "հոկ", "նոյ", "դեկ"], wide: ["հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"], short: ["կր", "եր", "եք", "չք", "հգ", "ուր", "շբ"], abbreviated: ["կիր", "երկ", "երք", "չոր", "հնգ", "ուրբ", "շաբ"], wide: ["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "կեսգշ", noon: "կեսօր", morning: "առավոտ", afternoon: "ցերեկ", evening: "երեկո", night: "գիշեր"}, abbreviated: {am: "AM", pm: "PM", midnight: "կեսգիշեր", noon: "կեսօր", morning: "առավոտ", afternoon: "ցերեկ", evening: "երեկո", night: "գիշեր"}, wide: {am: "a.m.", pm: "p.m.", midnight: "կեսգիշեր", noon: "կեսօր", morning: "առավոտ", afternoon: "ցերեկ", evening: "երեկո", night: "գիշեր"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "կեսգշ", noon: "կեսօր", morning: "առավոտը", afternoon: "ցերեկը", evening: "երեկոյան", night: "գիշերը"}, abbreviated: {am: "AM", pm: "PM", midnight: "կեսգիշերին", noon: "կեսօրին", morning: "առավոտը", afternoon: "ցերեկը", evening: "երեկոյան", night: "գիշերը"}, wide: {am: "a.m.", pm: "p.m.", midnight: "կեսգիշերին", noon: "կեսօրին", morning: "առավոտը", afternoon: "ցերեկը", evening: "երեկոյան", night: "գիշերը"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)((-|֊)?(ին|րդ))?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(Ք|Մ)/i, abbreviated: /^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i, wide: /^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(ք|մ)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^ք[1234]/i, wide: /^[1234]((-|֊)?(ին|րդ)) քառորդ/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[հփմաօսնդ]/i, abbreviated: /^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i, wide: /^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^հ/i, /^փ/i, /^մ/i, /^ա/i, /^մ/i, /^հ/i, /^հ/i, /^օ/i, /^ս/i, /^հ/i, /^ն/i, /^դ/i], any: [/^հու/i, /^փ/i, /^մար/i, /^ա/i, /^մայ/i, /^հուն/i, /^հուլ/i, /^օ/i, /^ս/i, /^հոկ/i, /^ն/i, /^դ/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[եչհոշկ]/i, short: /^(կր|եր|եք|չք|հգ|ուր|շբ)/i, abbreviated: /^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i, wide: /^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^կ/i, /^ե/i, /^ե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i], short: [/^կ/i, /^եր/i, /^եք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i], abbreviated: [/^կ/i, /^երկ/i, /^երք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i], wide: [/^կ/i, /^երկ/i, /^երե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i, any: /^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /կեսգիշեր/i, noon: /կեսօր/i, morning: /առավոտ/i, afternoon: /ցերեկ/i, evening: /երեկո/i, night: /գիշեր/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "dalam waktu " + t : t + " yang lalu" : t
        };
        var n = {
            lessThanXSeconds: {one: "kurang dari 1 detik", other: "kurang dari {{count}} detik"},
            xSeconds        : {one: "1 detik", other: "{{count}} detik"},
            halfAMinute     : "setengah menit",
            lessThanXMinutes: {one: "kurang dari 1 menit", other: "kurang dari {{count}} menit"},
            xMinutes        : {one: "1 menit", other: "{{count}} menit"},
            aboutXHours     : {one: "sekitar 1 jam", other: "sekitar {{count}} jam"},
            xHours          : {one: "1 jam", other: "{{count}} jam"},
            xDays           : {one: "1 hari", other: "{{count}} hari"},
            aboutXWeeks     : {one: "sekitar 1 minggu", other: "sekitar {{count}} minggu"},
            xWeeks          : {one: "1 minggu", other: "{{count}} minggu"},
            aboutXMonths    : {one: "sekitar 1 bulan", other: "sekitar {{count}} bulan"},
            xMonths         : {one: "1 bulan", other: "{{count}} bulan"},
            aboutXYears     : {one: "sekitar 1 tahun", other: "sekitar {{count}} tahun"},
            xYears          : {one: "1 tahun", other: "{{count}} tahun"},
            overXYears      : {one: "lebih dari 1 tahun", other: "lebih dari {{count}} tahun"},
            almostXYears    : {one: "hampir 1 tahun", other: "hampir {{count}} tahun"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "d/M/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH.mm.ss", long: "HH.mm.ss", medium: "HH.mm", short: "HH.mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'pukul' {{time}}", long: "{{date}} 'pukul' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'lalu pukul' p", yesterday: "'Kemarin pukul' p", today: "'Hari ini pukul' p", tomorrow: "'Besok pukul' p", nextWeek: "eeee 'pukul' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return "ke-" + Number(e)
            },
            era          : (0, a.default)({values: {narrow: ["SM", "M"], abbreviated: ["SM", "M"], wide: ["Sebelum Masehi", "Masehi"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"], wide: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["M", "S", "S", "R", "K", "J", "S"], short: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], abbreviated: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], wide: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam"}, abbreviated: {am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam"}, wide: {am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam"}, abbreviated: {am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam"}, wide: {am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "siang", evening: "sore", night: "malam"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^ke-(\d+)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(sm|m)/i, abbreviated: /^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i, wide: /^(sebelum masehi|sebelum era umum|masehi|era umum)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^s/i, /^(m|e)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^K-?\s[1234]/i, wide: /^Kuartal ke-?\s?[1234]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i, wide: /^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^ma/i, /^ap/i, /^me/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[srkjm]/i, short: /^(min|sen|sel|rab|kam|jum|sab)/i, abbreviated: /^(min|sen|sel|rab|kam|jum|sab)/i, wide: /^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^m/i, /^s/i, /^s/i, /^r/i, /^k/i, /^j/i, /^s/i], any: [/^m/i, /^sen/i, /^sel/i, /^r/i, /^k/i, /^j/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {narrow: /^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i, any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^pm/i, midnight: /^tengah m/i, noon: /^tengah h/i, morning: /pagi/i, afternoon: /siang/i, evening: /sore/i, night: /malam/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "í " + t : t + " síðan" : t
        };
        var n = {
            lessThanXSeconds: {one: "minna en 1 sekúnda", other: "minna en {{count}} sekúndur"},
            xSeconds        : {one: "1 sekúnda", other: "{{count}} sekúndur"},
            halfAMinute     : "hálf mínúta",
            lessThanXMinutes: {one: "minna en 1 mínúta", other: "minna en {{count}} mínútur"},
            xMinutes        : {one: "1 mínúta", other: "{{count}} mínútur"},
            aboutXHours     : {one: "u.þ.b. 1 klukkustund", other: "u.þ.b. {{count}} klukkustundir"},
            xHours          : {one: "1 klukkustund", other: "{{count}} klukkustundir"},
            xDays           : {one: "1 dagur", other: "{{count}} dagar"},
            aboutXWeeks     : {one: "um viku", other: "um {{count}} vikur"},
            xWeeks          : {one: "1 viku", other: "{{count}} vikur"},
            aboutXMonths    : {one: "u.þ.b. 1 mánuður", other: "u.þ.b. {{count}} mánuðir"},
            xMonths         : {one: "1 mánuður", other: "{{count}} mánuðir"},
            aboutXYears     : {one: "u.þ.b. 1 ár", other: "u.þ.b. {{count}} ár"},
            xYears          : {one: "1 ár", other: "{{count}} ár"},
            overXYears      : {one: "meira en 1 ár", other: "meira en {{count}} ár"},
            almostXYears    : {one: "næstum 1 ár", other: "næstum {{count}} ár"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "d.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'síðasta' dddd 'kl.' p", yesterday: "'í gær kl.' p", today: "'í dag kl.' p", tomorrow: "'á morgun kl.' p", nextWeek: "dddd 'kl.' p", other: "L"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["fyrir Krist", "eftir Krist"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1F", "2F", "3F", "4F"], wide: ["1. fjórðungur", "2. fjórðungur", "3. fjórðungur", "4. fjórðungur"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "Á", "S", "Ó", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "sept.", "okt.", "nóv.", "des."], wide: ["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["S", "M", "Þ", "M", "F", "F", "L"], short: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"], abbreviated: ["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau"], wide: ["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "f", pm: "e", midnight: "miðnætti", noon: "hádegi", morning: "morgunn", afternoon: "síðdegi", evening: "kvöld", night: "nótt"}, abbreviated: {am: "f.h.", pm: "e.h.", midnight: "miðnætti", noon: "hádegi", morning: "morgunn", afternoon: "síðdegi", evening: "kvöld", night: "nótt"}, wide: {am: "fyrir hádegi", pm: "eftir hádegi", midnight: "miðnætti", noon: "hádegi", morning: "morgunn", afternoon: "síðdegi", evening: "kvöld", night: "nótt"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "f", pm: "e", midnight: "á miðnætti", noon: "á hádegi", morning: "að morgni", afternoon: "síðdegis", evening: "um kvöld", night: "um nótt"}, abbreviated: {am: "f.h.", pm: "e.h.", midnight: "á miðnætti", noon: "á hádegi", morning: "að morgni", afternoon: "síðdegis", evening: "um kvöld", night: "um nótt"}, wide: {am: "fyrir hádegi", pm: "eftir hádegi", midnight: "á miðnætti", noon: "á hádegi", morning: "að morgni", afternoon: "síðdegis", evening: "um kvöld", night: "um nótt"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(f\.Kr\.|e\.Kr\.)/i, abbreviated: /^(f\.Kr\.|e\.Kr\.)/i, wide: /^(fyrir Krist|eftir Krist)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(f\.Kr\.|e\.Kr\.)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234] fjórðungur/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmásónd]/i, abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i, wide: /^(januar|februar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^á/i, /^s/i, /^ó/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maí/i, /^jún/i, /^júl/i, /^áu/i, /^s/i, /^ó/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[smtwf]/i, short: /^(su|má|þr|mi|fi|fö|la)/i, abbreviated: /^(sun|mán|þri|mið|fim|fös|lau)\.?/i, wide: /^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^m/i, /^þ/i, /^m/i, /^f/i, /^f/i, /^l/i], any: [/^su/i, /^má/i, /^þr/i, /^mi/i, /^fi/i, /^fö/i, /^la/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i, any: /^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^f/i, pm: /^e/i, midnight: /^mi/i, noon: /^há/i, morning: /morgunn/i, afternoon: /síðdegi/i, evening: /kvöld/i, night: /nótt/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "tra " + t : t + " fa" : t
        };
        var n = {
            lessThanXSeconds: {one: "meno di un secondo", other: "meno di {{count}} secondi"},
            xSeconds        : {one: "un secondo", other: "{{count}} secondi"},
            halfAMinute     : "alcuni secondi",
            lessThanXMinutes: {one: "meno di un minuto", other: "meno di {{count}} minuti"},
            xMinutes        : {one: "un minuto", other: "{{count}} minuti"},
            aboutXHours     : {one: "circa un'ora", other: "circa {{count}} ore"},
            xHours          : {one: "un'ora", other: "{{count}} ore"},
            xDays           : {one: "un giorno", other: "{{count}} giorni"},
            aboutXWeeks     : {one: "circa una settimana", other: "circa {{count}} settimane"},
            xWeeks          : {one: "una settimana", other: "{{count}} settimane"},
            aboutXMonths    : {one: "circa un mese", other: "circa {{count}} mesi"},
            xMonths         : {one: "un mese", other: "{{count}} mesi"},
            aboutXYears     : {one: "circa un anno", other: "circa {{count}} anni"},
            xYears          : {one: "un anno", other: "{{count}} anni"},
            overXYears      : {one: "più di un anno", other: "più di {{count}} anni"},
            almostXYears    : {one: "quasi un anno", other: "quasi {{count}} anni"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd/MM/y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = u[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = (a = a(4)) && a.__esModule ? a : {default: a}, r = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];

        function o(e) {
            return "'" + r[e] + " alle' p"
        }

        var u = {
            lastWeek    : function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : 0 !== n ? "'" + r[n] + " scorso alle' p" : "'domenica scorsa alle' p"
            }, yesterday: "'ieri alle' p", today: "'oggi alle' p", tomorrow: "'domani alle' p", nextWeek: function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : 0 !== n ? "'" + r[n] + " prossimo alle' p" : "'domenica prossima alle' p"
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "º"
            },
            era          : (0, a.default)({values: {narrow: ["aC", "dC"], abbreviated: ["a.C.", "d.C."], wide: ["avanti Cristo", "dopo Cristo"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["D", "L", "M", "M", "G", "V", "S"], short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], wide: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte"}, abbreviated: {am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte"}, wide: {am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "mattina", afternoon: "pomeriggio", evening: "sera", night: "notte"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "m.", pm: "p.", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte"}, abbreviated: {am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte"}, wide: {am: "AM", pm: "PM", midnight: "mezzanotte", noon: "mezzogiorno", morning: "di mattina", afternoon: "del pomeriggio", evening: "di sera", night: "di notte"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(º)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(aC|dC)/i, abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i, wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^a/i, /^(d|e)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^t[1234]/i, wide: /^[1234](º)? trimestre/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[gfmalsond]/i, abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i, wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[dlmgvs]/i, short: /^(do|lu|ma|me|gi|ve|sa)/i, abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i, wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i], any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i, any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mezza/i, noon: /^mezzo/i, morning: /mattina/i, afternoon: /pomeriggio/i, evening: /sera/i, night: /notte/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? a.addSuffix && n[e].oneWithSuffix ? n[e].oneWithSuffix : n[e].one : (a.addSuffix && n[e].otherWithSuffix ? n[e].otherWithSuffix : n[e].other).replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + "あと" : t + "まえ" : t
        };
        var n = {
            lessThanXSeconds: {one: "1びょうみまん", other: "{{count}}びょうみまん", oneWithSuffix: "やく1びょう", otherWithSuffix: "やく{{count}}びょう"},
            xSeconds        : {one: "1びょう", other: "{{count}}びょう"},
            halfAMinute     : "30びょう",
            lessThanXMinutes: {one: "1ぷんみまん", other: "{{count}}ふんみまん", oneWithSuffix: "やく1ぷん", otherWithSuffix: "やく{{count}}ふん"},
            xMinutes        : {one: "1ぷん", other: "{{count}}ふん"},
            aboutXHours     : {one: "やく1じかん", other: "やく{{count}}じかん"},
            xHours          : {one: "1じかん", other: "{{count}}じかん"},
            xDays           : {one: "1にち", other: "{{count}}にち"},
            aboutXWeeks     : {one: "やく1しゅうかん", other: "やく{{count}}しゅうかん"},
            xWeeks          : {one: "1しゅうかん", other: "{{count}}しゅうかん"},
            aboutXMonths    : {one: "やく1かげつ", other: "やく{{count}}かげつ"},
            xMonths         : {one: "1かげつ", other: "{{count}}かげつ"},
            aboutXYears     : {one: "やく1ねん", other: "やく{{count}}ねん"},
            xYears          : {one: "1ねん", other: "{{count}}ねん"},
            overXYears      : {one: "1ねんいじょう", other: "{{count}}ねんいじょう"},
            almostXYears    : {one: "1ねんちかく", other: "{{count}}ねんちかく"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "yねんMがつdにちEEEE", long: "yねんMがつdにち", medium: "y/MM/dd", short: "y/MM/dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "Hじmmふんssびょう zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "せんしゅうのeeeeのp", yesterday: "きのうのp", today: "きょうのp", tomorrow: "あしたのp", nextWeek: "よくしゅうのeeeeのp", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e);
                switch (String((t || {}).unit)) {
                    case"year":
                        return "".concat(a, "ねん");
                    case"quarter":
                        return "だい".concat(a, "しはんき");
                    case"month":
                        return "".concat(a, "がつ");
                    case"week":
                        return "だい".concat(a, "しゅう");
                    case"date":
                        return "".concat(a, "にち");
                    case"hour":
                        return "".concat(a, "じ");
                    case"minute":
                        return "".concat(a, "ふん");
                    case"second":
                        return "".concat(a, "びょう");
                    default:
                        return "".concat(a)
                }
            },
            era          : (0, a.default)({values: {narrow: ["BC", "AC"], abbreviated: ["きげんぜん", "せいれき"], wide: ["きげんぜん", "せいれき"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["だい1しはんき", "だい2しはんき", "だい3しはんき", "だい4しはんき"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1がつ", "2がつ", "3がつ", "4がつ", "5がつ", "6がつ", "7がつ", "8がつ", "9がつ", "10がつ", "11がつ", "12がつ"], wide: ["1がつ", "2がつ", "3がつ", "4がつ", "5がつ", "6がつ", "7がつ", "8がつ", "9がつ", "10がつ", "11がつ", "12がつ"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["にち", "げつ", "か", "すい", "もく", "きん", "ど"], short: ["にち", "げつ", "か", "すい", "もく", "きん", "ど"], abbreviated: ["にち", "げつ", "か", "すい", "もく", "きん", "ど"], wide: ["にちようび", "げつようび", "かようび", "すいようび", "もくようび", "きんようび", "どようび"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ごぜん", pm: "ごご", midnight: "しんや", noon: "しょうご", morning: "あさ", afternoon: "ごご", evening: "よる", night: "しんや"}, abbreviated: {am: "ごぜん", pm: "ごご", midnight: "しんや", noon: "しょうご", morning: "あさ", afternoon: "ごご", evening: "よる", night: "しんや"}, wide: {am: "ごぜん", pm: "ごご", midnight: "しんや", noon: "しょうご", morning: "あさ", afternoon: "ごご", evening: "よる", night: "しんや"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "ごぜん", pm: "ごご", midnight: "しんや", noon: "しょうご", morning: "あさ", afternoon: "ごご", evening: "よる", night: "しんや"}, abbreviated: {am: "ごぜん", pm: "ごご", midnight: "しんや", noon: "しょうご", morning: "あさ", afternoon: "ごご", evening: "よる", night: "しんや"}, wide: {am: "ごぜん", pm: "ごご", midnight: "しんや", noon: "しょうご", morning: "あさ", afternoon: "ごご", evening: "よる", night: "しんや"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(B\.?C\.?|A\.?D\.?)/i, abbreviated: /^(きげん[前後]|せいれき)/i, wide: /^(きげん[前後]|せいれき)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^B/i, /^A/i], any: [/^(きげんぜん)/i, /^(せいれき|きげんご)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^Q[1234]/i, wide: /^だい[1234一二三四１２３４]しはんき/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^([123456789]|1[012])/, abbreviated: /^([123456789]|1[012])がつ/i, wide: /^([123456789]|1[012])がつ/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^(にち|げつ|か|すい|もく|きん|ど)/, short: /^(にち|げつ|か|すい|もく|きん|ど)/, abbreviated: /^(にち|げつ|か|すい|もく|きん|ど)/, wide: /^(にち|げつ|か|すい|もく|きん|ど)ようび/}, defaultMatchWidth: "wide", parsePatterns: {any: [/^にち/, /^げつ/, /^か/, /^すい/, /^もく/, /^きん/, /^ど/]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^(A|ごぜん)/i, pm: /^(P|ごご)/i, midnight: /^しんや|まよなか/i, noon: /^しょうご/i, morning: /^あさ/i, afternoon: /^ごご/i, evening: /^よる/i, night: /^しんや/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? a.addSuffix && n[e].oneWithSuffix ? n[e].oneWithSuffix : n[e].one : (a.addSuffix && n[e].otherWithSuffix ? n[e].otherWithSuffix : n[e].other).replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + "後" : t + "前" : t
        };
        var n = {
            lessThanXSeconds: {one: "1秒未満", other: "{{count}}秒未満", oneWithSuffix: "約1秒", otherWithSuffix: "約{{count}}秒"},
            xSeconds        : {one: "1秒", other: "{{count}}秒"},
            halfAMinute     : "30秒",
            lessThanXMinutes: {one: "1分未満", other: "{{count}}分未満", oneWithSuffix: "約1分", otherWithSuffix: "約{{count}}分"},
            xMinutes        : {one: "1分", other: "{{count}}分"},
            aboutXHours     : {one: "約1時間", other: "約{{count}}時間"},
            xHours          : {one: "1時間", other: "{{count}}時間"},
            xDays           : {one: "1日", other: "{{count}}日"},
            aboutXWeeks     : {one: "約1週間", other: "約{{count}}週間"},
            xWeeks          : {one: "1週間", other: "{{count}}週間"},
            aboutXMonths    : {one: "約1か月", other: "約{{count}}か月"},
            xMonths         : {one: "1か月", other: "{{count}}か月"},
            aboutXYears     : {one: "約1年", other: "約{{count}}年"},
            xYears          : {one: "1年", other: "{{count}}年"},
            overXYears      : {one: "1年以上", other: "{{count}}年以上"},
            almostXYears    : {one: "1年近く", other: "{{count}}年近く"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "y年M月d日EEEE", long: "y年M月d日", medium: "y/MM/dd", short: "y/MM/dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H時mm分ss秒 zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "先週のeeeeのp", yesterday: "昨日のp", today: "今日のp", tomorrow: "明日のp", nextWeek: "翌週のeeeeのp", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e);
                switch (String((t || {}).unit)) {
                    case"year":
                        return "".concat(a, "年");
                    case"quarter":
                        return "第".concat(a, "四半期");
                    case"month":
                        return "".concat(a, "月");
                    case"week":
                        return "第".concat(a, "週");
                    case"date":
                        return "".concat(a, "日");
                    case"hour":
                        return "".concat(a, "時");
                    case"minute":
                        return "".concat(a, "分");
                    case"second":
                        return "".concat(a, "秒");
                    default:
                        return "".concat(a)
                }
            },
            era          : (0, a.default)({values: {narrow: ["BC", "AC"], abbreviated: ["紀元前", "西暦"], wide: ["紀元前", "西暦"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], wide: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["日", "月", "火", "水", "木", "金", "土"], short: ["日", "月", "火", "水", "木", "金", "土"], abbreviated: ["日", "月", "火", "水", "木", "金", "土"], wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜"}, abbreviated: {am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜"}, wide: {am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜"}, abbreviated: {am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜"}, wide: {am: "午前", pm: "午後", midnight: "深夜", noon: "正午", morning: "朝", afternoon: "午後", evening: "夜", night: "深夜"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(B\.?C\.?|A\.?D\.?)/i, abbreviated: /^(紀元[前後]|西暦)/i, wide: /^(紀元[前後]|西暦)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^B/i, /^A/i], any: [/^(紀元前)/i, /^(西暦|紀元後)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^Q[1234]/i, wide: /^第[1234一二三四１２３４]四半期/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^([123456789]|1[012])/, abbreviated: /^([123456789]|1[012])月/i, wide: /^([123456789]|1[012])月/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[日月火水木金土]/, short: /^[日月火水木金土]/, abbreviated: /^[日月火水木金土]/, wide: /^[日月火水木金土]曜日/}, defaultMatchWidth: "wide", parsePatterns: {any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^(A|午前)/i, pm: /^(P|午後)/i, midnight: /^深夜|真夜中/i, noon: /^正午/i, morning: /^朝/i, afternoon: /^午後/i, evening: /^夜/i, night: /^深夜/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, "string" == typeof n[e] ? n[e] : (a.addSuffix && 0 < a.comparison ? n[e].future : a.addSuffix && a.comparison <= 0 ? n[e].past : n[e].present).replace("{{count}}", t)
        };
        var n = {
            lessThanXSeconds: {past: "{{count}} წამზე ნაკლები ხნის წინ", present: "{{count}} წამზე ნაკლები", future: "{{count}} წამზე ნაკლებში"},
            xSeconds        : {past: "{{count}} წამის წინ", present: "{{count}} წამი", future: "{{count}} წამში"},
            halfAMinute     : {past: "ნახევარი წუთის წინ", present: "ნახევარი წუთი", future: "ნახევარი წუთში"},
            lessThanXMinutes: {past: "{{count}} წუთზე ნაკლები ხნის წინ", present: "{{count}} წუთზე ნაკლები", future: "{{count}} წუთზე ნაკლებში"},
            xMinutes        : {past: "{{count}} წუთის წინ", present: "{{count}} წუთი", future: "{{count}} წუთში"},
            aboutXHours     : {past: "დაახლოებით {{count}} საათის წინ", present: "დაახლოებით {{count}} საათი", future: "დაახლოებით {{count}} საათში"},
            xHours          : {past: "{{count}} საათის წინ", present: "{{count}} საათი", future: "{{count}} საათში"},
            xDays           : {past: "{{count}} დღის წინ", present: "{{count}} დღე", future: "{{count}} დღეში"},
            aboutXWeeks     : {past: "დაახლოებით {{count}} კვირას წინ", present: "დაახლოებით {{count}} კვირა", future: "დაახლოებით {{count}} კვირაში"},
            xWeeks          : {past: "{{count}} კვირას კვირა", present: "{{count}} კვირა", future: "{{count}} კვირაში"},
            aboutXMonths    : {past: "დაახლოებით {{count}} თვის წინ", present: "დაახლოებით {{count}} თვე", future: "დაახლოებით {{count}} თვეში"},
            xMonths         : {past: "{{count}} თვის წინ", present: "{{count}} თვე", future: "{{count}} თვეში"},
            aboutXYears     : {past: "დაახლოებით {{count}} წლის წინ", present: "დაახლოებით {{count}} წელი", future: "დაახლოებით {{count}} წელში"},
            xYears          : {past: "{{count}} წლის წინ", present: "{{count}} წელი", future: "{{count}} წელში"},
            overXYears      : {past: "{{count}} წელზე მეტი ხნის წინ", present: "{{count}} წელზე მეტი", future: "{{count}} წელზე მეტი ხნის შემდეგ"},
            almostXYears    : {past: "თითქმის {{count}} წლის წინ", present: "თითქმის {{count}} წელი", future: "თითქმის {{count}} წელში"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM, y", long: "do, MMMM, y", medium: "d, MMM, y", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}'-ზე'", long: "{{date}} {{time}}'-ზე'", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'წინა' eeee LT'-ზე'", yesterday: "'გუშინ' LT'-ზე'", today: "'დღეს' LT'-ზე'", tomorrow: "'ხვალ' LT'-ზე'", nextWeek: "'შემდეგი' eeee LT'-ზე'", other: "L"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                e = Number(e);
                return 1 === e ? e + "-ლი" : e + "-ე"
            },
            era          : (0, a.default)({values: {narrow: ["ჩ.წ-მდე", "ჩ.წ"], abbreviated: ["ჩვ.წ-მდე", "ჩვ.წ"], wide: ["ჩვენს წელთაღრიცხვამდე", "ჩვენი წელთაღრიცხვით"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1-ლი კვ", "2-ე კვ", "3-ე კვ", "4-ე კვ"], wide: ["1-ლი კვარტალი", "2-ე კვარტალი", "3-ე კვარტალი", "4-ე კვარტალი"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["ია", "თე", "მა", "აპ", "მს", "ვნ", "ვლ", "აგ", "სე", "ოქ", "ნო", "დე"], abbreviated: ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"], wide: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["კვ", "ორ", "სა", "ოთ", "ხუ", "პა", "შა"], short: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"], abbreviated: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"], wide: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "შუაღამე", noon: "შუადღე", morning: "დილა", afternoon: "საღამო", evening: "საღამო", night: "ღამე"}, abbreviated: {am: "AM", pm: "PM", midnight: "შუაღამე", noon: "შუადღე", morning: "დილა", afternoon: "საღამო", evening: "საღამო", night: "ღამე"}, wide: {am: "a.m.", pm: "p.m.", midnight: "შუაღამე", noon: "შუადღე", morning: "დილა", afternoon: "საღამო", evening: "საღამო", night: "ღამე"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "შუაღამით", noon: "შუადღისას", morning: "დილით", afternoon: "ნაშუადღევს", evening: "საღამოს", night: "ღამით"}, abbreviated: {am: "AM", pm: "PM", midnight: "შუაღამით", noon: "შუადღისას", morning: "დილით", afternoon: "ნაშუადღევს", evening: "საღამოს", night: "ღამით"}, wide: {am: "a.m.", pm: "p.m.", midnight: "შუაღამით", noon: "შუადღისას", morning: "დილით", afternoon: "ნაშუადღევს", evening: "საღამოს", night: "ღამით"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(-ლი|-ე)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ჩვ?\.წ)/i, abbreviated: /^(ჩვ?\.წ)/i, wide: /^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i, /^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]-(ლი|ე)? კვ/i, wide: /^[1234]-(ლი|ე)? კვარტალი/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {any: /^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^ია/i, /^თ/i, /^მარ/i, /^აპ/i, /^მაი/i, /^ი?ვნ/i, /^ი?ვლ/i, /^აგ/i, /^ს/i, /^ო/i, /^ნ/i, /^დ/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i, short: /^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i, long: /^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^კვ/i, /^ორ/i, /^სა/i, /^ოთ/i, /^ხუ/i, /^პა/i, /^შა/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^([ap]\.?\s?m\.?|შუაღ|დილ)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^შუაღ/i, noon: /^შუადღ/i, morning: /^დილ/i, afternoon: /ნაშუადღევს/i, evening: /საღამო/i, night: /ღამ/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";

        function n(e, t) {
            if (void 0 !== e.one && 1 === t) return e.one;
            var a = t % 10, n = t % 100;
            return (1 == a && 11 != n ? e.singularNominative : 2 <= a && a <= 4 && (n < 10 || 20 < n) ? e.singularGenitive : e.pluralGenitive).replace("{{count}}", t)
        }

        function i(a) {
            return function (e, t) {
                return t.addSuffix ? 0 < t.comparison ? a.future ? n(a.future, e) : n(a.regular, e) + " кейін" : a.past ? n(a.past, e) : n(a.regular, e) + " бұрын" : n(a.regular, e)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return r[e](t, a = a || {})
        };
        var r = {
            lessThanXSeconds: i({regular: {one: "1 секундтан аз", singularNominative: "{{count}} секундтан аз", singularGenitive: "{{count}} секундтан аз", pluralGenitive: "{{count}} секундтан аз"}, future: {one: "бір секундтан кейін", singularNominative: "{{count}} секундтан кейін", singularGenitive: "{{count}} секундтан кейін", pluralGenitive: "{{count}} секундтан кейін"}}),
            xSeconds        : i({regular: {singularNominative: "{{count}} секунд", singularGenitive: "{{count}} секунд", pluralGenitive: "{{count}} секунд"}, past: {singularNominative: "{{count}} секунд бұрын", singularGenitive: "{{count}} секунд бұрын", pluralGenitive: "{{count}} секунд бұрын"}, future: {singularNominative: "{{count}} секундтан кейін", singularGenitive: "{{count}} секундтан кейін", pluralGenitive: "{{count}} секундтан кейін"}}),
            halfAMinute     : function (e, t) {
                return t.addSuffix ? 0 < t.comparison ? "жарты минут ішінде" : "жарты минут бұрын" : "жарты минут"
            },
            lessThanXMinutes: i({regular: {one: "1 минуттан аз", singularNominative: "{{count}} минуттан аз", singularGenitive: "{{count}} минуттан аз", pluralGenitive: "{{count}} минуттан аз"}, future: {one: "минуттан кем ", singularNominative: "{{count}} минуттан кем", singularGenitive: "{{count}} минуттан кем", pluralGenitive: "{{count}} минуттан кем"}}),
            xMinutes        : i({regular: {singularNominative: "{{count}} минут", singularGenitive: "{{count}} минут", pluralGenitive: "{{count}} минут"}, past: {singularNominative: "{{count}} минут бұрын", singularGenitive: "{{count}} минут бұрын", pluralGenitive: "{{count}} минут бұрын"}, future: {singularNominative: "{{count}} минуттан кейін", singularGenitive: "{{count}} минуттан кейін", pluralGenitive: "{{count}} минуттан кейін"}}),
            aboutXHours     : i({regular: {singularNominative: "шамамен {{count}} сағат", singularGenitive: "шамамен {{count}} сағат", pluralGenitive: "шамамен {{count}} сағат"}, future: {singularNominative: "шамамен {{count}} сағаттан кейін", singularGenitive: "шамамен {{count}} сағаттан кейін", pluralGenitive: "шамамен {{count}} сағаттан кейін"}}),
            xHours          : i({regular: {singularNominative: "{{count}} сағат", singularGenitive: "{{count}} сағат", pluralGenitive: "{{count}} сағат"}}),
            xDays           : i({regular: {singularNominative: "{{count}} күн", singularGenitive: "{{count}} күн", pluralGenitive: "{{count}} күн"}, future: {singularNominative: "{{count}} күннен кейін", singularGenitive: "{{count}} күннен кейін", pluralGenitive: "{{count}} күннен кейін"}}),
            aboutXWeeks     : {one: "шамамен 1 апта", other: "шамамен {{count}} апта"},
            xWeeks          : {one: "1 апта", other: "{{count}} апта"},
            aboutXMonths    : i({regular: {singularNominative: "шамамен {{count}} ай", singularGenitive: "шамамен {{count}} ай", pluralGenitive: "шамамен {{count}} ай"}, future: {singularNominative: "шамамен {{count}} айдан кейін", singularGenitive: "шамамен {{count}} айдан кейін", pluralGenitive: "шамамен {{count}} айдан кейін"}}),
            xMonths         : i({regular: {singularNominative: "{{count}} ай", singularGenitive: "{{count}} ай", pluralGenitive: "{{count}} ай"}}),
            aboutXYears     : i({regular: {singularNominative: "шамамен {{count}} жыл", singularGenitive: "шамамен {{count}} жыл", pluralGenitive: "шамамен {{count}} жыл"}, future: {singularNominative: "шамамен {{count}} жылдан кейін", singularGenitive: "шамамен {{count}} жылдан кейін", pluralGenitive: "шамамен {{count}} жылдан кейін"}}),
            xYears          : i({regular: {singularNominative: "{{count}} жыл", singularGenitive: "{{count}} жыл", pluralGenitive: "{{count}} жыл"}, future: {singularNominative: "{{count}} жылдан кейін", singularGenitive: "{{count}} жылдан кейін", pluralGenitive: "{{count}} жылдан кейін"}}),
            overXYears      : i({regular: {singularNominative: "{{count}} жылдан астам", singularGenitive: "{{count}} жылдан астам", pluralGenitive: "{{count}} жылдан астам"}, future: {singularNominative: "{{count}} жылдан астам", singularGenitive: "{{count}} жылдан астам", pluralGenitive: "{{count}} жылдан астам"}}),
            almostXYears    : i({regular: {singularNominative: "{{count}} жылға жақын", singularGenitive: "{{count}} жылға жақын", pluralGenitive: "{{count}} жылға жақын"}, future: {singularNominative: "{{count}} жылдан кейін", singularGenitive: "{{count}} жылдан кейін", pluralGenitive: "{{count}} жылдан кейін"}})
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM y 'ж.'", long: "do MMMM y 'ж.'", medium: "d MMM y 'ж.'", short: "dd.MM.yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {any: "{{date}}, {{time}}"}, defaultWidth: "any"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = u[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = (a = a(4)) && a.__esModule ? a : {default: a}, r = ["жексенбіде", "дүйсенбіде", "сейсенбіде", "сәрсенбіде", "бейсенбіде", "жұмада", "сенбіде"];

        function o(e) {
            return "'" + r[e] + " сағат' p'-де'"
        }

        var u = {
            lastWeek    : function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : "'өткен " + r[n] + " сағат' p'-де'"
            }, yesterday: "'кеше сағат' p'-де'", today: "'бүгін сағат' p'-де'", tomorrow: "'ертең сағат' p'-де'", nextWeek: function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : "'келесі " + r[n] + " сағат' p'-де'"
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = (a = a(1)) && a.__esModule ? a : {default: a}, n = {0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші"}, a = {
            ordinalNumber: function (e) {
                e = Number(e);
                return e + (n[e] || n[e % 10] || n[100 <= e ? 100 : null])
            },
            era          : (0, a.default)({values: {narrow: ["б.з.д.", "б.з."], abbreviated: ["б.з.д.", "б.з."], wide: ["біздің заманымызға дейін", "біздің заманымыз"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1-ші тоқ.", "2-ші тоқ.", "3-ші тоқ.", "4-ші тоқ."], wide: ["1-ші тоқсан", "2-ші тоқсан", "3-ші тоқсан", "4-ші тоқсан"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"], abbreviated: ["қаң", "ақп", "нау", "сәу", "мам", "мау", "шіл", "там", "қыр", "қаз", "қар", "жел"], wide: ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"], abbreviated: ["қаң", "ақп", "нау", "сәу", "мам", "мау", "шіл", "там", "қыр", "қаз", "қар", "жел"], wide: ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["Ж", "Д", "С", "С", "Б", "Ж", "С"], short: ["жс", "дс", "сс", "ср", "бс", "жм", "сб"], abbreviated: ["жс", "дс", "сс", "ср", "бс", "жм", "сб"], wide: ["жексенбі", "дүйсенбі", "сейсенбі", "сәрсенбі", "бейсенбі", "жұма", "сенбі"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "ТД", pm: "ТК", midnight: "түн ортасы", noon: "түс", morning: "таң", afternoon: "күндіз", evening: "кеш", night: "түн"}, wide: {am: "ТД", pm: "ТК", midnight: "түн ортасы", noon: "түс", morning: "таң", afternoon: "күндіз", evening: "кеш", night: "түн"}}, defaultWidth: "any", formattingValues: {narrow: {am: "ТД", pm: "ТК", midnight: "түн ортасында", noon: "түс", morning: "таң", afternoon: "күн", evening: "кеш", night: "түн"}, wide: {am: "ТД", pm: "ТК", midnight: "түн ортасында", noon: "түсте", morning: "таңертең", afternoon: "күндіз", evening: "кеште", night: "түнде"}}, defaultFormattingWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(-?(ші|шы))?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^((б )?з\.?\s?д\.?)/i, abbreviated: /^((б )?з\.?\s?д\.?)/i, wide: /^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^б/i, /^з/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234](-?ші)? тоқ.?/i, wide: /^[1234](-?ші)? тоқсан/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i, abbreviated: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i, wide: /^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i], abbreviated: [/^қаң/i, /^ақп/i, /^нау/i, /^сәу/i, /^мам/i, /^мау/i, /^шіл/i, /^там/i, /^қыр/i, /^қаз/i, /^қар/i, /^жел/i], any: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^(ж|д|с|с|б|ж|с)/i, short: /^(жс|дс|сс|ср|бс|жм|сб)/i, wide: /^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ж/i, /^д/i, /^с/i, /^с/i, /^б/i, /^ж/i, /^с/i], short: [/^жс/i, /^дс/i, /^сс/i, /^ср/i, /^бс/i, /^жм/i, /^сб/i], any: [/^ж[ек]/i, /^д[үй]/i, /^сe[й]/i, /^сә[р]/i, /^б[ей]/i, /^ж[ұм]/i, /^се[н]/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i, wide: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i, any: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i}, defaultMatchWidth: "wide", parsePatterns: {any: {am: /^ТД/i, pm: /^ТК/i, midnight: /^түн орта/i, noon: /^күндіз/i, morning: /таң/i, afternoon: /түс/i, evening: /кеш/i, night: /түн/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, ("string" == typeof n[e] ? n[e] : function i(e, t) {
                return t.addSuffix ? 0 < t.comparison ? e.future : e.past : e.default
            }(1 === t ? n[e].one : n[e].other, a)).replace("{{count}}", t)
        };
        var n = {
            lessThanXSeconds: {one: {default: "1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ", future: "1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ", past: "1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ"}, other: {default: "{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ", future: "{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ", past: "{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ"}},
            xSeconds        : {one: {default: "1 ಸೆಕೆಂಡ್", future: "1 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ", past: "1 ಸೆಕೆಂಡ್ ಹಿಂದೆ"}, other: {default: "{{count}} ಸೆಕೆಂಡುಗಳು", future: "{{count}} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ", past: "{{count}} ಸೆಕೆಂಡ್ ಹಿಂದೆ"}},
            halfAMinute     : {other: {default: "ಅರ್ಧ ನಿಮಿಷ", future: "ಅರ್ಧ ನಿಮಿಷದಲ್ಲಿ", past: "ಅರ್ಧ ನಿಮಿಷದ ಹಿಂದೆ"}},
            lessThanXMinutes: {one: {default: "1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ", future: "1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ", past: "1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ"}, other: {default: "{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ", future: "{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ", past: "{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ"}},
            xMinutes        : {one: {default: "1 ನಿಮಿಷ", future: "1 ನಿಮಿಷದಲ್ಲಿ", past: "1 ನಿಮಿಷದ ಹಿಂದೆ"}, other: {default: "{{count}} ನಿಮಿಷಗಳು", future: "{{count}} ನಿಮಿಷಗಳಲ್ಲಿ", past: "{{count}} ನಿಮಿಷಗಳ ಹಿಂದೆ"}},
            aboutXHours     : {one: {default: "ಸುಮಾರು 1 ಗಂಟೆ", future: "ಸುಮಾರು 1 ಗಂಟೆಯಲ್ಲಿ", past: "ಸುಮಾರು 1 ಗಂಟೆ ಹಿಂದೆ"}, other: {default: "ಸುಮಾರು {{count}} ಗಂಟೆಗಳು", future: "ಸುಮಾರು {{count}} ಗಂಟೆಗಳಲ್ಲಿ", past: "ಸುಮಾರು {{count}} ಗಂಟೆಗಳ ಹಿಂದೆ"}},
            xHours          : {one: {default: "1 ಗಂಟೆ", future: "1 ಗಂಟೆಯಲ್ಲಿ", past: "1 ಗಂಟೆ ಹಿಂದೆ"}, other: {default: "{{count}} ಗಂಟೆಗಳು", future: "{{count}} ಗಂಟೆಗಳಲ್ಲಿ", past: "{{count}} ಗಂಟೆಗಳ ಹಿಂದೆ"}},
            xDays           : {one: {default: "1 ದಿನ", future: "1 ದಿನದಲ್ಲಿ", past: "1 ದಿನದ ಹಿಂದೆ"}, other: {default: "{{count}} ದಿನಗಳು", future: "{{count}} ದಿನಗಳಲ್ಲಿ", past: "{{count}} ದಿನಗಳ ಹಿಂದೆ"}},
            aboutXMonths    : {one: {default: "ಸುಮಾರು 1 ತಿಂಗಳು", future: "ಸುಮಾರು 1 ತಿಂಗಳಲ್ಲಿ", past: "ಸುಮಾರು 1 ತಿಂಗಳ ಹಿಂದೆ"}, other: {default: "ಸುಮಾರು {{count}} ತಿಂಗಳು", future: "ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳಲ್ಲಿ", past: "ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ"}},
            xMonths         : {one: {default: "1 ತಿಂಗಳು", future: "1 ತಿಂಗಳಲ್ಲಿ", past: "1 ತಿಂಗಳ ಹಿಂದೆ"}, other: {default: "{{count}} ತಿಂಗಳು", future: "{{count}} ತಿಂಗಳುಗಳಲ್ಲಿ", past: "{{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ"}},
            aboutXYears     : {one: {default: "ಸುಮಾರು 1 ವರ್ಷ", future: "ಸುಮಾರು 1 ವರ್ಷದಲ್ಲಿ", past: "ಸುಮಾರು 1 ವರ್ಷದ ಹಿಂದೆ"}, other: {default: "ಸುಮಾರು {{count}} ವರ್ಷಗಳು", future: "ಸುಮಾರು {{count}} ವರ್ಷಗಳಲ್ಲಿ", past: "ಸುಮಾರು {{count}} ವರ್ಷಗಳ ಹಿಂದೆ"}},
            xYears          : {one: {default: "1 ವರ್ಷ", future: "1 ವರ್ಷದಲ್ಲಿ", past: "1 ವರ್ಷದ ಹಿಂದೆ"}, other: {default: "{{count}} ವರ್ಷಗಳು", future: "{{count}} ವರ್ಷಗಳಲ್ಲಿ", past: "{{count}} ವರ್ಷಗಳ ಹಿಂದೆ"}},
            overXYears      : {one: {default: "1 ವರ್ಷದ ಮೇಲೆ", future: "1 ವರ್ಷದ ಮೇಲೆ", past: "1 ವರ್ಷದ ಮೇಲೆ"}, other: {default: "{{count}} ವರ್ಷಗಳ ಮೇಲೆ", future: "{{count}} ವರ್ಷಗಳ ಮೇಲೆ", past: "{{count}} ವರ್ಷಗಳ ಮೇಲೆ"}},
            almostXYears    : {one: {default: "ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ", future: "ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ", past: "ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ"}, other: {default: "ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ", future: "ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ", past: "ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ"}}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM d, y", long: "MMMM d, y", medium: "MMM d, y", short: "d/M/yy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "hh:mm:ss a zzzz", long: "hh:mm:ss a z", medium: "hh:mm:ss a", short: "hh:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'ಕಳೆದ' eeee p 'ಕ್ಕೆ'", yesterday: "'ನಿನ್ನೆ' p 'ಕ್ಕೆ'", today: "'ಇಂದು' p 'ಕ್ಕೆ'", tomorrow: "'ನಾಳೆ' p 'ಕ್ಕೆ'", nextWeek: "eeee p 'ಕ್ಕೆ'", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e) + "ನೇ"
            },
            era          : (0, a.default)({values: {narrow: ["ಕ್ರಿ.ಪೂ", "ಕ್ರಿ.ಶ"], abbreviated: ["ಕ್ರಿ.ಪೂ", "ಕ್ರಿ.ಶ"], wide: ["ಕ್ರಿಸ್ತ ಪೂರ್ವ", "ಕ್ರಿಸ್ತ ಶಕ"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["ತ್ರೈ 1", "ತ್ರೈ 2", "ತ್ರೈ 3", "ತ್ರೈ 4"], wide: ["1ನೇ ತ್ರೈಮಾಸಿಕ", "2ನೇ ತ್ರೈಮಾಸಿಕ", "3ನೇ ತ್ರೈಮಾಸಿಕ", "4ನೇ ತ್ರೈಮಾಸಿಕ"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["ಜ", "ಫೆ", "ಮಾ", "ಏ", "ಮೇ", "ಜೂ", "ಜು", "ಆ", "ಸೆ", "ಅ", "ನ", "ಡಿ"], abbreviated: ["ಜನ", "ಫೆಬ್ರ", "ಮಾರ್ಚ್", "ಏಪ್ರಿ", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗ", "ಸೆಪ್ಟೆಂ", "ಅಕ್ಟೋ", "ನವೆಂ", "ಡಿಸೆಂ"], wide: ["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ಭಾ", "ಸೋ", "ಮಂ", "ಬು", "ಗು", "ಶು", "ಶ"], short: ["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"], abbreviated: ["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"], wide: ["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ಪೂರ್ವಾಹ್ನ", pm: "ಅಪರಾಹ್ನ", midnight: "ಮಧ್ಯರಾತ್ರಿ", noon: "ಮಧ್ಯಾಹ್ನ", morning: "ಬೆಳಗ್ಗೆ", afternoon: "ಮಧ್ಯಾಹ್ನ", evening: "ಸಂಜೆ", night: "ರಾತ್ರಿ"}, abbreviated: {am: "ಪೂರ್ವಾಹ್ನ", pm: "ಅಪರಾಹ್ನ", midnight: "ಮಧ್ಯರಾತ್ರಿ", noon: "ಮಧ್ಯಾನ್ಹ", morning: "ಬೆಳಗ್ಗೆ", afternoon: "ಮಧ್ಯಾನ್ಹ", evening: "ಸಂಜೆ", night: "ರಾತ್ರಿ"}, wide: {am: "ಪೂರ್ವಾಹ್ನ", pm: "ಅಪರಾಹ್ನ", midnight: "ಮಧ್ಯರಾತ್ರಿ", noon: "ಮಧ್ಯಾನ್ಹ", morning: "ಬೆಳಗ್ಗೆ", afternoon: "ಮಧ್ಯಾನ್ಹ", evening: "ಸಂಜೆ", night: "ರಾತ್ರಿ"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "ಪೂ", pm: "ಅ", midnight: "ಮಧ್ಯರಾತ್ರಿ", noon: "ಮಧ್ಯಾನ್ಹ", morning: "ಬೆಳಗ್ಗೆ", afternoon: "ಮಧ್ಯಾನ್ಹ", evening: "ಸಂಜೆ", night: "ರಾತ್ರಿ"}, abbreviated: {am: "ಪೂರ್ವಾಹ್ನ", pm: "ಅಪರಾಹ್ನ", midnight: "ಮಧ್ಯ ರಾತ್ರಿ", noon: "ಮಧ್ಯಾನ್ಹ", morning: "ಬೆಳಗ್ಗೆ", afternoon: "ಮಧ್ಯಾನ್ಹ", evening: "ಸಂಜೆ", night: "ರಾತ್ರಿ"}, wide: {am: "ಪೂರ್ವಾಹ್ನ", pm: "ಅಪರಾಹ್ನ", midnight: "ಮಧ್ಯ ರಾತ್ರಿ", noon: "ಮಧ್ಯಾನ್ಹ", morning: "ಬೆಳಗ್ಗೆ", afternoon: "ಮಧ್ಯಾನ್ಹ", evening: "ಸಂಜೆ", night: "ರಾತ್ರಿ"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(ನೇ|ನೆ)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ಕ್ರಿ.ಪೂ|ಕ್ರಿ.ಶ)/i, abbreviated: /^(ಕ್ರಿ\.?\s?ಪೂ\.?|ಕ್ರಿ\.?\s?ಶ\.?|ಪ್ರ\.?\s?ಶ\.?)/i, wide: /^(ಕ್ರಿಸ್ತ ಪೂರ್ವ|ಕ್ರಿಸ್ತ ಶಕ|ಪ್ರಸಕ್ತ ಶಕ)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^ಪೂ/i, /^(ಶ|ಪ್ರ)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^ತ್ರೈ[1234]|ತ್ರೈ [1234]| [1234]ತ್ರೈ/i, wide: /^[1234](ನೇ)? ತ್ರೈಮಾಸಿಕ/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^(ಜೂ|ಜು|ಜ|ಫೆ|ಮಾ|ಏ|ಮೇ|ಆ|ಸೆ|ಅ|ನ|ಡಿ)/i, abbreviated: /^(ಜನ|ಫೆಬ್ರ|ಮಾರ್ಚ್|ಏಪ್ರಿ|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗ|ಸೆಪ್ಟೆಂ|ಅಕ್ಟೋ|ನವೆಂ|ಡಿಸೆಂ)/i, wide: /^(ಜನವರಿ|ಫೆಬ್ರವರಿ|ಮಾರ್ಚ್|ಏಪ್ರಿಲ್|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗಸ್ಟ್|ಸೆಪ್ಟೆಂಬರ್|ಅಕ್ಟೋಬರ್|ನವೆಂಬರ್|ಡಿಸೆಂಬರ್)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ಜ$/i, /^ಫೆ/i, /^ಮಾ/i, /^ಏ/i, /^ಮೇ/i, /^ಜೂ/i, /^ಜು$/i, /^ಆ/i, /^ಸೆ/i, /^ಅ/i, /^ನ/i, /^ಡಿ/i], any: [/^ಜನ/i, /^ಫೆ/i, /^ಮಾ/i, /^ಏ/i, /^ಮೇ/i, /^ಜೂನ್/i, /^ಜುಲೈ/i, /^ಆ/i, /^ಸೆ/i, /^ಅ/i, /^ನ/i, /^ಡಿ/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^(ಭಾ|ಸೋ|ಮ|ಬು|ಗು|ಶು|ಶ)/i, short: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i, abbreviated: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i, wide: /^(ಭಾನುವಾರ|ಸೋಮವಾರ|ಮಂಗಳವಾರ|ಬುಧವಾರ|ಗುರುವಾರ|ಶುಕ್ರವಾರ|ಶನಿವಾರ)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i], any: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(ಪೂ|ಅ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i, any: /^(ಪೂರ್ವಾಹ್ನ|ಅಪರಾಹ್ನ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^ಪೂ/i, pm: /^ಅ/i, midnight: /ಮಧ್ಯರಾತ್ರಿ/i, noon: /ಮಧ್ಯಾನ್ಹ/i, morning: /ಬೆಳಗ್ಗೆ/i, afternoon: /ಮಧ್ಯಾನ್ಹ/i, evening: /ಸಂಜೆ/i, night: /ರಾತ್ರಿ/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + " 후" : t + " 전" : t
        };
        var n = {
            lessThanXSeconds: {one: "1초 미만", other: "{{count}}초 미만"},
            xSeconds        : {one: "1초", other: "{{count}}초"},
            halfAMinute     : "30초",
            lessThanXMinutes: {one: "1분 미만", other: "{{count}}분 미만"},
            xMinutes        : {one: "1분", other: "{{count}}분"},
            aboutXHours     : {one: "약 1시간", other: "약 {{count}}시간"},
            xHours          : {one: "1시간", other: "{{count}}시간"},
            xDays           : {one: "1일", other: "{{count}}일"},
            aboutXWeeks     : {one: "약 1주", other: "약 {{count}}주"},
            xWeeks          : {one: "1주", other: "{{count}}주"},
            aboutXMonths    : {one: "약 1개월", other: "약 {{count}}개월"},
            xMonths         : {one: "1개월", other: "{{count}}개월"},
            aboutXYears     : {one: "약 1년", other: "약 {{count}}년"},
            xYears          : {one: "1년", other: "{{count}}년"},
            overXYears      : {one: "1년 이상", other: "{{count}}년 이상"},
            almostXYears    : {one: "거의 1년", other: "거의 {{count}}년"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "y년 M월 d일 EEEE", long: "y년 M월 d일", medium: "y.MM.dd", short: "y.MM.dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "a H시 mm분 ss초 zzzz", long: "a H:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'지난' eeee p", yesterday: "'어제' p", today: "'오늘' p", tomorrow: "'내일' p", nextWeek: "'다음' eeee p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e);
                switch (String((t || {}).unit)) {
                    case"minute":
                    case"second":
                        return a;
                    case"date":
                        return a + "일";
                    default:
                        return a + "번째"
                }
            },
            era          : (0, a.default)({values: {narrow: ["BC", "AD"], abbreviated: ["BC", "AD"], wide: ["기원전", "서기"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1분기", "2분기", "3분기", "4분기"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], wide: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["일", "월", "화", "수", "목", "금", "토"], short: ["일", "월", "화", "수", "목", "금", "토"], abbreviated: ["일", "월", "화", "수", "목", "금", "토"], wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤"}, abbreviated: {am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤"}, wide: {am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤"}, abbreviated: {am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤"}, wide: {am: "오전", pm: "오후", midnight: "자정", noon: "정오", morning: "아침", afternoon: "오후", evening: "저녁", night: "밤"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(일|번째)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(기원전|서기)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(bc|기원전)/i, /^(ad|서기)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]사?분기/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^(1[012]|[123456789])/, abbreviated: /^(1[012]|[123456789])월/i, wide: /^(1[012]|[123456789])월/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[일월화수목금토]/, short: /^[일월화수목금토]/, abbreviated: /^[일월화수목금토]/, wide: /^[일월화수목금토]요일/}, defaultMatchWidth: "wide", parsePatterns: {any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^(am|오전)/i, pm: /^(pm|오후)/i, midnight: /^자정/i, noon: /^정오/i, morning: /^아침/i, afternoon: /^오후/i, evening: /^저녁/i, night: /^밤/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            e = (a = a || {}).addSuffix ? n[e].withPreposition : n[e].standalone, t = "string" == typeof e ? e : 1 === t ? e.one : e.other.replace("{{count}}", t);
            return a.addSuffix ? 0 < a.comparison ? "a" + (d(t) ? "n" : "") + " " + t : "viru" + (d(t) ? "n" : "") + " " + t : t
        };
        var n = {
            lessThanXSeconds: {standalone: {one: "manner wéi eng Sekonn", other: "manner wéi {{count}} Sekonnen"}, withPreposition: {one: "manner wéi enger Sekonn", other: "manner wéi {{count}} Sekonnen"}},
            xSeconds        : {standalone: {one: "eng Sekonn", other: "{{count}} Sekonnen"}, withPreposition: {one: "enger Sekonn", other: "{{count}} Sekonnen"}},
            halfAMinute     : {standalone: "eng hallef Minutt", withPreposition: "enger hallwer Minutt"},
            lessThanXMinutes: {standalone: {one: "manner wéi eng Minutt", other: "manner wéi {{count}} Minutten"}, withPreposition: {one: "manner wéi enger Minutt", other: "manner wéi {{count}} Minutten"}},
            xMinutes        : {standalone: {one: "eng Minutt", other: "{{count}} Minutten"}, withPreposition: {one: "enger Minutt", other: "{{count}} Minutten"}},
            aboutXHours     : {standalone: {one: "ongeféier eng Stonn", other: "ongeféier {{count}} Stonnen"}, withPreposition: {one: "ongeféier enger Stonn", other: "ongeféier {{count}} Stonnen"}},
            xHours          : {standalone: {one: "eng Stonn", other: "{{count}} Stonnen"}, withPreposition: {one: "enger Stonn", other: "{{count}} Stonnen"}},
            xDays           : {standalone: {one: "een Dag", other: "{{count}} Deeg"}, withPreposition: {one: "engem Dag", other: "{{count}} Deeg"}},
            aboutXWeeks     : {standalone: {one: "ongeféier eng Woch", other: "ongeféier {{count}} Wochen"}, withPreposition: {one: "ongeféier enger Woche", other: "ongeféier {{count}} Wochen"}},
            xWeeks          : {standalone: {one: "eng Woch", other: "{{count}} Wochen"}, withPreposition: {one: "enger Woch", other: "{{count}} Wochen"}},
            aboutXMonths    : {standalone: {one: "ongeféier ee Mount", other: "ongeféier {{count}} Méint"}, withPreposition: {one: "ongeféier engem Mount", other: "ongeféier {{count}} Méint"}},
            xMonths         : {standalone: {one: "ee Mount", other: "{{count}} Méint"}, withPreposition: {one: "engem Mount", other: "{{count}} Méint"}},
            aboutXYears     : {standalone: {one: "ongeféier ee Joer", other: "ongeféier {{count}} Joer"}, withPreposition: {one: "ongeféier engem Joer", other: "ongeféier {{count}} Joer"}},
            xYears          : {standalone: {one: "ee Joer", other: "{{count}} Joer"}, withPreposition: {one: "engem Joer", other: "{{count}} Joer"}},
            overXYears      : {standalone: {one: "méi wéi ee Joer", other: "méi wéi {{count}} Joer"}, withPreposition: {one: "méi wéi engem Joer", other: "méi wéi {{count}} Joer"}},
            almostXYears    : {standalone: {one: "bal ee Joer", other: "bal {{count}} Joer"}, withPreposition: {one: "bal engem Joer", other: "bal {{count}} Joer"}}
        }, i = ["d", "h", "n", "t", "z"], r = ["a,", "e", "i", "o", "u"], o = [0, 1, 2, 3, 8, 9], u = [40, 50, 60, 70];

        function d(e) {
            var t = e.charAt(0).toLowerCase();
            if (-1 != r.indexOf(t) || -1 != i.indexOf(t)) return 1;
            t = e.split(" ")[0], e = parseInt(t);
            return !isNaN(e) && -1 != o.indexOf(e % 10) && -1 == u.indexOf(parseInt(t.substring(0, 2)))
        }

        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.yy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'um' {{time}}", long: "{{date}} 'um' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = i[e];
            return "function" == typeof e ? e(t) : e
        };
        var i = {
            lastWeek    : function (e) {
                var t = e.getUTCDay(), e = "'läschte";
                return 2 !== t && 4 !== t || (e += "n"), e + "' eeee 'um' p"
            }, yesterday: "'gëschter um' p", today: "'haut um' p", tomorrow: "'moien um' p", nextWeek: "eeee 'um' p", other: "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {narrow: ["v.Chr.", "n.Chr."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["viru Christus", "no Christus"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mäe", "Abr", "Mee", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], wide: ["Januar", "Februar", "Mäerz", "Abrëll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["S", "M", "D", "M", "D", "F", "S"], short: ["So", "Mé", "Dë", "Më", "Do", "Fr", "Sa"], abbreviated: ["So.", "Mé.", "Dë.", "Më.", "Do.", "Fr.", "Sa."], wide: ["Sonndeg", "Méindeg", "Dënschdeg", "Mëttwoch", "Donneschdeg", "Freideg", "Samschdeg"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "mo.", pm: "nomë.", midnight: "Mëtternuecht", noon: "Mëtteg", morning: "Moien", afternoon: "Nomëtteg", evening: "Owend", night: "Nuecht"}, abbreviated: {am: "moies", pm: "nomëttes", midnight: "Mëtternuecht", noon: "Mëtteg", morning: "Moien", afternoon: "Nomëtteg", evening: "Owend", night: "Nuecht"}, wide: {am: "moies", pm: "nomëttes", midnight: "Mëtternuecht", noon: "Mëtteg", morning: "Moien", afternoon: "Nomëtteg", evening: "Owend", night: "Nuecht"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "mo.", pm: "nom.", midnight: "Mëtternuecht", noon: "mëttes", morning: "moies", afternoon: "nomëttes", evening: "owes", night: "nuets"}, abbreviated: {am: "moies", pm: "nomëttes", midnight: "Mëtternuecht", noon: "mëttes", morning: "moies", afternoon: "nomëttes", evening: "owes", night: "nuets"}, wide: {am: "moies", pm: "nomëttes", midnight: "Mëtternuecht", noon: "mëttes", morning: "moies", afternoon: "nomëttes", evening: "owes", night: "nuets"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(\.)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i, wide: /^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^v/i, /^n/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? Quartal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i, wide: /^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mä/i, /^ab/i, /^me/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[smdf]/i, short: /^(so|mé|dë|më|do|fr|sa)/i, abbreviated: /^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i, wide: /^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^so/i, /^mé/i, /^dë/i, /^më/i, /^do/i, /^f/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i, abbreviated: /^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i, wide: /^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i}, defaultMatchWidth: "wide", parsePatterns: {any: {am: /^m/i, pm: /^n/i, midnight: /^Mëtter/i, noon: /^mëttes/i, morning: /moies/i, afternoon: /nomëttes/i, evening: /owes/i, night: /nuets/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            a = a || {};
            var n = e.match(/about|over|almost|lessthan/i), i = e.replace(n, ""), i = "string" == typeof l[e] ? l[e] : 1 === t ? l[e].one(t, a.addSuffix, i.toLowerCase() + "_one") : l[e].other(t, a.addSuffix, i.toLowerCase() + "_other");
            return n && (i = m[n[0].toLowerCase()] + " " + i), a.addSuffix ? 0 < a.comparison ? "po " + i : "prieš " + i : i
        };
        var l = {lessThanXSeconds: {one: r, other: s}, xSeconds: {one: r, other: s}, halfAMinute: "pusė minutės", lessThanXMinutes: {one: o, other: s}, xMinutes: {one: o, other: s}, aboutXHours: {one: o, other: s}, xHours: {one: o, other: s}, xDays: {one: o, other: s}, aboutWeeks: {one: o, other: s}, xWeeks: {one: o, other: s}, aboutXMonths: {one: o, other: s}, xMonths: {one: o, other: s}, aboutXYears: {one: o, other: s}, xYears: {one: o, other: s}, overXYears: {one: o, other: s}, almostXYears: {one: o, other: s}},
            m = {xseconds_other: "sekundė_sekundžių_sekundes", xminutes_one: "minutė_minutės_minutę", xminutes_other: "minutės_minučių_minutes", xhours_one: "valanda_valandos_valandą", xhours_other: "valandos_valandų_valandas", xdays_one: "diena_dienos_dieną", xdays_other: "dienos_dienų_dienas", xweeks_one: "savaitė_savaitės_savaitę", xweeks_other: "savaitės_savaičių_savaites", xmonths_one: "mėnuo_mėnesio_mėnesį", xmonths_other: "mėnesiai_mėnesių_mėnesius", xyears_one: "metai_metų_metus", xyears_other: "metai_metų_metus", about: "apie", over: "daugiau nei", almost: "beveik", lessthan: "mažiau nei"};

        function r(e, t, a, n) {
            return t ? n ? "kelių sekundžių" : "kelias sekundes" : "kelios sekundės"
        }

        function o(e, t, a, n) {
            return t ? n ? d(a)[1] : d(a)[2] : d(a)[0]
        }

        function u(e) {
            return e % 10 == 0 || 10 < e && e < 20
        }

        function d(e) {
            return m[e].split("_")
        }

        function s(e, t, a, n) {
            var i = e + " ";
            return 1 === e ? i + o(0, t, a[0], n) : t ? n ? i + d(a)[1] : i + (u(e) ? d(a)[1] : d(a)[2]) : i + (u(e) ? d(a)[1] : d(a)[0])
        }

        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "y 'm'. MMMM d 'd'., EEEE", long: "y 'm'. MMMM d 'd'.", medium: "y-MM-dd", short: "y-MM-dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'Praėjusį' eeee p", yesterday: "'Vakar' p", today: "'Šiandien' p", tomorrow: "'Rytoj' p", nextWeek: "eeee p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e) + "-oji"
            },
            era          : (0, a.default)({values: {narrow: ["pr. Kr.", "po Kr."], abbreviated: ["pr. Kr.", "po Kr."], wide: ["prieš Kristų", "po Kristaus"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."], wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]}, defaultWidth: "wide", formattingValues: {narrow: ["1", "2", "3", "4"], abbreviated: ["I k.", "II k.", "III k.", "IV k."], wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]}, defaultFormattingWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], wide: ["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], wide: ["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["S", "P", "A", "T", "K", "P", "Š"], short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"], abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"], wide: ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"]}, defaultWidth: "wide", formattingValues: {narrow: ["S", "P", "A", "T", "K", "P", "Š"], short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"], abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"], wide: ["sekmadienį", "pirmadienį", "antradienį", "trečiadienį", "ketvirtadienį", "penktadienį", "šeštadienį"]}, defaultFormattingWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "pr. p.", pm: "pop.", midnight: "vidurnaktis", noon: "vidurdienis", morning: "rytas", afternoon: "diena", evening: "vakaras", night: "naktis"}, abbreviated: {am: "priešpiet", pm: "popiet", midnight: "vidurnaktis", noon: "vidurdienis", morning: "rytas", afternoon: "diena", evening: "vakaras", night: "naktis"}, wide: {am: "priešpiet", pm: "popiet", midnight: "vidurnaktis", noon: "vidurdienis", morning: "rytas", afternoon: "diena", evening: "vakaras", night: "naktis"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "pr. p.", pm: "pop.", midnight: "vidurnaktis", noon: "perpiet", morning: "rytas", afternoon: "popietė", evening: "vakaras", night: "naktis"}, abbreviated: {am: "priešpiet", pm: "popiet", midnight: "vidurnaktis", noon: "perpiet", morning: "rytas", afternoon: "popietė", evening: "vakaras", night: "naktis"}, wide: {am: "priešpiet", pm: "popiet", midnight: "vidurnaktis", noon: "perpiet", morning: "rytas", afternoon: "popietė", evening: "vakaras", night: "naktis"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(-oji)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^p(r|o)\.?\s?(kr\.?|me)/i, abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i, wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i}, defaultMatchWidth: "wide", parsePatterns: {wide: [/prieš/i, /(po|mūsų)/i], any: [/^pr/i, /^(po|m)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^([1234])/i, abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i, wide: /^(I|II|III|IV)\s?ketvirtis/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/1/i, /2/i, /3/i, /4/i], any: [/I$/i, /II$/i, /III/i, /IV/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[svkbglr]/i, abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i, wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^v/i, /^k/i, /^b/i, /^g/i, /^b/i, /^l/i, /^r/i, /^r/i, /^s/i, /^l/i, /^g/i], any: [/^saus/i, /^vas/i, /^kov/i, /^bal/i, /^geg/i, /^birž/i, /^liep/i, /^rugp/i, /^rugs/i, /^spal/i, /^lapkr/i, /^gruod/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[spatkš]/i, short: /^(sk|pr|an|tr|kt|pn|št)/i, abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i, wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i], wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i], any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i, any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i}, defaultMatchWidth: "any", parsePatterns: {narrow: {am: /^pr/i, pm: /^pop./i, midnight: /^vidurnaktis/i, noon: /^(vidurdienis|perp)/i, morning: /rytas/i, afternoon: /(die|popietė)/i, evening: /vakaras/i, night: /naktis/i}, any: {am: /^pr/i, pm: /^popiet$/i, midnight: /^vidurnaktis/i, noon: /^(vidurdienis|perp)/i, morning: /rytas/i, afternoon: /(die|popietė)/i, evening: /vakaras/i, night: /naktis/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";

        function n(n) {
            return function (e, t) {
                if (1 === e) return t.addSuffix ? n.one[0].replace("{{time}}", n.one[2]) : n.one[0].replace("{{time}}", n.one[1]);
                var a = e % 10 == 1 && e % 100 != 11;
                return (t.addSuffix ? n.other[0].replace("{{time}}", a ? n.other[3] : n.other[4]) : n.other[0].replace("{{time}}", a ? n.other[1] : n.other[2])).replace("{{count}}", e)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            t = i[e](t, a = a || {});
            return a.addSuffix ? 0 < a.comparison ? "pēc " + t : "pirms " + t : t
        };
        var i = {
            lessThanXSeconds: n({one: ["mazāk par {{time}}", "sekundi", "sekundi"], other: ["mazāk nekā {{count}} {{time}}", "sekunde", "sekundes", "sekundes", "sekundēm"]}),
            xSeconds        : n({one: ["1 {{time}}", "sekunde", "sekundes"], other: ["{{count}} {{time}}", "sekunde", "sekundes", "sekundes", "sekundēm"]}),
            halfAMinute     : function (e, t) {
                return t.addSuffix ? "pusminūtes" : "pusminūte"
            },
            lessThanXMinutes: n({one: ["mazāk par {{time}}", "minūti", "minūti"], other: ["mazāk nekā {{count}} {{time}}", "minūte", "minūtes", "minūtes", "minūtēm"]}),
            xMinutes        : n({one: ["1 {{time}}", "minūte", "minūtes"], other: ["{{count}} {{time}}", "minūte", "minūtes", "minūtes", "minūtēm"]}),
            aboutXHours     : n({one: ["apmēram 1 {{time}}", "stunda", "stundas"], other: ["apmēram {{count}} {{time}}", "stunda", "stundas", "stundas", "stundām"]}),
            xHours          : n({one: ["1 {{time}}", "stunda", "stundas"], other: ["{{count}} {{time}}", "stunda", "stundas", "stundas", "stundām"]}),
            xDays           : n({one: ["1 {{time}}", "diena", "dienas"], other: ["{{count}} {{time}}", "diena", "dienas", "dienas", "dienām"]}),
            aboutXWeeks     : n({one: ["apmēram 1 {{time}}", "nedēļa", "nedēļas"], other: ["apmēram {{count}} {{time}}", "nedēļa", "nedēļu", "nedēļas", "nedēļām"]}),
            xWeeks          : n({one: ["1 {{time}}", "nedēļa", "nedēļas"], other: ["{{count}} {{time}}", "nedēļa", "nedēļu", "nedēļas", "nedēļām"]}),
            aboutXMonths    : n({one: ["apmēram 1 {{time}}", "mēnesis", "mēneša"], other: ["apmēram {{count}} {{time}}", "mēnesis", "mēneši", "mēneša", "mēnešiem"]}),
            xMonths         : n({one: ["1 {{time}}", "mēnesis", "mēneša"], other: ["{{count}} {{time}}", "mēnesis", "mēneši", "mēneša", "mēnešiem"]}),
            aboutXYears     : n({one: ["apmēram 1 {{time}}", "gads", "gada"], other: ["apmēram {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]}),
            xYears          : n({one: ["1 {{time}}", "gads", "gada"], other: ["{{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]}),
            overXYears      : n({one: ["ilgāk par 1 {{time}}", "gadu", "gadu"], other: ["vairāk nekā {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]}),
            almostXYears    : n({one: ["gandrīz 1 {{time}}", "gads", "gada"], other: ["vairāk nekā {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]})
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, y. 'gada' d. MMMM", long: "y. 'gada' d. MMMM", medium: "dd.MM.y.", short: "dd.MM.y."}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'plkst.' {{time}}", long: "{{date}} 'plkst.' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = r[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var n = (a = a(4)) && a.__esModule ? a : {default: a}, i = ["svētdienā", "pirmdienā", "otrdienā", "trešdienā", "ceturtdienā", "piektdienā", "sestdienā"], r = {
            lastWeek    : function (e, t, a) {
                return (0, n.default)(e, t, a) ? "eeee 'plkst.' p" : "'Pagājušā " + i[e.getUTCDay()] + " plkst.' p"
            }, yesterday: "'Vakar plkst.' p", today: "'Šodien plkst.' p", tomorrow: "'Rīt plkst.' p", nextWeek: function (e, t, a) {
                return (0, n.default)(e, t, a) ? "eeee 'plkst.' p" : "'Nākamajā " + i[e.getUTCDay()] + " plkst.' p"
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return e + "."
            },
            era          : (0, a.default)({values: {narrow: ["p.m.ē", "m.ē"], abbreviated: ["p. m. ē.", "m. ē."], wide: ["pirms mūsu ēras", "mūsu ērā"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."], wide: ["pirmais ceturksnis", "otrais ceturksnis", "trešais ceturksnis", "ceturtais ceturksnis"]}, defaultWidth: "wide", formattingValues: {narrow: ["1", "2", "3", "4"], abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."], wide: ["pirmajā ceturksnī", "otrajā ceturksnī", "trešajā ceturksnī", "ceturtajā ceturksnī"]}, defaultFormattingWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["janv.", "febr.", "marts", "apr.", "maijs", "jūn.", "jūl.", "aug.", "sept.", "okt.", "nov.", "dec."], wide: ["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["janv.", "febr.", "martā", "apr.", "maijs", "jūn.", "jūl.", "aug.", "sept.", "okt.", "nov.", "dec."], wide: ["janvārī", "februārī", "martā", "aprīlī", "maijā", "jūnijā", "jūlijā", "augustā", "septembrī", "oktobrī", "novembrī", "decembrī"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["S", "P", "O", "T", "C", "P", "S"], short: ["Sv", "P", "O", "T", "C", "Pk", "S"], abbreviated: ["svētd.", "pirmd.", "otrd.", "trešd.", "ceturtd.", "piektd.", "sestd."], wide: ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"]}, defaultWidth: "wide", formattingValues: {narrow: ["S", "P", "O", "T", "C", "P", "S"], short: ["Sv", "P", "O", "T", "C", "Pk", "S"], abbreviated: ["svētd.", "pirmd.", "otrd.", "trešd.", "ceturtd.", "piektd.", "sestd."], wide: ["svētdienā", "pirmdienā", "otrdienā", "trešdienā", "ceturtdienā", "piektdienā", "sestdienā"]}, defaultFormattingWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "am", pm: "pm", midnight: "pusn.", noon: "pusd.", morning: "rīts", afternoon: "diena", evening: "vakars", night: "nakts"}, abbreviated: {am: "am", pm: "pm", midnight: "pusn.", noon: "pusd.", morning: "rīts", afternoon: "pēcpusd.", evening: "vakars", night: "nakts"}, wide: {am: "am", pm: "pm", midnight: "pusnakts", noon: "pusdienlaiks", morning: "rīts", afternoon: "pēcpusdiena", evening: "vakars", night: "nakts"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "am", pm: "pm", midnight: "pusn.", noon: "pusd.", morning: "rītā", afternoon: "dienā", evening: "vakarā", night: "naktī"}, abbreviated: {am: "am", pm: "pm", midnight: "pusn.", noon: "pusd.", morning: "rītā", afternoon: "pēcpusd.", evening: "vakarā", night: "naktī"}, wide: {am: "am", pm: "pm", midnight: "pusnaktī", noon: "pusdienlaikā", morning: "rītā", afternoon: "pēcpusdienā", evening: "vakarā", night: "naktī"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)\./i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(p\.m\.ē|m\.ē)/i, abbreviated: /^(p\. m\. ē\.|m\. ē\.)/i, wide: /^(pirms mūsu ēras|mūsu ērā)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^p/i, /^m/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234](\. cet\.)/i, wide: /^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^1/i, /^2/i, /^3/i, /^4/i], abbreviated: [/^1/i, /^2/i, /^3/i, /^4/i], wide: [/^p/i, /^o/i, /^t/i, /^c/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i, wide: /^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jūn/i, /^jūl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[spotc]/i, short: /^(sv|pi|o|t|c|pk|s)/i, abbreviated: /^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i, wide: /^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^p/i, /^o/i, /^t/i, /^c/i, /^p/i, /^s/i], any: [/^sv/i, /^pi/i, /^o/i, /^t/i, /^c/i, /^p/i, /^se/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/, abbreviated: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/, wide: /^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^am/i, pm: /^pm/i, midnight: /^pusn/i, noon: /^pusd/i, morning: /^r/i, afternoon: /^(d|pēc)/i, evening: /^v/i, night: /^n/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "за " + t : "пред " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "помалку од секунда", other: "помалку од {{count}} секунди"},
            xSeconds        : {one: "1 секунда", other: "{{count}} секунди"},
            halfAMinute     : "половина минута",
            lessThanXMinutes: {one: "помалку од минута", other: "помалку од {{count}} минути"},
            xMinutes        : {one: "1 минута", other: "{{count}} минути"},
            aboutXHours     : {one: "околу 1 час", other: "околу {{count}} часа"},
            xHours          : {one: "1 час", other: "{{count}} часа"},
            xDays           : {one: "1 ден", other: "{{count}} дена"},
            aboutXWeeks     : {one: "околу 1 недела", other: "околу {{count}} месеци"},
            xWeeks          : {one: "1 недела", other: "{{count}} недели"},
            aboutXMonths    : {one: "околу 1 месец", other: "околу {{count}} недели"},
            xMonths         : {one: "1 месец", other: "{{count}} месеци"},
            aboutXYears     : {one: "околу 1 година", other: "околу {{count}} години"},
            xYears          : {one: "1 година", other: "{{count}} години"},
            overXYears      : {one: "повеќе од 1 година", other: "повеќе од {{count}} години"},
            almostXYears    : {one: "безмалку 1 година", other: "безмалку {{count}} години"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {any: "{{date}} {{time}}"}, defaultWidth: "any"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = u[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = (a = a(4)) && a.__esModule ? a : {default: a}, r = ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"];

        function o(e) {
            var t = r[e];
            switch (e) {
                case 0:
                case 3:
                case 6:
                    return "'ова " + t + " вo' p";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "'овој " + t + " вo' p"
            }
        }

        var u = {
            lastWeek    : function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 3:
                        case 6:
                            return "'минатата " + e + " во' p";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "'минатиот " + e + " во' p"
                    }
                }()
            }, yesterday: "'вчера во' p", today: "'денес во' p", tomorrow: "'утре во' p", nextWeek: function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 3:
                        case 6:
                            return "'следната " + e + " вo' p";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "'следниот " + e + " вo' p"
                    }
                }()
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                var t = Number(e), e = t % 100;
                if (20 < e || e < 10) switch (e % 10) {
                    case 1:
                        return t + "-ви";
                    case 2:
                        return t + "-ри";
                    case 7:
                    case 8:
                        return t + "-ми"
                }
                return t + "-ти"
            },
            era          : (0, a.default)({values: {narrow: ["пр.н.е.", "н.е."], abbreviated: ["пред н. е.", "н. е."], wide: ["пред нашата ера", "нашата ера"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1-ви кв.", "2-ри кв.", "3-ти кв.", "4-ти кв."], wide: ["1-ви квартал", "2-ри квартал", "3-ти квартал", "4-ти квартал"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {abbreviated: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "септ", "окт", "ноем", "дек"], wide: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["Н", "П", "В", "С", "Ч", "П", "С"], short: ["не", "по", "вт", "ср", "че", "пе", "са"], abbreviated: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"], wide: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {wide: {am: "претпладне", pm: "попладне", midnight: "полноќ", noon: "напладне", morning: "наутро", afternoon: "попладне", evening: "навечер", night: "ноќе"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)(-?[врмт][и])?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^((пр)?н\.?\s?е\.?)/i, abbreviated: /^((пр)?н\.?\s?е\.?)/i, wide: /^(пред нашата ера|нашата ера)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^п/i, /^н/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234](-?[врт]?и?)? кв.?/i, wide: /^[1234](-?[врт]?и?)? квартал/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {abbreviated: /^(јан|фев|мар|апр|мај|јун|јул|авг|сеп|окт|ноем|дек)/i, wide: /^(јануари|февруари|март|април|мај|јуни|јули|август|септември|октомври|ноември|декември)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^ја/i, /^Ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[нпвсч]/i, short: /^(не|по|вт|ср|че|пе|са)/i, abbreviated: /^(нед|пон|вто|сре|чет|пет|саб)/i, wide: /^(недела|понеделник|вторник|среда|четврток|петок|сабота)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[аб]/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {any: /^(претп|попл|полноќ|утро|пладне|вечер|ноќ)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /претпладне/i, pm: /попладне/i, midnight: /полноќ/i, noon: /напладне/i, morning: /наутро/i, afternoon: /попладне/i, evening: /навечер/i, night: /ноќе/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            if (a = a || {}, i = "string" == typeof r[e] ? r[e] : 1 === t ? r[e].one : r[e].other.replace("{{count}}", t), a.addSuffix) {
                var t = i.split(" "), n = t.pop(), i = t.join(" ");
                switch (n) {
                    case"секунд":
                        i += " секундийн";
                        break;
                    case"минут":
                        i += " минутын";
                        break;
                    case"цаг":
                        i += " цагийн";
                        break;
                    case"өдөр":
                        i += " өдрийн";
                        break;
                    case"сар":
                        i += " сарын";
                        break;
                    case"жил":
                        i += " жилийн";
                        break;
                    case"хоног":
                        i += " хоногийн";
                        break;
                    case"гаран":
                        i += " гараны";
                        break;
                    case"хүрэхгүй":
                        i += " хүрэхгүй хугацааны";
                        break;
                    default:
                        i += n + "-н"
                }
                return 0 < a.comparison ? i + " дараа" : i + " өмнө"
            }
            return i
        };
        var r = {
            lessThanXSeconds: {one: "секунд хүрэхгүй", other: "{{count}} секунд хүрэхгүй"},
            xSeconds        : {one: "1 секунд", other: "{{count}} секунд"},
            halfAMinute     : "хагас минут",
            lessThanXMinutes: {one: "минут хүрэхгүй", other: "{{count}} минут хүрэхгүй"},
            xMinutes        : {one: "1 минут", other: "{{count}} минут"},
            aboutXHours     : {one: "ойролцоогоор 1 цаг", other: "ойролцоогоор {{count}} цаг"},
            xHours          : {one: "1 цаг", other: "{{count}} цаг"},
            xDays           : {one: "1 өдөр", other: "{{count}} өдөр"},
            aboutXWeeks     : {one: "ойролцоогоор 1 долоо хоног", other: "ойролцоогоор {{count}} долоо хоног"},
            xWeeks          : {one: "1 долоо хоног", other: "{{count}} долоо хоног"},
            aboutXMonths    : {one: "ойролцоогоор 1 сар", other: "ойролцоогоор {{count}} сар"},
            xMonths         : {one: "1 сар", other: "{{count}} сар"},
            aboutXYears     : {one: "ойролцоогоор 1 жил", other: "ойролцоогоор {{count}} жил"},
            xYears          : {one: "1 жил", other: "{{count}} жил"},
            overXYears      : {one: "1 жил гаран", other: "{{count}} жил гаран"},
            almostXYears    : {one: "бараг 1 жил", other: "бараг {{count}} жил"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "y 'оны' MMMM'ын' d, EEEE 'гараг'", long: "y 'оны' MMMM'ын' d", medium: "y 'оны' MMM'ын' d", short: "y.MM.dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'өнгөрсөн' eeee 'гарагийн' p 'цагт'", yesterday: "'өчигдөр' p 'цагт'", today: "'өнөөдөр' p 'цагт'", tomorrow: "'маргааш' p 'цагт'", nextWeek: "'ирэх' eeee 'гарагийн' p 'цагт'", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e)
            },
            era          : (0, a.default)({values: {narrow: ["НТӨ", "НТ"], abbreviated: ["НТӨ", "НТ"], wide: ["нийтийн тооллын өмнөх", "нийтийн тооллын"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["I", "II", "III", "IV"], abbreviated: ["I улирал", "II улирал", "III улирал", "IV улирал"], wide: ["1-р улирал", "2-р улирал", "3-р улирал", "4-р улирал"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], abbreviated: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"], wide: ["Нэгдүгээр сар", "Хоёрдугаар сар", "Гуравдугаар сар", "Дөрөвдүгээр сар", "Тавдугаар сар", "Зургаадугаар сар", "Долоодугаар сар", "Наймдугаар сар", "Есдүгээр сар", "Аравдугаар сар", "Арваннэгдүгээр сар", "Арван хоёрдугаар сар"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], abbreviated: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"], wide: ["нэгдүгээр сар", "хоёрдугаар сар", "гуравдугаар сар", "дөрөвдүгээр сар", "тавдугаар сар", "зургаадугаар сар", "долоодугаар сар", "наймдугаар сар", "есдүгээр сар", "аравдугаар сар", "арваннэгдүгээр сар", "арван хоёрдугаар сар"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["Н", "Д", "М", "Л", "П", "Б", "Б"], short: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"], abbreviated: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"], wide: ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"]}, defaultWidth: "wide", formattingValues: {narrow: ["Н", "Д", "М", "Л", "П", "Б", "Б"], short: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"], abbreviated: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"], wide: ["ням", "даваа", "мягмар", "лхагва", "пүрэв", "баасан", "бямба"]}, defaultFormattingWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "ү.ө.", pm: "ү.х.", midnight: "шөнө дунд", noon: "үд дунд", morning: "өглөө", afternoon: "өдөр", evening: "орой", night: "шөнө"}, abbreviated: {am: "ү.ө.", pm: "ү.х.", midnight: "шөнө дунд", noon: "үд дунд", morning: "өглөө", afternoon: "өдөр", evening: "орой", night: "шөнө"}, wide: {am: "ү.ө.", pm: "ү.х.", midnight: "шөнө дунд", noon: "үд дунд", morning: "өглөө", afternoon: "өдөр", evening: "орой", night: "шөнө"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /\d+/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(нтө|нт)/i, abbreviated: /^(нтө|нт)/i, wide: /^(нийтийн тооллын өмнө|нийтийн тооллын)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(нтө|нийтийн тооллын өмнө)/i, /^(нт|нийтийн тооллын)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^(iv|iii|ii|i)/i, abbreviated: /^(iv|iii|ii|i) улирал/i, wide: /^[1-4]-р улирал/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(i(\s|$)|1)/i, /^(ii(\s|$)|2)/i, /^(iii(\s|$)|3)/i, /^(iv(\s|$)|4)/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({
                matchPatterns    : {narrow: /^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i, abbreviated: /^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i, wide: /^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i},
                defaultMatchWidth: "wide",
                parsePatterns    : {narrow: [/^i$/i, /^ii$/i, /^iii$/i, /^iv$/i, /^v$/i, /^vi$/i, /^vii$/i, /^viii$/i, /^ix$/i, /^x$/i, /^xi$/i, /^xii$/i], any: [/^(1|нэгдүгээр)/i, /^(2|хоёрдугаар)/i, /^(3|гуравдугаар)/i, /^(4|дөрөвдүгээр)/i, /^(5|тавдугаар)/i, /^(6|зургаадугаар)/i, /^(7|долоодугаар)/i, /^(8|наймдугаар)/i, /^(9|есдүгээр)/i, /^(10|аравдугаар)/i, /^(11|арван нэгдүгээр)/i, /^(12|арван хоёрдугаар)/i]},
                defaultParseWidth: "any"
            }),
            day          : (0, a.default)({matchPatterns: {narrow: /^[ндмлпбб]/i, short: /^(ня|да|мя|лх|пү|ба|бя)/i, abbreviated: /^(ням|дав|мяг|лха|пүр|баа|бям)/i, wide: /^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^н/i, /^д/i, /^м/i, /^л/i, /^п/i, /^б/i, /^б/i], any: [/^ня/i, /^да/i, /^мя/i, /^лх/i, /^пү/i, /^ба/i, /^бя/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i, any: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^ү\.ө\./i, pm: /^ү\.х\./i, midnight: /^шөнө дунд/i, noon: /^үд дунд/i, morning: /өглөө/i, afternoon: /өдөр/i, evening: /орой/i, night: /шөнө/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "dalam masa " + t : t + " yang lalu" : t
        };
        var n = {
            lessThanXSeconds: {one: "kurang dari 1 saat", other: "kurang dari {{count}} saat"},
            xSeconds        : {one: "1 saat", other: "{{count}} saat"},
            halfAMinute     : "setengah minit",
            lessThanXMinutes: {one: "kurang dari 1 minit", other: "kurang dari {{count}} minit"},
            xMinutes        : {one: "1 minit", other: "{{count}} minit"},
            aboutXHours     : {one: "sekitar 1 jam", other: "sekitar {{count}} jam"},
            xHours          : {one: "1 jam", other: "{{count}} jam"},
            xDays           : {one: "1 hari", other: "{{count}} hari"},
            aboutXWeeks     : {one: "sekitar 1 minggu", other: "sekitar {{count}} minggu"},
            xWeeks          : {one: "1 minggu", other: "{{count}} minggu"},
            aboutXMonths    : {one: "sekitar 1 bulan", other: "sekitar {{count}} bulan"},
            xMonths         : {one: "1 bulan", other: "{{count}} bulan"},
            aboutXYears     : {one: "sekitar 1 tahun", other: "sekitar {{count}} tahun"},
            xYears          : {one: "1 tahun", other: "{{count}} tahun"},
            overXYears      : {one: "lebih dari 1 tahun", other: "lebih dari {{count}} tahun"},
            almostXYears    : {one: "hampir 1 tahun", other: "hampir {{count}} tahun"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "d/M/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH.mm.ss", long: "HH.mm.ss", medium: "HH.mm", short: "HH.mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'pukul' {{time}}", long: "{{date}} 'pukul' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'lepas pada jam' p", yesterday: "'Semalam pada jam' p", today: "'Hari ini pada jam' p", tomorrow: "'Esok pada jam' p", nextWeek: "eeee 'pada jam' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return "ke-" + Number(e)
            },
            era          : (0, a.default)({values: {narrow: ["SM", "M"], abbreviated: ["SM", "M"], wide: ["Sebelum Masihi", "Masihi"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["S1", "S2", "S3", "S4"], wide: ["Suku pertama", "Suku kedua", "Suku ketiga", "Suku keempat"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"], wide: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["A", "I", "S", "R", "K", "J", "S"], short: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], abbreviated: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], wide: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "am", pm: "pm", midnight: "tgh malam", noon: "tgh hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam"}, abbreviated: {am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam"}, wide: {am: "a.m.", pm: "p.m.", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "am", pm: "pm", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam"}, abbreviated: {am: "AM", pm: "PM", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam"}, wide: {am: "a.m.", pm: "p.m.", midnight: "tengah malam", noon: "tengah hari", morning: "pagi", afternoon: "tengah hari", evening: "petang", night: "malam"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^ke-(\d+)?/i, parsePattern: /petama|\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(sm|m)/i, abbreviated: /^(s\.?\s?m\.?|m\.?)/i, wide: /^(sebelum masihi|masihi)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^s/i, /^(m)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^S[1234]/i, wide: /Suku (pertama|kedua|ketiga|keempat)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/pertama|1/i, /kedua|2/i, /ketiga|3/i, /keempat|4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i, wide: /^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^o/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^ma/i, /^ap/i, /^me/i, /^jun/i, /^jul/i, /^og/i, /^s/i, /^ok/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[aisrkj]/i, short: /^(ahd|isn|sel|rab|kha|jum|sab)/i, abbreviated: /^(ahd|isn|sel|rab|kha|jum|sab)/i, wide: /^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^a/i, /^i/i, /^s/i, /^r/i, /^k/i, /^j/i, /^s/i], any: [/^a/i, /^i/i, /^se/i, /^r/i, /^k/i, /^j/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {narrow: /^(am|pm|tengah malam|tengah hari|pagi|petang|malam)/i, any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|pagi|petang|malam)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^pm/i, midnight: /^tengah m/i, noon: /^tengah h/i, morning: /pa/i, afternoon: /tengah h/i, evening: /pe/i, night: /m/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            a = a || {};
            var n = e.match(/years/i), t = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one : 2 === t && n ? i[e].two : i[e].other.replace("{{count}}", t);
            return a.addSuffix ? 0 < a.comparison ? "f'" + t : t + " ilu" : t
        };
        var i = {
            lessThanXSeconds: {one: "inqas minn sekonda", other: "inqas minn {{count}} sekondi"},
            xSeconds        : {one: "sekonda", other: "{{count}} sekondi"},
            halfAMinute     : "nofs minuta",
            lessThanXMinutes: {one: "inqas minn minuta", other: "inqas minn {{count}} minuti"},
            xMinutes        : {one: "minuta", other: "{{count}} minuti"},
            aboutXHours     : {one: "madwar siegħa", other: "madwar {{count}} siegħat"},
            xHours          : {one: "siegħa", other: "{{count}} siegħat"},
            xDays           : {one: "ġurnata", other: "{{count}} ġranet"},
            aboutXWeeks     : {one: "madwar ġimgħa", other: "madwar {{count}} ġimgħat"},
            xWeeks          : {one: "ġimgħa", other: "{{count}} ġimgħat"},
            aboutXMonths    : {one: "madwar xahar", other: "madwar {{count}} xhur"},
            xMonths         : {one: "xahar", other: "{{count}} xhur"},
            aboutXYears     : {one: "madwar sena", two: "madwar sentejn", other: "madwar {{count}} snin"},
            xYears          : {one: "sena", two: "sentejn", other: "{{count}} snin"},
            overXYears      : {one: "aktar minn sena", two: "aktar minn sentejn", other: "aktar minn {{count}} snin"},
            almostXYears    : {one: "kważi sena", two: "kważi sentejn", other: "kważi {{count}} snin"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'li għadda' 'fil-'p", yesterday: "'Il-bieraħ fil-'p", today: "'Illum fil-'p", tomorrow: "'Għada fil-'p", nextWeek: "eeee 'fil-'p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "º"
            },
            era          : (0, a.default)({values: {narrow: ["Q", "W"], abbreviated: ["QK", "WK"], wide: ["qabel Kristu", "wara Kristu"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1. kwart", "2. kwart", "3. kwart", "4. kwart"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "Ġ", "L", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Fra", "Mar", "Apr", "Mej", "Ġun", "Lul", "Aww", "Set", "Ott", "Nov", "Diċ"], wide: ["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Diċembru"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["Ħ", "T", "T", "E", "Ħ", "Ġ", "S"], short: ["Ħa", "Tn", "Tl", "Er", "Ħa", "Ġi", "Si"], abbreviated: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"], wide: ["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "nofsillejl", noon: "nofsinhar", morning: "għodwa", afternoon: "wara nofsinhar", evening: "filgħaxija", night: "lejl"}, abbreviated: {am: "AM", pm: "PM", midnight: "nofsillejl", noon: "nofsinhar", morning: "għodwa", afternoon: "wara nofsinhar", evening: "filgħaxija", night: "lejl"}, wide: {am: "a.m.", pm: "p.m.", midnight: "nofsillejl", noon: "nofsinhar", morning: "għodwa", afternoon: "wara nofsinhar", evening: "filgħaxija", night: "lejl"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "f'nofsillejl", noon: "f'nofsinhar", morning: "filgħodu", afternoon: "wara nofsinhar", evening: "filgħaxija", night: "billejl"}, abbreviated: {am: "AM", pm: "PM", midnight: "f'nofsillejl", noon: "f'nofsinhar", morning: "filgħodu", afternoon: "wara nofsinhar", evening: "filgħaxija", night: "billejl"}, wide: {am: "a.m.", pm: "p.m.", midnight: "f'nofsillejl", noon: "f'nofsinhar", morning: "filgħodu", afternoon: "wara nofsinhar", evening: "filgħaxija", night: "billejl"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(º)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(q|w)/i, abbreviated: /^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i, wide: /^(qabel kristu|before common era|wara kristu|common era)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(q|b)/i, /^(w|c)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^k[1234]/i, wide: /^[1234](\.)? kwart/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmaglsond]/i, abbreviated: /^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i, wide: /^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^ġ/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mej/i, /^ġ/i, /^l/i, /^aw/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[ħteġs]/i, short: /^(ħa|tn|tl|er|ħa|ġi|si)/i, abbreviated: /^(ħad|tne|tli|erb|ħam|ġim|sib)/i, wide: /^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ħ/i, /^t/i, /^t/i, /^e/i, /^ħ/i, /^ġ/i, /^s/i], any: [/^(il-)?ħad/i, /^(it-)?tn/i, /^(it-)?tl/i, /^(l-)?er/i, /^(il-)?ham/i, /^(il-)?ġi/i, /^(is-)?si/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i, any: /^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^f'nofsillejl/i, noon: /^f'nofsinhar/i, morning: /għodwa/i, afternoon: /wara(\s.*)nofsinhar/i, evening: /filgħaxija/i, night: /lejl/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            a = a || {};
            var e = n[e], e = "string" == typeof e ? e : 0 === t || 1 < t ? e.plural.replace("{{count}}", t) : e.singular;
            return a.addSuffix ? 0 < a.comparison ? "om " + e : e + " siden" : e
        };
        var n = {
            lessThanXSeconds: {singular: "mindre enn ett sekund", plural: "mindre enn {{count}} sekunder"},
            xSeconds        : {singular: "ett sekund", plural: "{{count}} sekunder"},
            halfAMinute     : "et halvt minutt",
            lessThanXMinutes: {singular: "mindre enn ett minutt", plural: "mindre enn {{count}} minutter"},
            xMinutes        : {singular: "ett minutt", plural: "{{count}} minutter"},
            aboutXHours     : {singular: "omtrent en time", plural: "omtrent {{count}} timer"},
            xHours          : {singular: "en time", plural: "{{count}} timer"},
            xDays           : {singular: "en dag", plural: "{{count}} dager"},
            aboutXWeeks     : {singular: "omtrent en uke", plural: "omtrent {{count}} uker"},
            xWeeks          : {singular: "en uke", plural: "{{count}} uker"},
            aboutXMonths    : {singular: "omtrent en måned", plural: "omtrent {{count}} måneder"},
            xMonths         : {singular: "en måned", plural: "{{count}} måneder"},
            aboutXYears     : {singular: "omtrent ett år", plural: "omtrent {{count}} år"},
            xYears          : {singular: "ett år", plural: "{{count}} år"},
            overXYears      : {singular: "over ett år", plural: "over {{count}} år"},
            almostXYears    : {singular: "nesten ett år", plural: "nesten {{count}} år"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'forrige' eeee 'kl.' p", yesterday: "'i går kl.' p", today: "'i dag kl.' p", tomorrow: "'i morgen kl.' p", nextWeek: "EEEE 'kl.' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["før Kristus", "etter Kristus"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."], wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["sø", "ma", "ti", "on", "to", "fr", "lø"], abbreviated: ["søn", "man", "tir", "ons", "tor", "fre", "lør"], wide: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "a", pm: "p", midnight: "midnatt", noon: "middag", morning: "på morg.", afternoon: "på etterm.", evening: "på kvelden", night: "på natten"}, abbreviated: {am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "på morg.", afternoon: "på etterm.", evening: "på kvelden", night: "på natten"}, wide: {am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "på morgenen", afternoon: "på ettermiddagen", evening: "på kvelden", night: "på natten"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)\.?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i, abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i, wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^f/i, /^e/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? kvartal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i, wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[smtofl]/i, short: /^(sø|ma|ti|on|to|fr|lø)/i, abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i, wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i, any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a(\.?\s?m\.?)?$/i, pm: /^p(\.?\s?m\.?)?$/i, midnight: /^midn/i, noon: /^midd/i, morning: /morgen/i, afternoon: /ettermiddag/i, evening: /kveld/i, night: /natt/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "over " + t : t + " geleden" : t
        };
        var n = {
            lessThanXSeconds: {one: "minder dan een seconde", other: "minder dan {{count}} seconden"},
            xSeconds        : {one: "1 seconde", other: "{{count}} seconden"},
            halfAMinute     : "een halve minuut",
            lessThanXMinutes: {one: "minder dan een minuut", other: "minder dan {{count}} minuten"},
            xMinutes        : {one: "een minuut", other: "{{count}} minuten"},
            aboutXHours     : {one: "ongeveer 1 uur", other: "ongeveer {{count}} uur"},
            xHours          : {one: "1 uur", other: "{{count}} uur"},
            xDays           : {one: "1 dag", other: "{{count}} dagen"},
            aboutXWeeks     : {one: "ongeveer 1 week", other: "ongeveer {{count}} weken"},
            xWeeks          : {one: "1 week", other: "{{count}} weken"},
            aboutXMonths    : {one: "ongeveer 1 maand", other: "ongeveer {{count}} maanden"},
            xMonths         : {one: "1 maand", other: "{{count}} maanden"},
            aboutXYears     : {one: "ongeveer 1 jaar", other: "ongeveer {{count}} jaar"},
            xYears          : {one: "1 jaar", other: "{{count}} jaar"},
            overXYears      : {one: "meer dan 1 jaar", other: "meer dan {{count}} jaar"},
            almostXYears    : {one: "bijna 1 jaar", other: "bijna {{count}} jaar"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'vorige' eeee 'om' p", yesterday: "'gisteren om' p", today: "'vandaag om' p", tomorrow: "'morgen om' p", nextWeek: "eeee 'om' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "e"
            },
            era          : (0, a.default)({values: {narrow: ["v.C.", "n.C."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["voor Christus", "na Christus"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["Z", "M", "D", "W", "D", "V", "Z"], short: ["zo", "ma", "di", "wo", "do", "vr", "za"], abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"], wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "AM", pm: "PM", midnight: "middernacht", noon: "het middag", morning: "'s ochtends", afternoon: "'s namiddags", evening: "'s avonds", night: "'s nachts"}, abbreviated: {am: "AM", pm: "PM", midnight: "middernacht", noon: "het middag", morning: "'s ochtends", afternoon: "'s namiddags", evening: "'s avonds", night: "'s nachts"}, wide: {am: "AM", pm: "PM", midnight: "middernacht", noon: "het middag", morning: "'s ochtends", afternoon: "'s namiddags", evening: "'s avonds", night: "'s nachts"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)e?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?Chr\.?)/, wide: /^((voor|na) Christus)/}, defaultMatchWidth: "wide", parsePatterns: {any: [/^v/, /^n/]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e kwartaal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[zmdwv]/i, short: /^(zo|ma|di|wo|do|vr|za)/i, abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i, wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i], any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^am/i, pm: /^pm/i, midnight: /^middernacht/i, noon: /^het middaguur/i, morning: /ochtend/i, afternoon: /middag/i, evening: /avond/i, night: /nacht/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "over " + t : t + " geleden" : t
        };
        var n = {
            lessThanXSeconds: {one: "minder dan een seconde", other: "minder dan {{count}} seconden"},
            xSeconds        : {one: "1 seconde", other: "{{count}} seconden"},
            halfAMinute     : "een halve minuut",
            lessThanXMinutes: {one: "minder dan een minuut", other: "minder dan {{count}} minuten"},
            xMinutes        : {one: "een minuut", other: "{{count}} minuten"},
            aboutXHours     : {one: "ongeveer 1 uur", other: "ongeveer {{count}} uur"},
            xHours          : {one: "1 uur", other: "{{count}} uur"},
            xDays           : {one: "1 dag", other: "{{count}} dagen"},
            aboutXWeeks     : {one: "ongeveer 1 week", other: "ongeveer {{count}} weken"},
            xWeeks          : {one: "1 week", other: "{{count}} weken"},
            aboutXMonths    : {one: "ongeveer 1 maand", other: "ongeveer {{count}} maanden"},
            xMonths         : {one: "1 maand", other: "{{count}} maanden"},
            aboutXYears     : {one: "ongeveer 1 jaar", other: "ongeveer {{count}} jaar"},
            xYears          : {one: "1 jaar", other: "{{count}} jaar"},
            overXYears      : {one: "meer dan 1 jaar", other: "meer dan {{count}} jaar"},
            almostXYears    : {one: "bijna 1 jaar", other: "bijna {{count}} jaar"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "dd-MM-y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'om' {{time}}", long: "{{date}} 'om' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'afgelopen' eeee 'om' p", yesterday: "'gisteren om' p", today: "'vandaag om' p", tomorrow: "'morgen om' p", nextWeek: "eeee 'om' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "e"
            },
            era          : (0, a.default)({values: {narrow: ["v.C.", "n.C."], abbreviated: ["v.Chr.", "n.Chr."], wide: ["voor Christus", "na Christus"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["K1", "K2", "K3", "K4"], wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["Z", "M", "D", "W", "D", "V", "Z"], short: ["zo", "ma", "di", "wo", "do", "vr", "za"], abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"], wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts"}, abbreviated: {am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts"}, wide: {am: "AM", pm: "PM", midnight: "middernacht", noon: "het middaguur", morning: "'s ochtends", afternoon: "'s middags", evening: "'s avonds", night: "'s nachts"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)e?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^([vn]\.? ?C\.?)/, abbreviated: /^([vn]\. ?Chr\.?)/, wide: /^((voor|na) Christus)/}, defaultMatchWidth: "wide", parsePatterns: {any: [/^v/, /^n/]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^K[1234]/i, wide: /^[1234]e kwartaal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i, wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[zmdwv]/i, short: /^(zo|ma|di|wo|do|vr|za)/i, abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i, wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i], any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^am/i, pm: /^pm/i, midnight: /^middernacht/i, noon: /^het middaguur/i, morning: /ochtend/i, afternoon: /middag/i, evening: /avond/i, night: /nacht/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            a = a || {onlyNumeric: !1};
            var e = n[e], e = "string" == typeof e ? e : 0 === t || 1 < t ? a.onlyNumeric ? e.plural.replace("{{count}}", t) : e.plural.replace("{{count}}", t < 13 ? i[t] : t) : e.singular;
            return a.addSuffix ? 0 < a.comparison ? "om " + e : e + " sidan" : e
        };
        var n = {
            lessThanXSeconds: {singular: "mindre enn eitt sekund", plural: "mindre enn {{count}} sekund"},
            xSeconds        : {singular: "eitt sekund", plural: "{{count}} sekund"},
            halfAMinute     : "eit halvt minutt",
            lessThanXMinutes: {singular: "mindre enn eitt minutt", plural: "mindre enn {{count}} minutt"},
            xMinutes        : {singular: "eitt minutt", plural: "{{count}} minutt"},
            aboutXHours     : {singular: "omtrent ein time", plural: "omtrent {{count}} timar"},
            xHours          : {singular: "ein time", plural: "{{count}} timar"},
            xDays           : {singular: "ein dag", plural: "{{count}} dagar"},
            aboutXWeeks     : {singular: "omtrent ei veke", plural: "omtrent {{count}} veker"},
            xWeeks          : {singular: "ei veke", plural: "{{count}} veker"},
            aboutXMonths    : {singular: "omtrent ein månad", plural: "omtrent {{count}} månader"},
            xMonths         : {singular: "ein månad", plural: "{{count}} månader"},
            aboutXYears     : {singular: "omtrent eitt år", plural: "omtrent {{count}} år"},
            xYears          : {singular: "eitt år", plural: "{{count}} år"},
            overXYears      : {singular: "over eitt år", plural: "over {{count}} år"},
            almostXYears    : {singular: "nesten eitt år", plural: "nesten {{count}} år"}
        }, i = ["null", "ein", "to", "tre", "fire", "fem", "seks", "sju", "åtte", "ni", "ti", "elleve", "tolv"];
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'førre' eeee 'kl.' p", yesterday: "'i går kl.' p", today: "'i dag kl.' p", tomorrow: "'i morgon kl.' p", nextWeek: "EEEE 'kl.' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["før Kristus", "etter Kristus"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."], wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["su", "må", "ty", "on", "to", "fr", "lau"], abbreviated: ["sun", "mån", "tys", "ons", "tor", "fre", "laur"], wide: ["sundag", "måndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({values: {narrow: {am: "a", pm: "p", midnight: "midnatt", noon: "middag", morning: "på morg.", afternoon: "på etterm.", evening: "på kvelden", night: "på natta"}, abbreviated: {am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "på morg.", afternoon: "på etterm.", evening: "på kvelden", night: "på natta"}, wide: {am: "a.m.", pm: "p.m.", midnight: "midnatt", noon: "middag", morning: "på morgonen", afternoon: "på ettermiddagen", evening: "på kvelden", night: "på natta"}}, defaultWidth: "wide"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)\.?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i, abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i, wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^f/i, /^e/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](\.)? kvartal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i, wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[smtofl]/i, short: /^(su|må|ty|on|to|fr|la)/i, abbreviated: /^(sun|mån|tys|ons|tor|fre|laur)/i, wide: /^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^s/i, /^m/i, /^ty/i, /^o/i, /^to/i, /^f/i, /^l/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i, any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a(\.?\s?m\.?)?$/i, pm: /^p(\.?\s?m\.?)?$/i, midnight: /^midn/i, noon: /^midd/i, morning: /morgon/i, afternoon: /ettermiddag/i, evening: /kveld/i, night: /natt/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";

        function n(t, a, e) {
            var n = function () {
                if (1 === a) return t.one;
                var e = a % 100;
                if (e <= 20 && 10 < e) return t.other;
                e %= 10;
                return 2 <= e && e <= 4 ? t.twoFour : t.other
            }();
            return (n[e = e || "regular"] || n).replace("{{count}}", a)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            e = i[e];
            return (a = a || {}).addSuffix ? 0 < a.comparison ? "za " + n(e, t, "future") : n(e, t, "past") + " temu" : n(e, t)
        };
        var i = {
            lessThanXSeconds: {one: {regular: "mniej niż sekunda", past: "mniej niż sekundę", future: "mniej niż sekundę"}, twoFour: "mniej niż {{count}} sekundy", other: "mniej niż {{count}} sekund"},
            xSeconds        : {one: {regular: "sekunda", past: "sekundę", future: "sekundę"}, twoFour: "{{count}} sekundy", other: "{{count}} sekund"},
            halfAMinute     : {one: "pół minuty", twoFour: "pół minuty", other: "pół minuty"},
            lessThanXMinutes: {one: {regular: "mniej niż minuta", past: "mniej niż minutę", future: "mniej niż minutę"}, twoFour: "mniej niż {{count}} minuty", other: "mniej niż {{count}} minut"},
            xMinutes        : {one: {regular: "minuta", past: "minutę", future: "minutę"}, twoFour: "{{count}} minuty", other: "{{count}} minut"},
            aboutXHours     : {one: {regular: "około godziny", past: "około godziny", future: "około godzinę"}, twoFour: "około {{count}} godziny", other: "około {{count}} godzin"},
            xHours          : {one: {regular: "godzina", past: "godzinę", future: "godzinę"}, twoFour: "{{count}} godziny", other: "{{count}} godzin"},
            xDays           : {one: {regular: "dzień", past: "dzień", future: "1 dzień"}, twoFour: "{{count}} dni", other: "{{count}} dni"},
            aboutXWeeks     : {one: "około tygodnia", twoFour: "około {{count}} tygodni", other: "około {{count}} tygodni"},
            xWeeks          : {one: "tydzień", twoFour: "{{count}} tygodnie", other: "{{count}} tygodni"},
            aboutXMonths    : {one: "około miesiąc", twoFour: "około {{count}} miesiące", other: "około {{count}} miesięcy"},
            xMonths         : {one: "miesiąc", twoFour: "{{count}} miesiące", other: "{{count}} miesięcy"},
            aboutXYears     : {one: "około rok", twoFour: "około {{count}} lata", other: "około {{count}} lat"},
            xYears          : {one: "rok", twoFour: "{{count}} lata", other: "{{count}} lat"},
            overXYears      : {one: "ponad rok", twoFour: "ponad {{count}} lata", other: "ponad {{count}} lat"},
            almostXYears    : {one: "prawie rok", twoFour: "prawie {{count}} lata", other: "prawie {{count}} lat"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM y", long: "do MMMM y", medium: "do MMM y", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            var i = f[e];
            return "function" == typeof i ? i(e, t, a, n) : i
        };
        var r = (a = a(4)) && a.__esModule ? a : {default: a}, o = {masculine: "ostatni", feminine: "ostatnia"}, u = {masculine: "ten", feminine: "ta"}, d = {masculine: "następny", feminine: "następna"}, m = {0: "feminine", 1: "masculine", 2: "masculine", 3: "feminine", 4: "masculine", 5: "masculine", 6: "feminine"};

        function l(e, t, a, n) {
            n = function s(e, t, a, n) {
                var i = t.getUTCDay();
                return function (e) {
                    if ((0, r.default)(t, a, n)) return u;
                    if ("lastWeek" === e) return o;
                    if ("nextWeek" === e) return d;
                    throw new Error("Cannot determine adjectives for token ".concat(e))
                }(e)[m[i]]
            }(e, t, a, n);
            return "'".concat(n, "' eeee 'o' p")
        }

        var f = {lastWeek: l, yesterday: "'wczoraj o' p", today: "'dzisiaj o' p", tomorrow: "'jutro o' p", nextWeek: l, other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                e = Number(e);
                return String(e)
            },
            era          : (0, a.default)({values: {narrow: ["p.n.e.", "n.e."], abbreviated: ["p.n.e.", "n.e."], wide: ["przed naszą erą", "naszej ery"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."], wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"], abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"], wide: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"], abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"], wide: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["N", "P", "W", "Ś", "C", "P", "S"], short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"], abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."], wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]}, defaultWidth: "wide", formattingValues: {narrow: ["n", "p", "w", "ś", "c", "p", "s"], short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"], abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."], wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]}, defaultFormattingWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "półn.", noon: "poł", morning: "rano", afternoon: "popoł.", evening: "wiecz.", night: "noc"}, abbreviated: {am: "AM", pm: "PM", midnight: "północ", noon: "południe", morning: "rano", afternoon: "popołudnie", evening: "wieczór", night: "noc"}, wide: {am: "AM", pm: "PM", midnight: "północ", noon: "południe", morning: "rano", afternoon: "popołudnie", evening: "wieczór", night: "noc"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "o półn.", noon: "w poł.", morning: "rano", afternoon: "po poł.", evening: "wiecz.", night: "w nocy"}, abbreviated: {am: "AM", pm: "PM", midnight: "o północy", noon: "w południe", morning: "rano", afternoon: "po południu", evening: "wieczorem", night: "w nocy"}, wide: {am: "AM", pm: "PM", midnight: "o północy", noon: "w południe", morning: "rano", afternoon: "po południu", evening: "wieczorem", night: "w nocy"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i, abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i, wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^p/i, /^n/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^(I|II|III|IV)\s*kw\.?/i, wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/1/i, /2/i, /3/i, /4/i], any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[slmkcwpg]/i, abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i, wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i], any: [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[npwścs]/i, short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i, abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i, wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i], abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i], any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i, any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i}, defaultMatchWidth: "any", parsePatterns: {narrow: {am: /^a$/i, pm: /^p$/i, midnight: /pó(ł|l)n/i, noon: /po(ł|l)/i, morning: /rano/i, afternoon: /po\s*po(ł|l)/i, evening: /wiecz/i, night: /noc/i}, any: {am: /^am/i, pm: /^pm/i, midnight: /pó(ł|l)n/i, noon: /po(ł|l)/i, morning: /rano/i, afternoon: /po\s*po(ł|l)/i, evening: /wiecz/i, night: /noc/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "em " + t : "há " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "menos de um segundo", other: "menos de {{count}} segundos"},
            xSeconds        : {one: "1 segundo", other: "{{count}} segundos"},
            halfAMinute     : "meio minuto",
            lessThanXMinutes: {one: "menos de um minuto", other: "menos de {{count}} minutos"},
            xMinutes        : {one: "1 minuto", other: "{{count}} minutos"},
            aboutXHours     : {one: "cerca de 1 hora", other: "cerca de {{count}} horas"},
            xHours          : {one: "1 hora", other: "{{count}} horas"},
            xDays           : {one: "1 dia", other: "{{count}} dias"},
            aboutXWeeks     : {one: "cerca de 1 semana", other: "cerca de {{count}} semanas"},
            xWeeks          : {one: "1 semana", other: "{{count}} semanas"},
            aboutXMonths    : {one: "cerca de 1 mês", other: "cerca de {{count}} meses"},
            xMonths         : {one: "1 mês", other: "{{count}} meses"},
            aboutXYears     : {one: "cerca de 1 ano", other: "cerca de {{count}} anos"},
            xYears          : {one: "1 ano", other: "{{count}} anos"},
            overXYears      : {one: "mais de 1 ano", other: "mais de {{count}} anos"},
            almostXYears    : {one: "quase 1 ano", other: "quase {{count}} anos"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d MMM y", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'às' {{time}}", long: "{{date}} 'às' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = i[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = {
            lastWeek    : function (e, t, a) {
                e = e.getUTCDay();
                return "'" + (0 === e || 6 === e ? "último" : "última") + "' eeee 'às' p"
            }, yesterday: "'ontem às' p", today: "'hoje às' p", tomorrow: "'amanhã às' p", nextWeek: "eeee 'às' p", other: "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                e = Number(e), t = String((t || {}).unit);
                return "week" === t || "isoWeek" === t ? e + "ª" : e + "º"
            },
            era          : (0, a.default)({values: {narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "depois de cristo"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["D", "S", "T", "Q", "Q", "S", "S"], short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"], abbreviated: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"], wide: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "mn", noon: "md", morning: "manhã", afternoon: "tarde", evening: "tarde", night: "noite"}, abbreviated: {am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manhã", afternoon: "tarde", evening: "tarde", night: "noite"}, wide: {am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "manhã", afternoon: "tarde", evening: "tarde", night: "noite"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "mn", noon: "md", morning: "da manhã", afternoon: "da tarde", evening: "da tarde", night: "da noite"}, abbreviated: {am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manhã", afternoon: "da tarde", evening: "da tarde", night: "da noite"}, wide: {am: "a.m.", pm: "p.m.", midnight: "meia-noite", noon: "meio-dia", morning: "da manhã", afternoon: "da tarde", evening: "da tarde", night: "da noite"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)[ºªo]?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i, wide: /^(antes de cristo|depois de cristo)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^ac/i, /^dc/i], wide: [/^antes de cristo/i, /^depois de cristo/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º)? trimestre/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^[jfmajsond]/i, abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i, wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^(dom|[23456]ª?|s[aá]b)/i, short: /^(dom|[23456]ª?|s[aá]b)/i, abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i, wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i}, defaultMatchWidth: "wide", parsePatterns: {short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i], narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i], any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i, any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mn|^meia[-\s]noite/i, noon: /^md|^meio[-\s]dia/i, morning: /manhã/i, afternoon: /tarde/i, evening: /tarde/i, night: /noite/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "daqui a " + t : "há " + t : t
        };
        var n = {
            lessThanXSeconds: {one: "menos de um segundo", other: "menos de {{count}} segundos"},
            xSeconds        : {one: "1 segundo", other: "{{count}} segundos"},
            halfAMinute     : "meio minuto",
            lessThanXMinutes: {one: "menos de um minuto", other: "menos de {{count}} minutos"},
            xMinutes        : {one: "1 minuto", other: "{{count}} minutos"},
            aboutXHours     : {one: "aproximadamente 1 hora", other: "aproximadamente {{count}} horas"},
            xHours          : {one: "1 hora", other: "{{count}} horas"},
            xDays           : {one: "1 dia", other: "{{count}} dias"},
            aboutXWeeks     : {one: "aproximadamente 1 semana", other: "aproximadamente {{count}} semanas"},
            xWeeks          : {one: "1 semana", other: "{{count}} semanas"},
            aboutXMonths    : {one: "aproximadamente 1 mês", other: "aproximadamente {{count}} meses"},
            xMonths         : {one: "1 mês", other: "{{count}} meses"},
            aboutXYears     : {one: "aproximadamente 1 ano", other: "aproximadamente {{count}} anos"},
            xYears          : {one: "1 ano", other: "{{count}} anos"},
            overXYears      : {one: "mais de 1 ano", other: "mais de {{count}} anos"},
            almostXYears    : {one: "quase 1 ano", other: "quase {{count}} anos"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d 'de' MMMM 'de' y", long: "d 'de' MMMM 'de' y", medium: "d 'de' MMM 'de' y", short: "dd/MM/y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'às' {{time}}", long: "{{date}} 'às' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'na última' eeee 'às' p", yesterday: "'ontem às' p", today: "'hoje às' p", tomorrow: "'amanhã às' p", nextWeek: "eeee 'às' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e) + "º"
            },
            era          : (0, a.default)({values: {narrow: ["aC", "dC"], abbreviated: ["a.C.", "d.C."], wide: ["antes de Cristo", "depois de Cristo"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["d", "s", "t", "q", "q", "s", "s"], short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"], abbreviated: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"], wide: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manhã", afternoon: "tarde", evening: "noite", night: "madrugada"}, abbreviated: {am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manhã", afternoon: "tarde", evening: "noite", night: "madrugada"}, wide: {am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "manhã", afternoon: "tarde", evening: "noite", night: "madrugada"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manhã", afternoon: "da tarde", evening: "da noite", night: "da madrugada"}, abbreviated: {am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manhã", afternoon: "da tarde", evening: "da noite", night: "da madrugada"}, wide: {am: "AM", pm: "PM", midnight: "meia-noite", noon: "meio-dia", morning: "da manhã", afternoon: "da tarde", evening: "da noite", night: "da madrugada"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(º|ª)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ac|dc|a|d)/i, abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i, wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^ac/i, /^dc/i], wide: [/^(antes de cristo|antes da era comum)/i, /^(depois de cristo|era comum)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](º|ª)? trimestre/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i, wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ab/i, /^mai/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[dstq]/i, short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i, abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i, wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^s/i, /^t/i, /^q/i, /^q/i, /^s/i, /^s/i], any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[áa]/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i, any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^meia/i, noon: /^meio/i, morning: /manh[ãa]/i, afternoon: /tarde/i, evening: /noite/i, night: /madrugada/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "în " + t : t + " în urmă" : t
        };
        var n = {
            lessThanXSeconds: {one: "mai puțin de o secundă", other: "mai puțin de {{count}} secunde"},
            xSeconds        : {one: "1 secundă", other: "{{count}} secunde"},
            halfAMinute     : "jumătate de minut",
            lessThanXMinutes: {one: "mai puțin de un minut", other: "mai puțin de {{count}} minute"},
            xMinutes        : {one: "1 minut", other: "{{count}} minute"},
            aboutXHours     : {one: "circa 1 oră", other: "circa {{count}} ore"},
            xHours          : {one: "1 oră", other: "{{count}} ore"},
            xDays           : {one: "1 zi", other: "{{count}} zile"},
            aboutXWeeks     : {one: "circa o săptămână", other: "circa {{count}} săptămâni"},
            xWeeks          : {one: "1 săptămână", other: "{{count}} săptămâni"},
            aboutXMonths    : {one: "circa 1 lună", other: "circa {{count}} luni"},
            xMonths         : {one: "1 lună", other: "{{count}} luni"},
            aboutXYears     : {one: "circa 1 an", other: "circa {{count}} ani"},
            xYears          : {one: "1 an", other: "{{count}} ani"},
            overXYears      : {one: "peste 1 an", other: "peste {{count}} ani"},
            almostXYears    : {one: "aproape 1 an", other: "aproape {{count}} ani"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'la' {{time}}", long: "{{date}} 'la' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'trecută la' p", yesterday: "'ieri la' p", today: "'astăzi la' p", tomorrow: "'mâine la' p", nextWeek: "eeee 'viitoare la' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                e = Number(e);
                return String(e)
            },
            era          : (0, a.default)({values: {narrow: ["Î", "D"], abbreviated: ["Î.d.C.", "D.C."], wide: ["Înainte de Cristos", "După Cristos"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["T1", "T2", "T3", "T4"], wide: ["primul trimestru", "al doilea trimestru", "al treilea trimestru", "al patrulea trimestru"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"], wide: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["d", "l", "m", "m", "j", "v", "s"], short: ["du", "lu", "ma", "mi", "jo", "vi", "sâ"], abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "sâm"], wide: ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "mn", noon: "ami", morning: "dim", afternoon: "da", evening: "s", night: "n"}, abbreviated: {am: "AM", pm: "PM", midnight: "miezul nopții", noon: "amiază", morning: "dimineață", afternoon: "după-amiază", evening: "seară", night: "noapte"}, wide: {am: "a.m.", pm: "p.m.", midnight: "miezul nopții", noon: "amiază", morning: "dimineață", afternoon: "după-amiază", evening: "seară", night: "noapte"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "mn", noon: "amiază", morning: "dimineață", afternoon: "după-amiază", evening: "seară", night: "noapte"}, abbreviated: {am: "AM", pm: "PM", midnight: "miezul nopții", noon: "amiază", morning: "dimineață", afternoon: "după-amiază", evening: "seară", night: "noapte"}, wide: {am: "a.m.", pm: "p.m.", midnight: "miezul nopții", noon: "amiază", morning: "dimineață", afternoon: "după-amiază", evening: "seară", night: "noapte"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(Î|D)/i, abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i, wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^ÎC/i, /^DC/i], wide: [/^(Înainte de Cristos|Înaintea erei noastre)/i, /^(După Cristos|Era noastră)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^trimestrul [1234]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[ifmaasond]/i, abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i, wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^i/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ia/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^iun/i, /^iul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[dlmjvs]/i, short: /^(d|l|ma|mi|j|v|s)/i, abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i, wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i], any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i, any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mn/i, noon: /amiaza/i, morning: /dimineaţa/i, afternoon: /după-amiaza/i, evening: /seara/i, night: /noaptea/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";

        function n(e, t) {
            if (void 0 !== e.one && 1 === t) return e.one;
            var a = t % 10, n = t % 100;
            return (1 == a && 11 != n ? e.singularNominative : 2 <= a && a <= 4 && (n < 10 || 20 < n) ? e.singularGenitive : e.pluralGenitive).replace("{{count}}", t)
        }

        function i(a) {
            return function (e, t) {
                return t.addSuffix ? 0 < t.comparison ? a.future ? n(a.future, e) : "через " + n(a.regular, e) : a.past ? n(a.past, e) : n(a.regular, e) + " назад" : n(a.regular, e)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return r[e](t, a = a || {})
        };
        var r = {
            lessThanXSeconds: i({regular: {one: "меньше секунды", singularNominative: "меньше {{count}} секунды", singularGenitive: "меньше {{count}} секунд", pluralGenitive: "меньше {{count}} секунд"}, future: {one: "меньше, чем через секунду", singularNominative: "меньше, чем через {{count}} секунду", singularGenitive: "меньше, чем через {{count}} секунды", pluralGenitive: "меньше, чем через {{count}} секунд"}}),
            xSeconds        : i({regular: {singularNominative: "{{count}} секунда", singularGenitive: "{{count}} секунды", pluralGenitive: "{{count}} секунд"}, past: {singularNominative: "{{count}} секунду назад", singularGenitive: "{{count}} секунды назад", pluralGenitive: "{{count}} секунд назад"}, future: {singularNominative: "через {{count}} секунду", singularGenitive: "через {{count}} секунды", pluralGenitive: "через {{count}} секунд"}}),
            halfAMinute     : function (e, t) {
                return t.addSuffix ? 0 < t.comparison ? "через полминуты" : "полминуты назад" : "полминуты"
            },
            lessThanXMinutes: i({regular: {one: "меньше минуты", singularNominative: "меньше {{count}} минуты", singularGenitive: "меньше {{count}} минут", pluralGenitive: "меньше {{count}} минут"}, future: {one: "меньше, чем через минуту", singularNominative: "меньше, чем через {{count}} минуту", singularGenitive: "меньше, чем через {{count}} минуты", pluralGenitive: "меньше, чем через {{count}} минут"}}),
            xMinutes        : i({regular: {singularNominative: "{{count}} минута", singularGenitive: "{{count}} минуты", pluralGenitive: "{{count}} минут"}, past: {singularNominative: "{{count}} минуту назад", singularGenitive: "{{count}} минуты назад", pluralGenitive: "{{count}} минут назад"}, future: {singularNominative: "через {{count}} минуту", singularGenitive: "через {{count}} минуты", pluralGenitive: "через {{count}} минут"}}),
            aboutXHours     : i({regular: {singularNominative: "около {{count}} часа", singularGenitive: "около {{count}} часов", pluralGenitive: "около {{count}} часов"}, future: {singularNominative: "приблизительно через {{count}} час", singularGenitive: "приблизительно через {{count}} часа", pluralGenitive: "приблизительно через {{count}} часов"}}),
            xHours          : i({regular: {singularNominative: "{{count}} час", singularGenitive: "{{count}} часа", pluralGenitive: "{{count}} часов"}}),
            xDays           : i({regular: {singularNominative: "{{count}} день", singularGenitive: "{{count}} дня", pluralGenitive: "{{count}} дней"}}),
            aboutXWeeks     : i({regular: {singularNominative: "около {{count}} недели", singularGenitive: "около {{count}} недель", pluralGenitive: "около {{count}} недель"}, future: {singularNominative: "приблизительно через {{count}} неделю", singularGenitive: "приблизительно через {{count}} недели", pluralGenitive: "приблизительно через {{count}} недель"}}),
            xWeeks          : i({regular: {singularNominative: "{{count}} неделя", singularGenitive: "{{count}} недели", pluralGenitive: "{{count}} недель"}}),
            aboutXMonths    : i({regular: {singularNominative: "около {{count}} месяца", singularGenitive: "около {{count}} месяцев", pluralGenitive: "около {{count}} месяцев"}, future: {singularNominative: "приблизительно через {{count}} месяц", singularGenitive: "приблизительно через {{count}} месяца", pluralGenitive: "приблизительно через {{count}} месяцев"}}),
            xMonths         : i({regular: {singularNominative: "{{count}} месяц", singularGenitive: "{{count}} месяца", pluralGenitive: "{{count}} месяцев"}}),
            aboutXYears     : i({regular: {singularNominative: "около {{count}} года", singularGenitive: "около {{count}} лет", pluralGenitive: "около {{count}} лет"}, future: {singularNominative: "приблизительно через {{count}} год", singularGenitive: "приблизительно через {{count}} года", pluralGenitive: "приблизительно через {{count}} лет"}}),
            xYears          : i({regular: {singularNominative: "{{count}} год", singularGenitive: "{{count}} года", pluralGenitive: "{{count}} лет"}}),
            overXYears      : i({regular: {singularNominative: "больше {{count}} года", singularGenitive: "больше {{count}} лет", pluralGenitive: "больше {{count}} лет"}, future: {singularNominative: "больше, чем через {{count}} год", singularGenitive: "больше, чем через {{count}} года", pluralGenitive: "больше, чем через {{count}} лет"}}),
            almostXYears    : i({regular: {singularNominative: "почти {{count}} год", singularGenitive: "почти {{count}} года", pluralGenitive: "почти {{count}} лет"}, future: {singularNominative: "почти через {{count}} год", singularGenitive: "почти через {{count}} года", pluralGenitive: "почти через {{count}} лет"}})
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM y 'г.'", long: "d MMMM y 'г.'", medium: "d MMM y 'г.'", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {any: "{{date}}, {{time}}"}, defaultWidth: "any"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = u[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = (a = a(4)) && a.__esModule ? a : {default: a}, r = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];

        function o(e) {
            var t = r[e];
            return 2 === e ? "'во " + t + " в' p" : "'в " + t + " в' p"
        }

        var u = {
            lastWeek    : function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                            return "'в прошлое " + e + " в' p";
                        case 1:
                        case 2:
                        case 4:
                            return "'в прошлый " + e + " в' p";
                        case 3:
                        case 5:
                        case 6:
                            return "'в прошлую " + e + " в' p"
                    }
                }()
            }, yesterday: "'вчера в' p", today: "'сегодня в' p", tomorrow: "'завтра в' p", nextWeek: function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                            return "'в следующее " + e + " в' p";
                        case 1:
                        case 2:
                        case 4:
                            return "'в следующий " + e + " в' p";
                        case 3:
                        case 5:
                        case 6:
                            return "'в следующую " + e + " в' p"
                    }
                }()
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                t = String((t || {}).unit);
                return e + ("date" === t ? "-е" : "week" === t || "minute" === t || "second" === t ? "-я" : "-й")
            },
            era          : (0, a.default)({values: {narrow: ["до н.э.", "н.э."], abbreviated: ["до н. э.", "н. э."], wide: ["до нашей эры", "нашей эры"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."], wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], abbreviated: ["янв.", "фев.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."], wide: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"], abbreviated: ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."], wide: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["В", "П", "В", "С", "Ч", "П", "С"], short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"], abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"], wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ДП", pm: "ПП", midnight: "полн.", noon: "полд.", morning: "утро", afternoon: "день", evening: "веч.", night: "ночь"}, abbreviated: {am: "ДП", pm: "ПП", midnight: "полн.", noon: "полд.", morning: "утро", afternoon: "день", evening: "веч.", night: "ночь"}, wide: {am: "ДП", pm: "ПП", midnight: "полночь", noon: "полдень", morning: "утро", afternoon: "день", evening: "вечер", night: "ночь"}},
                defaultWidth          : "any",
                formattingValues      : {narrow: {am: "ДП", pm: "ПП", midnight: "полн.", noon: "полд.", morning: "утра", afternoon: "дня", evening: "веч.", night: "ночи"}, abbreviated: {am: "ДП", pm: "ПП", midnight: "полн.", noon: "полд.", morning: "утра", afternoon: "дня", evening: "веч.", night: "ночи"}, wide: {am: "ДП", pm: "ПП", midnight: "полночь", noon: "полдень", morning: "утра", afternoon: "дня", evening: "вечера", night: "ночи"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^((до )?н\.?\s?э\.?)/i, abbreviated: /^((до )?н\.?\s?э\.?)/i, wide: /^(до нашей эры|нашей эры|наша эра)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^д/i, /^н/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i, wide: /^[1234](-?[ыои]?й?)? квартал/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[яфмаисонд]/i, abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i, wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i], any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[впсч]/i, short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i, abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i, wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i, abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i, wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i}, defaultMatchWidth: "wide", parsePatterns: {any: {am: /^дп/i, pm: /^пп/i, midnight: /^полн/i, noon: /^полд/i, morning: /^у/i, afternoon: /^д[ен]/i, evening: /^в/i, night: /^н/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";

        function n(e, t, a) {
            e = 1 === t ? e.one : 2 <= t && t <= 4 ? e.twoFour : e.other;
            return (e[a] || e).replace("{{count}}", t)
        }

        function i(e) {
            e = "about" === e ? "približne" : "almost" === e ? "takmer" : "";
            return 0 < e.length ? e + " " : ""
        }

        function r(e) {
            e = "over" === e ? "viac než" : "lessThan" === e ? "menej než" : "";
            return 0 < e.length ? e + " " : ""
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            a = a || {};
            var o, u = (o = e, ["lessThan", "about", "over", "almost"].filter(function (e) {
                return !!o.match(new RegExp("^" + e))
            })[0] || ""), e = (e = e.substring(u.length)).charAt(0).toLowerCase() + e.slice(1), e = d[e];
            return a.addSuffix ? 0 < a.comparison ? i(u) + "o " + r(u) + n(e, t, "future") : i(u) + "pred " + r(u) + n(e, t, "past") : i(u) + r(u) + n(e, t, "regular")
        };
        var d = {
            xSeconds   : {one: {regular: "sekunda", past: "sekundou", future: "sekundu"}, twoFour: {regular: "{{count}} sekundy", past: "{{count}} sekundami", future: "{{count}} sekundy"}, other: {regular: "{{count}} sekúnd", past: "{{count}} sekundami", future: "{{count}} sekúnd"}},
            halfAMinute: {other: {regular: "pol minúty", past: "pol minútou", future: "pol minúty"}},
            xMinutes   : {one: {regular: "minúta", past: "minútou", future: "minútu"}, twoFour: {regular: "{{count}} minúty", past: "{{count}} minútami", future: "{{count}} minúty"}, other: {regular: "{{count}} minút", past: "{{count}} minútami", future: "{{count}} minút"}},
            xHours     : {one: {regular: "hodina", past: "hodinou", future: "hodinu"}, twoFour: {regular: "{{count}} hodiny", past: "{{count}} hodinami", future: "{{count}} hodiny"}, other: {regular: "{{count}} hodín", past: "{{count}} hodinami", future: "{{count}} hodín"}},
            xDays      : {one: {regular: "deň", past: "dňom", future: "deň"}, twoFour: {regular: "{{count}} dni", past: "{{count}} dňami", future: "{{count}} dni"}, other: {regular: "{{count}} dní", past: "{{count}} dňami", future: "{{count}} dní"}},
            xWeeks     : {one: {regular: "mesiac", past: "mesiacom", future: "mesiac"}, twoFour: {regular: "{{count}} mesiace", past: "{{count}} mesiacmi", future: "{{count}} mesiace"}, other: {regular: "{{count}} mesiacov", past: "{{count}} mesiacmi", future: "{{count}} mesiacov"}},
            xMonths    : {one: {regular: "mesiac", past: "mesiacom", future: "mesiac"}, twoFour: {regular: "{{count}} mesiace", past: "{{count}} mesiacmi", future: "{{count}} mesiace"}, other: {regular: "{{count}} mesiacov", past: "{{count}} mesiacmi", future: "{{count}} mesiacov"}},
            xYears     : {one: {regular: "rok", past: "rokom", future: "rok"}, twoFour: {regular: "{{count}} roky", past: "{{count}} rokmi", future: "{{count}} roky"}, other: {regular: "{{count}} rokov", past: "{{count}} rokmi", future: "{{count}} rokov"}}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d. MMMM y", long: "d. MMMM y", medium: "d. M. y", short: "d. M. y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}}, {{time}}", long: "{{date}}, {{time}}", medium: "{{date}}, {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = u[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = (a = a(4)) && a.__esModule ? a : {default: a}, r = ["nedeľu", "pondelok", "utorok", "stredu", "štvrtok", "piatok", "sobotu"];

        function o(e) {
            return 4 === e ? "'vo' eeee 'o' p" : "'v " + r[e] + " o' p"
        }

        var u = {
            lastWeek    : function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 3:
                        case 6:
                            return "'minulú " + e + " o' p";
                        default:
                            return "'minulý' eeee 'o' p"
                    }
                }()
            }, yesterday: "'včera o' p", today: "'dnes o' p", tomorrow: "'zajtra o' p", nextWeek: function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 4:
                        case 6:
                            return "'budúcu " + e + " o' p";
                        default:
                            return "'budúci' eeee 'o' p"
                    }
                }()
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {narrow: ["pred Kr.", "po Kr."], abbreviated: ["pred Kr.", "po Kr."], wide: ["pred Kristom", "po Kristovi"]}}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1. štvrťrok", "2. štvrťrok", "3. štvrťrok", "4. štvrťrok"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"], wide: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"], wide: ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["n", "p", "u", "s", "š", "p", "s"], short: ["ne", "po", "ut", "st", "št", "pi", "so"], abbreviated: ["ne", "po", "ut", "st", "št", "pi", "so"], wide: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "AM", pm: "PM", midnight: "poln.", noon: "pol.", morning: "ráno", afternoon: "pop.", evening: "več.", night: "noc"}, abbreviated: {am: "AM", pm: "PM", midnight: "poln.", noon: "pol.", morning: "ráno", afternoon: "popol.", evening: "večer", night: "noc"}, wide: {am: "AM", pm: "PM", midnight: "polnoc", noon: "poludnie", morning: "ráno", afternoon: "popoludnie", evening: "večer", night: "noc"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "AM", pm: "PM", midnight: "o poln.", noon: "nap.", morning: "ráno", afternoon: "pop.", evening: "več.", night: "v n."}, abbreviated: {am: "AM", pm: "PM", midnight: "o poln.", noon: "napol.", morning: "ráno", afternoon: "popol.", evening: "večer", night: "v noci"}, wide: {am: "AM", pm: "PM", midnight: "o polnoci", noon: "napoludnie", morning: "ráno", afternoon: "popoludní", evening: "večer", night: "v noci"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)\.?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i, abbreviated: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i, wide: /^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^pr/i, /^(po|n)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]\. [šs]tvr[ťt]rok/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i, wide: /^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^m[áa]j/i, /^j[úu]n/i, /^j[úu]l/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[npusšp]/i, short: /^(ne|po|ut|st|št|pi|so)/i, abbreviated: /^(ne|po|ut|st|št|pi|so)/i, wide: /^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^n/i, /^p/i, /^u/i, /^s/i, /^š/i, /^p/i, /^s/i], any: [/^n/i, /^po/i, /^u/i, /^st/i, /^(št|stv)/i, /^pi/i, /^so/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i, abbreviated: /^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i, any: /^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^am/i, pm: /^pm/i, midnight: /poln/i, noon: /^(nap|(na)?pol(\.|u))/i, morning: /^r[áa]no/i, afternoon: /^pop/i, evening: /^ve[čc]/i, night: /^(noc|v n\.)/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            var n = r, i = "";
            return (a = a || {}).addSuffix && (0 < a.comparison ? (n = u, i += "čez ") : (n = o, i += "pred ")), "string" == typeof n[e] ? i += n[e] : (a = function () {
                switch (t % 100) {
                    case 1:
                        return "one";
                    case 2:
                        return "two";
                    case 3:
                    case 4:
                        return "few";
                    default:
                        return "other"
                }
            }(), i += n[e][a].replace("{{count}}", t)), i
        };
        var r = {
            lessThanXSeconds: {one: "manj kot {{count}} sekunda", two: "manj kot {{count}} sekundi", few: "manj kot {{count}} sekunde", other: "manj kot {{count}} sekund"},
            xSeconds        : {one: "{{count}} sekunda", two: "{{count}} sekundi", few: "{{count}} sekunde", other: "{{count}} sekund"},
            halfAMinute     : "pol minute",
            lessThanXMinutes: {one: "manj kot {{count}} minuta", two: "manj kot {{count}} minuti", few: "manj kot {{count}} minute", other: "manj kot {{count}} minut"},
            xMinutes        : {one: "{{count}} minuta", two: "{{count}} minuti", few: "{{count}} minute", other: "{{count}} minut"},
            aboutXHours     : {one: "približno {{count}} ura", two: "približno {{count}} uri", few: "približno {{count}} ure", other: "približno {{count}} ur"},
            xHours          : {one: "{{count}} ura", two: "{{count}} uri", few: "{{count}} ure", other: "{{count}} ur"},
            xDays           : {one: "{{count}} dan", two: "{{count}} dni", few: "{{count}} dni", other: "{{count}} dni"},
            aboutXWeeks     : {one: "približno {{count}} teden", two: "približno {{count}} tedna", few: "približno {{count}} tedne", other: "približno {{count}} tednov"},
            xWeeks          : {one: "{{count}} teden", two: "{{count}} tedna", few: "{{count}} tedne", other: "{{count}} tednov"},
            aboutXMonths    : {one: "približno {{count}} mesec", two: "približno {{count}} meseca", few: "približno {{count}} mesece", other: "približno {{count}} mesecev"},
            xMonths         : {one: "{{count}} mesec", two: "{{count}} meseca", few: "{{count}} meseci", other: "{{count}} mesecev"},
            aboutXYears     : {one: "približno {{count}} leto", two: "približno {{count}} leti", few: "približno {{count}} leta", other: "približno {{count}} let"},
            xYears          : {one: "{{count}} leto", two: "{{count}} leti", few: "{{count}} leta", other: "{{count}} let"},
            overXYears      : {one: "več kot {{count}} leto", two: "več kot {{count}} leti", few: "več kot {{count}} leta", other: "več kot {{count}} let"},
            almostXYears    : {one: "skoraj {{count}} leto", two: "skoraj {{count}} leti", few: "skoraj {{count}} leta", other: "skoraj {{count}} let"}
        }, o = {
            lessThanXSeconds: {one: "manj kot {{count}} sekundo", two: "manj kot {{count}} sekundama", few: "manj kot {{count}} sekundami", other: "manj kot {{count}} sekundami"},
            xSeconds        : {one: "{{count}} sekundo", two: "{{count}} sekundama", few: "{{count}} sekundami", other: "{{count}} sekundami"},
            halfAMinute     : "pol minute",
            lessThanXMinutes: {one: "manj kot {{count}} minuto", two: "manj kot {{count}} minutama", few: "manj kot {{count}} minutami", other: "manj kot {{count}} minutami"},
            xMinutes        : {one: "{{count}} minuto", two: "{{count}} minutama", few: "{{count}} minutami", other: "{{count}} minutami"},
            aboutXHours     : {one: "približno {{count}} uro", two: "približno {{count}} urama", few: "približno {{count}} urami", other: "približno {{count}} urami"},
            xHours          : {one: "{{count}} uro", two: "{{count}} urama", few: "{{count}} urami", other: "{{count}} urami"},
            xDays           : {one: "{{count}} dnem", two: "{{count}} dnevoma", few: "{{count}} dnevi", other: "{{count}} dnevi"},
            aboutXMonths    : {one: "približno {{count}} mesecem", two: "približno {{count}} mesecema", few: "približno {{count}} meseci", other: "približno {{count}} meseci"},
            xMonths         : {one: "{{count}} mesecem", two: "{{count}} mesecema", few: "{{count}} meseci", other: "{{count}} meseci"},
            aboutXYears     : {one: "približno {{count}} letom", two: "približno {{count}} letoma", few: "približno {{count}} leti", other: "približno {{count}} leti"},
            xYears          : {one: "{{count}} letom", two: "{{count}} letoma", few: "{{count}} leti", other: "{{count}} leti"},
            overXYears      : {one: "več kot {{count}} letom", two: "več kot {{count}} letoma", few: "več kot {{count}} leti", other: "več kot {{count}} leti"},
            almostXYears    : {one: "skoraj {{count}} letom", two: "skoraj {{count}} letoma", few: "skoraj {{count}} leti", other: "skoraj {{count}} leti"}
        }, u = {
            lessThanXSeconds: {one: "manj kot {{count}} sekundo", two: "manj kot {{count}} sekundi", few: "manj kot {{count}} sekunde", other: "manj kot {{count}} sekund"},
            xSeconds        : {one: "{{count}} sekundo", two: "{{count}} sekundi", few: "{{count}} sekunde", other: "{{count}} sekund"},
            halfAMinute     : "pol minute",
            lessThanXMinutes: {one: "manj kot {{count}} minuto", two: "manj kot {{count}} minuti", few: "manj kot {{count}} minute", other: "manj kot {{count}} minut"},
            xMinutes        : {one: "{{count}} minuto", two: "{{count}} minuti", few: "{{count}} minute", other: "{{count}} minut"},
            aboutXHours     : {one: "približno {{count}} uro", two: "približno {{count}} uri", few: "približno {{count}} ure", other: "približno {{count}} ur"},
            xHours          : {one: "{{count}} uro", two: "{{count}} uri", few: "{{count}} ure", other: "{{count}} ur"},
            xDays           : {one: "{{count}} dan", two: "{{count}} dni", few: "{{count}} dni", other: "{{count}} dni"},
            aboutXMonths    : {one: "približno {{count}} mesec", two: "približno {{count}} meseca", few: "približno {{count}} mesece", other: "približno {{count}} mesecev"},
            xMonths         : {one: "{{count}} mesec", two: "{{count}} meseca", few: "{{count}} mesece", other: "{{count}} mesecev"},
            aboutXYears     : {one: "približno {{count}} leto", two: "približno {{count}} leti", few: "približno {{count}} leta", other: "približno {{count}} let"},
            xYears          : {one: "{{count}} leto", two: "{{count}} leti", few: "{{count}} leta", other: "{{count}} let"},
            overXYears      : {one: "več kot {{count}} leto", two: "več kot {{count}} leti", few: "več kot {{count}} leta", other: "več kot {{count}} let"},
            almostXYears    : {one: "skoraj {{count}} leto", two: "skoraj {{count}} leti", few: "skoraj {{count}} leta", other: "skoraj {{count}} let"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, dd. MMMM y", long: "dd. MMMM y", medium: "d. MMM y", short: "d. MM. yy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = i[e];
            return "function" == typeof e ? e(t) : e
        };
        var i = {
            lastWeek    : function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'prejšnjo nedeljo ob' p";
                    case 3:
                        return "'prejšnjo sredo ob' p";
                    case 6:
                        return "'prejšnjo soboto ob' p";
                    default:
                        return "'prejšnji' EEEE 'ob' p"
                }
            }, yesterday: "'včeraj ob' p", today: "'danes ob' p", tomorrow: "'jutri ob' p", nextWeek: function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'naslednjo nedeljo ob' p";
                    case 3:
                        return "'naslednjo sredo ob' p";
                    case 6:
                        return "'naslednjo soboto ob' p";
                    default:
                        return "'naslednji' EEEE 'ob' p"
                }
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                e = Number(e);
                return String(e).concat(".")
            },
            era          : (0, a.default)({values: {narrow: ["pr. n. št.", "po n. št."], abbreviated: ["pr. n. št.", "po n. št."], wide: ["pred našim štetjem", "po našem štetju"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1. čet.", "2. čet.", "3. čet.", "4. čet."], wide: ["1. četrtletje", "2. četrtletje", "3. četrtletje", "4. četrtletje"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."], wide: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["n", "p", "t", "s", "č", "p", "s"], short: ["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."], abbreviated: ["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."], wide: ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "d", pm: "p", midnight: "24.00", noon: "12.00", morning: "j", afternoon: "p", evening: "v", night: "n"}, abbreviated: {am: "dop.", pm: "pop.", midnight: "poln.", noon: "pold.", morning: "jut.", afternoon: "pop.", evening: "več.", night: "noč"}, wide: {am: "dop.", pm: "pop.", midnight: "polnoč", noon: "poldne", morning: "jutro", afternoon: "popoldne", evening: "večer", night: "noč"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "d", pm: "p", midnight: "24.00", noon: "12.00", morning: "zj", afternoon: "p", evening: "zv", night: "po"}, abbreviated: {am: "dop.", pm: "pop.", midnight: "opoln.", noon: "opold.", morning: "zjut.", afternoon: "pop.", evening: "zveč.", night: "ponoči"}, wide: {am: "dop.", pm: "pop.", midnight: "opolnoči", noon: "opoldne", morning: "zjutraj", afternoon: "popoldan", evening: "zvečer", night: "ponoči"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)\./i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {abbreviated: /^(pr\. n\. št\.|po n\. št\.)/i, wide: /^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^pr/i, /^(po|na[sš]em)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?[čc]et\.?/i, wide: /^[1234]\. [čc]etrtletje/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i, wide: /^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], abbreviated: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i], wide: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "wide"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[nptsčc]/i, short: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i, abbreviated: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i, wide: /^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^n/i, /^p/i, /^t/i, /^s/i, /^[cč]/i, /^p/i, /^s/i], any: [/^n/i, /^po/i, /^t/i, /^sr/i, /^[cč]/i, /^pe/i, /^so/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {narrow: /^(d|po?|z?v|n|z?j|24\.00|12\.00)/i, any: /^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i}, defaultMatchWidth: "any", parsePatterns: {narrow: {am: /^d/i, pm: /^p/i, midnight: /^24/i, noon: /^12/i, morning: /^(z?j)/i, afternoon: /^p/i, evening: /^(z?v)/i, night: /^(n|po)/i}, any: {am: /^dop\./i, pm: /^pop\./i, midnight: /^o?poln/i, noon: /^o?pold/i, morning: /j/i, afternoon: /^pop\./i, evening: /^z?ve/i, night: /(po)?no/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "në " + t : t + " më parë" : t
        };
        var n = {
            lessThanXSeconds: {one: "më pak se një sekondë", other: "më pak se {{count}} sekonda"},
            xSeconds        : {one: "1 sekondë", other: "{{count}} sekonda"},
            halfAMinute     : "gjysëm minuti",
            lessThanXMinutes: {one: "më pak se një minute", other: "më pak se {{count}} minuta"},
            xMinutes        : {one: "1 minutë", other: "{{count}} minuta"},
            aboutXHours     : {one: "rreth 1 orë", other: "rreth {{count}} orë"},
            xHours          : {one: "1 orë", other: "{{count}} orë"},
            xDays           : {one: "1 ditë", other: "{{count}} ditë"},
            aboutXWeeks     : {one: "rreth 1 javë", other: "rreth {{count}} javë"},
            xWeeks          : {one: "1 javë", other: "{{count}} javë"},
            aboutXMonths    : {one: "rreth 1 muaj", other: "rreth {{count}} muaj"},
            xMonths         : {one: "1 muaj", other: "{{count}} muaj"},
            aboutXYears     : {one: "rreth 1 vit", other: "rreth {{count}} vite"},
            xYears          : {one: "1 vit", other: "{{count}} vite"},
            overXYears      : {one: "mbi 1 vit", other: "mbi {{count}} vite"},
            almostXYears    : {one: "pothuajse 1 vit", other: "pothuajse {{count}} vite"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'në' {{time}}", long: "{{date}} 'në' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'të' eeee 'e shkuar në' p", yesterday: "'dje në' p", today: "'sot në' p", tomorrow: "'nesër në' p", nextWeek: "eeee 'at' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                e = Number(e);
                return "hour" === String((t || {}).unit) ? e : 1 === e ? e + "-rë" : 4 === e ? e + "t" : e + "-të"
            },
            era          : (0, a.default)({values: {narrow: ["P", "M"], abbreviated: ["PK", "MK"], wide: ["Para Krishtit", "Mbas Krishtit"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["4-mujori I", "4-mujori II", "4-mujori III", "4-mujori IV"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "S", "M", "P", "M", "Q", "K", "G", "S", "T", "N", "D"], abbreviated: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj"], wide: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["D", "H", "M", "M", "E", "P", "S"], short: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"], abbreviated: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht"], wide: ["Dielë", "Hënë", "Martë", "Mërkurë", "Enjte", "Premte", "Shtunë"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "p", pm: "m", midnight: "m", noon: "d", morning: "mëngjes", afternoon: "dite", evening: "mbrëmje", night: "natë"}, abbreviated: {am: "PD", pm: "MD", midnight: "mesnëtë", noon: "drek", morning: "mëngjes", afternoon: "mbasdite", evening: "mbrëmje", night: "natë"}, wide: {am: "p.d.", pm: "m.d.", midnight: "mesnëtë", noon: "drek", morning: "mëngjes", afternoon: "mbasdite", evening: "mbrëmje", night: "natë"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "p", pm: "m", midnight: "m", noon: "d", morning: "në mëngjes", afternoon: "në mbasdite", evening: "në mbrëmje", night: "në mesnatë"}, abbreviated: {am: "PD", pm: "MD", midnight: "mesnatë", noon: "drek", morning: "në mëngjes", afternoon: "në mbasdite", evening: "në mbrëmje", night: "në mesnatë"}, wide: {am: "p.d.", pm: "m.d.", midnight: "mesnatë", noon: "drek", morning: "në mëngjes", afternoon: "në mbasdite", evening: "në mbrëmje", night: "në mesnatë"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(-rë|-të|t|)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(p|m)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(para krishtit|mbas krishtit)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^b/i, /^(p|m)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234]-mujori (i{1,3}|iv)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jsmpqkftnd]/i, abbreviated: /^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i, wide: /^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^s/i, /^m/i, /^p/i, /^m/i, /^q/i, /^k/i, /^g/i, /^s/i, /^t/i, /^n/i, /^d/i], any: [/^ja/i, /^shk/i, /^mar/i, /^pri/i, /^maj/i, /^qer/i, /^kor/i, /^gu/i, /^sht/i, /^tet/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[dhmeps]/i, short: /^(di|hë|ma|më|en|pr|sh)/i, abbreviated: /^(die|hën|mar|mër|enj|pre|sht)/i, wide: /^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^d/i, /^h/i, /^m/i, /^m/i, /^e/i, /^p/i, /^s/i], any: [/^d/i, /^h/i, /^ma/i, /^më/i, /^e/i, /^p/i, /^s/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i, any: /^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^p/i, pm: /^m/i, midnight: /^me/i, noon: /^dr/i, morning: /mëngjes/i, afternoon: /mbasdite/i, evening: /mbrëmje/i, night: /natë/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? a.addSuffix ? 0 < a.comparison ? n[e].one.withPrepositionIn : n[e].one.withPrepositionAgo : n[e].one.standalone : (1 < t % 10 && t % 10 < 5 && "1" !== String(t).substr(-2, 1) ? n[e].dual : n[e].other).replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "za " + t : "pre " + t : t
        };
        var n = {
            lessThanXSeconds: {one: {standalone: "manje od 1 sekunde", withPrepositionAgo: "manje od 1 sekunde", withPrepositionIn: "manje od 1 sekundu"}, dual: "manje od {{count}} sekunde", other: "manje od {{count}} sekundi"},
            xSeconds        : {one: {standalone: "1 sekunda", withPrepositionAgo: "1 sekunde", withPrepositionIn: "1 sekundu"}, dual: "{{count}} sekunde", other: "{{count}} sekundi"},
            halfAMinute     : "pola minute",
            lessThanXMinutes: {one: {standalone: "manje od 1 minute", withPrepositionAgo: "manje od 1 minute", withPrepositionIn: "manje od 1 minutu"}, dual: "manje od {{count}} minute", other: "manje od {{count}} minuta"},
            xMinutes        : {one: {standalone: "1 minuta", withPrepositionAgo: "1 minute", withPrepositionIn: "1 minutu"}, dual: "{{count}} minute", other: "{{count}} minuta"},
            aboutXHours     : {one: {standalone: "oko 1 sat", withPrepositionAgo: "oko 1 sat", withPrepositionIn: "oko 1 sat"}, dual: "oko {{count}} sata", other: "oko {{count}} sati"},
            xHours          : {one: {standalone: "1 sat", withPrepositionAgo: "1 sat", withPrepositionIn: "1 sat"}, dual: "{{count}} sata", other: "{{count}} sati"},
            xDays           : {one: {standalone: "1 dan", withPrepositionAgo: "1 dan", withPrepositionIn: "1 dan"}, dual: "{{count}} dana", other: "{{count}} dana"},
            aboutXWeeks     : {one: {standalone: "oko 1 nedelju", withPrepositionAgo: "oko 1 nedelju", withPrepositionIn: "oko 1 nedelju"}, dual: "oko {{count}} nedelje", other: "oko {{count}} nedelje"},
            xWeeks          : {one: {standalone: "1 nedelju", withPrepositionAgo: "1 nedelju", withPrepositionIn: "1 nedelju"}, dual: "{{count}} nedelje", other: "{{count}} nedelje"},
            aboutXMonths    : {one: {standalone: "oko 1 mesec", withPrepositionAgo: "oko 1 mesec", withPrepositionIn: "oko 1 mesec"}, dual: "oko {{count}} meseca", other: "oko {{count}} meseci"},
            xMonths         : {one: {standalone: "1 mesec", withPrepositionAgo: "1 mesec", withPrepositionIn: "1 mesec"}, dual: "{{count}} meseca", other: "{{count}} meseci"},
            aboutXYears     : {one: {standalone: "oko 1 godinu", withPrepositionAgo: "oko 1 godinu", withPrepositionIn: "oko 1 godinu"}, dual: "oko {{count}} godine", other: "oko {{count}} godina"},
            xYears          : {one: {standalone: "1 godina", withPrepositionAgo: "1 godine", withPrepositionIn: "1 godinu"}, dual: "{{count}} godine", other: "{{count}} godina"},
            overXYears      : {one: {standalone: "preko 1 godinu", withPrepositionAgo: "preko 1 godinu", withPrepositionIn: "preko 1 godinu"}, dual: "preko {{count}} godine", other: "preko {{count}} godina"},
            almostXYears    : {one: {standalone: "gotovo 1 godinu", withPrepositionAgo: "gotovo 1 godinu", withPrepositionIn: "gotovo 1 godinu"}, dual: "gotovo {{count}} godine", other: "gotovo {{count}} godina"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d. MMMM yyyy.", long: "d. MMMM yyyy.", medium: "d. MMM yy.", short: "dd. MM. yy."}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'u' {{time}}", long: "{{date}} 'u' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = i[e];
            return "function" == typeof e ? e(t) : e
        };
        var i = {
            lastWeek    : function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'prošle nedelje u' p";
                    case 3:
                        return "'prošle srede u' p";
                    case 6:
                        return "'prošle subote u' p";
                    default:
                        return "'prošli' EEEE 'u' p"
                }
            }, yesterday: "'juče u' p", today: "'danas u' p", tomorrow: "'sutra u' p", nextWeek: function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'sledeće nedelje u' p";
                    case 3:
                        return "'sledeću sredu u' p";
                    case 6:
                        return "'sledeću subotu u' p";
                    default:
                        return "'sledeći' EEEE 'u' p"
                }
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                e = Number(e);
                return String(e).concat(".")
            },
            era          : (0, a.default)({values: {narrow: ["pr.n.e.", "AD"], abbreviated: ["pr. Hr.", "po. Hr."], wide: ["Pre Hrista", "Posle Hrista"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."], wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], wide: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], wide: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["N", "P", "U", "S", "Č", "P", "S"], short: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"], abbreviated: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"], wide: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uveče", night: "noću"}, abbreviated: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uveče", night: "noću"}, wide: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "posle podne", evening: "uveče", night: "noću"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uveče", night: "noću"}, abbreviated: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "popodne", evening: "uveče", night: "noću"}, wide: {am: "AM", pm: "PM", midnight: "ponoć", noon: "podne", morning: "ujutru", afternoon: "posle podne", evening: "uveče", night: "noću"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)\./i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(pr\.n\.e\.|AD)/i, abbreviated: /^(pr\.\s?Hr\.|po\.\s?Hr\.)/i, wide: /^(Pre Hrista|pre nove ere|Posle Hrista|nova era)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^pr/i, /^(po|nova)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?kv\.?/i, wide: /^[1234]\. kvartal/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^(10|11|12|[123456789])\./i, abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i, wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(jun|juna)|(jul|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/(10|11|12|[123456789])/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^avg/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[npusčc]/i, short: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i, abbreviated: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i, wide: /^(nedelja|ponedeljak|utorak|sreda|(četvrtak|cetvrtak)|petak|subota)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {any: /^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|posle podne|ujutru)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^pono/i, noon: /^pod/i, morning: /jutro/i, afternoon: /(posle\s|po)+podne/i, evening: /(uvece|uveče)/i, night: /(nocu|noću)/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? a.addSuffix ? 0 < a.comparison ? n[e].one.withPrepositionIn : n[e].one.withPrepositionAgo : n[e].one.standalone : (1 < t % 10 && t % 10 < 5 && "1" !== String(t).substr(-2, 1) ? n[e].dual : n[e].other).replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "за " + t : "пре " + t : t
        };
        var n = {
            lessThanXSeconds: {one: {standalone: "мање од 1 секунде", withPrepositionAgo: "мање од 1 секунде", withPrepositionIn: "мање од 1 секунду"}, dual: "мање од {{count}} секунде", other: "мање од {{count}} секунди"},
            xSeconds        : {one: {standalone: "1 секунда", withPrepositionAgo: "1 секунде", withPrepositionIn: "1 секунду"}, dual: "{{count}} секунде", other: "{{count}} секунди"},
            halfAMinute     : "пола минуте",
            lessThanXMinutes: {one: {standalone: "мање од 1 минуте", withPrepositionAgo: "мање од 1 минуте", withPrepositionIn: "мање од 1 минуту"}, dual: "мање од {{count}} минуте", other: "мање од {{count}} минута"},
            xMinutes        : {one: {standalone: "1 минута", withPrepositionAgo: "1 минуте", withPrepositionIn: "1 минуту"}, dual: "{{count}} минуте", other: "{{count}} минута"},
            aboutXHours     : {one: {standalone: "око 1 сат", withPrepositionAgo: "око 1 сат", withPrepositionIn: "око 1 сат"}, dual: "око {{count}} сата", other: "око {{count}} сати"},
            xHours          : {one: {standalone: "1 сат", withPrepositionAgo: "1 сат", withPrepositionIn: "1 сат"}, dual: "{{count}} сата", other: "{{count}} сати"},
            xDays           : {one: {standalone: "1 дан", withPrepositionAgo: "1 дан", withPrepositionIn: "1 дан"}, dual: "{{count}} дана", other: "{{count}} дана"},
            aboutXWeeks     : {one: {standalone: "око 1 недељу", withPrepositionAgo: "око 1 недељу", withPrepositionIn: "око 1 недељу"}, dual: "око {{count}} недеље", other: "око {{count}} недеље"},
            xWeeks          : {one: {standalone: "1 недељу", withPrepositionAgo: "1 недељу", withPrepositionIn: "1 недељу"}, dual: "{{count}} недеље", other: "{{count}} недеље"},
            aboutXMonths    : {one: {standalone: "око 1 месец", withPrepositionAgo: "око 1 месец", withPrepositionIn: "око 1 месец"}, dual: "око {{count}} месеца", other: "око {{count}} месеци"},
            xMonths         : {one: {standalone: "1 месец", withPrepositionAgo: "1 месец", withPrepositionIn: "1 месец"}, dual: "{{count}} месеца", other: "{{count}} месеци"},
            aboutXYears     : {one: {standalone: "око 1 годину", withPrepositionAgo: "око 1 годину", withPrepositionIn: "око 1 годину"}, dual: "око {{count}} године", other: "око {{count}} година"},
            xYears          : {one: {standalone: "1 година", withPrepositionAgo: "1 године", withPrepositionIn: "1 годину"}, dual: "{{count}} године", other: "{{count}} година"},
            overXYears      : {one: {standalone: "преко 1 годину", withPrepositionAgo: "преко 1 годину", withPrepositionIn: "преко 1 годину"}, dual: "преко {{count}} године", other: "преко {{count}} година"},
            almostXYears    : {one: {standalone: "готово 1 годину", withPrepositionAgo: "готово 1 годину", withPrepositionIn: "готово 1 годину"}, dual: "готово {{count}} године", other: "готово {{count}} година"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d. MMMM yyyy.", long: "d. MMMM yyyy.", medium: "d. MMM yy.", short: "dd. MM. yy."}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss (zzzz)", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'у' {{time}}", long: "{{date}} 'у' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = i[e];
            return "function" == typeof e ? e(t) : e
        };
        var i = {
            lastWeek    : function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'прошле недеље у' p";
                    case 3:
                        return "'прошле среде у' p";
                    case 6:
                        return "'прошле суботе у' p";
                    default:
                        return "'прошли' EEEE 'у' p"
                }
            }, yesterday: "'јуче у' p", today: "'данас у' p", tomorrow: "'сутра у' p", nextWeek: function (e) {
                switch (e.getUTCDay()) {
                    case 0:
                        return "'следеће недеље у' p";
                    case 3:
                        return "'следећу среду у' p";
                    case 6:
                        return "'следећу суботу у' p";
                    default:
                        return "'следећи' EEEE 'у' p"
                }
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                e = Number(e);
                return String(e).concat(".")
            },
            era          : (0, a.default)({values: {narrow: ["пр.н.е.", "АД"], abbreviated: ["пр. Хр.", "по. Хр."], wide: ["Пре Христа", "После Христа"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1.", "2.", "3.", "4."], abbreviated: ["1. кв.", "2. кв.", "3. кв.", "4. кв."], wide: ["1. квартал", "2. квартал", "3. квартал", "4. квартал"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"], wide: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], abbreviated: ["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"], wide: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["Н", "П", "У", "С", "Ч", "П", "С"], short: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"], abbreviated: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"], wide: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "AM", pm: "PM", midnight: "поноћ", noon: "подне", morning: "ујутру", afternoon: "поподне", evening: "увече", night: "ноћу"}, abbreviated: {am: "AM", pm: "PM", midnight: "поноћ", noon: "подне", morning: "ујутру", afternoon: "поподне", evening: "увече", night: "ноћу"}, wide: {am: "AM", pm: "PM", midnight: "поноћ", noon: "подне", morning: "ујутру", afternoon: "после подне", evening: "увече", night: "ноћу"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "АМ", pm: "ПМ", midnight: "поноћ", noon: "подне", morning: "ујутру", afternoon: "поподне", evening: "увече", night: "ноћу"}, abbreviated: {am: "АМ", pm: "ПМ", midnight: "поноћ", noon: "подне", morning: "ујутру", afternoon: "поподне", evening: "увече", night: "ноћу"}, wide: {am: "AM", pm: "PM", midnight: "поноћ", noon: "подне", morning: "ујутру", afternoon: "после подне", evening: "увече", night: "ноћу"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n = {
            ordinalNumber: (0, i(a(3)).default)({
                matchPattern: /^(\d+)\./i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, n.default)({matchPatterns: {narrow: /^(пр\.н\.е\.|АД)/i, abbreviated: /^(пр\.\s?Хр\.|по\.\s?Хр\.)/i, wide: /^(Пре Христа|пре нове ере|После Христа|нова ера)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^пр/i, /^(по|нова)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, n.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]\.\s?кв\.?/i, wide: /^[1234]\. квартал/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, n.default)({matchPatterns: {narrow: /^(10|11|12|[123456789])\./i, abbreviated: /^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i, wide: /^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/(10|11|12|[123456789])/i], any: [/^ја/i, /^ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^авг/i, /^с/i, /^о/i, /^н/i, /^д/i]}, defaultParseWidth: "any"}),
            day          : (0, n.default)({matchPatterns: {narrow: /^[пусчн]/i, short: /^(нед|пон|уто|сре|чет|пет|суб)/i, abbreviated: /^(нед|пон|уто|сре|чет|пет|суб)/i, wide: /^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^п/i, /^у/i, /^с/i, /^ч/i, /^н/i], any: [/^нед/i, /^пон/i, /^уто/i, /^сре/i, /^чет/i, /^пет/i, /^суб/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, n.default)({matchPatterns: {any: /^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^поно/i, noon: /^под/i, morning: /ујутру/i, afternoon: /(после\s|по)+подне/i, evening: /(увече)/i, night: /(ноћу)/i}}, defaultParseWidth: "any"})
        };
        t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            a = a || {onlyNumeric: !1};
            var e = n[e], e = "string" == typeof e ? e : 0 === t || 1 < t ? a.onlyNumeric ? e.plural.replace("{{count}}", t) : e.plural.replace("{{count}}", t < 13 ? i[t] : t) : e.singular;
            return a.addSuffix ? 0 < a.comparison ? "om " + e : e + " sedan" : e
        };
        var n = {
            lessThanXSeconds: {singular: "mindre än en sekund", plural: "mindre än {{count}} sekunder"},
            xSeconds        : {singular: "en sekund", plural: "{{count}} sekunder"},
            halfAMinute     : "en halv minut",
            lessThanXMinutes: {singular: "mindre än en minut", plural: "mindre än {{count}} minuter"},
            xMinutes        : {singular: "en minut", plural: "{{count}} minuter"},
            aboutXHours     : {singular: "ungefär en timme", plural: "ungefär {{count}} timmar"},
            xHours          : {singular: "en timme", plural: "{{count}} timmar"},
            xDays           : {singular: "en dag", plural: "{{count}} dagar"},
            aboutXWeeks     : {singular: "ungefär en vecka", plural: "ungefär {{count}} vecka"},
            xWeeks          : {singular: "en vecka", plural: "{{count}} vecka"},
            aboutXMonths    : {singular: "ungefär en månad", plural: "ungefär {{count}} månader"},
            xMonths         : {singular: "en månad", plural: "{{count}} månader"},
            aboutXYears     : {singular: "ungefär ett år", plural: "ungefär {{count}} år"},
            xYears          : {singular: "ett år", plural: "{{count}} år"},
            overXYears      : {singular: "över ett år", plural: "över {{count}} år"},
            almostXYears    : {singular: "nästan ett år", plural: "nästan {{count}} år"}
        }, i = ["noll", "en", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio", "elva", "tolv"];
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "y-MM-dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'kl.' {{time}}", long: "{{date}} 'kl.' {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'i' EEEE's kl.' p", yesterday: "'igår kl.' p", today: "'idag kl.' p", tomorrow: "'imorgon kl.' p", nextWeek: "EEEE 'kl.' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                var t = Number(e), e = t % 100;
                if (20 < e || e < 10) switch (e % 10) {
                    case 1:
                    case 2:
                        return t + ":a"
                }
                return t + ":e"
            },
            era          : (0, a.default)({values: {narrow: ["f.Kr.", "e.Kr."], abbreviated: ["f.Kr.", "e.Kr."], wide: ["före Kristus", "efter Kristus"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], wide: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["S", "M", "T", "O", "T", "F", "L"], short: ["sö", "må", "ti", "on", "to", "fr", "lö"], abbreviated: ["sön", "mån", "tis", "ons", "tors", "fre", "lör"], wide: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "morg.", afternoon: "efterm.", evening: "kväll", night: "natt"}, abbreviated: {am: "f.m.", pm: "e.m.", midnight: "midnatt", noon: "middag", morning: "morgon", afternoon: "efterm.", evening: "kväll", night: "natt"}, wide: {am: "förmiddag", pm: "eftermiddag", midnight: "midnatt", noon: "middag", morning: "morgon", afternoon: "eftermiddag", evening: "kväll", night: "natt"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "på morg.", afternoon: "på efterm.", evening: "på kvällen", night: "på natten"}, abbreviated: {am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "på morg.", afternoon: "på efterm.", evening: "på kvällen", night: "på natten"}, wide: {am: "fm", pm: "em", midnight: "midnatt", noon: "middag", morning: "på morgonen", afternoon: "på eftermiddagen", evening: "på kvällen", night: "på natten"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(:a|:e)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i, abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i, wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^f/i, /^[ev]/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](:a|:e)? kvartalet/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\.?/i, wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[smtofl]/i, short: /^(sö|må|ti|on|to|fr|lö)/i, abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i, wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^f/i, pm: /^e/i, midnight: /^midn/i, noon: /^midd/i, morning: /morgon/i, afternoon: /eftermiddag/i, evening: /kväll/i, night: /natt/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
            var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            return (n[e].default ? i(n[e], a) : i(1 === t ? n[e].one : n[e].other, a)).replace("{{count}}", t)
        };
        var n = {
            lessThanXSeconds: {one: {default: "ஒரு வினாடிக்கு குறைவாக", in: "ஒரு வினாடிக்குள்", ago: "ஒரு வினாடிக்கு முன்பு"}, other: {default: "{{count}} வினாடிகளுக்கு குறைவாக", in: "{{count}} வினாடிகளுக்குள்", ago: "{{count}} வினாடிகளுக்கு முன்பு"}},
            xSeconds        : {one: {default: "1 வினாடி", in: "1 வினாடியில்", ago: "1 வினாடி முன்பு"}, other: {default: "{{count}} விநாடிகள்", in: "{{count}} வினாடிகளில்", ago: "{{count}} விநாடிகளுக்கு முன்பு"}},
            halfAMinute     : {default: "அரை நிமிடம்", in: "அரை நிமிடத்தில்", ago: "அரை நிமிடம் முன்பு"},
            lessThanXMinutes: {one: {default: "ஒரு நிமிடத்திற்கும் குறைவாக", in: "ஒரு நிமிடத்திற்குள்", ago: "ஒரு நிமிடத்திற்கு முன்பு"}, other: {default: "{{count}} நிமிடங்களுக்கும் குறைவாக", in: "{{count}} நிமிடங்களுக்குள்", ago: "{{count}} நிமிடங்களுக்கு முன்பு"}},
            xMinutes        : {one: {default: "1 நிமிடம்", in: "1 நிமிடத்தில்", ago: "1 நிமிடம் முன்பு"}, other: {default: "{{count}} நிமிடங்கள்", in: "{{count}} நிமிடங்களில்", ago: "{{count}} நிமிடங்களுக்கு முன்பு"}},
            aboutXHours     : {one: {default: "சுமார் 1 மணி நேரம்", in: "சுமார் 1 மணி நேரத்தில்", ago: "சுமார் 1 மணி நேரத்திற்கு முன்பு"}, other: {default: "சுமார் {{count}} மணி நேரம்", in: "சுமார் {{count}} மணி நேரத்திற்கு முன்பு", ago: "சுமார் {{count}} மணி நேரத்தில்"}},
            xHours          : {one: {default: "1 மணி நேரம்", in: "1 மணி நேரத்தில்", ago: "1 மணி நேரத்திற்கு முன்பு"}, other: {default: "{{count}} மணி நேரம்", in: "{{count}} மணி நேரத்தில்", ago: "{{count}} மணி நேரத்திற்கு முன்பு"}},
            xDays           : {one: {default: "1 நாள்", in: "1 நாளில்", ago: "1 நாள் முன்பு"}, other: {default: "{{count}} நாட்கள்", in: "{{count}} நாட்களில்", ago: "{{count}} நாட்களுக்கு முன்பு"}},
            aboutXWeeks     : {one: {default: "சுமார் 1 வாரம்", in: "சுமார் 1 வாரத்தில்", ago: "சுமார் 1 வாரம் முன்பு"}, other: {default: "சுமார் {{count}} வாரங்கள்", in: "சுமார் {{count}} வாரங்களில்", ago: "சுமார் {{count}} வாரங்களுக்கு முன்பு"}},
            xWeeks          : {one: {default: "1 வாரம்", in: "1 வாரத்தில்", ago: "1 வாரம் முன்பு"}, other: {default: "{{count}} வாரங்கள்", in: "{{count}} வாரங்களில்", ago: "{{count}} வாரங்களுக்கு முன்பு"}},
            aboutXMonths    : {one: {default: "சுமார் 1 மாதம்", in: "சுமார் 1 மாதத்தில்", ago: "சுமார் 1 மாதத்திற்கு முன்பு"}, other: {default: "சுமார் {{count}} மாதங்கள்", in: "சுமார் {{count}} மாதங்களில்", ago: "சுமார் {{count}} மாதங்களுக்கு முன்பு"}},
            xMonths         : {one: {default: "1 மாதம்", in: "1 மாதத்தில்", ago: "1 மாதம் முன்பு"}, other: {default: "{{count}} மாதங்கள்", in: "{{count}} மாதங்களில்", ago: "{{count}} மாதங்களுக்கு முன்பு"}},
            aboutXYears     : {one: {default: "சுமார் 1 வருடம்", in: "சுமார் 1 ஆண்டில்", ago: "சுமார் 1 வருடம் முன்பு"}, other: {default: "சுமார் {{count}} ஆண்டுகள்", in: "சுமார் {{count}} ஆண்டுகளில்", ago: "சுமார் {{count}} ஆண்டுகளுக்கு முன்பு"}},
            xYears          : {one: {default: "1 வருடம்", in: "1 ஆண்டில்", ago: "1 வருடம் முன்பு"}, other: {default: "{{count}} ஆண்டுகள்", in: "{{count}} ஆண்டுகளில்", ago: "{{count}} ஆண்டுகளுக்கு முன்பு"}},
            overXYears      : {one: {default: "1 வருடத்திற்கு மேல்", in: "1 வருடத்திற்கும் மேலாக", ago: "1 வருடம் முன்பு"}, other: {default: "{{count}} ஆண்டுகளுக்கும் மேலாக", in: "{{count}} ஆண்டுகளில்", ago: "{{count}} ஆண்டுகளுக்கு முன்பு"}},
            almostXYears    : {one: {default: "கிட்டத்தட்ட 1 வருடம்", in: "கிட்டத்தட்ட 1 ஆண்டில்", ago: "கிட்டத்தட்ட 1 வருடம் முன்பு"}, other: {default: "கிட்டத்தட்ட {{count}} ஆண்டுகள்", in: "கிட்டத்தட்ட {{count}} ஆண்டுகளில்", ago: "கிட்டத்தட்ட {{count}} ஆண்டுகளுக்கு முன்பு"}}
        };

        function i(e, t) {
            return t.addSuffix ? 0 < t.comparison ? e.in : e.ago : e.default
        }

        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, d MMMM, y", long: "d MMMM, y", medium: "d MMM, y", short: "d/M/yy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "a h:mm:ss zzzz", long: "a h:mm:ss z", medium: "a h:mm:ss", short: "a h:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'கடந்த' eeee p 'மணிக்கு'", yesterday: "'நேற்று ' p 'மணிக்கு'", today: "'இன்று ' p 'மணிக்கு'", tomorrow: "'நாளை ' p 'மணிக்கு'", nextWeek: "eeee p 'மணிக்கு'", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e)
            },
            era          : (0, a.default)({values: {narrow: ["கி.மு.", "கி.பி."], abbreviated: ["கி.மு.", "கி.பி."], wide: ["கிறிஸ்துவுக்கு முன்", "அன்னோ டோமினி"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["காலா.1", "காலா.2", "காலா.3", "காலா.4"], wide: ["ஒன்றாம் காலாண்டு", "இரண்டாம் காலாண்டு", "மூன்றாம் காலாண்டு", "நான்காம் காலாண்டு"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["ஜ", "பி", "மா", "ஏ", "மே", "ஜூ", "ஜூ", "ஆ", "செ", "அ", "ந", "டி"], abbreviated: ["ஜன.", "பிப்.", "மார்.", "ஏப்.", "மே", "ஜூன்", "ஜூலை", "ஆக.", "செப்.", "அக்.", "நவ.", "டிச."], wide: ["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"], short: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"], abbreviated: ["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"], wide: ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "மு.ப", pm: "பி.ப", midnight: "நள்.", noon: "நண்.", morning: "கா.", afternoon: "மதி.", evening: "மா.", night: "இர."}, abbreviated: {am: "முற்பகல்", pm: "பிற்பகல்", midnight: "நள்ளிரவு", noon: "நண்பகல்", morning: "காலை", afternoon: "மதியம்", evening: "மாலை", night: "இரவு"}, wide: {am: "முற்பகல்", pm: "பிற்பகல்", midnight: "நள்ளிரவு", noon: "நண்பகல்", morning: "காலை", afternoon: "மதியம்", evening: "மாலை", night: "இரவு"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "மு.ப", pm: "பி.ப", midnight: "நள்.", noon: "நண்.", morning: "கா.", afternoon: "மதி.", evening: "மா.", night: "இர."}, abbreviated: {am: "முற்பகல்", pm: "பிற்பகல்", midnight: "நள்ளிரவு", noon: "நண்பகல்", morning: "காலை", afternoon: "மதியம்", evening: "மாலை", night: "இரவு"}, wide: {am: "முற்பகல்", pm: "பிற்பகல்", midnight: "நள்ளிரவு", noon: "நண்பகல்", morning: "காலை", afternoon: "மதியம்", evening: "மாலை", night: "இரவு"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(வது)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(கி.மு.|கி.பி.)/i, abbreviated: /^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/, wide: /^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/கி\.?\s?மு\.?/, /கி\.?\s?பி\.?/]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^காலா.[1234]/i, wide: /^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/1/i, /2/i, /3/i, /4/i], any: [/(1|காலா.1|ஒன்றாம்)/i, /(2|காலா.2|இரண்டாம்)/i, /(3|காலா.3|மூன்றாம்)/i, /(4|காலா.4|நான்காம்)/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i, abbreviated: /^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i, wide: /^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ஜ$/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூ/i, /^ஜூ/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i], any: [/^ஜன/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூன்/i, /^ஜூலை/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i, short: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i, abbreviated: /^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i, wide: /^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i], any: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i, any: /^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^மு/i, pm: /^பி/i, midnight: /^நள்/i, noon: /^நண்/i, morning: /காலை/i, afternoon: /மதியம்/i, evening: /மாலை/i, night: /இரவு/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            e = (a = a || {}).addSuffix ? n[e].withPreposition : n[e].standalone, t = "string" == typeof e ? e : 1 === t ? e.one : e.other.replace("{{count}}", t);
            return a.addSuffix ? 0 < a.comparison ? t + "లో" : t + " క్రితం" : t
        };
        var n = {
            lessThanXSeconds: {standalone: {one: "సెకను కన్నా తక్కువ", other: "{{count}} సెకన్ల కన్నా తక్కువ"}, withPreposition: {one: "సెకను", other: "{{count}} సెకన్ల"}},
            xSeconds        : {standalone: {one: "ఒక సెకను", other: "{{count}} సెకన్ల"}, withPreposition: {one: "ఒక సెకను", other: "{{count}} సెకన్ల"}},
            halfAMinute     : {standalone: "అర నిమిషం", withPreposition: "అర నిమిషం"},
            lessThanXMinutes: {standalone: {one: "ఒక నిమిషం కన్నా తక్కువ", other: "{{count}} నిమిషాల కన్నా తక్కువ"}, withPreposition: {one: "ఒక నిమిషం", other: "{{count}} నిమిషాల"}},
            xMinutes        : {standalone: {one: "ఒక నిమిషం", other: "{{count}} నిమిషాలు"}, withPreposition: {one: "ఒక నిమిషం", other: "{{count}} నిమిషాల"}},
            aboutXHours     : {standalone: {one: "సుమారు ఒక గంట", other: "సుమారు {{count}} గంటలు"}, withPreposition: {one: "సుమారు ఒక గంట", other: "సుమారు {{count}} గంటల"}},
            xHours          : {standalone: {one: "ఒక గంట", other: "{{count}} గంటలు"}, withPreposition: {one: "ఒక గంట", other: "{{count}} గంటల"}},
            xDays           : {standalone: {one: "ఒక రోజు", other: "{{count}} రోజులు"}, withPreposition: {one: "ఒక రోజు", other: "{{count}} రోజుల"}},
            aboutXWeeks     : {standalone: {one: "సుమారు ఒక వారం", other: "సుమారు {{count}} వారాలు"}, withPreposition: {one: "సుమారు ఒక వారం", other: "సుమారు {{count}} వారాలల"}},
            xWeeks          : {standalone: {one: "ఒక వారం", other: "{{count}} వారాలు"}, withPreposition: {one: "ఒక వారం", other: "{{count}} వారాలల"}},
            aboutXMonths    : {standalone: {one: "సుమారు ఒక నెల", other: "సుమారు {{count}} నెలలు"}, withPreposition: {one: "సుమారు ఒక నెల", other: "సుమారు {{count}} నెలల"}},
            xMonths         : {standalone: {one: "ఒక నెల", other: "{{count}} నెలలు"}, withPreposition: {one: "ఒక నెల", other: "{{count}} నెలల"}},
            aboutXYears     : {standalone: {one: "సుమారు ఒక సంవత్సరం", other: "సుమారు {{count}} సంవత్సరాలు"}, withPreposition: {one: "సుమారు ఒక సంవత్సరం", other: "సుమారు {{count}} సంవత్సరాల"}},
            xYears          : {standalone: {one: "ఒక సంవత్సరం", other: "{{count}} సంవత్సరాలు"}, withPreposition: {one: "ఒక సంవత్సరం", other: "{{count}} సంవత్సరాల"}},
            overXYears      : {standalone: {one: "ఒక సంవత్సరం పైగా", other: "{{count}} సంవత్సరాలకు పైగా"}, withPreposition: {one: "ఒక సంవత్సరం", other: "{{count}} సంవత్సరాల"}},
            almostXYears    : {standalone: {one: "దాదాపు ఒక సంవత్సరం", other: "దాదాపు {{count}} సంవత్సరాలు"}, withPreposition: {one: "దాదాపు ఒక సంవత్సరం", other: "దాదాపు {{count}} సంవత్సరాల"}}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "d, MMMM y, EEEE", long: "d MMMM, y", medium: "d MMM, y", short: "dd-MM-yy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}'కి'", long: "{{date}} {{time}}'కి'", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'గత' eeee p", yesterday: "'నిన్న' p", today: "'ఈ రోజు' p", tomorrow: "'రేపు' p", nextWeek: "'తదుపరి' eeee p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e) + "వ"
            },
            era          : (0, a.default)({values: {narrow: ["క్రీ.పూ.", "క్రీ.శ."], abbreviated: ["క్రీ.పూ.", "క్రీ.శ."], wide: ["క్రీస్తు పూర్వం", "క్రీస్తుశకం"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["త్రై1", "త్రై2", "త్రై3", "త్రై4"], wide: ["1వ త్రైమాసికం", "2వ త్రైమాసికం", "3వ త్రైమాసికం", "4వ త్రైమాసికం"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["జ", "ఫి", "మా", "ఏ", "మే", "జూ", "జు", "ఆ", "సె", "అ", "న", "డి"], abbreviated: ["జన", "ఫిబ్ర", "మార్చి", "ఏప్రి", "మే", "జూన్", "జులై", "ఆగ", "సెప్టెం", "అక్టో", "నవం", "డిసెం"], wide: ["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జులై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ఆ", "సో", "మ", "బు", "గు", "శు", "శ"], short: ["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"], abbreviated: ["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"], wide: ["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "పూర్వాహ్నం", pm: "అపరాహ్నం", midnight: "అర్ధరాత్రి", noon: "మిట్టమధ్యాహ్నం", morning: "ఉదయం", afternoon: "మధ్యాహ్నం", evening: "సాయంత్రం", night: "రాత్రి"}, abbreviated: {am: "పూర్వాహ్నం", pm: "అపరాహ్నం", midnight: "అర్ధరాత్రి", noon: "మిట్టమధ్యాహ్నం", morning: "ఉదయం", afternoon: "మధ్యాహ్నం", evening: "సాయంత్రం", night: "రాత్రి"}, wide: {am: "పూర్వాహ్నం", pm: "అపరాహ్నం", midnight: "అర్ధరాత్రి", noon: "మిట్టమధ్యాహ్నం", morning: "ఉదయం", afternoon: "మధ్యాహ్నం", evening: "సాయంత్రం", night: "రాత్రి"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "పూర్వాహ్నం", pm: "అపరాహ్నం", midnight: "అర్ధరాత్రి", noon: "మిట్టమధ్యాహ్నం", morning: "ఉదయం", afternoon: "మధ్యాహ్నం", evening: "సాయంత్రం", night: "రాత్రి"}, abbreviated: {am: "పూర్వాహ్నం", pm: "అపరాహ్నం", midnight: "అర్ధరాత్రి", noon: "మిట్టమధ్యాహ్నం", morning: "ఉదయం", afternoon: "మధ్యాహ్నం", evening: "సాయంత్రం", night: "రాత్రి"}, wide: {am: "పూర్వాహ్నం", pm: "అపరాహ్నం", midnight: "అర్ధరాత్రి", noon: "మిట్టమధ్యాహ్నం", morning: "ఉదయం", afternoon: "మధ్యాహ్నం", evening: "సాయంత్రం", night: "రాత్రి"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(వ)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(క్రీ\.పూ\.|క్రీ\.శ\.)/i, abbreviated: /^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i, wide: /^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(పూ|శ)/i, /^సా/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^త్రై[1234]/i, wide: /^[1234](వ)? త్రైమాసికం/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i, abbreviated: /^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i, wide: /^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^జ/i, /^ఫి/i, /^మా/i, /^ఏ/i, /^మే/i, /^జూ/i, /^జు/i, /^ఆ/i, /^సె/i, /^అ/i, /^న/i, /^డి/i], any: [/^జన/i, /^ఫి/i, /^మా/i, /^ఏ/i, /^మే/i, /^జూన్/i, /^జులై/i, /^ఆగ/i, /^సె/i, /^అ/i, /^న/i, /^డి/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^(ఆ|సో|మ|బు|గు|శు|శ)/i, short: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i, abbreviated: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i, wide: /^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ఆ/i, /^సో/i, /^మ/i, /^బు/i, /^గు/i, /^శు/i, /^శ/i], any: [/^ఆది/i, /^సోమ/i, /^మం/i, /^బుధ/i, /^గురు/i, /^శుక్ర/i, /^శని/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i, any: /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^పూర్వాహ్నం/i, pm: /^అపరాహ్నం/i, midnight: /^అర్ధ/i, noon: /^మిట్ట/i, morning: /ఉదయం/i, afternoon: /మధ్యాహ్నం/i, evening: /సాయంత్రం/i, night: /రాత్రి/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? "halfAMinute" === e ? "ใน" + t : "ใน " + t : t + "ที่ผ่านมา" : t
        };
        var n = {
            lessThanXSeconds: {one: "น้อยกว่า 1 วินาที", other: "น้อยกว่า {{count}} วินาที"},
            xSeconds        : {one: "1 วินาที", other: "{{count}} วินาที"},
            halfAMinute     : "ครึ่งนาที",
            lessThanXMinutes: {one: "น้อยกว่า 1 นาที", other: "น้อยกว่า {{count}} นาที"},
            xMinutes        : {one: "1 นาที", other: "{{count}} นาที"},
            aboutXHours     : {one: "ประมาณ 1 ชั่วโมง", other: "ประมาณ {{count}} ชั่วโมง"},
            xHours          : {one: "1 ชั่วโมง", other: "{{count}} ชั่วโมง"},
            xDays           : {one: "1 วัน", other: "{{count}} วัน"},
            aboutXWeeks     : {one: "ประมาณ 1 สัปดาห์", other: "ประมาณ {{count}} สัปดาห์"},
            xWeeks          : {one: "1 สัปดาห์", other: "{{count}} สัปดาห์"},
            aboutXMonths    : {one: "ประมาณ 1 เดือน", other: "ประมาณ {{count}} เดือน"},
            xMonths         : {one: "1 เดือน", other: "{{count}} เดือน"},
            aboutXYears     : {one: "ประมาณ 1 ปี", other: "ประมาณ {{count}} ปี"},
            xYears          : {one: "1 ปี", other: "{{count}} ปี"},
            overXYears      : {one: "มากกว่า 1 ปี", other: "มากกว่า {{count}} ปี"},
            almostXYears    : {one: "เกือบ 1 ปี", other: "เกือบ {{count}} ปี"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "วันEEEEที่ do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss น. zzzz", long: "H:mm:ss น. z", medium: "H:mm:ss น.", short: "H:mm น."}, defaultWidth: "medium"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'เวลา' {{time}}", long: "{{date}} 'เวลา' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee'ที่แล้วเวลา' p", yesterday: "'เมื่อวานนี้เวลา' p", today: "'วันนี้เวลา' p", tomorrow: "'พรุ่งนี้เวลา' p", nextWeek: "eeee 'เวลา' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e) {
                return Number(e)
            },
            era          : (0, a.default)({values: {narrow: ["B", "คศ"], abbreviated: ["BC", "ค.ศ."], wide: ["ปีก่อนคริสตกาล", "คริสต์ศักราช"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["ไตรมาสแรก", "ไตรมาสที่สอง", "ไตรมาสที่สาม", "ไตรมาสที่สี่"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], abbreviated: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."], wide: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."], short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."], abbreviated: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."], wide: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ก่อนเที่ยง", pm: "หลังเที่ยง", midnight: "เที่ยงคืน", noon: "เที่ยง", morning: "เช้า", afternoon: "บ่าย", evening: "เย็น", night: "กลางคืน"}, abbreviated: {am: "ก่อนเที่ยง", pm: "หลังเที่ยง", midnight: "เที่ยงคืน", noon: "เที่ยง", morning: "เช้า", afternoon: "บ่าย", evening: "เย็น", night: "กลางคืน"}, wide: {am: "ก่อนเที่ยง", pm: "หลังเที่ยง", midnight: "เที่ยงคืน", noon: "เที่ยง", morning: "เช้า", afternoon: "บ่าย", evening: "เย็น", night: "กลางคืน"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "ก่อนเที่ยง", pm: "หลังเที่ยง", midnight: "เที่ยงคืน", noon: "เที่ยง", morning: "ตอนเช้า", afternoon: "ตอนกลางวัน", evening: "ตอนเย็น", night: "ตอนกลางคืน"}, abbreviated: {am: "ก่อนเที่ยง", pm: "หลังเที่ยง", midnight: "เที่ยงคืน", noon: "เที่ยง", morning: "ตอนเช้า", afternoon: "ตอนกลางวัน", evening: "ตอนเย็น", night: "ตอนกลางคืน"}, wide: {am: "ก่อนเที่ยง", pm: "หลังเที่ยง", midnight: "เที่ยงคืน", noon: "เที่ยง", morning: "ตอนเช้า", afternoon: "ตอนกลางวัน", evening: "ตอนเย็น", night: "ตอนกลางคืน"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^\d+/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^([bB]|[aA]|คศ)/i, abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i, wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^ไตรมาส(ที่)? ?[1234]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({
                matchPatterns    : {narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i, abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i, wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i},
                defaultMatchWidth: "wide",
                parsePatterns    : {wide: [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i], any: [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i]},
                defaultParseWidth: "any"
            }),
            day          : (0, a.default)({matchPatterns: {narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i, short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i, abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i, wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i}, defaultMatchWidth: "wide", parsePatterns: {wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i], any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^ก่อนเที่ยง/i, pm: /^หลังเที่ยง/i, midnight: /^เที่ยงคืน/i, noon: /^เที่ยง/i, morning: /เช้า/i, afternoon: /บ่าย/i, evening: /เย็น/i, night: /กลางคืน/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + " sonra" : t + " önce" : t
        };
        var n = {
            lessThanXSeconds: {one: "bir saniyeden az", other: "{{count}} saniyeden az"},
            xSeconds        : {one: "1 saniye", other: "{{count}} saniye"},
            halfAMinute     : "yarım dakika",
            lessThanXMinutes: {one: "bir dakikadan az", other: "{{count}} dakikadan az"},
            xMinutes        : {one: "1 dakika", other: "{{count}} dakika"},
            aboutXHours     : {one: "yaklaşık 1 saat", other: "yaklaşık {{count}} saat"},
            xHours          : {one: "1 saat", other: "{{count}} saat"},
            xDays           : {one: "1 gün", other: "{{count}} gün"},
            aboutXWeeks     : {one: "yaklaşık 1 hafta", other: "yaklaşık {{count}} hafta"},
            xWeeks          : {one: "1 hafta", other: "{{count}} hafta"},
            aboutXMonths    : {one: "yaklaşık 1 ay", other: "yaklaşık {{count}} ay"},
            xMonths         : {one: "1 ay", other: "{{count}} ay"},
            aboutXYears     : {one: "yaklaşık 1 yıl", other: "yaklaşık {{count}} yıl"},
            xYears          : {one: "1 yıl", other: "{{count}} yıl"},
            overXYears      : {one: "1 yıldan fazla", other: "{{count}} yıldan fazla"},
            almostXYears    : {one: "neredeyse 1 yıl", other: "neredeyse {{count}} yıl"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "d MMMM y EEEE", long: "d MMMM y", medium: "d MMM y", short: "dd.MM.yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'saat' {{time}}", long: "{{date}} 'saat' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'geçen hafta' eeee 'saat' p", yesterday: "'dün saat' p", today: "'bugün saat' p", tomorrow: "'yarın saat' p", nextWeek: "eeee 'saat' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e) + "."
            },
            era          : (0, a.default)({values: {abbreviated: ["MÖ", "MS"], narrow: ["MÖ", "MS"], wide: ["Milattan Önce", "Milattan Sonra"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1Ç", "2Ç", "3Ç", "4Ç"], wide: ["İlk çeyrek", "İkinci Çeyrek", "Üçüncü çeyrek", "Son çeyrek"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"], abbreviated: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], wide: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["P", "P", "S", "Ç", "P", "C", "C"], short: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"], abbreviated: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"], wide: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values               : {narrow: {am: "öö", pm: "ös", midnight: "gy", noon: "ö", morning: "sa", afternoon: "ös", evening: "ak", night: "ge"}, abbreviated: {am: "ÖÖ", pm: "ÖS", midnight: "gece yarısı", noon: "öğle", morning: "sabah", afternoon: "öğleden sonra", evening: "akşam", night: "gece"}, wide: {am: "Ö.Ö.", pm: "Ö.S.", midnight: "gece yarısı", noon: "öğle", morning: "sabah", afternoon: "öğleden sonra", evening: "akşam", night: "gece"}},
                defaultWidth         : "wide",
                formattingValues     : {narrow: {am: "öö", pm: "ös", midnight: "gy", noon: "ö", morning: "sa", afternoon: "ös", evening: "ak", night: "ge"}, abbreviated: {am: "ÖÖ", pm: "ÖS", midnight: "gece yarısı", noon: "öğlen", morning: "sabahleyin", afternoon: "öğleden sonra", evening: "akşamleyin", night: "geceleyin"}, wide: {am: "ö.ö.", pm: "ö.s.", midnight: "gece yarısı", noon: "öğlen", morning: "sabahleyin", afternoon: "öğleden sonra", evening: "akşamleyin", night: "geceleyin"}},
                defaulFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(\.)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(mö|ms)/i, abbreviated: /^(mö|ms)/i, wide: /^(milattan önce|milattan sonra)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234]ç/i, wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i], abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i], wide: [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[oşmnhtaek]/i, abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i, wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i], any: [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[psçc]/i, short: /^(pz|pt|sa|ça|pe|cu|ct)/i, abbreviated: /^(paz|pts|sal|çar|per|cum|cts)/i, wide: /^(pazar|pazartesi|salı|çarşamba|perşembe|cuma|cumartesi)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i], any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i], wide: [/^pazar/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma/i, /cumartesi/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i, any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^ö\.?ö\.?/i, pm: /^ö\.?s\.?/i, midnight: /^(gy|gece yarısı)/i, noon: /^öğ/i, morning: /^sa/i, afternoon: /^öğleden sonra/i, evening: /^ak/i, night: /^ge/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), !a.addSuffix || 0 < a.comparison ? t : t + " بولدى"
        };
        var n = {
            lessThanXSeconds: {one: "بىر سىكۇنت ئىچىدە", other: "سىكۇنت ئىچىدە {{count}}"},
            xSeconds        : {one: "بىر سىكۇنت", other: "سىكۇنت {{count}}"},
            halfAMinute     : "يىرىم مىنۇت",
            lessThanXMinutes: {one: "بىر مىنۇت ئىچىدە", other: "مىنۇت ئىچىدە {{count}}"},
            xMinutes        : {one: "بىر مىنۇت", other: "مىنۇت {{count}}"},
            aboutXHours     : {one: "تەخمىنەن بىر سائەت", other: "سائەت {{count}} تەخمىنەن"},
            xHours          : {one: "بىر سائەت", other: "سائەت {{count}}"},
            xDays           : {one: "بىر كۈن", other: "كۈن {{count}}"},
            aboutXWeeks     : {one: "تەخمىنەن بىرھەپتە", other: "ھەپتە {{count}} تەخمىنەن"},
            xWeeks          : {one: "بىرھەپتە", other: "ھەپتە {{count}}"},
            aboutXMonths    : {one: "تەخمىنەن بىر ئاي", other: "ئاي {{count}} تەخمىنەن"},
            xMonths         : {one: "بىر ئاي", other: "ئاي {{count}}"},
            aboutXYears     : {one: "تەخمىنەن بىر يىل", other: "يىل {{count}} تەخمىنەن"},
            xYears          : {one: "بىر يىل", other: "يىل {{count}}"},
            overXYears      : {one: "بىر يىلدىن ئارتۇق", other: "يىلدىن ئارتۇق {{count}}"},
            almostXYears    : {one: "ئاساسەن بىر يىل", other: "يىل {{count}} ئاساسەن"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'دە' {{time}}", long: "{{date}} 'دە' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'ئ‍ۆتكەن' eeee 'دە' p", yesterday: "'تۈنۈگۈن دە' p", today: "'بۈگۈن دە' p", tomorrow: "'ئەتە دە' p", nextWeek: "eeee 'دە' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return String(e)
            },
            era          : (0, a.default)({values: {narrow: ["ب", "ك"], abbreviated: ["ب", "ك"], wide: ["مىيلادىدىن بۇرۇن", "مىيلادىدىن كىيىن"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1", "2", "3", "4"], wide: ["بىرىنجى چارەك", "ئىككىنجى چارەك", "ئۈچىنجى چارەك", "تۆتىنجى چارەك"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["ي", "ف", "م", "ا", "م", "ى", "ى", "ا", "س", "ۆ", "ن", "د"], abbreviated: ["يانۋار", "فېۋىرال", "مارت", "ئاپرىل", "ماي", "ئىيۇن", "ئىيول", "ئاۋغۇست", "سىنتەبىر", "ئۆكتەبىر", "نويابىر", "دىكابىر"], wide: ["يانۋار", "فېۋىرال", "مارت", "ئاپرىل", "ماي", "ئىيۇن", "ئىيول", "ئاۋغۇست", "سىنتەبىر", "ئۆكتەبىر", "نويابىر", "دىكابىر"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["ي", "د", "س", "چ", "پ", "ج", "ش"], short: ["ي", "د", "س", "چ", "پ", "ج", "ش"], abbreviated: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"], wide: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ئە", pm: "چ", midnight: "ك", noon: "چ", morning: "ئەتىگەن", afternoon: "چۈشتىن كىيىن", evening: "ئاخشىم", night: "كىچە"}, abbreviated: {am: "ئە", pm: "چ", midnight: "ك", noon: "چ", morning: "ئەتىگەن", afternoon: "چۈشتىن كىيىن", evening: "ئاخشىم", night: "كىچە"}, wide: {am: "ئە", pm: "چ", midnight: "ك", noon: "چ", morning: "ئەتىگەن", afternoon: "چۈشتىن كىيىن", evening: "ئاخشىم", night: "كىچە"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "ئە", pm: "چ", midnight: "ك", noon: "چ", morning: "ئەتىگەندە", afternoon: "چۈشتىن كىيىن", evening: "ئاخشامدا", night: "كىچىدە"}, abbreviated: {am: "ئە", pm: "چ", midnight: "ك", noon: "چ", morning: "ئەتىگەندە", afternoon: "چۈشتىن كىيىن", evening: "ئاخشامدا", night: "كىچىدە"}, wide: {am: "ئە", pm: "چ", midnight: "ك", noon: "چ", morning: "ئەتىگەندە", afternoon: "چۈشتىن كىيىن", evening: "ئاخشامدا", night: "كىچىدە"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(ب|ك)/i, wide: /^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^بۇرۇن/i, /^كىيىن/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^چ[1234]/i, wide: /^چارەك [1234]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[يفمئامئ‍ئاسۆند]/i, abbreviated: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i, wide: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ي/i, /^ف/i, /^م/i, /^ا/i, /^م/i, /^ى‍/i, /^ى‍/i, /^ا‍/i, /^س/i, /^ۆ/i, /^ن/i, /^د/i], any: [/^يان/i, /^فېۋ/i, /^مار/i, /^ئاپ/i, /^ماي/i, /^ئىيۇن/i, /^ئىيول/i, /^ئاۋ/i, /^سىن/i, /^ئۆك/i, /^نوي/i, /^دىك/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[دسچپجشي]/i, short: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i, abbreviated: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i, wide: /^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i], any: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i, any: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^ئە/i, pm: /^چ/i, midnight: /^ك/i, noon: /^چ/i, morning: /ئەتىگەن/i, afternoon: /چۈشتىن كىيىن/i, evening: /ئاخشىم/i, night: /كىچە/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";

        function n(e, t) {
            if (void 0 !== e.one && 1 === t) return e.one;
            var a = t % 10, n = t % 100;
            return (1 == a && 11 != n ? e.singularNominative : 2 <= a && a <= 4 && (n < 10 || 20 < n) ? e.singularGenitive : e.pluralGenitive).replace("{{count}}", t)
        }

        function i(a) {
            return function (e, t) {
                return t.addSuffix ? 0 < t.comparison ? a.future ? n(a.future, e) : "за " + n(a.regular, e) : a.past ? n(a.past, e) : n(a.regular, e) + " тому" : n(a.regular, e)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return r[e](t, a = a || {})
        };
        var r = {
            lessThanXSeconds: i({regular: {one: "менше секунди", singularNominative: "менше {{count}} секунди", singularGenitive: "менше {{count}} секунд", pluralGenitive: "менше {{count}} секунд"}, future: {one: "менше, ніж за секунду", singularNominative: "менше, ніж за {{count}} секунду", singularGenitive: "менше, ніж за {{count}} секунди", pluralGenitive: "менше, ніж за {{count}} секунд"}}),
            xSeconds        : i({regular: {singularNominative: "{{count}} секунда", singularGenitive: "{{count}} секунди", pluralGenitive: "{{count}} секунд"}, past: {singularNominative: "{{count}} секунду тому", singularGenitive: "{{count}} секунди тому", pluralGenitive: "{{count}} секунд тому"}, future: {singularNominative: "за {{count}} секунду", singularGenitive: "за {{count}} секунди", pluralGenitive: "за {{count}} секунд"}}),
            halfAMinute     : function (e, t) {
                return t.addSuffix ? 0 < t.comparison ? "за півхвилини" : "півхвилини тому" : "півхвилини"
            },
            lessThanXMinutes: i({regular: {one: "менше хвилини", singularNominative: "менше {{count}} хвилини", singularGenitive: "менше {{count}} хвилин", pluralGenitive: "менше {{count}} хвилин"}, future: {one: "менше, ніж за хвилину", singularNominative: "менше, ніж за {{count}} хвилину", singularGenitive: "менше, ніж за {{count}} хвилини", pluralGenitive: "менше, ніж за {{count}} хвилин"}}),
            xMinutes        : i({regular: {singularNominative: "{{count}} хвилина", singularGenitive: "{{count}} хвилини", pluralGenitive: "{{count}} хвилин"}, past: {singularNominative: "{{count}} хвилину тому", singularGenitive: "{{count}} хвилини тому", pluralGenitive: "{{count}} хвилин тому"}, future: {singularNominative: "за {{count}} хвилину", singularGenitive: "за {{count}} хвилини", pluralGenitive: "за {{count}} хвилин"}}),
            aboutXHours     : i({regular: {singularNominative: "близько {{count}} години", singularGenitive: "близько {{count}} годин", pluralGenitive: "близько {{count}} годин"}, future: {singularNominative: "приблизно за {{count}} годину", singularGenitive: "приблизно за {{count}} години", pluralGenitive: "приблизно за {{count}} годин"}}),
            xHours          : i({regular: {singularNominative: "{{count}} годину", singularGenitive: "{{count}} години", pluralGenitive: "{{count}} годин"}}),
            xDays           : i({regular: {singularNominative: "{{count}} день", singularGenitive: "{{count}} дня", pluralGenitive: "{{count}} днів"}}),
            aboutXWeeks     : i({regular: {singularNominative: "близько {{count}} тижня", singularGenitive: "близько {{count}} тижнів", pluralGenitive: "близько {{count}} тижнів"}, future: {singularNominative: "приблизно за {{count}} тиждень", singularGenitive: "приблизно за {{count}} тижні", pluralGenitive: "приблизно за {{count}} тижні"}}),
            xWeeks          : i({regular: {singularNominative: "{{count}} тиждень", singularGenitive: "{{count}} тижня", pluralGenitive: "{{count}} тижні"}}),
            aboutXMonths    : i({regular: {singularNominative: "близько {{count}} місяця", singularGenitive: "близько {{count}} місяців", pluralGenitive: "близько {{count}} місяців"}, future: {singularNominative: "приблизно за {{count}} місяць", singularGenitive: "приблизно за {{count}} місяця", pluralGenitive: "приблизно за {{count}} місяців"}}),
            xMonths         : i({regular: {singularNominative: "{{count}} місяць", singularGenitive: "{{count}} місяця", pluralGenitive: "{{count}} місяців"}}),
            aboutXYears     : i({regular: {singularNominative: "близько {{count}} року", singularGenitive: "близько {{count}} років", pluralGenitive: "близько {{count}} років"}, future: {singularNominative: "приблизно за {{count}} рік", singularGenitive: "приблизно за {{count}} роки", pluralGenitive: "приблизно за {{count}} років"}}),
            xYears          : i({regular: {singularNominative: "{{count}} рік", singularGenitive: "{{count}} роки", pluralGenitive: "{{count}} років"}}),
            overXYears      : i({regular: {singularNominative: "більше {{count}} року", singularGenitive: "більше {{count}} років", pluralGenitive: "більше {{count}} років"}, future: {singularNominative: "більше, ніж за {{count}} рік", singularGenitive: "більше, ніж за {{count}} роки", pluralGenitive: "більше, ніж за {{count}} років"}}),
            almostXYears    : i({regular: {singularNominative: "майже {{count}} рік", singularGenitive: "майже {{count}} роки", pluralGenitive: "майже {{count}} років"}, future: {singularNominative: "майже за {{count}} рік", singularGenitive: "майже за {{count}} роки", pluralGenitive: "майже за {{count}} років"}})
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM y 'р.'", long: "do MMMM y 'р.'", medium: "d MMM y 'р.'", short: "dd.MM.y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} 'о' {{time}}", long: "{{date}} 'о' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = u[e];
            return "function" == typeof e ? e(t, a, n) : e
        };
        var i = (a = a(4)) && a.__esModule ? a : {default: a}, r = ["неділю", "понеділок", "вівторок", "середу", "четвер", "п’ятницю", "суботу"];

        function o(e) {
            return "'у " + r[e] + " о' p"
        }

        var u = {
            lastWeek    : function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "'у минулу " + e + " о' p";
                        case 1:
                        case 2:
                        case 4:
                            return "'у минулий " + e + " о' p"
                    }
                }()
            }, yesterday: "'вчора о' p", today: "'сьогодні о' p", tomorrow: "'завтра о' p", nextWeek: function (e, t, a) {
                var n = e.getUTCDay();
                return (0, i.default)(e, t, a) ? o(n) : function () {
                    var e = r[n];
                    switch (n) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "'у наступну " + e + " о' p";
                        case 1:
                        case 2:
                        case 4:
                            return "'у наступний " + e + " о' p"
                    }
                }()
            }, other    : "P"
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                t = String((t || {}).unit);
                return e + ("date" === t ? 3 === e || 23 === e ? "-є" : "-е" : "minute" === t || "second" === t || "hour" === t ? "-а" : "-й")
            },
            era          : (0, a.default)({values: {narrow: ["до н.е.", "н.е."], abbreviated: ["до н. е.", "н. е."], wide: ["до нашої ери", "нашої ери"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."], wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"], abbreviated: ["січ.", "лют.", "берез.", "квіт.", "трав.", "черв.", "лип.", "серп.", "верес.", "жовт.", "листоп.", "груд."], wide: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"], abbreviated: ["січ.", "лют.", "берез.", "квіт.", "трав.", "черв.", "лип.", "серп.", "верес.", "жовт.", "листоп.", "груд."], wide: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["Н", "П", "В", "С", "Ч", "П", "С"], short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"], abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"], wide: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "ДП", pm: "ПП", midnight: "півн.", noon: "пол.", morning: "ранок", afternoon: "день", evening: "веч.", night: "ніч"}, abbreviated: {am: "ДП", pm: "ПП", midnight: "півн.", noon: "пол.", morning: "ранок", afternoon: "день", evening: "веч.", night: "ніч"}, wide: {am: "ДП", pm: "ПП", midnight: "північ", noon: "полудень", morning: "ранок", afternoon: "день", evening: "вечір", night: "ніч"}},
                defaultWidth          : "any",
                formattingValues      : {narrow: {am: "ДП", pm: "ПП", midnight: "півн.", noon: "пол.", morning: "ранку", afternoon: "дня", evening: "веч.", night: "ночі"}, abbreviated: {am: "ДП", pm: "ПП", midnight: "півн.", noon: "пол.", morning: "ранку", afternoon: "дня", evening: "веч.", night: "ночі"}, wide: {am: "ДП", pm: "ПП", midnight: "північ", noon: "полудень", morning: "ранку", afternoon: "дня", evening: "веч.", night: "ночі"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(-?(е|й|є|а|я))?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^((до )?н\.?\s?е\.?)/i, abbreviated: /^((до )?н\.?\s?е\.?)/i, wide: /^(до нашої ери|нашої ери|наша ера)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^д/i, /^н/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^[1234](-?[иі]?й?)? кв.?/i, wide: /^[1234](-?[иі]?й?)? квартал/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[слбктчвжг]/i, abbreviated: /^(січ|лют|бер|берез|кві|трав?|чер|лип|сер|вер|жов|лис(топ)?|груд)\.?/i, wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопада?|грудень|грудня)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i], any: [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[нпвсч]/i, short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i, abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i, wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i], any: [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i, abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i, wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i}, defaultMatchWidth: "wide", parsePatterns: {any: {am: /^дп/i, pm: /^пп/i, midnight: /^півн/i, noon: /^пол/i, morning: /^р/i, afternoon: /^д[ен]/i, evening: /^в/i, night: /^н/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + " dan keyin" : t + " oldin" : t
        };
        var n = {
            lessThanXSeconds: {one: "sekunddan kam", other: "{{count}} sekunddan kam"},
            xSeconds        : {one: "1 sekund", other: "{{count}} sekund"},
            halfAMinute     : "yarim minut",
            lessThanXMinutes: {one: "bir minutdan kam", other: "{{count}} minutdan kam"},
            xMinutes        : {one: "1 minut", other: "{{count}} minut"},
            aboutXHours     : {one: "tahminan 1 soat", other: "tahminan {{count}} soat"},
            xHours          : {one: "1 soat", other: "{{count}} soat"},
            xDays           : {one: "1 kun", other: "{{count}} kun"},
            aboutXWeeks     : {one: "tahminan 1 hafta", other: "tahminan {{count}} hafta"},
            xWeeks          : {one: "1 hafta", other: "{{count}} hafta"},
            aboutXMonths    : {one: "tahminan 1 oy", other: "tahminan {{count}} oy"},
            xMonths         : {one: "1 oy", other: "{{count}} oy"},
            aboutXYears     : {one: "tahminan 1 yil", other: "tahminan {{count}} yil"},
            xYears          : {one: "1 yil", other: "{{count}} yil"},
            overXYears      : {one: "1 yildan ko'p", other: "{{count}} yildan ko'p"},
            almostXYears    : {one: "deyarli 1 yil", other: "deyarli {{count}} yil"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, do MMMM, y", long: "do MMMM, y", medium: "d MMM, y", short: "dd/MM/yyyy"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "h:mm:ss zzzz", long: "h:mm:ss z", medium: "h:mm:ss", short: "h:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {any: "{{date}}, {{time}}"}, defaultWidth: "any"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'oldingi' eeee p 'da'", yesterday: "'kecha' p 'da'", today: "'bugun' p 'da'", tomorrow: "'ertaga' p 'da'", nextWeek: "eeee p 'da'", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                return Number(e)
            },
            era          : (0, a.default)({values: {narrow: ["M.A", "M."], abbreviated: ["M.A", "M."], wide: ["Miloddan Avvalgi", "Milodiy"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["CH.1", "CH.2", "CH.3", "CH.4"], wide: ["1-chi chorak", "2-chi chorak", "3-chi chorak", "4-chi chorak"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"], abbreviated: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"], wide: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["Y", "D", "S", "CH", "P", "J", "SH"], short: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"], abbreviated: ["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"], wide: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "a", pm: "p", midnight: "y.t", noon: "p.", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun"}, abbreviated: {am: "AM", pm: "PM", midnight: "yarim tun", noon: "peshin", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun"}, wide: {am: "a.m.", pm: "p.m.", midnight: "yarim tun", noon: "peshin", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "a", pm: "p", midnight: "y.t", noon: "p.", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun"}, abbreviated: {am: "AM", pm: "PM", midnight: "yarim tun", noon: "peshin", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun"}, wide: {am: "a.m.", pm: "p.m.", midnight: "yarim tun", noon: "peshin", morning: "ertalab", afternoon: "tushdan keyin", evening: "kechqurun", night: "tun"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)(chi)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(m\.a|m\.)/i, abbreviated: /^(m\.a\.?\s?m\.?)/i, wide: /^(miloddan avval|miloddan keyin)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^b/i, /^(a|c)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](chi)? chorak/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^[yfmasond]/i, abbreviated: /^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i, wide: /^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^y/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ya/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^iyun/i, /^iyul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[ydschj]/i, short: /^(ya|du|se|cho|pa|ju|sha)/i, abbreviated: /^(yak|dush|sesh|chor|pay|jum|shan)/i, wide: /^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^y/i, /^d/i, /^s/i, /^ch/i, /^p/i, /^j/i, /^sh/i], any: [/^ya/i, /^d/i, /^se/i, /^ch/i, /^p/i, /^j/i, /^sh/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i, any: /^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^y\.t/i, noon: /^pe/i, morning: /ertalab/i, afternoon: /tushdan keyin/i, evening: /kechqurun/i, night: /tun/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + " nữa" : t + " trước" : t
        };
        var n = {
            lessThanXSeconds: {one: "dưới 1 giây", other: "dưới {{count}} giây"},
            xSeconds        : {one: "1 giây", other: "{{count}} giây"},
            halfAMinute     : "nửa phút",
            lessThanXMinutes: {one: "dưới 1 phút", other: "dưới {{count}} phút"},
            xMinutes        : {one: "1 phút", other: "{{count}} phút"},
            aboutXHours     : {one: "khoảng 1 giờ", other: "khoảng {{count}} giờ"},
            xHours          : {one: "1 giờ", other: "{{count}} giờ"},
            xDays           : {one: "1 ngày", other: "{{count}} ngày"},
            aboutXWeeks     : {one: "khoảng 1 tuần", other: "khoảng {{count}} tuần"},
            xWeeks          : {one: "1 tuần", other: "{{count}} tuần"},
            aboutXMonths    : {one: "khoảng 1 tháng", other: "khoảng {{count}} tháng"},
            xMonths         : {one: "1 tháng", other: "{{count}} tháng"},
            aboutXYears     : {one: "khoảng 1 năm", other: "khoảng {{count}} năm"},
            xYears          : {one: "1 năm", other: "{{count}} năm"},
            overXYears      : {one: "hơn 1 năm", other: "hơn {{count}} năm"},
            almostXYears    : {one: "gần 1 năm", other: "gần {{count}} năm"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "EEEE, 'ngày' d MMMM 'năm' y", long: "'ngày' d MMMM 'năm' y", medium: "d MMM 'năm' y", short: "dd/MM/y"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "eeee 'tuần trước vào lúc' p", yesterday: "'hôm qua vào lúc' p", today: "'hôm nay vào lúc' p", tomorrow: "'ngày mai vào lúc' p", nextWeek: "eeee 'tới vào lúc' p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                t = String((t || {}).unit), e = parseInt(e, 10);
                if ("quarter" === t) switch (e) {
                    case 1:
                        return "I";
                    case 2:
                        return "II";
                    case 3:
                        return "III";
                    case 4:
                        return "IV"
                } else if ("day" === t) switch (e) {
                    case 1:
                        return "thứ 2";
                    case 2:
                        return "thứ 3";
                    case 3:
                        return "thứ 4";
                    case 4:
                        return "thứ 5";
                    case 5:
                        return "thứ 6";
                    case 6:
                        return "thứ 7";
                    case 7:
                        return "chủ nhật"
                } else {
                    if ("week" === t) return 1 === e ? "thứ nhất" : "thứ " + e;
                    if ("dayOfYear" === t) return 1 === e ? "đầu tiên" : "thứ " + e
                }
                return e
            },
            era          : (0, a.default)({values: {narrow: ["TCN", "SCN"], abbreviated: ["trước CN", "sau CN"], wide: ["trước Công Nguyên", "sau Công Nguyên"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["Quý 1", "Quý 2", "Quý 3", "Quý 4"]}, defaultWidth: "wide", formattingValues: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["quý I", "quý II", "quý III", "quý IV"]}, defaultFormattingWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({
                values                : {narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"], wide: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"]},
                defaultWidth          : "wide",
                formattingValues      : {narrow: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], abbreviated: ["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"], wide: ["tháng 01", "tháng 02", "tháng 03", "tháng 04", "tháng 05", "tháng 06", "tháng 07", "tháng 08", "tháng 09", "tháng 10", "tháng 11", "tháng 12"]},
                defaultFormattingWidth: "wide"
            }),
            day          : (0, a.default)({values: {narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"], abbreviated: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"], wide: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "am", pm: "pm", midnight: "nửa đêm", noon: "tr", morning: "sg", afternoon: "ch", evening: "tối", night: "đêm"}, abbreviated: {am: "AM", pm: "PM", midnight: "nửa đêm", noon: "trưa", morning: "sáng", afternoon: "chiều", evening: "tối", night: "đêm"}, wide: {am: "SA", pm: "CH", midnight: "nửa đêm", noon: "trưa", morning: "sáng", afternoon: "chiều", evening: "tối", night: "đêm"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "am", pm: "pm", midnight: "nửa đêm", noon: "tr", morning: "sg", afternoon: "ch", evening: "tối", night: "đêm"}, abbreviated: {am: "AM", pm: "PM", midnight: "nửa đêm", noon: "trưa", morning: "sáng", afternoon: "chiều", evening: "tối", night: "đêm"}, wide: {am: "SA", pm: "CH", midnight: "nửa đêm", noon: "giữa trưa", morning: "vào buổi sáng", afternoon: "vào buổi chiều", evening: "vào buổi tối", night: "vào ban đêm"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(\d+)/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(tcn|scn)/i, abbreviated: /^(trước CN|sau CN)/i, wide: /^(trước Công Nguyên|sau Công Nguyên)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^t/i, /^s/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^([1234]|i{1,3}v?)/i, abbreviated: /^q([1234]|i{1,3}v?)/i, wide: /^quý ([1234]|i{1,3}v?)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({
                matchPatterns    : {narrow: /^(0?[2-9]|10|11|12|0?1)/i, abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i, wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i},
                defaultMatchWidth: "wide",
                parsePatterns    : {narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/], abbreviated: [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i], wide: [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i]},
                defaultParseWidth: "any"
            }),
            day          : (0, a.default)({matchPatterns: {narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i, short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i, abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i, wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i], short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i], abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i], wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i, abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i, wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^(a|sa)/i, pm: /^(p|ch[^i]*)/i, midnight: /nửa đêm/i, noon: /trưa/i, morning: /sáng/i, afternoon: /chiều/i, evening: /tối/i, night: /^đêm/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + "内" : t + "前" : t
        };
        var n = {
            lessThanXSeconds: {one: "不到 1 秒", other: "不到 {{count}} 秒"},
            xSeconds        : {one: "1 秒", other: "{{count}} 秒"},
            halfAMinute     : "半分钟",
            lessThanXMinutes: {one: "不到 1 分钟", other: "不到 {{count}} 分钟"},
            xMinutes        : {one: "1 分钟", other: "{{count}} 分钟"},
            xHours          : {one: "1 小时", other: "{{count}} 小时"},
            aboutXHours     : {one: "大约 1 小时", other: "大约 {{count}} 小时"},
            xDays           : {one: "1 天", other: "{{count}} 天"},
            aboutXWeeks     : {one: "大约 1 个星期", other: "大约 {{count}} 个星期"},
            xWeeks          : {one: "1 个星期", other: "{{count}} 个星期"},
            aboutXMonths    : {one: "大约 1 个月", other: "大约 {{count}} 个月"},
            xMonths         : {one: "1 个月", other: "{{count}} 个月"},
            aboutXYears     : {one: "大约 1 年", other: "大约 {{count}} 年"},
            xYears          : {one: "1 年", other: "{{count}} 年"},
            overXYears      : {one: "超过 1 年", other: "超过 {{count}} 年"},
            almostXYears    : {one: "将近 1 年", other: "将近 {{count}} 年"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "y'年'M'月'd'日' EEEE", long: "y'年'M'月'd'日'", medium: "yyyy-MM-dd", short: "yy-MM-dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            e = o[e];
            return "function" == typeof e ? e(t, a, n, "eeee p") : e
        };
        var i = (a = a(4)) && a.__esModule ? a : {default: a};

        function r(e, t, a, n) {
            return (0, i.default)(e, t, a) ? n : e.getTime() > t.getTime() ? "'下个'" + n : "'上个'" + n
        }

        var o = {lastWeek: r, yesterday: "'昨天' p", today: "'今天' p", tomorrow: "'明天' p", nextWeek: r, other: "PP p"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e);
                switch (String((t || {}).unit)) {
                    case"date":
                        return a.toString() + "日";
                    case"hour":
                        return a.toString() + "时";
                    case"minute":
                        return a.toString() + "分";
                    case"second":
                        return a.toString() + "秒";
                    default:
                        return "第 " + a.toString()
                }
            },
            era          : (0, a.default)({values: {narrow: ["前", "公元"], abbreviated: ["前", "公元"], wide: ["公元前", "公元"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"], wide: ["第一刻钟", "第二刻钟", "第三刻钟", "第四刻钟"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["日", "一", "二", "三", "四", "五", "六"], abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "上", pm: "下", midnight: "凌晨", noon: "午", morning: "早", afternoon: "下午", evening: "晚", night: "夜"}, abbreviated: {am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜间"}, wide: {am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜间"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "上", pm: "下", midnight: "凌晨", noon: "午", morning: "早", afternoon: "下午", evening: "晚", night: "夜"}, abbreviated: {am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜间"}, wide: {am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜间"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(前)/i, /^(公元)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^第[一二三四]刻/i, wide: /^第[一二三四]刻钟/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i, abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i, wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i], any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[一二三四五六日]/i, short: /^[一二三四五六日]/i, abbreviated: /^周[一二三四五六日]/i, wide: /^星期[一二三四五六日]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^上午?/i, pm: /^下午?/i, midnight: /^午夜/i, noon: /^[中正]午/i, morning: /^早上/i, afternoon: /^下午/i, evening: /^晚上?/i, night: /^凌晨/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a) {
            return a = a || {}, t = "string" == typeof n[e] ? n[e] : 1 === t ? n[e].one : n[e].other.replace("{{count}}", t), a.addSuffix ? 0 < a.comparison ? t + "內" : t + "前" : t
        };
        var n = {
            lessThanXSeconds: {one: "少於 1 秒", other: "少於 {{count}} 秒"},
            xSeconds        : {one: "1 秒", other: "{{count}} 秒"},
            halfAMinute     : "半分鐘",
            lessThanXMinutes: {one: "少於 1 分鐘", other: "少於 {{count}} 分鐘"},
            xMinutes        : {one: "1 分鐘", other: "{{count}} 分鐘"},
            xHours          : {one: "1 小時", other: "{{count}} 小時"},
            aboutXHours     : {one: "大約 1 小時", other: "大約 {{count}} 小時"},
            xDays           : {one: "1 天", other: "{{count}} 天"},
            aboutXWeeks     : {one: "大約 1 個星期", other: "大約 {{count}} 個星期"},
            xWeeks          : {one: "1 個星期", other: "{{count}} 個星期"},
            aboutXMonths    : {one: "大約 1 個月", other: "大約 {{count}} 個月"},
            xMonths         : {one: "1 個月", other: "{{count}} 個月"},
            aboutXYears     : {one: "大約 1 年", other: "大約 {{count}} 年"},
            xYears          : {one: "1 年", other: "{{count}} 年"},
            overXYears      : {one: "超過 1 年", other: "超過 {{count}} 年"},
            almostXYears    : {one: "將近 1 年", other: "將近 {{count}} 年"}
        };
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(0)) && a.__esModule ? a : {default: a}, a = {date: (0, a.default)({formats: {full: "y'年'M'月'd'日' EEEE", long: "y'年'M'月'd'日'", medium: "yyyy-MM-dd", short: "yy-MM-dd"}, defaultWidth: "full"}), time: (0, a.default)({formats: {full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm"}, defaultWidth: "full"}), dateTime: (0, a.default)({formats: {full: "{{date}} {{time}}", long: "{{date}} {{time}}", medium: "{{date}} {{time}}", short: "{{date}} {{time}}"}, defaultWidth: "full"})};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, a, n) {
            return i[e]
        };
        var i = {lastWeek: "'上個'eeee p", yesterday: "'昨天' p", today: "'今天' p", tomorrow: "'明天' p", nextWeek: "'下個'eeee p", other: "P"};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        a = (a = a(1)) && a.__esModule ? a : {default: a}, a = {
            ordinalNumber: function (e, t) {
                var a = Number(e);
                switch (String((t || {}).unit)) {
                    case"date":
                        return a.toString() + "日";
                    case"hour":
                        return a.toString() + "時";
                    case"minute":
                        return a.toString() + "分";
                    case"second":
                        return a.toString() + "秒";
                    default:
                        return "第 " + a.toString()
                }
            },
            era          : (0, a.default)({values: {narrow: ["前", "公元"], abbreviated: ["前", "公元"], wide: ["公元前", "公元"]}, defaultWidth: "wide"}),
            quarter      : (0, a.default)({
                values: {narrow: ["1", "2", "3", "4"], abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"], wide: ["第一刻鐘", "第二刻鐘", "第三刻鐘", "第四刻鐘"]}, defaultWidth: "wide", argumentCallback: function (e) {
                    return Number(e) - 1
                }
            }),
            month        : (0, a.default)({values: {narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]}, defaultWidth: "wide"}),
            day          : (0, a.default)({values: {narrow: ["日", "一", "二", "三", "四", "五", "六"], short: ["日", "一", "二", "三", "四", "五", "六"], abbreviated: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]}, defaultWidth: "wide"}),
            dayPeriod    : (0, a.default)({
                values                : {narrow: {am: "上", pm: "下", midnight: "凌晨", noon: "午", morning: "早", afternoon: "下午", evening: "晚", night: "夜"}, abbreviated: {am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜間"}, wide: {am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜間"}},
                defaultWidth          : "wide",
                formattingValues      : {narrow: {am: "上", pm: "下", midnight: "凌晨", noon: "午", morning: "早", afternoon: "下午", evening: "晚", night: "夜"}, abbreviated: {am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜間"}, wide: {am: "上午", pm: "下午", midnight: "凌晨", noon: "中午", morning: "早晨", afternoon: "中午", evening: "晚上", night: "夜間"}},
                defaultFormattingWidth: "wide"
            })
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = r(a(3)), a = r(a(2));

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {
            ordinalNumber: (0, n.default)({
                matchPattern: /^(第\s*)?\d+(日|時|分|秒)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                    return parseInt(e, 10)
                }
            }),
            era          : (0, a.default)({matchPatterns: {narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^(前)/i, /^(公元)/i]}, defaultParseWidth: "any"}),
            quarter      : (0, a.default)({
                matchPatterns: {narrow: /^[1234]/i, abbreviated: /^第[一二三四]刻/i, wide: /^第[一二三四]刻鐘/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                    return e + 1
                }
            }),
            month        : (0, a.default)({matchPatterns: {narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i, abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i, wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i], any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]}, defaultParseWidth: "any"}),
            day          : (0, a.default)({matchPatterns: {narrow: /^[一二三四五六日]/i, short: /^[一二三四五六日]/i, abbreviated: /^週[一二三四五六日]/i, wide: /^星期[一二三四五六日]/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]}, defaultParseWidth: "any"}),
            dayPeriod    : (0, a.default)({matchPatterns: {any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^上午?/i, pm: /^下午?/i, midnight: /^午夜/i, noon: /^[中正]午/i, morning: /^早上/i, afternoon: /^下午/i, evening: /^晚上?/i, night: /^凌晨/i}}, defaultParseWidth: "any"})
        };
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(22)), i = d(a(23)), r = d(a(24)), o = d(a(25)), a = d(a(26));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "af", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(27)), i = d(a(28)), r = d(a(29)), o = d(a(30)), a = d(a(31));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ar-DZ", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(32)), i = d(a(33)), r = d(a(34)), o = d(a(35)), a = d(a(36));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ar-MA", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(37)), i = d(a(38)), r = d(a(39)), o = d(a(40)), a = d(a(41));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ar-SA", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(42)), i = d(a(43)), r = d(a(44)), o = d(a(45)), a = d(a(46));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ar-TN", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(47)), i = d(a(48)), r = d(a(49)), o = d(a(50)), a = d(a(51));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "az", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
            (0, r.default)(1, arguments);
            var a = t || {}, t = a.locale, t = t && t.options && t.options.weekStartsOn, t = null == t ? 0 : (0, n.default)(t), t = null == a.weekStartsOn ? t : (0, n.default)(a.weekStartsOn);
            if (!(0 <= t && t <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            a = (0, i.default)(e), e = a.getUTCDay(), t = (e < t ? 7 : 0) + e - t;
            return a.setUTCDate(a.getUTCDate() - t), a.setUTCHours(0, 0, 0, 0), a
        };
        var n = o(a(399)), i = o(a(400)), r = o(a(12));

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            if (null === e || !0 === e || !1 === e) return NaN;
            e = Number(e);
            return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
        }, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            (0, n.default)(1, arguments);
            var t = Object.prototype.toString.call(e);
            return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
        };
        var n = (a = a(12)) && a.__esModule ? a : {default: a};
        e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(52)), i = d(a(53)), r = d(a(54)), o = d(a(55)), a = d(a(56));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "be", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(57)), i = d(a(58)), r = d(a(59)), o = d(a(60)), a = d(a(61));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "bg", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(62)), i = d(a(63)), r = d(a(64)), o = d(a(13)), a = d(a(65));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "bn", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(66)), i = d(a(67)), r = d(a(68)), o = d(a(69)), a = d(a(70));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "bs", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(71)), i = d(a(72)), r = d(a(73)), o = d(a(74)), a = d(a(75));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ca", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(76)), i = d(a(77)), r = d(a(78)), o = d(a(79)), a = d(a(80));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "cs", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(81)), i = d(a(82)), r = d(a(83)), o = d(a(84)), a = d(a(85));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "cy", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(86)), i = d(a(87)), r = d(a(88)), o = d(a(89)), a = d(a(90));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "da", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(14)), i = d(a(15)), r = d(a(16)), o = d(a(17)), a = d(a(91));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        o = {code: "de-AT", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: a.default, match: o.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = o, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(14)), i = d(a(15)), r = d(a(16)), o = d(a(92)), a = d(a(17));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "de", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(93)), i = d(a(94)), r = d(a(95)), o = d(a(96)), a = d(a(97));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "el", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(8)), i = d(a(98)), r = d(a(5)), o = d(a(6)), a = d(a(7));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "en-AU", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(5)), i = d(a(6)), r = d(a(7)), o = d(a(99)), a = d(a(100));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        r = {code: "en-CA", formatDistance: o.default, formatLong: a.default, formatRelative: n.default, localize: i.default, match: r.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = r, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(8)), i = d(a(5)), r = d(a(6)), o = d(a(7)), a = d(a(101));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        o = {code: "en-GB", formatDistance: n.default, formatLong: a.default, formatRelative: i.default, localize: r.default, match: o.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = o, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(8)), i = d(a(5)), r = d(a(6)), o = d(a(7)), a = d(a(102));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        o = {code: "en-IN", formatDistance: n.default, formatLong: a.default, formatRelative: i.default, localize: r.default, match: o.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = o, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(8)), i = d(a(5)), r = d(a(6)), o = d(a(7)), a = d(a(103));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        o = {code: "en-NZ", formatDistance: n.default, formatLong: a.default, formatRelative: i.default, localize: r.default, match: o.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = o, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(8)), i = d(a(104)), r = d(a(5)), o = d(a(6)), a = d(a(7));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "en-US", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(8)), i = d(a(5)), r = d(a(6)), o = d(a(7)), a = d(a(105));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        o = {code: "en-ZA", formatDistance: n.default, formatLong: a.default, formatRelative: i.default, localize: r.default, match: o.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = o, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(106)), i = d(a(107)), r = d(a(108)), o = d(a(109)), a = d(a(110));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "eo", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(111)), i = d(a(112)), r = d(a(113)), o = d(a(114)), a = d(a(115));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "es", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(116)), i = d(a(117)), r = d(a(118)), o = d(a(119)), a = d(a(120));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "et", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(121)), i = d(a(122)), r = d(a(123)), o = d(a(124)), a = d(a(125));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "eu", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(126)), i = d(a(127)), r = d(a(128)), o = d(a(129)), a = d(a(130));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "fa-IR", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 6, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(131)), i = d(a(132)), r = d(a(133)), o = d(a(134)), a = d(a(135));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "fi", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(18)), i = d(a(19)), r = d(a(20)), o = d(a(21)), a = d(a(136));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        o = {code: "fr-CA", formatDistance: n.default, formatLong: a.default, formatRelative: i.default, localize: r.default, match: o.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = o, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = {};
        ["MMM", "MMMM"].forEach(function (i) {
            n["Do " + i] = function (e, t) {
                var a = t.formatters, n = a[1 === e.getUTCDate() ? "Do" : "D"], a = a[i];
                return n(e, t) + " " + a(e, t)
            }
        }), t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(137)), i = d(a(138)), r = d(a(139)), o = d(a(140)), a = d(a(141));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "fr-CH", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = {};
        ["MMM", "MMMM"].forEach(function (i) {
            n["Do " + i] = function (e, t) {
                var a = t.formatters, n = a[1 === e.getUTCDate() ? "Do" : "D"], a = a[i];
                return n(e, t) + " " + a(e, t)
            }
        }), t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(18)), i = d(a(142)), r = d(a(19)), o = d(a(20)), a = d(a(21));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "fr", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(143)), i = d(a(144)), r = d(a(145)), o = d(a(146)), a = d(a(147));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "gd", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(148)), i = d(a(149)), r = d(a(150)), o = d(a(151)), a = d(a(152));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "gl", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(153)), i = d(a(154)), r = d(a(155)), o = d(a(156)), a = d(a(157));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "gu", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(158)), i = d(a(159)), r = d(a(160)), o = d(a(161)), a = d(a(162));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "he", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(163)), i = d(a(164)), r = d(a(165)), o = d(a(11)), a = d(a(166));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "hi", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(167)), i = d(a(168)), r = d(a(169)), o = d(a(170)), a = d(a(171));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "hr", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = {};
        ["MMM", "MMMM"].forEach(function (i) {
            n["Do " + i] = function (e, t) {
                var a = t.formatters, n = a[1 === e.getUTCDate() ? "Do" : "D"], a = a[i];
                return n(e, t) + " " + a(e, t)
            }
        }), t.default = n, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(172)), i = d(a(173)), r = d(a(174)), o = d(a(175)), a = d(a(176));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ht", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(177)), i = d(a(178)), r = d(a(179)), o = d(a(180)), a = d(a(181));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "hu", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(182)), i = d(a(183)), r = d(a(184)), o = d(a(185)), a = d(a(186));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "hy", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(187)), i = d(a(188)), r = d(a(189)), o = d(a(190)), a = d(a(191));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "id", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(192)), i = d(a(193)), r = d(a(194)), o = d(a(195)), a = d(a(196));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "is", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(197)), i = d(a(198)), r = d(a(199)), o = d(a(200)), a = d(a(201));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "it", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(202)), i = d(a(203)), r = d(a(204)), o = d(a(205)), a = d(a(206));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ja-Hira", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(207)), i = d(a(208)), r = d(a(209)), o = d(a(210)), a = d(a(211));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ja", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(212)), i = d(a(213)), r = d(a(214)), o = d(a(215)), a = d(a(216));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ka", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(217)), i = d(a(218)), r = d(a(219)), o = d(a(220)), a = d(a(221));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "kk", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(222)), i = d(a(223)), r = d(a(224)), o = d(a(225)), a = d(a(226));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "kn", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(227)), i = d(a(228)), r = d(a(229)), o = d(a(230)), a = d(a(231));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ko", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(232)), i = d(a(233)), r = d(a(234)), o = d(a(235)), a = d(a(236));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "lb", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(237)), i = d(a(238)), r = d(a(239)), o = d(a(240)), a = d(a(241));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "lt", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(242)), i = d(a(243)), r = d(a(244)), o = d(a(245)), a = d(a(246));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "lv", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(247)), i = d(a(248)), r = d(a(249)), o = d(a(250)), a = d(a(251));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "mk", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(252)), i = d(a(253)), r = d(a(254)), o = d(a(255)), a = d(a(256));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "mn", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(257)), i = d(a(258)), r = d(a(259)), o = d(a(260)), a = d(a(261));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ms", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(262)), i = d(a(263)), r = d(a(264)), o = d(a(265)), a = d(a(266));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "mt", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(267)), i = d(a(268)), r = d(a(269)), o = d(a(270)), a = d(a(271));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "nb", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(272)), i = d(a(273)), r = d(a(274)), o = d(a(275)), a = d(a(276));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "nl-BE", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(277)), i = d(a(278)), r = d(a(279)), o = d(a(280)), a = d(a(281));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "nl", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(282)), i = d(a(283)), r = d(a(284)), o = d(a(285)), a = d(a(286));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "nn", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(287)), i = d(a(288)), r = d(a(289)), o = d(a(290)), a = d(a(291));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "pl", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(292)), i = d(a(293)), r = d(a(294)), o = d(a(295)), a = d(a(296));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "pt-BR", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(297)), i = d(a(298)), r = d(a(299)), o = d(a(300)), a = d(a(301));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "pt", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(302)), i = d(a(303)), r = d(a(304)), o = d(a(305)), a = d(a(306));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ro", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(307)), i = d(a(308)), r = d(a(309)), o = d(a(310)), a = d(a(311));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ru", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(312)), i = d(a(313)), r = d(a(314)), o = d(a(315)), a = d(a(316));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "sk", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(317)), i = d(a(318)), r = d(a(319)), o = d(a(320)), a = d(a(321));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "sl", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(322)), i = d(a(323)), r = d(a(324)), o = d(a(325)), a = d(a(326));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "sq", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(327)), i = d(a(328)), r = d(a(329)), o = d(a(330)), a = d(a(331));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "sr-Latn", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(332)), i = d(a(333)), r = d(a(334)), o = d(a(335)), a = d(a(336));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "sr", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(337)), i = d(a(338)), r = d(a(339)), o = d(a(340)), a = d(a(341));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "sv", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(342)), i = d(a(343)), r = d(a(344)), o = d(a(345)), a = d(a(346));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ta", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(347)), i = d(a(348)), r = d(a(349)), o = d(a(350)), a = d(a(351));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "te", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(352)), i = d(a(353)), r = d(a(354)), o = d(a(355)), a = d(a(356));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "th", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(357)), i = d(a(358)), r = d(a(359)), o = d(a(360)), a = d(a(361));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "tr", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(362)), i = d(a(363)), r = d(a(364)), o = d(a(365)), a = d(a(366));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "ug", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 0, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(367)), i = d(a(368)), r = d(a(369)), o = d(a(370)), a = d(a(371));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "uk", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(372)), i = d(a(373)), r = d(a(374)), o = d(a(375)), a = d(a(376));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "uz", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(377)), i = d(a(378)), r = d(a(379)), o = d(a(380)), a = d(a(381));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "vi", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 1}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(382)), i = d(a(383)), r = d(a(384)), o = d(a(385)), a = d(a(386));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "zh-CN", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = d(a(387)), i = d(a(388)), r = d(a(389)), o = d(a(390)), a = d(a(391));

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        a = {code: "zh-TW", formatDistance: n.default, formatLong: i.default, formatRelative: r.default, localize: o.default, match: a.default, options: {weekStartsOn: 1, firstWeekContainsDate: 4}};
        t.default = a, e.exports = t.default
    }, function (a, n, i) {
        "use strict";
        i.r(n);

        function l9a(e) {
            return "function" == typeof e
        }

        function m9a(e) {
            return "string" == typeof e || !!e && "object" === (void 0 === e ? "undefined" : r(e)) && "[object String]" === Object.prototype.toString.call(e)
        }

        function n9a(e) {
            return ("[object Date]" === Object.prototype.toString.call(e) || e instanceof Date) && !isNaN(e.valueOf())
        }

        function o9a(e) {
            return ("function" == typeof e || "object" === (void 0 === e ? "undefined" : r(e)) && !!e) && !Array.isArray(e)
        }

        function q9a(e) {
            return !o.test(e) && !!e
        }

        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = /^(?:f(?:alse)?|no?|0+)$/i, u = {
            lessThanXSeconds: {one: "less than a second", other: "less than {{count}} seconds"},
            xSeconds        : {one: "1 second", other: "{{count}} seconds"},
            halfAMinute     : "half a minute",
            lessThanXMinutes: {one: "less than a minute", other: "less than {{count}} minutes"},
            xMinutes        : {one: "1 minute", other: "{{count}} minutes"},
            aboutXHours     : {one: "about 1 hour", other: "about {{count}} hours"},
            xHours          : {one: "1 hour", other: "{{count}} hours"},
            xDays           : {one: "1 day", other: "{{count}} days"},
            aboutXWeeks     : {one: "about 1 week", other: "about {{count}} weeks"},
            xWeeks          : {one: "1 week", other: "{{count}} weeks"},
            aboutXMonths    : {one: "about 1 month", other: "about {{count}} months"},
            xMonths         : {one: "1 month", other: "{{count}} months"},
            aboutXYears     : {one: "about 1 year", other: "about {{count}} years"},
            xYears          : {one: "1 year", other: "{{count}} years"},
            overXYears      : {one: "over 1 year", other: "over {{count}} years"},
            almostXYears    : {one: "almost 1 year", other: "almost {{count}} years"}
        };

        function f(t) {
            return function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = e.width ? String(e.width) : t.defaultWidth;
                return t.formats[e] || t.formats[t.defaultWidth]
            }
        }

        var d = {date: f({formats: {full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy"}, defaultWidth: "full"}), time: f({formats: {full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a"}, defaultWidth: "full"}), dateTime: f({formats: {full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}"}, defaultWidth: "full"})}, s = {lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P"};

        function v(i) {
            return function (e, t) {
                var a, n = t || {};
                return ("formatting" === (n.context ? String(n.context) : "standalone") && i.formattingValues ? (a = i.defaultFormattingWidth || i.defaultWidth, t = n.width ? String(n.width) : a, i.formattingValues[t] || i.formattingValues[a]) : (a = i.defaultWidth, n = n.width ? String(n.width) : i.defaultWidth, i.values[n] || i.values[a]))[i.argumentCallback ? i.argumentCallback(e) : e]
            }
        }

        function p(r) {
            return function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, a = t.width, n = a && r.matchPatterns[a] || r.matchPatterns[r.defaultMatchWidth], n = e.match(n);
                if (!n) return null;
                var i = n[0], a = a && r.parsePatterns[a] || r.parsePatterns[r.defaultParseWidth], a = Array.isArray(a) ? function b(e, t) {
                    for (var a = 0; a < e.length; a++) if (t(e[a])) return a
                }(a, function (e) {
                    return e.test(i)
                }) : function g(e, t) {
                    for (var a in e) if (e.hasOwnProperty(a) && t(e[a])) return a
                }(a, function (e) {
                    return e.test(i)
                }), a = r.valueCallback ? r.valueCallback(a) : a;
                return {value: a = t.valueCallback ? t.valueCallback(a) : a, rest: e.slice(i.length)}
            }
        }

        var l, z = {
            code         : "en-US", formatDistance: function (e, t, a) {
                e = u[e], t = "string" == typeof e ? e : 1 === t ? e.one : e.other.replace("{{count}}", t.toString());
                return null != a && a.addSuffix ? a.comparison && 0 < a.comparison ? "in " + t : t + " ago" : t
            }, formatLong: d, formatRelative: function (e, t, a, n) {
                return s[e]
            }, localize  : {
                ordinalNumber: function (e, t) {
                    var a = Number(e), e = a % 100;
                    if (20 < e || e < 10) switch (e % 10) {
                        case 1:
                            return a + "st";
                        case 2:
                            return a + "nd";
                        case 3:
                            return a + "rd"
                    }
                    return a + "th"
                },
                era          : v({values: {narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"]}, defaultWidth: "wide"}),
                quarter      : v({
                    values: {narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]}, defaultWidth: "wide", argumentCallback: function (e) {
                        return e - 1
                    }
                }),
                month        : v({values: {narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}, defaultWidth: "wide"}),
                day          : v({values: {narrow: ["S", "M", "T", "W", "T", "F", "S"], short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}, defaultWidth: "wide"}),
                dayPeriod    : v({
                    values                : {narrow: {am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night"}, abbreviated: {am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night"}, wide: {am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night"}},
                    defaultWidth          : "wide",
                    formattingValues      : {narrow: {am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night"}, abbreviated: {am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night"}, wide: {am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night"}},
                    defaultFormattingWidth: "wide"
                })
            }, match     : {
                ordinalNumber: (l = {
                    matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: function (e) {
                        return parseInt(e, 10)
                    }
                }, function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, a = e.match(l.matchPattern);
                    if (!a) return null;
                    var n = a[0], a = e.match(l.parsePattern);
                    if (!a) return null;
                    a = l.valueCallback ? l.valueCallback(a[0]) : a[0];
                    return {value: a = t.valueCallback ? t.valueCallback(a) : a, rest: e.slice(n.length)}
                }),
                era          : p({matchPatterns: {narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/^b/i, /^(a|c)/i]}, defaultParseWidth: "any"}),
                quarter      : p({
                    matchPatterns: {narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i}, defaultMatchWidth: "wide", parsePatterns: {any: [/1/i, /2/i, /3/i, /4/i]}, defaultParseWidth: "any", valueCallback: function (e) {
                        return e + 1
                    }
                }),
                month        : p({matchPatterns: {narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]}, defaultParseWidth: "any"}),
                day          : p({matchPatterns: {narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i}, defaultMatchWidth: "wide", parsePatterns: {narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]}, defaultParseWidth: "any"}),
                dayPeriod    : p({matchPatterns: {narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i}, defaultMatchWidth: "any", parsePatterns: {any: {am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i}}, defaultParseWidth: "any"})
            }, options   : {weekStartsOn: 0, firstWeekContainsDate: 1}
        };

        function M(e) {
            if (null === e || !0 === e || !1 === e) return NaN;
            e = Number(e);
            return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
        }

        function k(e, t) {
            if (t.length < e) throw new TypeError(e + " argument" + (1 < e ? "s" : "") + " required, but only " + t.length + " present")
        }

        function P(e) {
            k(1, arguments);
            var t = Object.prototype.toString.call(e);
            return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
        }

        function _(e, t) {
            k(2, arguments);
            e = P(e).getTime(), t = M(t);
            return new Date(e + t)
        }

        function j(e, t) {
            return k(2, arguments), _(e, -M(t))
        }

        function W(e, t) {
            switch (e) {
                case"P":
                    return t.date({width: "short"});
                case"PP":
                    return t.date({width: "medium"});
                case"PPP":
                    return t.date({width: "long"});
                default:
                    return t.date({width: "full"})
            }
        }

        function T(e, t) {
            switch (e) {
                case"p":
                    return t.time({width: "short"});
                case"pp":
                    return t.time({width: "medium"});
                case"ppp":
                    return t.time({width: "long"});
                default:
                    return t.time({width: "full"})
            }
        }

        var S = {
            p: T, P: function (e, t) {
                var a, n = e.match(/(P+)(p+)?/), i = n[1], n = n[2];
                if (!n) return W(e, t);
                switch (i) {
                    case"P":
                        a = t.dateTime({width: "short"});
                        break;
                    case"PP":
                        a = t.dateTime({width: "medium"});
                        break;
                    case"PPP":
                        a = t.dateTime({width: "long"});
                        break;
                    default:
                        a = t.dateTime({width: "full"})
                }
                return a.replace("{{date}}", W(i, t)).replace("{{time}}", T(n, t))
            }
        };

        function D(e) {
            var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
            return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
        }

        var m = ["D", "DD"], c = ["YY", "YYYY"];

        function H(e) {
            return -1 !== m.indexOf(e)
        }

        function O(e) {
            return -1 !== c.indexOf(e)
        }

        function N(e, t, a) {
            if ("YYYY" === e) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(a, "`; see: https://git.io/fxCyr"));
            if ("YY" === e) throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(a, "`; see: https://git.io/fxCyr"));
            if ("D" === e) throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(a, "`; see: https://git.io/fxCyr"));
            if ("DD" === e) throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(a, "`; see: https://git.io/fxCyr"))
        }

        function E(e, t) {
            k(1, arguments);
            var a = t || {}, t = a.locale, t = t && t.options && t.options.weekStartsOn, t = null == t ? 0 : M(t), t = null == a.weekStartsOn ? t : M(a.weekStartsOn);
            if (!(0 <= t && t <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            a = P(e), e = a.getUTCDay(), t = (e < t ? 7 : 0) + e - t;
            return a.setUTCDate(a.getUTCDate() - t), a.setUTCHours(0, 0, 0, 0), a
        }

        function X(e, t) {
            k(1, arguments);
            var a = P(e, t), n = a.getUTCFullYear(), i = t || {}, r = i.locale, e = r && r.options && r.options.firstWeekContainsDate, r = null == e ? 1 : M(e), e = null == i.firstWeekContainsDate ? r : M(i.firstWeekContainsDate);
            if (!(1 <= e && e <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            r = new Date(0);
            r.setUTCFullYear(n + 1, 0, e), r.setUTCHours(0, 0, 0, 0);
            i = E(r, t), r = new Date(0);
            r.setUTCFullYear(n, 0, e), r.setUTCHours(0, 0, 0, 0);
            t = E(r, t);
            return a.getTime() >= i.getTime() ? n + 1 : a.getTime() >= t.getTime() ? n : n - 1
        }

        function A(e, t, a) {
            k(2, arguments);
            var n = a || {}, a = n.locale, a = a && a.options && a.options.weekStartsOn, a = null == a ? 0 : M(a), n = null == n.weekStartsOn ? a : M(n.weekStartsOn);
            if (!(0 <= n && n <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            e = P(e), t = M(t), t = ((7 + t % 7) % 7 < n ? 7 : 0) + t - e.getUTCDay();
            return e.setUTCDate(e.getUTCDate() + t), e
        }

        function L(e) {
            k(1, arguments);
            var t = P(e), e = t.getUTCDay(), e = (e < 1 ? 7 : 0) + e - 1;
            return t.setUTCDate(t.getUTCDate() - e), t.setUTCHours(0, 0, 0, 0), t
        }

        function Y(e) {
            k(1, arguments);
            var t = P(e), a = t.getUTCFullYear(), n = new Date(0);
            n.setUTCFullYear(a + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
            e = L(n), n = new Date(0);
            n.setUTCFullYear(a, 0, 4), n.setUTCHours(0, 0, 0, 0);
            n = L(n);
            return t.getTime() >= e.getTime() ? a + 1 : t.getTime() >= n.getTime() ? a : a - 1
        }

        function q(e) {
            k(1, arguments);
            e = P(e), e = L(e).getTime() - function I(e) {
                k(1, arguments);
                var t = Y(e), e = new Date(0);
                return e.setUTCFullYear(t, 0, 4), e.setUTCHours(0, 0, 0, 0), L(e)
            }(e).getTime();
            return Math.round(e / 6048e5) + 1
        }

        function F(e, t) {
            k(1, arguments);
            e = P(e), t = E(e, t).getTime() - function G(e, t) {
                k(1, arguments);
                var a = null == (a = (a = (n = t || {}).locale) && a.options && a.options.firstWeekContainsDate) ? 1 : M(a), a = null == n.firstWeekContainsDate ? a : M(n.firstWeekContainsDate), n = X(e, t), e = new Date(0);
                return e.setUTCFullYear(n, 0, a), e.setUTCHours(0, 0, 0, 0), E(e, t)
            }(e, t).getTime();
            return Math.round(t / 6048e5) + 1
        }

        var h = /^(1[0-2]|0?\d)/, g = /^(3[0-1]|[0-2]?\d)/, b = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, y = /^(5[0-3]|[0-4]?\d)/, w = /^(2[0-3]|[0-1]?\d)/, x = /^(2[0-4]|[0-1]?\d)/, C = /^(1[0-1]|0?\d)/, R = /^(1[0-2]|0?\d)/, J = /^[0-5]?\d/, V = /^[0-5]?\d/, K = /^\d/, U = /^\d{1,2}/, $ = /^\d{1,3}/, Q = /^\d{1,4}/, B = /^-?\d+/, Z = /^-?\d/, ee = /^-?\d{1,2}/, te = /^-?\d{1,3}/, ae = /^-?\d{1,4}/, ne = /^([+-])(\d{2})(\d{2})?|Z/, ie = /^([+-])(\d{2})(\d{2})|Z/, re = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/, oe = /^([+-])(\d{2}):(\d{2})|Z/, ue = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;

        function ve(e, t, a) {
            var n = t.match(e);
            if (!n) return null;
            e = parseInt(n[0], 10);
            return {value: a ? a(e) : e, rest: t.slice(n[0].length)}
        }

        function pe(e, t) {
            e = t.match(e);
            return e ? "Z" === e[0] ? {value: 0, rest: t.slice(1)} : {value: ("+" === e[1] ? 1 : -1) * (36e5 * (e[2] ? parseInt(e[2], 10) : 0) + 6e4 * (e[3] ? parseInt(e[3], 10) : 0) + 1e3 * (e[5] ? parseInt(e[5], 10) : 0)), rest: t.slice(e[0].length)} : null
        }

        function ge(e, t) {
            return ve(B, e, t)
        }

        function be(e, t, a) {
            switch (e) {
                case 1:
                    return ve(K, t, a);
                case 2:
                    return ve(U, t, a);
                case 3:
                    return ve($, t, a);
                case 4:
                    return ve(Q, t, a);
                default:
                    return ve(new RegExp("^\\d{1," + e + "}"), t, a)
            }
        }

        function ye(e, t, a) {
            switch (e) {
                case 1:
                    return ve(Z, t, a);
                case 2:
                    return ve(ee, t, a);
                case 3:
                    return ve(te, t, a);
                case 4:
                    return ve(ae, t, a);
                default:
                    return ve(new RegExp("^-?\\d{1," + e + "}"), t, a)
            }
        }

        function we(e) {
            switch (e) {
                case"morning":
                    return 4;
                case"evening":
                    return 17;
                case"pm":
                case"noon":
                case"afternoon":
                    return 12;
                default:
                    return 0
            }
        }

        function Me(e, t) {
            var a = 0 < t, t = a ? t : 1 - t;
            return e = t <= 50 ? e || 100 : (t = t + 50, e + 100 * Math.floor(t / 100) - (t % 100 <= e ? 100 : 0)), a ? e : 1 - e
        }

        var de = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], se = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        function _e(e) {
            return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
        }

        var le = {
            G   : {
                priority             : 140, parse: function (e, t, a, n) {
                    switch (t) {
                        case"G":
                        case"GG":
                        case"GGG":
                            return a.era(e, {width: "abbreviated"}) || a.era(e, {width: "narrow"});
                        case"GGGGG":
                            return a.era(e, {width: "narrow"});
                        default:
                            return a.era(e, {width: "wide"}) || a.era(e, {width: "abbreviated"}) || a.era(e, {width: "narrow"})
                    }
                }, set               : function (e, t, a, n) {
                    return t.era = a, e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["R", "u", "t", "T"]
            }, y: {
                priority             : 130, parse: function (e, t, a, n) {
                    function voa(e) {
                        return {year: e, isTwoDigitYear: "yy" === t}
                    }

                    switch (t) {
                        case"y":
                            return be(4, e, voa);
                        case"yo":
                            return a.ordinalNumber(e, {unit: "year", valueCallback: voa});
                        default:
                            return be(t.length, e, voa)
                    }
                }, validate          : function (e, t, a) {
                    return t.isTwoDigitYear || 0 < t.year
                }, set               : function (e, t, a, n) {
                    var i = e.getUTCFullYear();
                    if (a.isTwoDigitYear) {
                        i = Me(a.year, i);
                        return e.setUTCFullYear(i, 0, 1), e.setUTCHours(0, 0, 0, 0), e
                    }
                    a = "era" in t && 1 !== t.era ? 1 - a.year : a.year;
                    return e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]
            }, Y: {
                priority             : 130, parse: function (e, t, a, n) {
                    function Loa(e) {
                        return {year: e, isTwoDigitYear: "YY" === t}
                    }

                    switch (t) {
                        case"Y":
                            return be(4, e, Loa);
                        case"Yo":
                            return a.ordinalNumber(e, {unit: "year", valueCallback: Loa});
                        default:
                            return be(t.length, e, Loa)
                    }
                }, validate          : function (e, t, a) {
                    return t.isTwoDigitYear || 0 < t.year
                }, set               : function (e, t, a, n) {
                    var i = X(e, n);
                    if (a.isTwoDigitYear) {
                        i = Me(a.year, i);
                        return e.setUTCFullYear(i, 0, n.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), E(e, n)
                    }
                    a = "era" in t && 1 !== t.era ? 1 - a.year : a.year;
                    return e.setUTCFullYear(a, 0, n.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), E(e, n)
                }, incompatibleTokens: ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
            }, R: {
                priority             : 130, parse: function (e, t, a, n) {
                    return ye("R" === t ? 4 : t.length, e)
                }, set               : function (e, t, a, n) {
                    var i = new Date(0);
                    return i.setUTCFullYear(a, 0, 4), i.setUTCHours(0, 0, 0, 0), L(i)
                }, incompatibleTokens: ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
            }, u: {
                priority             : 130, parse: function (e, t, a, n) {
                    return ye("u" === t ? 4 : t.length, e)
                }, set               : function (e, t, a, n) {
                    return e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
            }, Q: {
                priority             : 120, parse: function (e, t, a, n) {
                    switch (t) {
                        case"Q":
                        case"QQ":
                            return be(t.length, e);
                        case"Qo":
                            return a.ordinalNumber(e, {unit: "quarter"});
                        case"QQQ":
                            return a.quarter(e, {width: "abbreviated", context: "formatting"}) || a.quarter(e, {width: "narrow", context: "formatting"});
                        case"QQQQQ":
                            return a.quarter(e, {width: "narrow", context: "formatting"});
                        default:
                            return a.quarter(e, {width: "wide", context: "formatting"}) || a.quarter(e, {width: "abbreviated", context: "formatting"}) || a.quarter(e, {width: "narrow", context: "formatting"})
                    }
                }, validate          : function (e, t, a) {
                    return 1 <= t && t <= 4
                }, set               : function (e, t, a, n) {
                    return e.setUTCMonth(3 * (a - 1), 1), e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
            }, q: {
                priority             : 120, parse: function (e, t, a, n) {
                    switch (t) {
                        case"q":
                        case"qq":
                            return be(t.length, e);
                        case"qo":
                            return a.ordinalNumber(e, {unit: "quarter"});
                        case"qqq":
                            return a.quarter(e, {width: "abbreviated", context: "standalone"}) || a.quarter(e, {width: "narrow", context: "standalone"});
                        case"qqqqq":
                            return a.quarter(e, {width: "narrow", context: "standalone"});
                        default:
                            return a.quarter(e, {width: "wide", context: "standalone"}) || a.quarter(e, {width: "abbreviated", context: "standalone"}) || a.quarter(e, {width: "narrow", context: "standalone"})
                    }
                }, validate          : function (e, t, a) {
                    return 1 <= t && t <= 4
                }, set               : function (e, t, a, n) {
                    return e.setUTCMonth(3 * (a - 1), 1), e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
            }, M: {
                priority             : 110, parse: function (e, t, a, n) {
                    function Mpa(e) {
                        return e - 1
                    }

                    switch (t) {
                        case"M":
                            return ve(h, e, Mpa);
                        case"MM":
                            return be(2, e, Mpa);
                        case"Mo":
                            return a.ordinalNumber(e, {unit: "month", valueCallback: Mpa});
                        case"MMM":
                            return a.month(e, {width: "abbreviated", context: "formatting"}) || a.month(e, {width: "narrow", context: "formatting"});
                        case"MMMMM":
                            return a.month(e, {width: "narrow", context: "formatting"});
                        default:
                            return a.month(e, {width: "wide", context: "formatting"}) || a.month(e, {width: "abbreviated", context: "formatting"}) || a.month(e, {width: "narrow", context: "formatting"})
                    }
                }, validate          : function (e, t, a) {
                    return 0 <= t && t <= 11
                }, set               : function (e, t, a, n) {
                    return e.setUTCMonth(a, 1), e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]
            }, L: {
                priority             : 110, parse: function (e, t, a, n) {
                    function Zpa(e) {
                        return e - 1
                    }

                    switch (t) {
                        case"L":
                            return ve(h, e, Zpa);
                        case"LL":
                            return be(2, e, Zpa);
                        case"Lo":
                            return a.ordinalNumber(e, {unit: "month", valueCallback: Zpa});
                        case"LLL":
                            return a.month(e, {width: "abbreviated", context: "standalone"}) || a.month(e, {width: "narrow", context: "standalone"});
                        case"LLLLL":
                            return a.month(e, {width: "narrow", context: "standalone"});
                        default:
                            return a.month(e, {width: "wide", context: "standalone"}) || a.month(e, {width: "abbreviated", context: "standalone"}) || a.month(e, {width: "narrow", context: "standalone"})
                    }
                }, validate          : function (e, t, a) {
                    return 0 <= t && t <= 11
                }, set               : function (e, t, a, n) {
                    return e.setUTCMonth(a, 1), e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]
            }, w: {
                priority             : 100, parse: function (e, t, a, n) {
                    switch (t) {
                        case"w":
                            return ve(y, e);
                        case"wo":
                            return a.ordinalNumber(e, {unit: "week"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    return 1 <= t && t <= 53
                }, set               : function (e, t, a, n) {
                    return E(function (e, t, a) {
                        k(2, arguments);
                        e = P(e), t = M(t), t = F(e, a) - t;
                        return e.setUTCDate(e.getUTCDate() - 7 * t), e
                    }(e, a, n), n)
                }, incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
            }, I: {
                priority             : 100, parse: function (e, t, a, n) {
                    switch (t) {
                        case"I":
                            return ve(y, e);
                        case"Io":
                            return a.ordinalNumber(e, {unit: "week"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    return 1 <= t && t <= 53
                }, set               : function (e, t, a, n) {
                    return L(function (e, t) {
                        k(2, arguments);
                        e = P(e), t = M(t), t = q(e) - t;
                        return e.setUTCDate(e.getUTCDate() - 7 * t), e
                    }(e, a, n), n)
                }, incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
            }, d: {
                priority             : 90, subPriority: 1, parse: function (e, t, a, n) {
                    switch (t) {
                        case"d":
                            return ve(g, e);
                        case"do":
                            return a.ordinalNumber(e, {unit: "date"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    var n = _e(e.getUTCFullYear()), e = e.getUTCMonth();
                    return n ? 1 <= t && t <= se[e] : 1 <= t && t <= de[e]
                }, set               : function (e, t, a, n) {
                    return e.setUTCDate(a), e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
            }, D: {
                priority             : 90, subPriority: 1, parse: function (e, t, a, n) {
                    switch (t) {
                        case"D":
                        case"DD":
                            return ve(b, e);
                        case"Do":
                            return a.ordinalNumber(e, {unit: "date"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    return _e(e.getUTCFullYear()) ? 1 <= t && t <= 366 : 1 <= t && t <= 365
                }, set               : function (e, t, a, n) {
                    return e.setUTCMonth(0, a), e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]
            }, E: {
                priority             : 90, parse: function (e, t, a, n) {
                    switch (t) {
                        case"E":
                        case"EE":
                        case"EEE":
                            return a.day(e, {width: "abbreviated", context: "formatting"}) || a.day(e, {width: "short", context: "formatting"}) || a.day(e, {width: "narrow", context: "formatting"});
                        case"EEEEE":
                            return a.day(e, {width: "narrow", context: "formatting"});
                        case"EEEEEE":
                            return a.day(e, {width: "short", context: "formatting"}) || a.day(e, {width: "narrow", context: "formatting"});
                        default:
                            return a.day(e, {width: "wide", context: "formatting"}) || a.day(e, {width: "abbreviated", context: "formatting"}) || a.day(e, {width: "short", context: "formatting"}) || a.day(e, {width: "narrow", context: "formatting"})
                    }
                }, validate          : function (e, t, a) {
                    return 0 <= t && t <= 6
                }, set               : function (e, t, a, n) {
                    return (e = A(e, a, n)).setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["D", "i", "e", "c", "t", "T"]
            }, e: {
                priority             : 90, parse: function (e, t, a, n) {
                    function yra(e) {
                        var t = 7 * Math.floor((e - 1) / 7);
                        return (e + n.weekStartsOn + 6) % 7 + t
                    }

                    switch (t) {
                        case"e":
                        case"ee":
                            return be(t.length, e, yra);
                        case"eo":
                            return a.ordinalNumber(e, {unit: "day", valueCallback: yra});
                        case"eee":
                            return a.day(e, {width: "abbreviated", context: "formatting"}) || a.day(e, {width: "short", context: "formatting"}) || a.day(e, {width: "narrow", context: "formatting"});
                        case"eeeee":
                            return a.day(e, {width: "narrow", context: "formatting"});
                        case"eeeeee":
                            return a.day(e, {width: "short", context: "formatting"}) || a.day(e, {width: "narrow", context: "formatting"});
                        default:
                            return a.day(e, {width: "wide", context: "formatting"}) || a.day(e, {width: "abbreviated", context: "formatting"}) || a.day(e, {width: "short", context: "formatting"}) || a.day(e, {width: "narrow", context: "formatting"})
                    }
                }, validate          : function (e, t, a) {
                    return 0 <= t && t <= 6
                }, set               : function (e, t, a, n) {
                    return (e = A(e, a, n)).setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]
            }, c: {
                priority             : 90, parse: function (e, t, a, n) {
                    function Mra(e) {
                        var t = 7 * Math.floor((e - 1) / 7);
                        return (e + n.weekStartsOn + 6) % 7 + t
                    }

                    switch (t) {
                        case"c":
                        case"cc":
                            return be(t.length, e, Mra);
                        case"co":
                            return a.ordinalNumber(e, {unit: "day", valueCallback: Mra});
                        case"ccc":
                            return a.day(e, {width: "abbreviated", context: "standalone"}) || a.day(e, {width: "short", context: "standalone"}) || a.day(e, {width: "narrow", context: "standalone"});
                        case"ccccc":
                            return a.day(e, {width: "narrow", context: "standalone"});
                        case"cccccc":
                            return a.day(e, {width: "short", context: "standalone"}) || a.day(e, {width: "narrow", context: "standalone"});
                        default:
                            return a.day(e, {width: "wide", context: "standalone"}) || a.day(e, {width: "abbreviated", context: "standalone"}) || a.day(e, {width: "short", context: "standalone"}) || a.day(e, {width: "narrow", context: "standalone"})
                    }
                }, validate          : function (e, t, a) {
                    return 0 <= t && t <= 6
                }, set               : function (e, t, a, n) {
                    return (e = A(e, a, n)).setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]
            }, i: {
                priority             : 90, parse: function (e, t, a, n) {
                    function $ra(e) {
                        return 0 === e ? 7 : e
                    }

                    switch (t) {
                        case"i":
                        case"ii":
                            return be(t.length, e);
                        case"io":
                            return a.ordinalNumber(e, {unit: "day"});
                        case"iii":
                            return a.day(e, {width: "abbreviated", context: "formatting", valueCallback: $ra}) || a.day(e, {width: "short", context: "formatting", valueCallback: $ra}) || a.day(e, {width: "narrow", context: "formatting", valueCallback: $ra});
                        case"iiiii":
                            return a.day(e, {width: "narrow", context: "formatting", valueCallback: $ra});
                        case"iiiiii":
                            return a.day(e, {width: "short", context: "formatting", valueCallback: $ra}) || a.day(e, {width: "narrow", context: "formatting", valueCallback: $ra});
                        default:
                            return a.day(e, {width: "wide", context: "formatting", valueCallback: $ra}) || a.day(e, {width: "abbreviated", context: "formatting", valueCallback: $ra}) || a.day(e, {width: "short", context: "formatting", valueCallback: $ra}) || a.day(e, {width: "narrow", context: "formatting", valueCallback: $ra})
                    }
                }, validate          : function (e, t, a) {
                    return 1 <= t && t <= 7
                }, set               : function (e, t, a, n) {
                    return (e = function (e, t) {
                        k(2, arguments);
                        t = M(t);
                        t % 7 == 0 && (t -= 7);
                        e = P(e), t = ((7 + t % 7) % 7 < 1 ? 7 : 0) + t - e.getUTCDay();
                        return e.setUTCDate(e.getUTCDate() + t), e
                    }(e, a, n)).setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]
            }, a: {
                priority             : 80, parse: function (e, t, a, n) {
                    switch (t) {
                        case"a":
                        case"aa":
                        case"aaa":
                            return a.dayPeriod(e, {width: "abbreviated", context: "formatting"}) || a.dayPeriod(e, {width: "narrow", context: "formatting"});
                        case"aaaaa":
                            return a.dayPeriod(e, {width: "narrow", context: "formatting"});
                        default:
                            return a.dayPeriod(e, {width: "wide", context: "formatting"}) || a.dayPeriod(e, {width: "abbreviated", context: "formatting"}) || a.dayPeriod(e, {width: "narrow", context: "formatting"})
                    }
                }, set               : function (e, t, a, n) {
                    return e.setUTCHours(we(a), 0, 0, 0), e
                }, incompatibleTokens: ["b", "B", "H", "K", "k", "t", "T"]
            }, b: {
                priority             : 80, parse: function (e, t, a, n) {
                    switch (t) {
                        case"b":
                        case"bb":
                        case"bbb":
                            return a.dayPeriod(e, {width: "abbreviated", context: "formatting"}) || a.dayPeriod(e, {width: "narrow", context: "formatting"});
                        case"bbbbb":
                            return a.dayPeriod(e, {width: "narrow", context: "formatting"});
                        default:
                            return a.dayPeriod(e, {width: "wide", context: "formatting"}) || a.dayPeriod(e, {width: "abbreviated", context: "formatting"}) || a.dayPeriod(e, {width: "narrow", context: "formatting"})
                    }
                }, set               : function (e, t, a, n) {
                    return e.setUTCHours(we(a), 0, 0, 0), e
                }, incompatibleTokens: ["a", "B", "H", "K", "k", "t", "T"]
            }, B: {
                priority             : 80, parse: function (e, t, a, n) {
                    switch (t) {
                        case"B":
                        case"BB":
                        case"BBB":
                            return a.dayPeriod(e, {width: "abbreviated", context: "formatting"}) || a.dayPeriod(e, {width: "narrow", context: "formatting"});
                        case"BBBBB":
                            return a.dayPeriod(e, {width: "narrow", context: "formatting"});
                        default:
                            return a.dayPeriod(e, {width: "wide", context: "formatting"}) || a.dayPeriod(e, {width: "abbreviated", context: "formatting"}) || a.dayPeriod(e, {width: "narrow", context: "formatting"})
                    }
                }, set               : function (e, t, a, n) {
                    return e.setUTCHours(we(a), 0, 0, 0), e
                }, incompatibleTokens: ["a", "b", "t", "T"]
            }, h: {
                priority             : 70, parse: function (e, t, a, n) {
                    switch (t) {
                        case"h":
                            return ve(R, e);
                        case"ho":
                            return a.ordinalNumber(e, {unit: "hour"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    return 1 <= t && t <= 12
                }, set               : function (e, t, a, n) {
                    var i = 12 <= e.getUTCHours();
                    return i && a < 12 ? e.setUTCHours(a + 12, 0, 0, 0) : i || 12 !== a ? e.setUTCHours(a, 0, 0, 0) : e.setUTCHours(0, 0, 0, 0), e
                }, incompatibleTokens: ["H", "K", "k", "t", "T"]
            }, H: {
                priority             : 70, parse: function (e, t, a, n) {
                    switch (t) {
                        case"H":
                            return ve(w, e);
                        case"Ho":
                            return a.ordinalNumber(e, {unit: "hour"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    return 0 <= t && t <= 23
                }, set               : function (e, t, a, n) {
                    return e.setUTCHours(a, 0, 0, 0), e
                }, incompatibleTokens: ["a", "b", "h", "K", "k", "t", "T"]
            }, K: {
                priority             : 70, parse: function (e, t, a, n) {
                    switch (t) {
                        case"K":
                            return ve(C, e);
                        case"Ko":
                            return a.ordinalNumber(e, {unit: "hour"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    return 0 <= t && t <= 11
                }, set               : function (e, t, a, n) {
                    return 12 <= e.getUTCHours() && a < 12 ? e.setUTCHours(a + 12, 0, 0, 0) : e.setUTCHours(a, 0, 0, 0), e
                }, incompatibleTokens: ["a", "b", "h", "H", "k", "t", "T"]
            }, k: {
                priority             : 70, parse: function (e, t, a, n) {
                    switch (t) {
                        case"k":
                            return ve(x, e);
                        case"ko":
                            return a.ordinalNumber(e, {unit: "hour"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    return 1 <= t && t <= 24
                }, set               : function (e, t, a, n) {
                    return e.setUTCHours(a <= 24 ? a % 24 : a, 0, 0, 0), e
                }, incompatibleTokens: ["a", "b", "h", "H", "K", "t", "T"]
            }, m: {
                priority             : 60, parse: function (e, t, a, n) {
                    switch (t) {
                        case"m":
                            return ve(J, e);
                        case"mo":
                            return a.ordinalNumber(e, {unit: "minute"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    return 0 <= t && t <= 59
                }, set               : function (e, t, a, n) {
                    return e.setUTCMinutes(a, 0, 0), e
                }, incompatibleTokens: ["t", "T"]
            }, s: {
                priority             : 50, parse: function (e, t, a, n) {
                    switch (t) {
                        case"s":
                            return ve(V, e);
                        case"so":
                            return a.ordinalNumber(e, {unit: "second"});
                        default:
                            return be(t.length, e)
                    }
                }, validate          : function (e, t, a) {
                    return 0 <= t && t <= 59
                }, set               : function (e, t, a, n) {
                    return e.setUTCSeconds(a, 0), e
                }, incompatibleTokens: ["t", "T"]
            }, S: {
                priority             : 30, parse: function (e, t, a, n) {
                    return be(t.length, e, function (e) {
                        return Math.floor(e * Math.pow(10, 3 - t.length))
                    })
                }, set               : function (e, t, a, n) {
                    return e.setUTCMilliseconds(a), e
                }, incompatibleTokens: ["t", "T"]
            }, X: {
                priority             : 10, parse: function (e, t, a, n) {
                    switch (t) {
                        case"X":
                            return pe(ne, e);
                        case"XX":
                            return pe(ie, e);
                        case"XXXX":
                            return pe(re, e);
                        case"XXXXX":
                            return pe(ue, e);
                        default:
                            return pe(oe, e)
                    }
                }, set               : function (e, t, a, n) {
                    return t.timestampIsSet ? e : new Date(e.getTime() - a)
                }, incompatibleTokens: ["t", "T", "x"]
            }, x: {
                priority             : 10, parse: function (e, t, a, n) {
                    switch (t) {
                        case"x":
                            return pe(ne, e);
                        case"xx":
                            return pe(ie, e);
                        case"xxxx":
                            return pe(re, e);
                        case"xxxxx":
                            return pe(ue, e);
                        default:
                            return pe(oe, e)
                    }
                }, set               : function (e, t, a, n) {
                    return t.timestampIsSet ? e : new Date(e.getTime() - a)
                }, incompatibleTokens: ["t", "T", "X"]
            }, t: {
                priority             : 40, parse: function (e, t, a, n) {
                    return ge(e)
                }, set               : function (e, t, a, n) {
                    return [new Date(1e3 * a), {timestampIsSet: !0}]
                }, incompatibleTokens: "*"
            }, T: {
                priority             : 20, parse: function (e, t, a, n) {
                    return ge(e)
                }, set               : function (e, t, a, n) {
                    return [new Date(a), {timestampIsSet: !0}]
                }, incompatibleTokens: "*"
            }
        }, me = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, fe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ce = /^'([^]*?)'?$/, he = /''/g, ke = /\S/, Pe = /[a-zA-Z]/;

        function Ce(e, t, a, n) {
            k(3, arguments);
            var i = String(e), r = String(t), o = n || {}, u = o.locale || z;
            if (!u.match) throw new RangeError("locale must contain match property");
            t = u.options && u.options.firstWeekContainsDate, n = null == t ? 1 : M(t), t = null == o.firstWeekContainsDate ? n : M(o.firstWeekContainsDate);
            if (!(1 <= t && t <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            n = u.options && u.options.weekStartsOn, n = null == n ? 0 : M(n), n = null == o.weekStartsOn ? n : M(o.weekStartsOn);
            if (!(0 <= n && n <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if ("" === r) return "" === i ? P(a) : new Date(NaN);
            for (var d = {firstWeekContainsDate: t, weekStartsOn: n, locale: u}, s = [{priority: 10, subPriority: -1, set: He, index: 0}], l = r.match(fe).map(function (e) {
                var t = e[0];
                return "p" === t || "P" === t ? (0, S[t])(e, u.formatLong, d) : e
            }).join("").match(me), m = [], f = 0; f < l.length; f++) {
                var c = l[f];
                !o.useAdditionalWeekYearTokens && O(c) && N(c, r, e), !o.useAdditionalDayOfYearTokens && H(c) && N(c, r, e);
                var h = c[0], p = le[h];
                if (p) {
                    var v = p.incompatibleTokens;
                    if (Array.isArray(v)) {
                        for (var g = void 0, b = 0; b < m.length; b++) {
                            var y = m[b].token;
                            if (-1 !== v.indexOf(y) || y === h) {
                                g = m[b];
                                break
                            }
                        }
                        if (g) throw new RangeError("The format string mustn't contain `".concat(g.fullToken, "` and `").concat(c, "` at the same time"))
                    } else if ("*" === p.incompatibleTokens && m.length) throw new RangeError("The format string mustn't contain `".concat(c, "` and any other token at the same time"));
                    m.push({token: h, fullToken: c});
                    var w = p.parse(i, c, u.match, d);
                    if (!w) return new Date(NaN);
                    s.push({priority: p.priority, subPriority: p.subPriority || 0, set: p.set, validate: p.validate, value: w.value, index: s.length}), i = w.rest
                } else {
                    if (h.match(Pe)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + h + "`");
                    if ("''" === c ? c = "'" : "'" === h && (c = function Oe(e) {
                        return e.match(ce)[1].replace(he, "'")
                    }(c)), 0 !== i.indexOf(c)) return new Date(NaN);
                    i = i.slice(c.length)
                }
            }
            if (0 < i.length && ke.test(i)) return new Date(NaN);
            var _ = s.map(function (e) {
                return e.priority
            }).sort(function (e, t) {
                return t - e
            }).filter(function (e, t, a) {
                return a.indexOf(e) === t
            }).map(function (t) {
                return s.filter(function (e) {
                    return e.priority === t
                }).sort(function (e, t) {
                    return t.subPriority - e.subPriority
                })
            }).map(function (e) {
                return e[0]
            }), a = P(a);
            if (isNaN(a)) return new Date(NaN);
            var x = j(a, D(a)), W = {};
            for (f = 0; f < _.length; f++) {
                var T = _[f];
                if (T.validate && !T.validate(x, T.value, d)) return new Date(NaN);
                T = T.set(x, W, T.value, d);
                T[0] ? (x = T[0], function x(e, t) {
                    if (null == e) throw new TypeError("assign requires that input parameter not be null or undefined");
                    for (var a in t = t || {}) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }(W, T[1])) : x = T
            }
            return x
        }

        function He(e, t) {
            if (t.timestampIsSet) return e;
            t = new Date(0);
            return t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), t.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), t
        }

        Object.assign;

        function fka() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "") + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (e) {
                return (e ^ (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
            })
        }

        function gka() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
            } catch (e) {
            }
            return e
        }

        function hka(e, t) {
            var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "yyyy-MM-dd HH:mm";
            if (e) {
                if (n9a(e)) return new Date(e.getTime());
                t = Ce(e, t, new Date);
                return t = !n9a(t) ? Ce(e, a, new Date) : t
            }
        }

        function Le(e) {
            if (k(1, arguments), function Ae(e) {
                return k(1, arguments), e instanceof Date || "object" == typeof e && "[object Date]" === Object.prototype.toString.call(e)
            }(e) || "number" == typeof e) {
                e = P(e);
                return !isNaN(Number(e))
            }
        }

        function Ye(e, t) {
            for (var a = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return a + n
        }

        var je = function (e, t) {
            e = e.getUTCFullYear(), e = 0 < e ? e : 1 - e;
            return Ye("yy" === t ? e % 100 : e, t.length)
        }, xe = function (e, t) {
            e = e.getUTCMonth();
            return "M" === t ? String(e + 1) : Ye(e + 1, 2)
        }, We = function (e, t) {
            return Ye(e.getUTCDate(), t.length)
        }, Te = function (e, t) {
            return Ye(e.getUTCHours() % 12 || 12, t.length)
        }, ze = function (e, t) {
            return Ye(e.getUTCHours(), t.length)
        }, De = function (e, t) {
            return Ye(e.getUTCMinutes(), t.length)
        }, Se = function (e, t) {
            return Ye(e.getUTCSeconds(), t.length)
        }, Ne = function (e, t) {
            var a = t.length, e = e.getUTCMilliseconds();
            return Ye(Math.floor(e * Math.pow(10, a - 3)), t.length)
        };

        function Ke(e, t) {
            var a = 0 < e ? "-" : "+", n = Math.abs(e), e = Math.floor(n / 60), n = n % 60;
            if (0 == n) return a + String(e);
            t = t || "";
            return a + String(e) + t + Ye(n, 2)
        }

        function Ue(e, t) {
            return e % 60 == 0 ? (0 < e ? "-" : "+") + Ye(Math.abs(e) / 60, 2) : Qe(e, t)
        }

        function Qe(e, t) {
            var a = t || "", t = 0 < e ? "-" : "+", e = Math.abs(e);
            return t + Ye(Math.floor(e / 60), 2) + a + Ye(e % 60, 2)
        }

        var Ee = {
            G   : function (e, t, a) {
                var n = 0 < e.getUTCFullYear() ? 1 : 0;
                switch (t) {
                    case"G":
                    case"GG":
                    case"GGG":
                        return a.era(n, {width: "abbreviated"});
                    case"GGGGG":
                        return a.era(n, {width: "narrow"});
                    default:
                        return a.era(n, {width: "wide"})
                }
            }, y: function (e, t, a) {
                if ("yo" !== t) return je(e, t);
                e = e.getUTCFullYear();
                return a.ordinalNumber(0 < e ? e : 1 - e, {unit: "year"})
            }, Y: function (e, t, a, n) {
                n = X(e, n), n = 0 < n ? n : 1 - n;
                return "YY" === t ? Ye(n % 100, 2) : "Yo" === t ? a.ordinalNumber(n, {unit: "year"}) : Ye(n, t.length)
            }, R: function (e, t) {
                return Ye(Y(e), t.length)
            }, u: function (e, t) {
                return Ye(e.getUTCFullYear(), t.length)
            }, Q: function (e, t, a) {
                var n = Math.ceil((e.getUTCMonth() + 1) / 3);
                switch (t) {
                    case"Q":
                        return String(n);
                    case"QQ":
                        return Ye(n, 2);
                    case"Qo":
                        return a.ordinalNumber(n, {unit: "quarter"});
                    case"QQQ":
                        return a.quarter(n, {width: "abbreviated", context: "formatting"});
                    case"QQQQQ":
                        return a.quarter(n, {width: "narrow", context: "formatting"});
                    default:
                        return a.quarter(n, {width: "wide", context: "formatting"})
                }
            }, q: function (e, t, a) {
                var n = Math.ceil((e.getUTCMonth() + 1) / 3);
                switch (t) {
                    case"q":
                        return String(n);
                    case"qq":
                        return Ye(n, 2);
                    case"qo":
                        return a.ordinalNumber(n, {unit: "quarter"});
                    case"qqq":
                        return a.quarter(n, {width: "abbreviated", context: "standalone"});
                    case"qqqqq":
                        return a.quarter(n, {width: "narrow", context: "standalone"});
                    default:
                        return a.quarter(n, {width: "wide", context: "standalone"})
                }
            }, M: function (e, t, a) {
                var n = e.getUTCMonth();
                switch (t) {
                    case"M":
                    case"MM":
                        return xe(e, t);
                    case"Mo":
                        return a.ordinalNumber(n + 1, {unit: "month"});
                    case"MMM":
                        return a.month(n, {width: "abbreviated", context: "formatting"});
                    case"MMMMM":
                        return a.month(n, {width: "narrow", context: "formatting"});
                    default:
                        return a.month(n, {width: "wide", context: "formatting"})
                }
            }, L: function (e, t, a) {
                var n = e.getUTCMonth();
                switch (t) {
                    case"L":
                        return String(n + 1);
                    case"LL":
                        return Ye(n + 1, 2);
                    case"Lo":
                        return a.ordinalNumber(n + 1, {unit: "month"});
                    case"LLL":
                        return a.month(n, {width: "abbreviated", context: "standalone"});
                    case"LLLLL":
                        return a.month(n, {width: "narrow", context: "standalone"});
                    default:
                        return a.month(n, {width: "wide", context: "standalone"})
                }
            }, w: function (e, t, a, n) {
                n = F(e, n);
                return "wo" === t ? a.ordinalNumber(n, {unit: "week"}) : Ye(n, t.length)
            }, I: function (e, t, a) {
                e = q(e);
                return "Io" === t ? a.ordinalNumber(e, {unit: "week"}) : Ye(e, t.length)
            }, d: function (e, t, a) {
                return "do" === t ? a.ordinalNumber(e.getUTCDate(), {unit: "date"}) : We(e, t)
            }, D: function (e, t, a) {
                e = function (e) {
                    k(1, arguments);
                    var t = P(e), e = t.getTime();
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
                    t = t.getTime();
                    return Math.floor((e - t) / 864e5) + 1
                }(e);
                return "Do" === t ? a.ordinalNumber(e, {unit: "dayOfYear"}) : Ye(e, t.length)
            }, E: function (e, t, a) {
                var n = e.getUTCDay();
                switch (t) {
                    case"E":
                    case"EE":
                    case"EEE":
                        return a.day(n, {width: "abbreviated", context: "formatting"});
                    case"EEEEE":
                        return a.day(n, {width: "narrow", context: "formatting"});
                    case"EEEEEE":
                        return a.day(n, {width: "short", context: "formatting"});
                    default:
                        return a.day(n, {width: "wide", context: "formatting"})
                }
            }, e: function (e, t, a, n) {
                var i = e.getUTCDay(), r = (i - n.weekStartsOn + 8) % 7 || 7;
                switch (t) {
                    case"e":
                        return String(r);
                    case"ee":
                        return Ye(r, 2);
                    case"eo":
                        return a.ordinalNumber(r, {unit: "day"});
                    case"eee":
                        return a.day(i, {width: "abbreviated", context: "formatting"});
                    case"eeeee":
                        return a.day(i, {width: "narrow", context: "formatting"});
                    case"eeeeee":
                        return a.day(i, {width: "short", context: "formatting"});
                    default:
                        return a.day(i, {width: "wide", context: "formatting"})
                }
            }, c: function (e, t, a, n) {
                var i = e.getUTCDay(), r = (i - n.weekStartsOn + 8) % 7 || 7;
                switch (t) {
                    case"c":
                        return String(r);
                    case"cc":
                        return Ye(r, t.length);
                    case"co":
                        return a.ordinalNumber(r, {unit: "day"});
                    case"ccc":
                        return a.day(i, {width: "abbreviated", context: "standalone"});
                    case"ccccc":
                        return a.day(i, {width: "narrow", context: "standalone"});
                    case"cccccc":
                        return a.day(i, {width: "short", context: "standalone"});
                    default:
                        return a.day(i, {width: "wide", context: "standalone"})
                }
            }, i: function (e, t, a) {
                var n = e.getUTCDay(), i = 0 === n ? 7 : n;
                switch (t) {
                    case"i":
                        return String(i);
                    case"ii":
                        return Ye(i, t.length);
                    case"io":
                        return a.ordinalNumber(i, {unit: "day"});
                    case"iii":
                        return a.day(n, {width: "abbreviated", context: "formatting"});
                    case"iiiii":
                        return a.day(n, {width: "narrow", context: "formatting"});
                    case"iiiiii":
                        return a.day(n, {width: "short", context: "formatting"});
                    default:
                        return a.day(n, {width: "wide", context: "formatting"})
                }
            }, a: function (e, t, a) {
                var n = 1 <= e.getUTCHours() / 12 ? "pm" : "am";
                switch (t) {
                    case"a":
                    case"aa":
                        return a.dayPeriod(n, {width: "abbreviated", context: "formatting"});
                    case"aaa":
                        return a.dayPeriod(n, {width: "abbreviated", context: "formatting"}).toLowerCase();
                    case"aaaaa":
                        return a.dayPeriod(n, {width: "narrow", context: "formatting"});
                    default:
                        return a.dayPeriod(n, {width: "wide", context: "formatting"})
                }
            }, b: function (e, t, a) {
                var e = e.getUTCHours(), n = 12 === e ? "noon" : 0 === e ? "midnight" : 1 <= e / 12 ? "pm" : "am";
                switch (t) {
                    case"b":
                    case"bb":
                        return a.dayPeriod(n, {width: "abbreviated", context: "formatting"});
                    case"bbb":
                        return a.dayPeriod(n, {width: "abbreviated", context: "formatting"}).toLowerCase();
                    case"bbbbb":
                        return a.dayPeriod(n, {width: "narrow", context: "formatting"});
                    default:
                        return a.dayPeriod(n, {width: "wide", context: "formatting"})
                }
            }, B: function (e, t, a) {
                var e = e.getUTCHours(), n = 17 <= e ? "evening" : 12 <= e ? "afternoon" : 4 <= e ? "morning" : "night";
                switch (t) {
                    case"B":
                    case"BB":
                    case"BBB":
                        return a.dayPeriod(n, {width: "abbreviated", context: "formatting"});
                    case"BBBBB":
                        return a.dayPeriod(n, {width: "narrow", context: "formatting"});
                    default:
                        return a.dayPeriod(n, {width: "wide", context: "formatting"})
                }
            }, h: function (e, t, a) {
                if ("ho" !== t) return Te(e, t);
                e = e.getUTCHours() % 12;
                return a.ordinalNumber(e = 0 === e ? 12 : e, {unit: "hour"})
            }, H: function (e, t, a) {
                return "Ho" === t ? a.ordinalNumber(e.getUTCHours(), {unit: "hour"}) : ze(e, t)
            }, K: function (e, t, a) {
                e = e.getUTCHours() % 12;
                return "Ko" === t ? a.ordinalNumber(e, {unit: "hour"}) : Ye(e, t.length)
            }, k: function (e, t, a) {
                e = e.getUTCHours();
                return 0 === e && (e = 24), "ko" === t ? a.ordinalNumber(e, {unit: "hour"}) : Ye(e, t.length)
            }, m: function (e, t, a) {
                return "mo" === t ? a.ordinalNumber(e.getUTCMinutes(), {unit: "minute"}) : De(e, t)
            }, s: function (e, t, a) {
                return "so" === t ? a.ordinalNumber(e.getUTCSeconds(), {unit: "second"}) : Se(e, t)
            }, S: function (e, t) {
                return Ne(e, t)
            }, X: function (e, t, a, n) {
                var i = (n._originalDate || e).getTimezoneOffset();
                if (0 === i) return "Z";
                switch (t) {
                    case"X":
                        return Ue(i);
                    case"XXXX":
                    case"XX":
                        return Qe(i);
                    default:
                        return Qe(i, ":")
                }
            }, x: function (e, t, a, n) {
                var i = (n._originalDate || e).getTimezoneOffset();
                switch (t) {
                    case"x":
                        return Ue(i);
                    case"xxxx":
                    case"xx":
                        return Qe(i);
                    default:
                        return Qe(i, ":")
                }
            }, O: function (e, t, a, n) {
                var i = (n._originalDate || e).getTimezoneOffset();
                switch (t) {
                    case"O":
                    case"OO":
                    case"OOO":
                        return "GMT" + Ke(i, ":");
                    default:
                        return "GMT" + Qe(i, ":")
                }
            }, z: function (e, t, a, n) {
                var i = (n._originalDate || e).getTimezoneOffset();
                switch (t) {
                    case"z":
                    case"zz":
                    case"zzz":
                        return "GMT" + Ke(i, ":");
                    default:
                        return "GMT" + Qe(i, ":")
                }
            }, t: function (e, t, a, n) {
                e = n._originalDate || e;
                return Ye(Math.floor(e.getTime() / 1e3), t.length)
            }, T: function (e, t, a, n) {
                return Ye((n._originalDate || e).getTime(), t.length)
            }
        }, Xe = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ie = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, qe = /^'([^]*?)'?$/, Fe = /''/g, Re = /[a-zA-Z]/;

        function nt(n, i, e) {
            k(2, arguments);
            var t = String(i), r = e || {}, o = r.locale || z, a = o.options && o.options.firstWeekContainsDate, u = null == a ? 1 : M(a), e = null == r.firstWeekContainsDate ? u : M(r.firstWeekContainsDate);
            if (!(1 <= e && e <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            a = o.options && o.options.weekStartsOn, u = null == a ? 0 : M(a), a = null == r.weekStartsOn ? u : M(r.weekStartsOn);
            if (!(0 <= a && a <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            if (!o.localize) throw new RangeError("locale must contain localize property");
            if (!o.formatLong) throw new RangeError("locale must contain formatLong property");
            u = P(n);
            if (!Le(u)) throw new RangeError("Invalid time value");
            var d = j(u, D(u)), s = {firstWeekContainsDate: e, weekStartsOn: a, locale: o, _originalDate: u};
            return t.match(Ie).map(function (e) {
                var t = e[0];
                return "p" === t || "P" === t ? (0, S[t])(e, o.formatLong, s) : e
            }).join("").match(Xe).map(function (e) {
                if ("''" === e) return "'";
                var t = e[0];
                if ("'" === t) return function it(e) {
                    return e.match(qe)[1].replace(Fe, "'")
                }(e);
                var a = Ee[t];
                if (a) return !r.useAdditionalWeekYearTokens && O(e) && N(e, i, n), !r.useAdditionalDayOfYearTokens && H(e) && N(e, i, n), a(d, e, o.localize, s);
                if (t.match(Re)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
                return e
            }).join("")
        }

        var Ge = function (t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t
        };

        function e(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var Je = function () {
            function e() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                (function ot(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), this._listeners = new Map(t), this._middlewares = new Map
            }

            return Ge(e, [{
                key: "listenerCount", value: function (e) {
                    return this._listeners.has(e) ? this._listeners.get(e).length : 0
                }
            }, {
                key: "removeListeners", value: function () {
                    var t = this, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null, a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    null !== e ? Array.isArray(e) ? name.forEach(function (e) {
                        return t.removeListeners(e, a)
                    }) : (this._listeners.delete(e), a && this.removeMiddleware(e)) : this._listeners = new Map
                }
            }, {
                key: "middleware", value: function (e, t) {
                    var a = this;
                    Array.isArray(e) ? name.forEach(function (e) {
                        return a.middleware(e, t)
                    }) : (Array.isArray(this._middlewares.get(e)) || this._middlewares.set(e, []), this._middlewares.get(e).push(t))
                }
            }, {
                key: "removeMiddleware", value: function () {
                    var t = this, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    null !== e ? Array.isArray(e) ? name.forEach(function (e) {
                        return t.removeMiddleware(e)
                    }) : this._middlewares.delete(e) : this._middlewares = new Map
                }
            }, {
                key: "on", value: function (e, t) {
                    var a, n = this, i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    Array.isArray(e) ? e.forEach(function (e) {
                        return n.on(e, t)
                    }) : 1 < (a = (e = e.toString()).split(/,|, | /)).length ? a.forEach(function (e) {
                        return n.on(e, t)
                    }) : (Array.isArray(this._listeners.get(e)) || this._listeners.set(e, []), this._listeners.get(e).push({once: i, callback: t}))
                }
            }, {
                key: "once", value: function (e, t) {
                    this.on(e, t, !0)
                }
            }, {
                key: "emit", value: function (a, n) {
                    var i = this, r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    a = a.toString();
                    var o = this._listeners.get(a), u = null, d = 0, s = r;
                    if (Array.isArray(o)) for (o.forEach(function (e, t) {
                        r || (u = i._middlewares.get(a), Array.isArray(u) ? (u.forEach(function (e) {
                            e(n, function () {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                null !== e && (n = e), d++
                            }, a)
                        }), d >= u.length && (s = !0)) : s = !0), s && (e.once && (o[t] = null), e.callback({type: a, timeStamp: (new Date).getTime(), data: n}))
                    }); -1 !== o.indexOf(null);) o.splice(o.indexOf(null), 1)
                }
            }]), e
        }();

        function dt(e, t) {
            k(2, arguments);
            var a = P(e), n = M(t);
            if (isNaN(n)) return new Date(NaN);
            if (!n) return a;
            e = a.getDate(), t = new Date(a.getTime());
            return t.setMonth(a.getMonth() + n + 1, 0), t.getDate() <= e ? t : (a.setFullYear(t.getFullYear(), t.getMonth(), e), a)
        }

        function st(e) {
            k(1, arguments);
            var t = P(e), a = t.getFullYear(), e = t.getMonth(), t = new Date(0);
            return t.setFullYear(a, e + 1, 0), t.setHours(0, 0, 0, 0), t.getDate()
        }

        function lt(e) {
            return k(1, arguments), P(e).getDate()
        }

        function mt(e, t) {
            k(2, arguments);
            e = P(e), t = M(t);
            return e.setDate(t), e
        }

        function ft(e) {
            var t, a;
            if (k(1, arguments), e && "function" == typeof e.forEach) t = e; else {
                if ("object" != typeof e || null === e) return new Date(NaN);
                t = Array.prototype.slice.call(e)
            }
            return t.forEach(function (e) {
                e = P(e);
                (void 0 === a || a < e || isNaN(Number(e))) && (a = e)
            }), a || new Date(NaN)
        }

        function ct(e) {
            var t, a;
            if (k(1, arguments), e && "function" == typeof e.forEach) t = e; else {
                if ("object" != typeof e || null === e) return new Date(NaN);
                t = Array.prototype.slice.call(e)
            }
            return t.forEach(function (e) {
                e = P(e);
                (void 0 === a || e < a || isNaN(e.getDate())) && (a = e)
            }), a || new Date(NaN)
        }

        function ht(e, t) {
            k(2, arguments);
            e = P(e), t = P(t);
            return e.getTime() === t.getTime()
        }

        function vt(e, t) {
            return k(2, arguments), dt(e, 12 * M(t))
        }

        function pt(e, t) {
            k(1, arguments);
            var a = t || {}, t = a.locale, t = t && t.options && t.options.weekStartsOn, t = null == t ? 0 : M(t), t = null == a.weekStartsOn ? t : M(a.weekStartsOn);
            if (!(0 <= t && t <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            a = P(e), e = a.getDay(), t = (e < t ? 7 : 0) + e - t;
            return a.setDate(a.getDate() - t), a.setHours(0, 0, 0, 0), a
        }

        function gt(e, t) {
            k(2, arguments);
            e = P(e), t = M(t);
            return isNaN(t) ? new Date(NaN) : (t && e.setDate(e.getDate() + t), e)
        }

        function bt(e, t) {
            k(2, arguments);
            e = P(e), t = P(t);
            return 12 * (e.getFullYear() - t.getFullYear()) + (e.getMonth() - t.getMonth())
        }

        function yt(e) {
            k(1, arguments);
            e = P(e);
            return e.setHours(0, 0, 0, 0), e
        }

        function Mt(e, t) {
            t = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
            return t < 0 ? -1 : 0 < t ? 1 : t
        }

        function kt(e, t) {
            k(2, arguments);
            var a = P(e), n = P(t), e = Mt(a, n), t = Math.abs(function wt(e, t) {
                return k(2, arguments), e = yt(e), t = yt(t), e = e.getTime() - D(e), t = t.getTime() - D(t), Math.round((e - t) / 864e5)
            }(a, n));
            a.setDate(a.getDate() - e * t);
            e *= t - Number(Mt(a, n) === -e);
            return 0 == e ? 0 : e
        }

        function Pt(e, t) {
            k(2, arguments);
            var a = P(e).getTime(), e = P(t.start).getTime(), t = P(t.end).getTime();
            if (!(e <= t)) throw new RangeError("Invalid interval");
            return e <= a && a <= t
        }

        function _t(e) {
            k(1, arguments);
            e = P(e);
            return e.setHours(23, 59, 59, 999), e
        }

        function jt(e, t) {
            k(2, arguments);
            e = P(e), t = P(t);
            return e.getTime() > t.getTime()
        }

        function xt(e, t) {
            k(2, arguments);
            e = P(e), t = P(t);
            return e.getTime() < t.getTime()
        }

        function Tt(e) {
            return k(1, arguments), function Wt(e, t) {
                return k(2, arguments), e = yt(e), t = yt(t), e.getTime() === t.getTime()
            }(e, Date.now())
        }

        var Ve = {color: "primary", isRange: !1, allowSameDayRange: !0, lang: "en-US", startDate: void 0, endDate: void 0, minDate: null, maxDate: null, disabledDates: [], disabledWeekDays: void 0, highlightedDates: [], weekStart: 0, dateFormat: "MM/dd/yyyy", enableMonthSwitch: !0, enableYearSwitch: !0, displayYearsCount: 50, formats: {header: "LLLL yyyy", navigationMonth: "LLLL", navigationYear: "yyyy", selectMonth: "LLL", selectYear: "yyyy", weekday: "ccc"}}, $e = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a, n = arguments[t];
                for (a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }, d = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }();
        var Be = (function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, Je), d(t, [{
            key: "onPreviousDatePicker", value: function (e) {
                this._supportsPassive || e.preventDefault(), e.stopPropagation();
                var t = function (e) {
                    k(1, arguments);
                    var t = P(e), e = t.getMonth();
                    return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(0, 0, 0, 0), t
                }(function (e) {
                    return k(2, arguments), dt(e, -M(1))
                }(new Date(function (e) {
                    return k(1, arguments), P(e).getFullYear()
                }(this._visibleDate), function (e) {
                    return k(1, arguments), P(e).getMonth()
                }(this._visibleDate)), 1)), e = Math.min(st(t), lt(this._visibleDate));
                this._setVisibleDate(mt(t, e)), this.refresh()
            }
        }, {
            key: "onNextDatePicker", value: function (e) {
                this._supportsPassive || e.preventDefault(), e.stopPropagation();
                var t = dt(this._visibleDate, 1), e = Math.min(st(t), lt(this._visibleDate));
                this._setVisibleDate(mt(t, e)), this.refresh()
            }
        }, {
            key: "onSelectMonthDatePicker", value: function (e) {
                this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.options.enableMonthSwitch && (this._ui.body.dates.classList.remove("is-active"), this._ui.body.years.classList.remove("is-active"), this._ui.body.months.classList.add("is-active"), this._toggleNextButton(!1), this._togglePreviousButton(!1))
            }
        }, {
            key: "onSelectYearDatePicker", value: function (e) {
                this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.options.enableYearSwitch && (this._ui.body.dates.classList.remove("is-active"), this._ui.body.months.classList.remove("is-active"), this._ui.body.years.classList.add("is-active"), this._toggleNextButton(!1), this._togglePreviousButton(!1), (e = this._ui.body.years.querySelector(".calendar-year.is-active")) && (this._ui.body.years.scrollTop = e.offsetTop - this._ui.body.years.offsetTop - this._ui.body.years.clientHeight / 2))
            }
        }, {
            key: "onMonthClickDatePicker", value: function (e) {
                this._supportsPassive || e.preventDefault(), e.stopPropagation();
                e = function (e, t) {
                    k(2, arguments);
                    var a = P(e), n = M(t), i = a.getFullYear(), e = a.getDate(), t = new Date(0);
                    t.setFullYear(i, n, 15), t.setHours(0, 0, 0, 0);
                    t = st(t);
                    return a.setMonth(n, Math.min(e, t)), a
                }(this._visibleDate, parseInt(e.currentTarget.dataset.month) - 1);
                this._visibleDate = this.min ? ft([e, this.min]) : e, this._visibleDate = this.max ? ct([this._visibleDate, this.max]) : this._visibleDate, this.refresh()
            }
        }, {
            key: "onYearClickDatePicker", value: function (e) {
                this._supportsPassive || e.preventDefault(), e.stopPropagation();
                e = function (e, t) {
                    k(2, arguments);
                    e = P(e), t = M(t);
                    return isNaN(e.getTime()) ? new Date(NaN) : (e.setFullYear(t), e)
                }(this._visibleDate, parseInt(e.currentTarget.dataset.year));
                this._visibleDate = this.min ? ft([e, this.min]) : e, this._visibleDate = this.max ? ct([this._visibleDate, this.max]) : this._visibleDate, this.refresh()
            }
        }, {
            key: "onDateClickDatePicker", value: function (e) {
                this._supportsPassive || e.preventDefault(), e.stopPropagation(), e.currentTarget.classList.contains("is-disabled") || (this._select(new Date(e.currentTarget.dataset.date)), this.refresh())
            }
        }, {
            key: "isRange", value: function () {
                return this.options.isRange
            }
        }, {
            key: "isValid", value: function () {
                return this.options.isRange ? this._isValidDate(this.start) && this._isValidDate(this.end) : this._isValidDate(this.start)
            }
        }, {
            key: "enableDate", value: function () {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0;
                !Array.isArray(this.disabledDates) || -1 < (e = this.disabledDates.findIndex(function (e) {
                    return ht(e, t)
                })) && unset(this.disabledDates[e])
            }
        }, {
            key: "disableDate", value: function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0;
                Array.isArray(this.disabledDates) && -1 === this.disabledDates.findIndex(function (e) {
                    return ht(e, t)
                }) && this.disabledDates.push(t)
            }
        }, {
            key: "highlightDate", value: function () {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0;
                !Array.isArray(this.highlightedDates) || -1 < (e = this.highlightedDates.findIndex(function (e) {
                    return ht(e, t)
                })) && unset(this.highlightedDates[e])
            }
        }, {
            key: "unhighlightDate", value: function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0;
                Array.isArray(this.highlightedDates) && -1 === this.highlightedDates.findIndex(function (e) {
                    return ht(e, t)
                }) && this.highlightedDates.push(t)
            }
        }, {
            key: "enableWeekDay", value: function (t) {
                var e = this.disabledWeekDays.findIndex(function (e) {
                    return ht(e, t)
                });
                -1 < e && unset(this.disabledWeekDays[e])
            }
        }, {
            key: "disableWeekDay", value: function (t) {
                -1 === this.disabledWeekDays.findIndex(function (e) {
                    return ht(e, t)
                }) && this.disabledWeekDays.push(t)
            }
        }, {
            key: "show", value: function () {
                this._open || (this.refresh(), this._ui.container.classList.add("is-active"), this._open = !0, this._focus = !0, this.emit("show", this))
            }
        }, {
            key: "hide", value: function () {
                this._open && (this._open = !1, this._focus = !1, this._ui.container.classList.remove("is-active"), this.emit("hide", this))
            }
        }, {
            key: "toggle", value: function () {
                this._open ? this.hide() : this.show()
            }
        }, {
            key: "value", value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                if (e) return this.options.isRange ? (m9a(e) && (e = e.split(" - ")), Array.isArray(e) ? (e.length && (this.start = hka(e[0], this.format, "yyyy-MM-dd")), 2 === e.length && (this.end = hka(e[1], this.format, "yyyy-MM-dd"))) : this._select(e, !1)) : this._select(e, !1), void this.refresh();
                e = this._isValidDate(this.start) ? nt(this.start, this.format, {locale: this.locale}) : "";
                return this.options.isRange && this._isValidDate(this.end) && (e += " - " + nt(this.end, this.format, {locale: this.locale})), e
            }
        }, {
            key: "refresh", value: function () {
                var a = this;
                this._ui.body.dates.innerHTML = "";
                var t, e = new Array(12).fill(function (e) {
                    k(1, arguments);
                    var t = P(e), e = new Date(0);
                    return e.setFullYear(t.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e
                }(this._visibleDate)).map(function (e, t) {
                    return dt(e, t)
                });
                this._ui.body.months.innerHTML = "", this._ui.body.months.appendChild(document.createRange().createContextualFragment("" + (t = {months: e, format: this.options.formats.selectMonth, locale: this.locale}).months.map(function (e) {
                    return '\n        <div class="datepicker-month" data-month="' + nt(e, "MM", {locale: t.locale}) + '">\n            ' + nt(e, t.format, {locale: t.locale}) + "\n        </div>\n    "
                }).join(""))), (this._ui.body.months.querySelectorAll(".datepicker-month") || []).forEach(function (t) {
                    a._clickEvents.forEach(function (e) {
                        t.addEventListener(e, a.onMonthClickDatePicker)
                    }), t.classList.remove("is-active"), t.dataset.month === nt(a._visibleDate, "MM", {locale: a.locale}) && t.classList.add("is-active")
                });
                var n, e = new Array(2 * this.options.displayYearsCount).fill(function (e, t) {
                    return k(2, arguments), vt(e, -M(t))
                }(this._visibleDate, this.options.displayYearsCount)).map(function (e, t) {
                    return vt(e, t)
                });
                this._ui.body.years.innerHTML = "", this._ui.body.years.appendChild(document.createRange().createContextualFragment("" + (n = {visibleDate: this._visibleDate, years: e, format: this.options.formats.selectYear, locale: this.locale}).years.map(function (e) {
                    return '\n        <div class="datepicker-year" data-year="' + nt(e, "yyyy", {locale: n.locale}) + '">\n            <span class="item">' + nt(e, n.format, {locale: n.locale}) + "</span>\n        </div>\n    "
                }).join(""))), (this._ui.body.years.querySelectorAll(".datepicker-year") || []).forEach(function (t) {
                    a._clickEvents.forEach(function (e) {
                        t.addEventListener(e, a.onYearClickDatePicker)
                    }), t.classList.remove("is-active"), t.dataset.year === nt(a._visibleDate, "yyyy", {locale: a.locale}) && t.classList.add("is-active")
                });
                var i, e = new Array(7).fill(pt(this._visibleDate, {weekStartsOn: this.options.weekStart})).map(function (e, t) {
                    return gt(e, t)
                });
                return this._ui.body.dates.appendChild(document.createRange().createContextualFragment('<div class="datepicker-weekdays">\n        ' + (i = {days: e, format: this.options.formats.weekday, locale: this.locale}).days.map(function (e) {
                    return '<div class="datepicker-date">\n            ' + nt(e, i.format, {locale: i.locale}) + "\n        </div>"
                }).join("") + "\n    </div>")), this.min && 0 === bt(this._visibleDate, this.min) ? this._togglePreviousButton(!1) : this._togglePreviousButton(), this.max && 0 === bt(this._visibleDate, this.max) ? this._toggleNextButton(!1) : this._toggleNextButton(), this._ui.navigation.month.innerHTML = nt(this._visibleDate, this.options.formats.navigationMonth, {locale: this.locale}), this._ui.navigation.year.innerHTML = nt(this._visibleDate, this.options.formats.navigationYear, {locale: this.locale}), this._renderDays(), this._ui.body.dates.classList.add("is-active"), this._ui.body.months.classList.remove("is-active"), this._ui.body.years.classList.remove("is-active"), this
            }
        }, {
            key: "clear", value: function () {
                var e = new Date;
                this._date = {start: void 0, end: void 0}, this._setVisibleDate(e), this.refresh()
            }
        }, {
            key: "render", value: function () {
                return this.refresh(), this.node
            }
        }, {
            key: "_init", value: function () {
                var e = new Date;
                if (this._open = !1, this.lang = this.options.lang, this.format = this.options.dateFormat || "MM/dd/yyyy", this.disabledDates = l9a(this.options.disabledDates) ? this.options.disabledDates : [], this.disabledWeekDays = m9a(this.options.disabledWeekDays) ? this.options.disabledWeekDays.split(",") : Array.isArray(this.options.disabledWeekDays) ? this.options.disabledWeekDays : [], this.highlightedDates = l9a(this.options.highlightedDates) ? this.options.highlightedDates : [], Array.isArray(this.options.disabledDates)) for (var t = 0; t < this.options.disabledDates.length; t++) this.disabledDates.push(hka(this.options.disabledDates[t], this.format, "yyyy-MM-dd"));
                if (Array.isArray(this.options.highlightedDates)) for (var a = 0; a < this.options.highlightedDates.length; a++) this.highlightedDates.push(hka(this.options.highlightedDates[a], this.format, "yyyy-MM-dd"));
                this.min = this.options.minDate, this.max = this.options.maxDate, this._date = {start: hka(this.options.startDate, this.format, "yyyy-MM-dd"), end: this.options.isRange ? hka(this.options.endDate, this.format, "yyyy-MM-dd") : void 0}, this._visibleDate = this._isValidDate(this.start) ? this.start : e, this._isValidDate(this._visibleDate, this.min, this.max) || (this._visibleDate = this.min || this.max), this._build(), this._bindEvents(), this.emit("ready", this)
            }
        }, {
            key: "_build", value: function () {
                var e;
                this.node = document.createRange().createContextualFragment('<div class="datepicker">\n    <div class="datepicker-nav">\n        <button type="button" class="datepicker-nav-previous button is-small is-text">' + (e = {
                    locale     : this.locale,
                    visibleDate: this._visibleDate,
                    icons      : this.options.icons
                }).icons.previous + '</button>\n        <div class="datepicker-nav-month-year">\n          <div class="datepicker-nav-month"></div>\n          &nbsp;\n          <div class="datepicker-nav-year"></div>\n        </div>\n        <button type="button" class="datepicker-nav-next button is-small is-text">' + e.icons.next + '</button>\n      </div>\n      <div class="datepicker-body">\n        <div class="datepicker-dates is-active"></div>\n        <div class="datepicker-months"></div>\n        <div class="datepicker-years"></div>\n      </div>\n    </div>'), this._ui = {
                    container : this.node.firstChild,
                    navigation: {
                        container: this.node.querySelector(".datepicker-nav"),
                        previous : this.node.querySelector(".datepicker-nav-previous"),
                        next     : this.node.querySelector(".datepicker-nav-next"),
                        month    : this.node.querySelector(".datepicker-nav-month"),
                        year     : this.node.querySelector(".datepicker-nav-year")
                    },
                    body      : {
                        dates   : this.node.querySelector(".datepicker-dates"),
                        days    : this.node.querySelector(".datepicker-days"),
                        weekdays: this.node.querySelector(".datepicker-weekdays"),
                        months  : this.node.querySelector(".datepicker-months"),
                        years   : this.node.querySelector(".datepicker-years")
                    }
                }
            }
        }, {
            key: "_bindEvents", value: function () {
                var a = this;
                document.addEventListener("keydown", function (e) {
                    if (a._focus) switch (e.keyCode || e.which) {
                        case 37:
                            a.onPreviousDatePicker(e);
                            break;
                        case 39:
                            a.onNextDatePicker(e)
                    }
                }), this._ui.navigation.previous && this._clickEvents.forEach(function (e) {
                    a._ui.navigation.previous.addEventListener(e, a.onPreviousDatePicker)
                }), this._ui.navigation.next && this._clickEvents.forEach(function (e) {
                    a._ui.navigation.next.addEventListener(e, a.onNextDatePicker)
                }), this._ui.navigation.month && this._clickEvents.forEach(function (e) {
                    a._ui.navigation.month.addEventListener(e, a.onSelectMonthDatePicker)
                }), this._ui.navigation.year && this._clickEvents.forEach(function (e) {
                    a._ui.navigation.year.addEventListener(e, a.onSelectYearDatePicker)
                }), (this._ui.body.months.querySelectorAll(".calendar-month") || []).forEach(function (t) {
                    a._clickEvents.forEach(function (e) {
                        t.addEventListener(e, a.onMonthClickDatePicker)
                    })
                }), (this._ui.body.years.querySelectorAll(".calendar-year") || []).forEach(function (t) {
                    a._clickEvents.forEach(function (e) {
                        t.addEventListener(e, a.onYearClickDatePicker)
                    })
                })
            }
        }, {
            key: "_bindDaysEvents", value: function () {
                var n = this;
                [].forEach.call(this._ui.days, function (a) {
                    n._clickEvents.forEach(function (e) {
                        var t = n._isValidDate(new Date(a.dataset.date), n.min, n.max) ? n.onDateClickDatePicker : null;
                        a.addEventListener(e, t)
                    }), a.addEventListener("hover", function (e) {
                        e.preventDEfault()
                    })
                })
            }
        }, {
            key: "_renderDays", value: function () {
                var u = this, e = pt(function (e) {
                    k(1, arguments);
                    e = P(e);
                    return e.setDate(1), e.setHours(0, 0, 0, 0), e
                }(this._visibleDate), {weekStartsOn: this.options.weekStart}), t = function (e, t) {
                    k(1, arguments);
                    var a = t, t = a.locale, t = t && t.options && t.options.weekStartsOn, t = null == t ? 0 : M(t), t = null == a.weekStartsOn ? t : M(a.weekStartsOn);
                    if (!(0 <= t && t <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
                    a = P(e), e = a.getDay(), t = 6 + (e < t ? -7 : 0) - (e - t);
                    return a.setDate(a.getDate() + t), a.setHours(23, 59, 59, 999), a
                }(function (e) {
                    k(1, arguments);
                    var t = P(e), e = t.getMonth();
                    return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t
                }(this._visibleDate), {weekStartsOn: this.options.weekStart}), e = new Array(kt(t, e) + 1).fill(e).map(function (e, t) {
                    var a = yt(gt(e, t)), e = function (e, t) {
                        k(2, arguments);
                        e = P(e), t = P(t);
                        return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()
                    }(u._visibleDate, a), t = u.options.isRange && u.end && Pt(a, {start: yt(u.start), end: _t(u.end)}), n = !(n = !!u.max && jt(yt(a), _t(u.max))) && u.min ? xt(yt(a), yt(u.min)) : n, i = !1;
                    if (Array.isArray(u.disabledDates)) for (var r = 0; r < u.disabledDates.length; r++) a.toDateString() === u.disabledDates[r].toDateString() && (n = !0); else l9a(u.disabledDates) && u.disabledDates(u, a) && (n = !0);
                    if (Array.isArray(u.highlightedDates)) for (var o = 0; o < u.highlightedDates.length; o++) a.toDateString() === u.highlightedDates[o].toDateString() && (i = !0); else l9a(u.highlightedDates) && u.highlightedDates(u, a) && (i = !0);
                    return u.disabledWeekDays && u.disabledWeekDays.forEach(function (e) {
                        (function (e) {
                            return k(1, arguments), P(e).getDay()
                        })(a) == e && (n = !0)
                    }), {date: a, isRange: u.options.isRange, isToday: Tt(a), isStartDate: ht(yt(u.start), a), isEndDate: ht(yt(u.end), a), isDisabled: n, isThisMonth: e, isHighlighted: i, isInRange: t}
                });
                this._ui.body.dates.appendChild(document.createRange().createContextualFragment('<div class="datepicker-days">' + e.map(function (e) {
                    return '<div data-date="' + e.date.toString() + '" class="datepicker-date' + (e.isThisMonth ? " is-current-month" : "") + (e.isDisabled ? " is-disabled" : "") + (e.isRange && e.isInRange ? " datepicker-range" : "") + (e.isStartDate ? " datepicker-range-start" : "") + (e.isEndDate ? " datepicker-range-end" : "") + '">\n      <button class="date-item' + (e.isToday ? " is-today" : "") + (e.isHighlighted ? " is-highlighted" : "") + (e.isStartDate ? " is-active" : "") + '" type="button">' + e.date.getDate() + "</button>\n  </div>"
                }).join("") + "</div>")), this._ui.days = this._ui.body.dates.querySelectorAll(".datepicker-date"), this._bindDaysEvents()
            }
        }, {
            key: "_select", value: function () {
                var a = this, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0, t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                n9a(e) || (e = hka(e, this.format, "yyyy-MM-dd")), this.options.isRange && (!this._isValidDate(this.start) || this._isValidDate(this.start) && this._isValidDate(this.end)) ? (this.start = e, this.end = void 0, t && this.emit("select:start", this)) : this.options.isRange && !this._isValidDate(this.end) ? xt(e, this.start) ? (this.end = this.start, this.start = e, t && this.emit("select", this)) : jt(e, this.start) || this.options.allowSameDayRange ? (this.end = e, t && this.emit("select", this)) : (this.start = e, this.end = void 0, t && this.emit("select:start", this)) : (this.start = e, this.end = void 0, t && this.emit("select", this)), this._setVisibleDate(this.start), this.options.isRange && this._isValidDate(this.start) && this._isValidDate(this.end) && new Array(kt(this.end, this.start) + 1).fill(this.start).map(function (e, t) {
                    e = gt(e, t), t = a._ui.body.dates.querySelector('.datepicker-date[data-date="' + e.toString() + '"]');
                    t && (ht(a.start, e) && t.classList.add("datepicker-range-start"), ht(a.end, e) && t.classList.add("datepicker-range-end"), t.classList.add("datepicker-range"))
                })
            }
        }, {
            key: "_isValidDate", value: function (e, t, a) {
                try {
                    return !!e && !!Le(e) && (!t && !a || (t && a ? Pt(e, {start: t, end: a}) : a ? xt(e, a) || ht(e, a) : jt(e, t) || ht(e, t)))
                } catch (e) {
                    return !1
                }
            }
        }, {
            key: "_setVisibleDate", value: function (e) {
                e && (this.min && (e = ft([e, this.min])), this.max && (e = ct([e, this.max])), this._visibleDate = e)
            }
        }, {
            key: "_togglePreviousButton", value: function () {
                !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0] ? this._ui.navigation.previous.removeAttribute("disabled") : this._ui.navigation.previous.setAttribute("disabled", "disabled")
            }
        }, {
            key: "_toggleNextButton", value: function () {
                !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0] ? this._ui.navigation.next.removeAttribute("disabled") : this._ui.navigation.next.setAttribute("disabled", "disabled")
            }
        }, {
            key: "id", get: function () {
                return this._id
            }
        }, {
            key   : "date", set: function (e) {
                return o9a(e) && e.start && e.end && (this._date = e), this
            }, get: function () {
                return this._date || {start: void 0, end: void 0}
            }
        }, {
            key   : "lang", set: function (t) {
                try {
                    this._locale = i(10)("./" + t + "/index.js")
                } catch (e) {
                    t = "en-US", this._locale = i(10)("./" + t + "/index.js")
                } finally {
                    return this._lang = t, this
                }
            }, get: function () {
                return this._lang
            }
        }, {
            key: "locale", get: function () {
                return this._locale
            }
        }, {
            key   : "start", set: function (e) {
                return e ? (e = hka(e, this.format, "yyyy-MM-dd"), this._isValidDate(e, this.min, this.max) && (this._date.start = yt(e))) : this._date.start = void 0, this
            }, get: function () {
                return this._date.start
            }
        }, {
            key   : "end", set: function (e) {
                return e ? (e = hka(e, this.format, "yyyy-MM-dd"), this._isValidDate(e, this.min, this.max) && (this._date.end = _t(e))) : this._date.end = void 0, this
            }, get: function () {
                return this._date.end
            }
        }, {
            key   : "min", set: function (e) {
                return this._min = hka(e, this.format, "yyyy-MM-dd"), this
            }, get: function () {
                return this._min
            }
        }, {
            key   : "max", set: function (e) {
                return this._max = hka(e, this.format, "yyyy-MM-dd"), this
            }, get: function () {
                return this._max
            }
        }, {
            key   : "format", set: function (e) {
                return this._format = e, this
            }, get: function () {
                return this._format
            }
        }]), t);

        function t() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            !function Ct(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var a = function Ht(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return a.options = $e({}, Ve, e), a._clickEvents = ["click", "touch"], a._supportsPassive = gka(), a._id = fka("datePicker"), a.node = null, a.onPreviousDatePicker = a.onPreviousDatePicker.bind(a), a.onNextDatePicker = a.onNextDatePicker.bind(a), a.onSelectMonthDatePicker = a.onSelectMonthDatePicker.bind(a), a.onMonthClickDatePicker = a.onMonthClickDatePicker.bind(a), a.onSelectYearDatePicker = a.onSelectYearDatePicker.bind(a), a.onYearClickDatePicker = a.onYearClickDatePicker.bind(a), a.onDateClickDatePicker = a.onDateClickDatePicker.bind(a), a._init(), a
        }

        function Nt() {
            return yt(Date.now())
        }

        function Et() {
            return _t(Date.now())
        }

        function Xt(e, t) {
            return k(2, arguments), _(e, 36e5 * M(t))
        }

        function At(e, t) {
            return k(2, arguments), Xt(e, -M(t))
        }

        function Lt(e, t) {
            return k(2, arguments), _(e, 6e4 * M(t))
        }

        function Yt(e, t) {
            return k(2, arguments), Lt(e, -M(t))
        }

        var Ze = {timeFormat: "HH:mm", editTimeManually: !1, color: "primary", isRange: !1, lang: "en-US", startTime: void 0, endTime: void 0, minTime: null, maxTime: null, minuteSteps: 5}, et = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a, n = arguments[t];
                for (a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }, tt = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }();
        var at = function () {
            function t() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                !function Ft(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var a = function Rt(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a.options = et({}, Ze, e), a._clickEvents = ["click", "touch"], a._supportsPassive = gka(), a._id = fka("timePicker"), a.node = null, a.onPreviousHourStartTimePicker = a.onPreviousHourStartTimePicker.bind(a), a.onNextHourStartTimePicker = a.onNextHourStartTimePicker.bind(a), a.onPreviousMinuteStartTimePicker = a.onPreviousMinuteStartTimePicker.bind(a), a.onNextMinuteStartTimePicker = a.onNextMinuteStartTimePicker.bind(a), a.onPreviousHourEndTimePicker = a.onPreviousHourEndTimePicker.bind(a), a.onNextHourEndTimePicker = a.onNextHourEndTimePicker.bind(a), a.onPreviousMinuteEndTimePicker = a.onPreviousMinuteEndTimePicker.bind(a), a.onNextMinuteEndTimePicker = a.onNextMinuteEndTimePicker.bind(a), a._init(), a
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, Je), tt(t, [{
                key: "_init", value: function () {
                    this._open = !1, this.lang = this.options.lang, this.format = this.options.format || "HH:mm", this.min = this.options.min, this.max = this.options.max, this._time = {start: Nt(), end: Et()}, this.start = hka(this.options.startTime, this.format, "HH:mm") || Nt(), this.end = this.options.isRange ? hka(this.options.endTime, this.format, "HH:mm") : Et(), this._build(), this._bindEvents(), this.emit("ready", this)
                }
            }, {
                key: "_build", value: function () {
                    var e;
                    this.node = document.createRange().createContextualFragment('<div class="timepicker' + ((e = {
                        locale          : this.locale,
                        isRange         : this.options.isRange,
                        editTimeManually: this.options.editTimeManually,
                        icons           : this.options.icons
                    }).editTimeManually ? " is-hidden" : "") + '">\n    <div class="timepicker-start">\n      <div class="timepicker-hours">\n        <span class="timepicker-next">+</span>\n        <div class="timepicker-input">\n          <input type="number">\n          <div class="timepicker-input-number"></div>\n        </div>\n        <span class="timepicker-previous">-</span>\n      </div>\n      <div class="timepicker-time-divider">:</div>\n      <div class="timepicker-minutes">\n        <span class="timepicker-next">+</span>\n        <div class="timepicker-input">\n          <input type="number">\n          <div class="timepicker-input-number"></div>\n        </div>\n        <span class="timepicker-previous">-</span>\n      </div>\n    </div>\n    ' + (e.isRange ? '<div class="timepicker-end">\n      <div class="timepicker-hours">\n        <span class="timepicker-next">+</span>\n        <div class="timepicker-input">\n          <input type="number">\n          <div class="timepicker-input-number"></div>\n        </div>\n        <span class="timepicker-previous">-</span>\n      </div>\n      <div class="timepicker-time-divider">:</div>\n      <div class="timepicker-minutes">\n        <span class="timepicker-next">+</span>\n        <div class="timepicker-input">\n          <input type="number">\n          <div class="timepicker-input-number"></div>\n        </div>\n        <span class="timepicker-previous">-</span>\n      </div>\n    </div>' : "") + "\n  </div>"), this._ui = {
                        container: this.node.firstChild,
                        start    : {
                            container: this.node.querySelector(".timepicker-start"),
                            hours    : {container: this.node.querySelector(".timepicker-start .timepicker-hours"), input: this.node.querySelector(".timepicker-start .timepicker-hours input"), number: this.node.querySelector(".timepicker-start .timepicker-hours .timepicker-input-number"), previous: this.node.querySelector(".timepicker-start .timepicker-hours .timepicker-previous"), next: this.node.querySelector(".timepicker-start .timepicker-hours .timepicker-next")},
                            minutes  : {container: this.node.querySelector(".timepicker-start .timepicker-minutes"), input: this.node.querySelector(".timepicker-start .timepicker-minutes input"), number: this.node.querySelector(".timepicker-start .timepicker-minutes .timepicker-input-number"), previous: this.node.querySelector(".timepicker-start .timepicker-minutes .timepicker-previous"), next: this.node.querySelector(".timepicker-start .timepicker-minutes .timepicker-next")}
                        },
                        end      : {
                            container: this.node.querySelector(".timepicker-end"),
                            hours    : {container: this.node.querySelector(".timepicker-end .timepicker-hours"), input: this.node.querySelector(".timepicker-end .timepicker-hours input"), number: this.node.querySelector(".timepicker-end .timepicker-hours .timepicker-input-number"), previous: this.node.querySelector(".timepicker-end .timepicker-hours .timepicker-previous"), next: this.node.querySelector(".timepicker-end .timepicker-hours .timepicker-next")},
                            minutes  : {container: this.node.querySelector(".timepicker-end .timepicker-minutes"), input: this.node.querySelector(".timepicker-end .timepicker-minutes input"), number: this.node.querySelector(".timepicker-end .timepicker-minutes .timepicker-input-number"), previous: this.node.querySelector(".timepicker-end .timepicker-minutes .timepicker-previous"), next: this.node.querySelector(".timepicker-end .timepicker-minutes .timepicker-next")}
                        }
                    }
                }
            }, {
                key: "_bindEvents", value: function () {
                    var t = this;
                    this._clickEvents.forEach(function (e) {
                        t._ui.start.hours.previous.addEventListener(e, t.onPreviousHourStartTimePicker), t._ui.start.hours.next.addEventListener(e, t.onNextHourStartTimePicker), t._ui.start.minutes.previous.addEventListener(e, t.onPreviousMinuteStartTimePicker), t._ui.start.minutes.next.addEventListener(e, t.onNextMinuteStartTimePicker), t.options.isRange && (t._ui.end.hours.previous.addEventListener(e, t.onPreviousHourEndTimePicker), t._ui.end.hours.next.addEventListener(e, t.onNextHourEndTimePicker), t._ui.end.minutes.previous.addEventListener(e, t.onPreviousMinuteEndTimePicker), t._ui.end.minutes.next.addEventListener(e, t.onNextMinuteEndTimePicker))
                    })
                }
            }, {
                key: "_select", value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0, t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    n9a(e) || (e = hka(e, this.format, "HH:mm")), this.options.isRange && (!this._isValidTime(this.start) || this._isValidTime(this.start) && this._isValidTime(this.end)) ? (this.start = e, this.end = Et(), t && this.emit("select:start", this)) : this.options.isRange && !this._isValidTime(this.end) ? xt(e, this.start) ? (this.end = this.start, this.start = Et(), t && this.emit("select", this)) : jt(e, this.start) ? (this.end = e, t && this.emit("select", this)) : (this.start = e, this.end = Et(), t && this.emit("select:start", this)) : (this.start = e, this.end = Et(), t && this.emit("select", this))
                }
            }, {
                key: "_isValidTime", value: function (e, t, a) {
                    try {
                        return !!e && !!Le(e) && (!t && !a || (t && a ? Pt(e, {start: t, end: a}) : a ? xt(e, a) || ht(e, a) : jt(e, t) || ht(e, t)))
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "onPreviousHourStartTimePicker", value: function (e) {
                    var t = this;
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.start = At(this.start, 1), setTimeout(function () {
                        t._ui.start.hours.number.classList.add("is-decrement-hide"), setTimeout(function () {
                            t._ui.start.hours.number.innerText = nt(t.start, "HH"), t._ui.start.hours.input.value = nt(t.start, "HH"), t._ui.start.hours.number.classList.add("is-decrement-visible"), t.emit("select", t)
                        }, 100), setTimeout(function () {
                            t._ui.start.hours.number.classList.remove("is-decrement-hide"), t._ui.start.hours.number.classList.remove("is-decrement-visible")
                        }, 1100)
                    }, 100)
                }
            }, {
                key: "onNextHourStartTimePicker", value: function (e) {
                    var t = this;
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.start = Xt(this.start, 1), setTimeout(function () {
                        t._ui.start.hours.number.classList.add("is-increment-hide"), setTimeout(function () {
                            t._ui.start.hours.number.innerText = nt(t.start, "HH"), t._ui.start.hours.input.value = nt(t.start, "HH"), t._ui.start.hours.number.classList.add("is-increment-visible"), t.emit("select", t)
                        }, 100), setTimeout(function () {
                            t._ui.start.hours.number.classList.remove("is-increment-hide"), t._ui.start.hours.number.classList.remove("is-increment-visible")
                        }, 1100)
                    }, 100)
                }
            }, {
                key: "onPreviousMinuteStartTimePicker", value: function (e) {
                    var t = this;
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.start = Yt(this.start, this.options.minuteSteps), setTimeout(function () {
                        t._ui.start.minutes.number.classList.add("is-decrement-hide"), setTimeout(function () {
                            t._ui.start.minutes.number.innerText = nt(t.start, "mm"), t._ui.start.minutes.input.value = nt(t.start, "mm"), t._ui.start.minutes.number.classList.add("is-decrement-visible"), t.emit("select", t), nt(t.start, "HH") !== t._ui.start.hours.input.value && (t._ui.start.hours.number.innerText = nt(t.start, "HH"), t._ui.start.hours.input.value = nt(t.start, "HH"), t._ui.start.hours.number.classList.add("is-decrement-visible"))
                        }, 100), setTimeout(function () {
                            t._ui.start.minutes.number.classList.remove("is-decrement-hide"), t._ui.start.minutes.number.classList.remove("is-decrement-visible"), t._ui.start.hours.number.classList.remove("is-decrement-hide"), t._ui.start.hours.number.classList.remove("is-decrement-visible")
                        }, 1100)
                    }, 100)
                }
            }, {
                key: "onNextMinuteStartTimePicker", value: function (e) {
                    var t = this;
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.start = Lt(this.start, this.options.minuteSteps), setTimeout(function () {
                        t._ui.start.minutes.number.classList.add("is-increment-hide"), setTimeout(function () {
                            t._ui.start.minutes.number.innerText = nt(t.start, "mm"), t._ui.start.minutes.input.value = nt(t.start, "mm"), t._ui.start.minutes.number.classList.add("is-increment-visible"), t.emit("select", t), nt(t.start, "HH") !== t._ui.start.hours.input.value && (t._ui.start.hours.number.innerText = nt(t.start, "HH"), t._ui.start.hours.input.value = nt(t.start, "HH"), t._ui.start.hours.number.classList.add("is-increment-visible"))
                        }, 100), setTimeout(function () {
                            t._ui.start.minutes.number.classList.remove("is-increment-hide"), t._ui.start.minutes.number.classList.remove("is-increment-visible"), t._ui.start.hours.number.classList.remove("is-increment-hide"), t._ui.start.hours.number.classList.remove("is-increment-visible")
                        }, 1100)
                    }, 100)
                }
            }, {
                key: "onPreviousHourEndTimePicker", value: function (e) {
                    var t = this;
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.end = At(this.end, 1), setTimeout(function () {
                        t._ui.end.hours.number.classList.add("is-decrement-hide"), setTimeout(function () {
                            t._ui.end.hours.number.innerText = nt(t.end, "HH"), t._ui.end.hours.input.value = nt(t.end, "HH"), t._ui.end.hours.number.classList.add("is-decrement-visible"), t.emit("select", t)
                        }, 100), setTimeout(function () {
                            t._ui.end.hours.number.classList.remove("is-decrement-hide"), t._ui.end.hours.number.classList.remove("is-decrement-visible")
                        }, 1100)
                    }, 100)
                }
            }, {
                key: "onNextHourEndTimePicker", value: function (e) {
                    var t = this;
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.end = Xt(this.end, 1), setTimeout(function () {
                        t._ui.end.hours.number.classList.add("is-increment-hide"), setTimeout(function () {
                            t._ui.end.hours.number.innerText = nt(t.end, "HH"), t._ui.end.hours.input.value = nt(t.end, "HH"), t._ui.end.hours.number.classList.add("is-increment-visible"), t.emit("select", t)
                        }, 100), setTimeout(function () {
                            t._ui.end.hours.number.classList.remove("is-increment-hide"), t._ui.end.hours.number.classList.remove("is-increment-visible")
                        }, 1100)
                    }, 100)
                }
            }, {
                key: "onPreviousMinuteEndTimePicker", value: function (e) {
                    var t = this;
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.end = Yt(this.end, this.options.minuteSteps), setTimeout(function () {
                        t._ui.end.minutes.number.classList.add("is-decrement-hide"), setTimeout(function () {
                            t._ui.end.minutes.number.innerText = nt(t.end, "mm"), t._ui.end.minutes.input.value = nt(t.end, "mm"), t._ui.end.minutes.number.classList.add("is-decrement-visible"), t.emit("select", t), nt(t.end, "HH") !== t._ui.end.hours.input.value && (t._ui.end.hours.number.innerText = nt(t.end, "HH"), t._ui.end.hours.input.value = nt(t.end, "HH"), t._ui.end.hours.number.classList.add("is-decrement-visible"))
                        }, 100), setTimeout(function () {
                            t._ui.end.minutes.number.classList.remove("is-decrement-hide"), t._ui.end.minutes.number.classList.remove("is-decrement-visible")
                        }, 1100)
                    }, 100)
                }
            }, {
                key: "onNextMinuteEndTimePicker", value: function (e) {
                    var t = this;
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.end = Lt(this.end, this.options.minuteSteps), setTimeout(function () {
                        t._ui.end.minutes.number.classList.add("is-increment-hide"), setTimeout(function () {
                            t._ui.end.minutes.number.innerText = nt(t.end, "mm"), t._ui.end.minutes.input.value = nt(t.end, "mm"), t._ui.end.minutes.number.classList.add("is-increment-visible"), t.emit("select", t), nt(t.end, "HH") !== t._ui.end.hours.input.value && (t._ui.end.hours.number.innerText = nt(t.end, "HH"), t._ui.end.hours.input.value = nt(t.end, "HH"), t._ui.end.hours.number.classList.add("is-increment-visible"))
                        }, 100), setTimeout(function () {
                            t._ui.end.minutes.number.classList.remove("is-increment-hide"), t._ui.end.minutes.number.classList.remove("is-increment-visible")
                        }, 1100)
                    }, 100)
                }
            }, {
                key: "isRange", value: function () {
                    return this.options.isRange
                }
            }, {
                key: "isValid", value: function () {
                    return this.options.isRange ? this._isValidTime(this.start) && this._isValidTime(this.end) : this._isValidTime(this.start)
                }
            }, {
                key: "show", value: function () {
                    this._open || (this._ui.container.classList.add("is-active"), this._open = !0, this._focus = !0, this.emit("show", this))
                }
            }, {
                key: "hide", value: function () {
                    this._open = !1, this._focus = !1, this._ui.container.classList.remove("is-active"), this.emit("hide", this)
                }
            }, {
                key: "toggle", value: function () {
                    this._open ? this.hide() : this.show()
                }
            }, {
                key: "value", value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    if (e) return this.options.isRange ? (m9a(e) && (e = e.split(" - ")), Array.isArray(e) && (e.length && (this.start = hka(e[0], this.format, "yyyy-MM-dd")), 2 === e.length && (this.end = hka(e[1], this.format, "yyyy-MM-dd")))) : this._select(e, !1), void this.refresh();
                    e = this._isValidTime(this.start) ? nt(this.start, this.format, {locale: this.locale}) : "";
                    return this.options.isRange && this._isValidTime(this.end) && (e += " - " + nt(this.end, this.format, {locale: this.locale})), e
                }
            }, {
                key: "refresh", value: function () {
                    return this._ui.start.hours.input.value = nt(this.start, "HH"), this._ui.start.hours.number.innerText = nt(this.start, "HH"), this._ui.start.minutes.input.value = nt(this.start, "mm"), this._ui.start.minutes.number.innerText = nt(this.start, "mm"), this.options.isRange && (this._ui.end.hours.input.value = nt(this.end, "HH"), this._ui.end.hours.number.innerText = nt(this.end, "HH"), this._ui.end.minutes.input.value = nt(this.end, "mm"), this._ui.end.minutes.number.innerText = nt(this.end, "mm")), this
                }
            }, {
                key: "clear", value: function () {
                    this.time = {start: Nt(), end: Et()}, this.refresh()
                }
            }, {
                key: "render", value: function () {
                    return this.refresh(), this.node
                }
            }, {
                key: "id", get: function () {
                    return this._id
                }
            }, {
                key   : "time", set: function (e) {
                    return o9a(e) && e.start && e.end && (this._time = e), this
                }, get: function () {
                    return this._time || {start: void 0, end: void 0}
                }
            }, {
                key   : "lang", set: function (t) {
                    try {
                        this._locale = i(10)("./" + t + "/index.js")
                    } catch (e) {
                        t = "en-US", this._locale = i(10)("./" + t + "/index.js")
                    } finally {
                        return this._lang = t, this
                    }
                }, get: function () {
                    return this._lang
                }
            }, {
                key: "locale", get: function () {
                    return this._locale
                }
            }, {
                key   : "start", set: function (e) {
                    return e ? (e = hka(e, this.format, "HH:mm"), this._isValidTime(e, this.min, this.max) && (this._time.start = e)) : this._time.start = Nt(), this
                }, get: function () {
                    return this._time.start
                }
            }, {
                key   : "end", set: function (e) {
                    return e ? (e = hka(e, this.format, "HH:mm"), this._isValidTime(e, this.min, this.max) && (this._time.end = e)) : this._time.end = Et(), this
                }, get: function () {
                    return this._time.end
                }
            }, {
                key   : "min", set: function (e) {
                    return this._min = hka(e, this.format, "HH:mm"), this
                }, get: function () {
                    return this._min
                }
            }, {
                key   : "max", set: function (e) {
                    return this._max = hka(e, this.format, "HH:mm"), this
                }, get: function () {
                    return this._max
                }
            }, {
                key   : "format", set: function (e) {
                    return this._format = e, this
                }, get: function () {
                    return this._format
                }
            }]), t
        }(), rt = {
            type               : void 0,
            color              : "primary",
            isRange            : !1,
            allowSameDayRange  : !0,
            lang               : navigator.language || "en-US",
            dateFormat         : "MM/dd/yyyy",
            timeFormat         : "HH:mm",
            displayMode        : "default",
            editTimeManually   : !1,
            position           : "auto",
            showHeader         : !0,
            headerPosition     : "top",
            showFooter         : !0,
            showButtons        : !0,
            showTodayButton    : !0,
            showClearButton    : !0,
            cancelLabel        : "Cancel",
            clearLabel         : "Clear",
            todayLabel         : "Today",
            nowLabel           : "Now",
            validateLabel      : "Validate",
            enableMonthSwitch  : !0,
            enableYearSwitch   : !0,
            startDate          : void 0,
            endDate            : void 0,
            minDate            : null,
            maxDate            : null,
            disabledDates      : [],
            disabledWeekDays   : void 0,
            highlightedDates   : [],
            weekStart          : 0,
            startTime          : void 0,
            endTime            : void 0,
            minuteSteps        : 5,
            labelFrom          : "",
            labelTo            : "",
            closeOnOverlayClick: !0,
            closeOnSelect      : !0,
            toggleOnInputClick : !0,
            onReady            : null,
            onValidate         : null,
            formats            : {header: "LLLL yyyy", navigationMonth: "LLLL", navigationYear: "yyyy", selectMonth: "LLL", selectYear: "yyyy", weekday: "ccc"},
            icons              : {
                previous: '<svg viewBox="0 0 50 80" xml:space="preserve">\n      <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n    </svg>',
                next    : '<svg viewBox="0 0 50 80" xml:space="preserve">\n      <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n    </svg>',
                time    : '<svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60" xml:space="preserve">\n      <g>\n        <path fill="currentcolor" d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>\n\t      <path fill="currentcolor" d="M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z"/>\n      </g>\n    </svg>',
                date    : '<svg version="1.1" x="0px" y="0px" viewBox="0 0 60 60" xml:space="preserve">\n      <g>\n        <path d="M57,4h-7V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H19V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H3C2.447,4,2,4.447,2,5v11v43c0,0.553,0.447,1,1,1h54c0.553,0,1-0.447,1-1V16V5C58,4.447,57.553,4,57,4z M43,2h5v3v3h-5V5V2z M12,2h5v3v3h-5V5V2z M4,6h6v3c0,0.553,0.447,1,1,1h7c0.553,0,1-0.447,1-1V6h22v3c0,0.553,0.447,1,1,1h7c0.553,0,1-0.447,1-1V6h6v9H4V6zM4,58V17h52v41H4z"/>\n        <path d="M38,23h-7h-2h-7h-2h-9v9v2v7v2v9h9h2h7h2h7h2h9v-9v-2v-7v-2v-9h-9H38z M31,25h7v7h-7V25z M38,41h-7v-7h7V41z M22,34h7v7h-7V34z M22,25h7v7h-7V25z M13,25h7v7h-7V25z M13,34h7v7h-7V34z M20,50h-7v-7h7V50z M29,50h-7v-7h7V50z M38,50h-7v-7h7V50z M47,50h-7v-7h7V50z M47,41h-7v-7h7V41z M47,25v7h-7v-7H47z"/>\n      </g>\n    </svg>'
            }
        }, ot = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a, n = arguments[t];
                for (a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }, ut = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (t, a, n) {
                return a && e(t.prototype, a), n && e(t, n), t
            }
        }();
        d = function () {
            function t(e) {
                var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                !function Bt(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function Zt(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                if (n.element = m9a(e) ? document.querySelector(e) : e, !n.element) throw new Error("An invalid selector or non-DOM node has been provided.");
                n._clickEvents = ["click", "touch"], n._supportsPassive = gka();
                e = n.element.dataset ? Object.keys(n.element.dataset).filter(function (e) {
                    return Object.keys(rt).includes(e)
                }).reduce(function (e, t) {
                    return ot({}, e, function $t(e, t, a) {
                        return t in e ? Object.defineProperty(e, t, {value: a, enumerable: !0, configurable: !0, writable: !0}) : e[t] = a, e
                    }({}, t, n.element.dataset[t]))
                }, {}) : {};
                if (n.options = ot({}, rt, a, e), void 0 === n.options.type) switch (n.element.getAttribute("type")) {
                    case"date":
                        n.options.type = "date";
                        break;
                    case"time":
                        n.options.type = "time";
                        break;
                    default:
                        n.options.type = "datetime"
                }
                return n._id = fka("datetimePicker"), n.onToggleDateTimePicker = n.onToggleDateTimePicker.bind(n), n.onCloseDateTimePicker = n.onCloseDateTimePicker.bind(n), n.onDocumentClickDateTimePicker = n.onDocumentClickDateTimePicker.bind(n), n.onValidateClickDateTimePicker = n.onValidateClickDateTimePicker.bind(n), n.onTodayClickDateTimePicker = n.onTodayClickDateTimePicker.bind(n), n.onClearClickDateTimePicker = n.onClearClickDateTimePicker.bind(n), n.onCancelClickDateTimePicker = n.onCancelClickDateTimePicker.bind(n), n.onSelectDateTimePicker = n.onSelectDateTimePicker.bind(n), n.onChangeStartHoursManually = n.onChangeStartHoursManually.bind(n), n.onChangeStartMinutesManually = n.onChangeStartMinutesManually.bind(n), n.onChangeEndHoursManually = n.onChangeEndHoursManually.bind(n), n.onChangeEndMinutesManually = n.onChangeEndMinutesManually.bind(n), n.element.required, n._init(), n
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, Je), ut(t, [{
                key: "onSelectDateTimePicker", value: function (e) {
                    this.refresh(), this.emit(e.type, this), "select" === e.type && this.options.closeOnSelect && this.save()
                }
            }, {
                key: "onDocumentClickDateTimePicker", value: function (e) {
                    e = e.target || e.srcElement;
                    this._ui.wrapper.contains(e) || "inline" === this.options.displayMode || this.hide()
                }
            }, {
                key: "onToggleDateTimePicker", value: function (e) {
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.toggle()
                }
            }, {
                key: "onValidateClickDateTimePicker", value: function (e) {
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.emit("validate", this), l9a(this.options.onValidate) || this.save()
                }
            }, {
                key: "onTodayClickDateTimePicker", value: function (e) {
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.datePicker.value(new Date), this.timePicker.value(new Date), this.refresh(), this.options.closeOnSelect && this.save()
                }
            }, {
                key: "onClearClickDateTimePicker", value: function (e) {
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.clear(), this.isOpen() && !this.options.closeOnSelect || this.save()
                }
            }, {
                key: "onCancelClickDateTimePicker", value: function (e) {
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.value(this.element.value), this.refresh(), this.save()
                }
            }, {
                key: "onCloseDateTimePicker", value: function (e) {
                    this._supportsPassive || e.preventDefault(), e.stopPropagation(), this.hide()
                }
            }, {
                key: "onClickTimeManuallyInput", value: function (e) {
                    e.currentTarget.select()
                }
            }, {
                key: "onChangeStartHoursManually", value: function (e) {
                    this.timePicker.start.setHours(e.currentTarget.value), this.refresh(), this.options.closeOnSelect && this.save()
                }
            }, {
                key: "onChangeStartMinutesManually", value: function (e) {
                    this.timePicker.start.setMinutes(e.currentTarget.value), this.refresh(), this.options.closeOnSelect && this.save()
                }
            }, {
                key: "onChangeEndHoursManually", value: function (e) {
                    this.timePicker.end.setHours(e.currentTarget.value), this.refresh(), this.options.closeOnSelect && this.save()
                }
            }, {
                key: "onChangeEndMinutesManually", value: function (e) {
                    this.timePicker.end.setMinutes(e.currentTarget.value), this.refresh(), this.options.closeOnSelect && this.save()
                }
            }, {
                key: "isRange", value: function () {
                    return this.options.isRange
                }
            }, {
                key: "isOpen", value: function () {
                    return this._open
                }
            }, {
                key: "isValid", value: function () {
                    return this.datePicker.isValid() && this.timePicker.isValid()
                }
            }, {
                key: "value", value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    if (e) return "datetime" == this.options.type && (this.options.isRange ? (m9a(e) && (e = e.split(" - ")), Array.isArray(e) && (e.length && (e[0] = hka(e[0], this.format)), 2 === e.length && (e[1] = hka(e[1], this.format)))) : m9a(e) && (e = hka(e, this.format))), this.datePicker.value(e), this.timePicker.value(e), this._refreshInput(), void this.refresh();
                    var t = "";
                    switch (this.options.type) {
                        case"date":
                            t = this.datePicker.value();
                            break;
                        case"time":
                            t = this.timePicker.value();
                            break;
                        case"datetime":
                            var a = this.datePicker.start, n = this.datePicker.end;
                            a && this.timePicker.start && (a.setHours(this.timePicker.start.getHours()), a.setMinutes(this.timePicker.start.getMinutes()), t = nt(a, this.format, {locale: this.locale})), this.options.isRange && (n && this.timePicker.end && (n.setHours(this.timePicker.end.getHours()), n.setMinutes(this.timePicker.end.getMinutes())), t += " - " + (n ? nt(n, this.format, {locale: this.locale}) : ""))
                    }
                    return t
                }
            }, {
                key: "refresh", value: function () {
                    this._ui.header.start.day.innerHTML = this.datePicker.start ? nt(this.datePicker.start, "dd", {locale: this.locale}) : "--", this._ui.header.start.month.innerHTML = this.datePicker.start ? nt(this.datePicker.start, this.options.formats.header, {locale: this.locale}) : "", this.datePicker.start ? (this._ui.header.start.weekday.classList.remove("is-hidden"), this._ui.header.start.weekday.innerHTML = this.datePicker.start ? nt(this.datePicker.start, "EEEE", {locale: this.locale}) : "") : this._ui.header.start.weekday.classList.add("is-hidden"), this._ui.header.start.hour && (this.options.editTimeManually ? (this._ui.header.start.inputHours.value = this.timePicker.start ? nt(this.timePicker.start, "HH", {locale: this.locale}) : "--", this._ui.header.start.inputMinutes.value = this.timePicker.start ? nt(this.timePicker.start, "mm", {locale: this.locale}) : "--") : this._ui.header.start.hour.innerHTML = this.timePicker.start ? nt(this.timePicker.start, "HH:mm", {locale: this.locale}) : "--:--"), this._ui.header.end && (this._ui.header.end.day.innerHTML = this.options.isRange && this.datePicker.end ? nt(this.datePicker.end, "dd", {locale: this.locale}) : "--", this._ui.header.end.month.innerHTML = this.options.isRange && this.datePicker.end ? nt(this.datePicker.end, this.options.formats.header, {locale: this.locale}) : "", this.datePicker.end ? (this._ui.header.end.weekday.classList.remove("is-hidden"), this._ui.header.end.weekday.innerHTML = this.datePicker.end ? nt(this.datePicker.end, "EEEE", {locale: this.locale}) : "") : this._ui.header.end.weekday.classList.add("is-hidden"), this._ui.header.end && this._ui.header.end.hour && (this.options.editTimeManually ? (this._ui.header.end.inputHours.value = this.timePicker.end ? nt(this.timePicker.end, "HH", {locale: this.locale}) : "--", this._ui.header.end.inputMinutes.value = this.timePicker.end ? nt(this.timePicker.end, "mm", {locale: this.locale}) : "--") : this._ui.header.end.hour.innerHTML = this.timePicker.end ? nt(this.timePicker.end, "HH:mm", {locale: this.locale}) : "--:--")), this.emit("refresh", this)
                }
            }, {
                key: "clear", value: function () {
                    this.datePicker.clear(), this.timePicker.clear(), this.refresh(), this.isOpen() || this._refreshInput(), this.emit("clear", this)
                }
            }, {
                key: "show", value: function () {
                    this.datePicker.show(), this.timePicker.show(), this._ui.modal && this._ui.modal.classList.add("is-active"), this._ui.dummy.wrapper.classList.add("is-active"), this._ui.wrapper.classList.add("is-active"), this._open = !0, this.emit("show", this)
                }
            }, {
                key: "toggle", value: function () {
                    this._open ? this.hide() : this.show()
                }
            }, {
                key: "hide", value: function () {
                    this._open && (this.datePicker.hide(), this.timePicker.hide(), this._open = !1, this._focus = !1, this._ui.modal && this._ui.modal.classList.remove("is-active"), this._ui.dummy.wrapper.classList.remove("is-active"), this._ui.wrapper.classList.remove("is-active"), this.emit("hide", this))
                }
            }, {
                key: "save", value: function () {
                    this._refreshInput(), "inline" !== this.options.displayMode && this.isValid() && this.hide(), this.emit("save", this)
                }
            }, {
                key: "destroy", value: function () {
                    document.getElementById(this.id).remove(), this.datePicker = null, this.timePicker = null, this._ui = null
                }
            }, {
                key: "_init", value: function () {
                    this._open = !1, this._type = -1 < ["date", "time", "datetime"].indexOf(this.options.type.toLowerCase()) ? this.options.type.toLowerCase() : "date", this.element.setAttribute("type", "text"), this.datePicker = new Be(ot({}, this.options)), this.timePicker = new at(ot({}, this.options)), this.lang = this.options.lang, this.format = "date" === this._type ? this.options.dateFormat : "time" === this._type ? this.options.timeFormat : this.options.dateFormat + " " + this.options.timeFormat, "default" === this.options.displayMode && window.matchMedia("screen and (max-width: 768px)").matches && (this.options.displayMode = "dialog"), window.matchMedia("screen and (max-width: 768px)").matches && ("default" === this.options.displayMode && (this.options.displayMode = "dialog"), this.options.displayDual = !1), this._build(), this._bindEvents(), this.element.value && this.value(this.element.value), this._refreshInput(), l9a(this.options.onReady) && this.on("ready", this.options.onReady), l9a(this.options.onValidate) && this.on("validate", this.options.onValidate), this.emit("ready", this)
                }
            }, {
                key: "_build", value: function () {
                    var e, t = document.createRange().createContextualFragment('<div class="datetimepicker-header' + ("time" === (a = ot({}, this.options, {
                            type: this._type,
                            datePicker: "time" !== this.options.type,
                            timePicker: "date" !== this.options.type
                        })).type ? " is-hidden" : "") + ("date" === a.type ? " is-date-only" : "") + '">\n\t\t<div class="datetimepicker-selection-details">\n\t\t\t<div class="datetimepicker-selection-from' + ("" === a.labelFrom ? " is-hidden" : "") + '">' + a.labelFrom + '</div>\n\t\t\t<div class="datetimepicker-selection-start' + (a.isRange ? "" : " is-centered") + '">\n\t\t\t\t<div class="datetimepicker-selection-wrapper">\n\t\t\t\t\t<div class="datetimepicker-selection-day"></div>\n\t\t\t\t\t<div class="datetimepicker-selection-date">\n\t\t\t\t\t\t<div class="datetimepicker-selection-month"></div>\n\t\t\t\t\t\t<div class="datetimepicker-selection-weekday"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t' + ("date" !== a.type ? '<div class="datetimepicker-selection-time">\n\t\t\t\t\t<div class="datetimepicker-selection-time-icon">\n\t\t\t\t\t\t<figure class="image is-16x16">\n\t\t\t\t\t\t\t' + (a.icons ? a.icons.time : "") + '\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="datetimepicker-selection-hour' + (a.editTimeManually ? " editable " : "") + '">\n\t\t\t\t\t\t' + (a.editTimeManually ? '\n\t\t\t\t\t\t\t<input type="text" class="datetimepicker-selection-input-hours" maxlength="2">:\n\t\t\t\t\t\t\t<input type="text" class="datetimepicker-selection-input-minutes" maxlength="2">\n\t\t\t\t\t\t' : "") + "\n\t\t\t\t\t</div>\n\t\t\t\t</div>" : "") + "\n\t\t\t</div>\n\t\t</div>\n\t\t" + (a.isRange ? '\n\t\t<div class="datetimepicker-selection-details">\n\t\t\t<div class="datetimepicker-selection-to ' + ("" === a.labelTo ? " is-hidden" : "") + '">' + a.labelTo + '</div>\n\t\t\t<div class="datetimepicker-selection-end">\n\t\t\t\t<div class="datetimepicker-selection-wrapper">\n\t\t\t\t\t<div class="datetimepicker-selection-day"></div>\n\t\t\t\t\t<div class="datetimepicker-selection-date">\n\t\t\t\t\t\t<div class="datetimepicker-selection-month"></div>\n\t\t\t\t\t\t<div class="datetimepicker-selection-weekday"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t' + ("date" !== a.type ? '<div class="datetimepicker-selection-time">\n\t\t\t\t\t<div class="datetimepicker-selection-time-icon">\n\t\t\t\t\t\t<figure class="image is-16x16">\n\t\t\t\t\t\t\t' + (a.icons ? a.icons.time : "") + '\n\t\t\t\t\t\t</figure>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="datetimepicker-selection-hour' + (a.editTimeManually ? " editable " : "") + '">\n\t\t\t\t\t\t' + (a.editTimeManually ? '\n\t\t\t\t\t\t\t<input type="text" class="datetimepicker-selection-input-hours" maxlength="2">:\n\t\t\t\t\t\t\t<input type="text" class="datetimepicker-selection-input-minutes" maxlength="2">\n\t\t\t\t\t\t' : "") + "\n\t\t\t\t\t</div>\n\t\t\t\t</div>" : "") + "\n\t\t\t</div>\n\t\t</div>" : "") + "\n\t</div>"),
                        a = document.createRange().createContextualFragment('<div class="datetimepicker-footer">\n\t\t<button type="button" class="datetimepicker-footer-validate has-text-success button is-small is-text ' + ("inline" === (e = this.options).displayMode ? "is-hidden" : "") + '">' + (e.icons.validate || "") + e.validateLabel + ' </button>\n\t\t<button type="button" class="datetimepicker-footer-today has-text-warning button is-small is-text">' + (e.icons.today || "") + e.todayLabel + '</button>\n\t\t<button type="button" class="datetimepicker-footer-clear has-text-danger button is-small is-text">' + (e.icons.clear || "") + e.clearLabel + '</button>\n\t\t<button type="button" class="datetimepicker-footer-cancel button is-small is-text ' + ("inline" === e.displayMode ? "is-hidden" : "") + '">' + (e.icons.cancel || "") + e.cancelLabel + "</button>\n\t</div>"),
                        e = document.createRange().createContextualFragment("<div id='" + (e = ot({}, this.options, {id: this.id})).id + '\'>\n    <div class="datetimepicker-dummy is-hidden">\n      <div class="datetimepicker-dummy-wrapper">\n        <input placeholder="' + e.labelFrom + '" readonly="readonly" class="datetimepicker-dummy-input' + (e.isRange ? " is-datetimepicker-range" : "") + '" type="text">\n        ' + (e.isRange ? '<input placeholder="' + e.labelTo + '" readonly="readonly" class="datetimepicker-dummy-input" type="text">' : "") + '\n      </div>\n      <button class="datetimepicker-clear-button" type="button">＋</button>\n    </div>\n    <div class="datetimepicker-wrapper' + ("dialog" === e.displayMode ? " modal" : "") + '">\n        <div class="modal-background' + ("dialog" === e.displayMode ? "" : " is-hidden") + '"></div>\n        <div class="datetimepicker">\n          <div class="datetimepicker-container' + ("top" === e.headerPosition ? "" : " has-header-bottom") + '"></div>\n        </div>\n    </div>\n  </div>');
                    switch (this._ui = {
                        modal    : e.querySelector(".datetimepicker-wrapper.modal"),
                        wrapper  : e.querySelector(".datetimepicker"),
                        container: e.querySelector(".datetimepicker-container"),
                        dummy    : {container: e.querySelector(".datetimepicker-dummy"), wrapper: e.querySelector(".datetimepicker-dummy-wrapper"), dummy_1: e.querySelector(".datetimepicker-dummy .datetimepicker-dummy-input:nth-child(1)"), dummy_2: e.querySelector(".datetimepicker-dummy .datetimepicker-dummy-input:nth-child(2)"), clear: e.querySelector(".datetimepicker-dummy .datetimepicker-clear-button")},
                        calendar : e.querySelector(".datetimepicker"),
                        overlay  : "dialog" === this.options.displayMode ? {background: e.querySelector(".modal-background"), close: e.querySelector(".modal-close")} : void 0,
                        header   : {
                            container: t.querySelector(".datetimepicker-header"),
                            start    : {
                                container   : t.querySelector(".datetimepicker-selection-start"),
                                day         : t.querySelector(".datetimepicker-selection-start .datetimepicker-selection-day"),
                                month       : t.querySelector(".datetimepicker-selection-start .datetimepicker-selection-month"),
                                weekday     : t.querySelector(".datetimepicker-selection-start .datetimepicker-selection-weekday"),
                                hour        : t.querySelector(".datetimepicker-selection-start .datetimepicker-selection-hour"),
                                inputHours  : t.querySelector(".datetimepicker-selection-start .datetimepicker-selection-hour.editable .datetimepicker-selection-input-hours"),
                                inputMinutes: t.querySelector(".datetimepicker-selection-start .datetimepicker-selection-hour.editable .datetimepicker-selection-input-minutes"),
                                empty       : t.querySelector(".datetimepicker-selection-start .empty")
                            },
                            end      : this.options.isRange ? {
                                container   : t.querySelector(".datetimepicker-selection-end"),
                                day         : t.querySelector(".datetimepicker-selection-end .datetimepicker-selection-day"),
                                month       : t.querySelector(".datetimepicker-selection-end .datetimepicker-selection-month"),
                                weekday     : t.querySelector(".datetimepicker-selection-end .datetimepicker-selection-weekday"),
                                hour        : t.querySelector(".datetimepicker-selection-end .datetimepicker-selection-hour"),
                                inputHours  : t.querySelector(".datetimepicker-selection-end .datetimepicker-selection-hour.editable .datetimepicker-selection-input-hours"),
                                inputMinutes: t.querySelector(".datetimepicker-selection-end .datetimepicker-selection-hour.editable .datetimepicker-selection-input-minutes"),
                                empty       : t.querySelector(".datetimepicker-selection-start .empty")
                            } : void 0
                        },
                        footer   : {container: a.querySelector(".datetimepicker-footer"), validate: a.querySelector(".datetimepicker-footer-validate"), today: a.querySelector(".datetimepicker-footer-today"), clear: a.querySelector(".datetimepicker-footer-clear"), cancel: a.querySelector(".datetimepicker-footer-cancel")}
                    }, q9a(this.options.showHeader) || this._ui.header.container.classList.add("is-hidden"), q9a(this.options.showFooter) || this._ui.footer.container.classList.add("is-hidden"), q9a(this.options.showTodayButton) || this._ui.footer.today.classList.add("is-hidden"), q9a(this.options.showClearButton) || this._ui.footer.clear.classList.add("is-hidden"), this.options.closeOnSelect && this._ui.footer.validate && this._ui.footer.validate.classList.add("is-hidden"), this._ui.container.appendChild(t), this._type) {
                        case"date":
                            this._ui.container.appendChild(this.datePicker.render());
                            break;
                        case"time":
                            this.options.closeOnSelect = !1, this._ui.container.appendChild(this.timePicker.render()), (this.options.labelFrom || this.options.labelTo) && this._ui.header.container.classList.remove("is-hidden"), this._ui.footer.validate && this._ui.footer.validate.classList.remove("is-hidden"), this._ui.footer.today && this._ui.footer.today.classList.add("is-hidden");
                            break;
                        case"datetime":
                            this.options.closeOnSelect = !1, this._ui.footer.validate && this._ui.footer.validate.classList.remove("is-hidden"), this._ui.container.appendChild(this.datePicker.render()), this._ui.container.appendChild(this.timePicker.render())
                    }
                    this._ui.wrapper.appendChild(a), this._ui.wrapper.classList.add("is-" + this.options.color), this._ui.dummy.container.classList.add("is-" + this.options.color), this.element.parentNode.insertBefore(e, this.element.nextSibling), this._ui.dummy.wrapper.appendChild(this.element), this.element.classList.add("is-hidden"), "inline" === this.options.displayMode ? this._ui.wrapper.classList.add("is-active") : (this._ui.dummy.container.classList.remove("is-hidden"), this._ui.wrapper.style.position = "absolute", this._ui.wrapper.classList.add("is-datetimepicker-default")), this.refresh()
                }
            }, {
                key: "_bindEvents", value: function () {
                    var t = this;
                    this._clickEvents.forEach(function (e) {
                        document.body.addEventListener(e, t.onDocumentClickDateTimePicker)
                    }), this.datePicker.on("select", this.onSelectDateTimePicker), this.datePicker.on("select:start", this.onSelectDateTimePicker), this.timePicker.on("select", this.onSelectDateTimePicker), this.timePicker.on("select:start", this.onSelectDateTimePicker), !0 === this.options.toggleOnInputClick && this._clickEvents.forEach(function (e) {
                        t._ui.dummy.wrapper.addEventListener(e, t.onToggleDateTimePicker), t.element.addEventListener(e, t.onToggleDateTimePicker)
                    }), "date" !== this.options.type && this.options.editTimeManually && (this._ui.header.start.inputHours.addEventListener("change", this.onChangeStartHoursManually), this._ui.header.start.inputHours.addEventListener("click", this.onClickTimeManuallyInput), this._ui.header.start.inputMinutes.addEventListener("change", this.onChangeStartMinutesManually), this._ui.header.start.inputMinutes.addEventListener("click", this.onClickTimeManuallyInput), this.options.isRange && (this._ui.header.end.inputHours.addEventListener("change", this.onChangeEndHoursManually), this._ui.header.end.inputHours.addEventListener("click", this.onClickTimeManuallyInput), this._ui.header.end.inputMinutes.addEventListener("change", this.onChangeEndMinutesManually), this._ui.header.end.inputMinutes.addEventListener("click", this.onClickTimeManuallyInput))), "dialog" === this.options.displayMode && this._ui.overlay && (this._ui.overlay.close && this._clickEvents.forEach(function (e) {
                        t.this._ui.overlay.close.addEventListener(e, t.onCloseDateTimePicker)
                    }), this.options.closeOnOverlayClick && this._ui.overlay.background && this._clickEvents.forEach(function (e) {
                        t._ui.overlay.background.addEventListener(e, t.onCloseDateTimePicker)
                    })), this._ui.footer.validate && this._clickEvents.forEach(function (e) {
                        t._ui.footer.validate.addEventListener(e, t.onValidateClickDateTimePicker)
                    }), this._ui.footer.today && this._clickEvents.forEach(function (e) {
                        t._ui.footer.today.addEventListener(e, t.onTodayClickDateTimePicker)
                    }), this._ui.footer.clear && this._clickEvents.forEach(function (e) {
                        t._ui.footer.clear.addEventListener(e, t.onClearClickDateTimePicker)
                    }), this._clickEvents.forEach(function (e) {
                        t._ui.dummy.clear.addEventListener(e, t.onClearClickDateTimePicker)
                    }), this._ui.footer.cancel && this._clickEvents.forEach(function (e) {
                        t._ui.footer.cancel.addEventListener(e, t.onCancelClickDateTimePicker)
                    })
                }
            }, {
                key: "_refreshInput", value: function () {
                    var e = function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function (e, t) {
                            var a = [], n = !0, i = !1, r = void 0;
                            try {
                                for (var o, u = e[Symbol.iterator](); !(n = (o = u.next()).done) && (a.push(o.value), !t || a.length !== t); n = !0) ;
                            } catch (e) {
                                i = !0, r = e
                            } finally {
                                try {
                                    !n && u.return && u.return()
                                } finally {
                                    if (i) throw r
                                }
                            }
                            return a
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }(this.value().split(" - "), 2), t = e[0], e = e[1];
                    this._ui.dummy.dummy_1.value = t || "", this._ui.dummy.dummy_2 && (this._ui.dummy.dummy_2.value = e || ""), this.element.setAttribute("value", this.value())
                }
            }, {
                key: "id", get: function () {
                    return this._id
                }
            }, {
                key   : "lang", set: function (t) {
                    try {
                        this._locale = i(10)("./" + t + "/index.js")
                    } catch (e) {
                        t = "en-US", this._locale = i(10)("./" + t + "/index.js")
                    } finally {
                        return this._lang = t, this.datePicker.lang = t, this.timePicker.lang = t, this
                    }
                }, get: function () {
                    return this._lang
                }
            }, {
                key: "locale", get: function () {
                    return this._locale
                }
            }, {
                key   : "format", set: function (e) {
                    return this._format = e, this
                }, get: function () {
                    return this._format
                }
            }, {
                key   : "date", set: function (e) {
                    return this.datePicker.date = e, this
                }, get: function () {
                    return this.datePicker.date
                }
            }, {
                key   : "startDate", set: function (e) {
                    return this.datePicker.start = e, this
                }, get: function () {
                    return this.datePicker.start
                }
            }, {
                key   : "endDate", set: function (e) {
                    return this.datePicker.end = e, this
                }, get: function () {
                    return this.datePicker.end
                }
            }, {
                key   : "minDate", set: function (e) {
                    return this.datePicker.minDate = e, this
                }, get: function () {
                    return this.datePicker.minDate
                }
            }, {
                key   : "maxDate", set: function (e) {
                    return this.datePicker.maxDate = e, this
                }, get: function () {
                    return this.datePicker.maxDate
                }
            }, {
                key   : "dateFormat", set: function (e) {
                    return this.datePicker.dateFormat = e, this
                }, get: function () {
                    return this.datePicker.dateFormat
                }
            }, {
                key   : "time", set: function (e) {
                    return this.timePicker.time = e, this
                }, get: function () {
                    return this.timePicker.time
                }
            }, {
                key   : "startTime", set: function (e) {
                    return this.timePicker.start = e, this
                }, get: function () {
                    return this.timePicker.start
                }
            }, {
                key   : "endTime", set: function (e) {
                    return this.timePicker.end = e, this
                }, get: function () {
                    return this.timePicker.end
                }
            }, {
                key   : "minTime", set: function (e) {
                    return this.timePicker.minTime = e, this
                }, get: function () {
                    return this.timePicker.minTime
                }
            }, {
                key   : "maxTime", set: function (e) {
                    return this.timePicker.maxTime = e, this
                }, get: function () {
                    return this.timePicker.maxTime
                }
            }, {
                key   : "timeFormat", set: function (e) {
                    return this.timePicker.timeFormat = e, this
                }, get: function () {
                    return this.timePicker.timeFormat
                }
            }], [{
                key: "attach", value: function () {
                    var n = this, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'input[type="date"]', i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = [], e = m9a(e) ? document.querySelectorAll(e) : Array.isArray(e) ? e : [e];
                    return [].forEach.call(e, function (e) {
                        var a;
                        void 0 === e[n.constructor.name] ? (a = new t(e, i), e.bulmaCalendar = a, r.push(a)) : r.push(e[n.constructor.name])
                    }), r
                }
            }]), t
        }();
        n.default = d
    }], i = {}, a.m = n, a.c = i, a.d = function (e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, a.t = function (t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: t}), 2 & e && "string" != typeof t) for (var i in t) a.d(n, i, function (e) {
            return t[e]
        }.bind(null, i));
        return n
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 481).default;

    function a(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {i: e, l: !1, exports: {}};
        return n[e].call(t.exports, t, t.exports, a), t.l = !0, t.exports
    }

    var n, i
});