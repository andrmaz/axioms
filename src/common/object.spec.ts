import {describe, it, expect} from 'vitest';
import ObjectUtils from './object';

describe('ObjectUtils', () => {
    const emptyObject = {};
    const nonEmptyObject = {key: 'value'};

    it('isEmpty should return true for null and undefined', () => {
        expect(ObjectUtils.isEmpty(null)).toBe(true);
        expect(ObjectUtils.isEmpty(undefined)).toBe(true);
    });

    it('isEmpty should return false for objects', () => {
        expect(ObjectUtils.isEmpty(emptyObject)).toBe(false);
        expect(ObjectUtils.isEmpty(nonEmptyObject)).toBe(false);
    });

    it('isNotEmpty should return false for null and undefined', () => {
        expect(ObjectUtils.isNotEmpty(null)).toBe(false);
        expect(ObjectUtils.isNotEmpty(undefined)).toBe(false);
    });

    it('isNotEmpty should return true for objects', () => {
        expect(ObjectUtils.isNotEmpty(emptyObject)).toBe(true);
        expect(ObjectUtils.isNotEmpty(nonEmptyObject)).toBe(true);
    });

    it('isBlank should return true for empty objects', () => {
        expect(ObjectUtils.isBlank(emptyObject)).toBe(true);
    });

    it('isBlank should return false for non-empty objects', () => {
        expect(ObjectUtils.isBlank(nonEmptyObject)).toBe(false);
    });

    it('isNotBlank should return false for empty objects', () => {
        expect(ObjectUtils.isNotBlank(emptyObject)).toBe(false);
    });

    it('isNotBlank should return true for non-empty objects', () => {
        expect(ObjectUtils.isNotBlank(nonEmptyObject)).toBe(true);
    });

    it('isEmptyOrBlank should return true for null, undefined, and empty objects', () => {
        expect(ObjectUtils.isEmptyOrBlank(null)).toBe(true);
        expect(ObjectUtils.isEmptyOrBlank(undefined)).toBe(true);
        expect(ObjectUtils.isEmptyOrBlank(emptyObject)).toBe(true);
    });

    it('isEmptyOrBlank should return false for non-empty objects', () => {
        expect(ObjectUtils.isEmptyOrBlank(nonEmptyObject)).toBe(false);
    });

    it('isNotEmptyAndBlank should return true for empty objects', () => {
        expect(ObjectUtils.isNotEmptyAndBlank(emptyObject)).toBe(true);
    });

    it('isNotEmptyAndBlank should return false for null, undefined, and non-empty objects', () => {
        expect(ObjectUtils.isNotEmptyAndBlank(null)).toBe(false);
        expect(ObjectUtils.isNotEmptyAndBlank(undefined)).toBe(false);
        expect(ObjectUtils.isNotEmptyAndBlank(nonEmptyObject)).toBe(false);
    });

    it('isNotEmptyOrBlank should return false for null, undefined, and empty objects', () => {
        expect(ObjectUtils.isNotEmptyOrBlank(null)).toBe(false);
        expect(ObjectUtils.isNotEmptyOrBlank(undefined)).toBe(false);
        expect(ObjectUtils.isNotEmptyOrBlank(emptyObject)).toBe(false);
    });

    it('isNotEmptyOrBlank should return true for non-empty objects', () => {
        expect(ObjectUtils.isNotEmptyOrBlank(nonEmptyObject)).toBe(true);
    });

    it('isEmptyOrNotBlank should return true for null, undefined, and non-empty objects', () => {
        expect(ObjectUtils.isEmptyOrNotBlank(null)).toBe(true);
        expect(ObjectUtils.isEmptyOrNotBlank(undefined)).toBe(true);
        expect(ObjectUtils.isEmptyOrNotBlank(nonEmptyObject)).toBe(true);
    });

    it('isEmptyOrNotBlank should return false for empty objects', () => {
        expect(ObjectUtils.isEmptyOrNotBlank(emptyObject)).toBe(false);
    });
});