
export function convertEpochToDateTime(epochTime) {
    const date = new Date(epochTime);

    // Format the time as a string in AM/PM format
    const formattedTime = date.toLocaleTimeString({
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    return formattedTime;
}

export function getParameterValue(parameterName) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(parameterName);
}

export function todayDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
}

export function getPastDate(daysAgo) {
    const today = new Date();
    const pastDate = new Date(today - daysAgo * 24 * 60 * 60 * 1000);

    const day = String(pastDate.getDate()).padStart(2, '0');
    const month = String(pastDate.getMonth() + 1).padStart(2, '0');
    const year = pastDate.getFullYear();

    return `${day}-${month}-${year}`;
}





