const convertString = (str) =>{
    var matches = str.match(/(\d+)/);
    var withNoDigits = str.replace(/[0-9]/g, '');
    return { number: matches[0], unit: withNoDigits};
}

export default convertString;