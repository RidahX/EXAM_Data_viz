fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);
    const top30Countries = data.slice(-30);
    const countries = top30Countries.map(country => country.country);
    const populations = top30Countries.map(country => country.population);
    const trace = {
        x: countries,
        y: populations,
        type: 'bar',
        marker: {
            color: 'rgba(55, 128, 191, 0.7)',
            line: {
                color: 'rgba(55, 128, 191, 1.0)',
                width: 2
            }
        }
    };

    const layout = {
        title: 'Top 30 Countries by Population',
        xaxis: {
            title: 'Country',
            tickangle: -45
        },
        yaxis: {
            title: 'Population'
        },
        margin: {
            b: 150
        }
    };

    Plotly.newPlot('data-viz', [trace], layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}