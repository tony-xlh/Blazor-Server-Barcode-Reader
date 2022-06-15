let scanner;
async function startScan(dotNetRef) {
    if (!scanner) {
        // specify a license, you can visit https://www.dynamsoft.com/customer/license/trialLicense?utm_source=intro&product=dbr&package=js to get your own trial license good for 30 days. 
        Dynamsoft.DBR.BarcodeScanner.license = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
        scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    }
    scanner.onUniqueRead = (txt, result) => {
        console.log(result);
        dotNetRef.invokeMethodAsync('onUniqueRead', txt);
        scanner.hide();
    };
    await scanner.show();
}