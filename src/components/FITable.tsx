import { useEffect, useState } from 'react';
import { data } from '../data/data';
import './FITable.css';

type propType = {
    data : data[]
}

type columnType = {
    name : 'assetClass' | 'price' | 'ticker',
    header : string
}

const columns: columnType[] = [ 
    {
        'name' : 'assetClass',
        'header' : 'Asset Class'
    },
    {
        'name' : 'price',
        'header' : 'Price'
    },
    {
        'name' : 'ticker',
        'header' : 'Ticker'
    } 
];

function sortByAssetClass(arr : data[]) {
    const order = { "Commodities": 0, "Equities": 1, "Credit": 2 };
    arr.sort((a, b) => {
        return order[a.assetClass] - order[b.assetClass];
    });
    return arr;
};

function sortByPriceDescending(arr : data[]) {
    return arr.sort((a, b) => b.price - a.price);
};

function sortByTickerAlphabetically(arr: data[]) {
    return arr.sort((a, b) => a.ticker.localeCompare(b.ticker));
};

function sortDataByColumn(arr: data[], column: string) {
    switch (column) {
        case 'assetClass':
            return sortByAssetClass(arr);
        case 'price':
            return sortByPriceDescending(arr);
        case 'ticker':
            return sortByTickerAlphabetically(arr);
        default:
            return arr; // Return unsorted array if column is not recognized
    }
}

function FITable({data} : propType) {

    const [sortedData , setSortedData] = useState<data[]>(data);

    const handleSort = (sortColumn: string) => {
        const sortedArr = sortDataByColumn(data, sortColumn);
        setSortedData([...sortedArr]);
    }

    return (
        <table className='fi-table'>
            <thead>
                <tr>
                    {columns.map(col =>
                        <th key={col.name} className='fi-table-th'>
                            <button className='sort-button' onClick={() => handleSort(col.name)}>
                                {col.header} ▲
                            </button>    
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {sortedData.length > 0 && sortedData.map( (row, index) => {
                    return <tr key={index} 
                                className={ row.assetClass === 'Equities' ? 'fi-equities' : 
                                            row.assetClass ===  'Credit' ? 'fi-credit' :
                                            row.assetClass ===  'Commodities' ? 'fi-commodities' : ''}>
                                {columns.map(col =>
                                    <td key={col.name} 
                                        className={col.name === 'price' ? row[col.name] > 0 ? 'fi-table-td-possitive' : 'fi-table-td-negative' : ''}>
                                        {row[col.name]}
                                    </td>
                                )}
                            </tr>
                    }
                )}
            </tbody>
        </table>
    )
};

export default FITable;