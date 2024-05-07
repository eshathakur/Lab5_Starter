// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//tests that return true 
//phone number
test('try 1) valid phone number format returns true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('try 2) valid phone number format returns true', () => {
  expect(isPhoneNumber('425-236-2196')).toBe(true);
});


//email
test('try 1) valid email format returns true', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('try 2) valid email format returns true', () => {
  expect(isEmail('eshajthakur@gmail.com')).toBe(true);
});


//password
test('try 1) valid strong password returns true', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('try 2) valid strong password returns true', () => {
  expect(isStrongPassword('Hello_World1')).toBe(true);
});

//dates
test('try 1) valid date format returns true', () => {
  expect(isDate('1/7/2003')).toBe(true);
});

test('try 2) valid date format returns true', () => {
  expect(isDate('11/11/1111')).toBe(true);
});


//hex codes
test('try 1) valid hex color returns true', () => {
  expect(isHexColor('#ff0000')).toBe(true);
});

test('try 2) valid hex color returns true', () => {
  expect(isHexColor('#0f9')).toBe(true);
});


//2) false
//phone number
test('false try 1) valid phone number format returns true', () => {
  expect(isPhoneNumber('123-456-789')).toBe(true);
});

test('false try 2) valid phone number format returns true', () => {
  expect(isPhoneNumber('7')).toBe(true);
});


//email
test('false try 1) valid email format returns true', () => {
  expect(isEmail('testexample.com')).toBe(true);
});

test('false try 2) valid email format returns true', () => {
  expect(isEmail('eshajthakur@gmail')).toBe(true);
});


//password
test('false try 1) valid strong password returns true', () => {
  expect(isStrongPassword('Pas')).toBe(true);
});

test('false try 2) valid strong password returns true', () => {
  expect(isStrongPassword('0ello_World1')).toBe(true);
});

//dates
test('false try 1) valid date format returns true', () => {
  expect(isDate('100/7/2003')).toBe(true);
});

test('false try 2) valid date format returns true', () => {
  expect(isDate('11/11/111')).toBe(true);
});


//hex codes
test('false try 1) valid hex color returns true', () => {
  expect(isHexColor('#ff000')).toBe(true);
});

test('false try 2) valid hex color returns true', () => {
  expect(isHexColor('#0f')).toBe(true);
});

