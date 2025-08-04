let init = null;


export function initialize() {
    const CLIENT_ID = "79f89238";
    const BASE_URL = "https://api.jamendo.com/v3.0/";
    //const URL = "https://api.jamendo.com/v3.0/playlists/?client_id=your_client_id&format=jsonpretty&namesearch=cool&datebetween=2012-01-01_2012-02-01";

    // initialize date
    const date = new Date();

    // format function for yyyy-mm-dd
    function formatDate(d) {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    // current date
    const todayDate = formatDate(date);

    // a year ago
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    const lastYearDate = formatDate(lastYear);

    init = { CLIENT_ID, BASE_URL, todayDate, lastYearDate };

    return init
}

export async function getPlaylist() {
    if (!init) {
        throw new Error("Initialization required. Call initialize() first.");
    }

    let url = `${init.BASE_URL}/tracks/?client_id=${init.CLIENT_ID}&format=jsonpretty&limit=20&order=popularity_total`;

    // fetch the playlist data
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data; // return the data to the caller
    } catch (error) {
        console.error("Failed to fetch playlist:", error);
        throw error; // rethrow error so the component can handle it
    }

}