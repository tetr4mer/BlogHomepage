const searchQueries = [
    {
        searchString: "some random search for BioiInformatics topic1",
        dateSearched: "10/14/22",
        isGoogleSearch: true,
        searchURL: "https://www.google.com/search?client=firefox-b-1-d&q=some+random+google+search",
        resolutionReached: false
    },
    {
        searchString: "some random search for BioiInformatics topic2",
        dateSearched: "10/15/22",
        isGoogleSearch: false,
        isWebpage: true,
        searchURL: "https://www.google.com/search?client=firefox-b-1-d&q=some+random+google+search",
        destinationURL: "https://yahoo.com",
        resolutionReached: true
    },
    {
        searchString: "some random search for NON BioiInformatics topic3",
        dateSearched: "10/15/22",
        isGoogleSearch: false,
        isWebpage: false,
        searchURL: "https://www.random.com",
        destinationURL: "https://yahoo.com",
        resolutionReached: false
    },
    {
        searchString: "some random search for BioiInformatics topic4",
        dateSearched: "10/16/22",
        isGoogleSearch: true,
        isWebpage: true,
        searchURL: "https://www.google.com/search?client=firefox-b-1-d&q=some+random+google+search",
        destinationURL: "https://yahoo.com",
        resolutionReached: true
    },
    {
        searchString: "some random search for BioiInformatics topic5",
        dateSearched: "10/17/22",
        isGoogleSearch: true,
        isWebpage: true,
        searchURL: "https://www.google.com/search?client=firefox-b-1-d&q=some+random+google+search",
        destinationURL: "https://yahoo.com",
        resolutionReached: true
    },
]

module.exports = searchQueries;