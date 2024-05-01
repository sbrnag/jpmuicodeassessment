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

function FITable({data} : propType) {
    return (
        <table className='fi-table'>
            <thead>
                <tr>
                    {columns.map(col =>
                        <th key={col.name}>{col.header}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 && data.map( (row, index) =>
                    <tr key={index} 
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
                )}
            </tbody>
        </table>
    )
};

export default FITable;