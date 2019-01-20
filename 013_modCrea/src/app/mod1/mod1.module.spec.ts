import { Mod1Module } from './mod1.module';

describe('Mod1Module', () => {
  let mod1Module: Mod1Module;

  beforeEach(() => {
    mod1Module = new Mod1Module();
  });

  it('should create an instance', () => {
    expect(mod1Module).toBeTruthy();
  });
});
