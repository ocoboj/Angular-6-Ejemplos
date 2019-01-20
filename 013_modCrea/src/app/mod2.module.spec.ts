import { Mod2Module } from './mod2.module';

describe('Mod2Module', () => {
  let mod2Module: Mod2Module;

  beforeEach(() => {
    mod2Module = new Mod2Module();
  });

  it('should create an instance', () => {
    expect(mod2Module).toBeTruthy();
  });
});
