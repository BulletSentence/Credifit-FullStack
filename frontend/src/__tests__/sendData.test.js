import sendData from '../functions/sendData';

describe('sendData', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
  });

  test('should send data to server', () => {
    const data = [
      { tipoId: 1, data: '2022-01-01', produto: 'Product 1', valor: 1000, vendedor: 'Seller 1' },
    ];

    const response = { status: 200, json: jest.fn() };
    global.fetch = jest.fn().mockResolvedValue(response);

    sendData(data);

    expect(global.fetch).toHaveBeenNthCalledWith(1, 'http://localhost:3000/transacao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data[0])
    });
  });

  test('should not send empty data', async () => {
    const data = [];
    global.fetch = jest.fn();
    await sendData(data);
    expect(global.fetch).not.toHaveBeenCalled();
  });
});
