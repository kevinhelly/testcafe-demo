import { fixture, Selector, test } from 'testcafe';

fixture`Test`.page('http://localhost:3000/');

test('React icon exists', async (t) => {
  await t.expect(Selector('.App-logo').exists).ok('Logan finns');
});
test('Verify input field', async (t) => {
  await t
    .resizeWindowToFitDevice('iphone11', { portraitOrientation: true })
    .takeScreenshot('screenshots')
    .expect(Selector('#text-input').exists)
    .ok('Input fältet finns ej')
    .addRequestHooks()
    .removeRequestHooks()
    .typeText(Selector('#text-input'), 'Hej Dynabyte Hej Dynabyte');
})
  .page('http://localhost:3000/')
  .requestHooks();
