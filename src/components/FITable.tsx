import { data } from '../data/data';

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

function FITable({data} : propType) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(col =>
                        <th key={col.name}>{col.header}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 && data.map( (row, index) =>
                    <tr key={index}>
                        {columns.map(col =>
                            <td key={col.name}>{row[col.name]}</td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    )
};

export default FITable;