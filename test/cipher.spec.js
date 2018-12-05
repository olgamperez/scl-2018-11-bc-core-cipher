describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => { 
    assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG"); //assert.equal(actual, expected)
    });
    it('debería retornar "0123456789" para "1234567890" con offest 9',() => { 
      assert.equal(cipher.encode(9,"1234567890"), "0123456789");
      });
    it('debería retornar "pqrstuvwxyzabcdefghijklmno" para "abcdefghijklmnopqrstuvwxyz" con offest 15',() => { 
    assert.equal(cipher.encode(15,"abcdefghijklmnopqrstuvwxyz"), "pqrstuvwxyzabcdefghijklmno"); //assert.equal(actual, expected)
      });
    it('debería retornar "ñÑ.,:#%&/()=?!" para "ñÑ.,:#%&/()=?!" con offest 15',() => { 
    assert.equal(cipher.encode(67,"ñÑ.,:#%&/()=?!"), "ñÑ.,:#%&/()=?!"); //assert.equal(actual, expected)
      });      
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() => { 
    assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ"); //assert.equal(actual, expected)
      });
    it('debería retornar "1234567890" para "0123456789" con offest 9',() => { 
    assert.equal(cipher.decode(9,"0123456789"), "1234567890");
      });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "pqrstuvwxyzabcdefghijklmno" con offest 15',() => { 
    assert.equal(cipher.decode(15,"pqrstuvwxyzabcdefghijklmno"), "abcdefghijklmnopqrstuvwxyz"); //assert.equal(actual, expected)
      });  
    it('debería retornar "ñÑ.,:#%&/()=?!" para "ñÑ.,:#%&/()=?!" con offest 15',() => { 
    assert.equal(cipher.decode(35,"ñÑ.,:#%&/()=?!"), "ñÑ.,:#%&/()=?!"); //assert.equal(actual, expected)
    });     
  });
});
})
