export function accept(file, acceptedFiles) {
    if (file && acceptedFiles) {
        var acceptedFilesArray = (Array.isArray(acceptedFiles) ?
            acceptedFiles :
            acceptedFiles.split(','));
        var fileName_1 = file.name || '';
        var mimeType_1 = file.type || '';
        var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
        return acceptedFilesArray.some(function (type) {
            var validType = type.trim();
            if (validType.charAt(0) === '.') {
                return fileName_1.toLowerCase().endsWith(validType.toLowerCase());
            }
            else if (/\/\*$/.test(validType)) {
                // This is something like a image/* mime type
                return baseMimeType_1 === validType.replace(/\/.*$/, '');
            }
            return mimeType_1 === validType;
        });
    }
    return true;
}
