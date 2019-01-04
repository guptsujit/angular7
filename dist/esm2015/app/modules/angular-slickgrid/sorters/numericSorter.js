/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const numericSorter = (value1, value2, sortDirection) => {
    /** @type {?} */
    const x = (isNaN(value1) || value1 === '' || value1 === null) ? -99e+10 : parseFloat(value1);
    /** @type {?} */
    const y = (isNaN(value2) || value2 === '' || value2 === null) ? -99e+10 : parseFloat(value2);
    return sortDirection * (x === y ? 0 : (x > y ? 1 : -1));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpY1NvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc2xpY2tncmlkLyIsInNvdXJjZXMiOlsiYXBwL21vZHVsZXMvYW5ndWxhci1zbGlja2dyaWQvc29ydGVycy9udW1lcmljU29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGFBQWEsR0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEVBQUU7O1VBQy9ELENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEtBQUssRUFBRSxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7O1VBQ3RGLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEtBQUssRUFBRSxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDNUYsT0FBTyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4vLi4vbW9kZWxzL2luZGV4JztcclxuXHJcbmV4cG9ydCBjb25zdCBudW1lcmljU29ydGVyOiBTb3J0ZXIgPSAodmFsdWUxLCB2YWx1ZTIsIHNvcnREaXJlY3Rpb24pID0+IHtcclxuICBjb25zdCB4ID0gKGlzTmFOKHZhbHVlMSkgfHwgdmFsdWUxID09PSAnJyB8fCB2YWx1ZTEgPT09IG51bGwpID8gLTk5ZSsxMCA6IHBhcnNlRmxvYXQodmFsdWUxKTtcclxuICBjb25zdCB5ID0gKGlzTmFOKHZhbHVlMikgfHwgdmFsdWUyID09PSAnJyB8fCB2YWx1ZTIgPT09IG51bGwpID8gLTk5ZSsxMCA6IHBhcnNlRmxvYXQodmFsdWUyKTtcclxuICByZXR1cm4gc29ydERpcmVjdGlvbiAqICh4ID09PSB5ID8gMCA6ICh4ID4geSA/IDEgOiAtMSkpO1xyXG59O1xyXG4iXX0=