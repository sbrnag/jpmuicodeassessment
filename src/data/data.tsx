export type data = {
    ticker : string,
    price : number,
    assetClass : 'Commodities' | 'Equities' | 'Credit'
}


export const tableData : data[] = [
    {
        'ticker' : 'ALPHA',
        'price' : 3150.78,
        'assetClass' : 'Credit'
    },
    {
        'ticker' : 'BETA',
        'price' : -3791.10,
        'assetClass' : "Commodities"
    },
    {
        'ticker' : 'GAMA',
        'price' : 2345,
        'assetClass' : "Equities"
    },
    {
        'ticker' : 'TNY',
        'price' : -3455,
        'assetClass' : "Equities"
    },
    {
        'ticker' : 'HMY',
        'price' : 234,
        'assetClass' : "Commodities"
    },
]