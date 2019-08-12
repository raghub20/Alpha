import { NativeDateAdapter } from "@angular/material";

/**
 * class for appDateAdapter
 */
export class AppDateAdapter extends NativeDateAdapter {
    /**
     * 
     * @param date date of type Date
     * @param displayFormat display format for date
     */
    /* display the date in specific format  */
    format(date: Date, displayFormat: any): string {
        /**check the conditon */
        if (displayFormat == "input") {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return year + '-' + this._to2digit(month) + '-' + this._to2digit(day);
        } else {
            return date.toDateString();
        }
    }
    /**method to convert the value to two digit format */
    private _to2digit(n: number) {
        return ('00' + n).slice(-2);
    }
}