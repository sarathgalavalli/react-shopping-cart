import getSymbolFromCurrency from 'currency-symbol-map'

export default function formatProduct(num) {
    return getSymbolFromCurrency('AUD') + Number(num.toFixed(1)).toLocaleString() + " ";
}