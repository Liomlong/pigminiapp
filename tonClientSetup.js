(async () => {
    const { TonClient } = await import('@tonclient/core');
    const { libWeb } = await import('@tonclient/lib-web');

    TonClient.useBinaryLibrary(libWeb);

    window.tonClient = new TonClient({
        network: { endpoints: ["https://main.ton.dev"] }
    });
})();
