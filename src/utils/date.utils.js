import moment from 'moment-jalaali';

export const jalaliToGregorianDate = (jalaliDate) => {
    return moment(jalaliDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
};
