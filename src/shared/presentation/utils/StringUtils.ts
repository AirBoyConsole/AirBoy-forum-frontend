export class StringUtils {
    static cutString(text: string, maxLength = 20) {
        if (text.length > maxLength) {
            const sub = text.substring(0, maxLength);
            const index = sub.lastIndexOf(" ");
            if(index > -1) {
                return `${text.substring(0, index)}...`;
            } else {
                return `${sub}...`;
            }

        } else {
            return text;
        }
    }
}