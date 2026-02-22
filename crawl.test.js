const normalizeURL = require("./crawl");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip protocol", function () {
    const input = "https://blog.boot.dev/path";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test("normalizeURL strip trailing slash", function () {
    const input = "https://blog.boot.dev/path/";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test("normalizeURL capitals", function () {
    const input = "https://BLOG.boot.dev/path/";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});

test("normalizeURL strip http", function () {
    const input = "http://blog.boot.dev/path/";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path";
    expect(actual).toEqual(expected);
});
