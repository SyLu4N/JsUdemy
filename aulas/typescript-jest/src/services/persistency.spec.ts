describe('testando alguma coisa', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('testando outra coisa', () => {
  test('descricao do teste (test)', () => {
    const nome = 'Luiz';
    expect(nome).not.toBe('Luan');
  });
});
