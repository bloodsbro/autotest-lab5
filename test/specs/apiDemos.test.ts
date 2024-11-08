const assert = require('assert');

describe('API Demos App Test', () => {
  it('Введення назви країни у текстове поле', async () => {
    // Навігація до Views -> Auto Complete -> Screen Top
    const viewsOption = await $('~Views');
    await viewsOption.click();

    const autoCompleteOption = await $('~Auto Complete');
    await autoCompleteOption.click();

    const screenTopOption = await $('~1. Screen Top');
    await screenTopOption.click();

    // Знаходження текстового поля
    const textField = await $('android.widget.AutoCompleteTextView');

    // Введення назви країни
    await textField.setValue('Ukraine');

    // Перевірка введеного значення
    const enteredText = await textField.getText();
    assert.strictEqual(enteredText, 'Ukraine', 'Введений текст не відповідає очікуваному');

    await driver.back();
    await driver.back();
    await driver.back();
  });

  it('Перевірка пункту меню Accessibility', async () => {
    const accessibilityOption = await $('~Accessibility');
    await accessibilityOption.click();

    // Знаходження опції Accessibility Node Querying
    const nodeQueryingOption = await $('~Accessibility Node Querying');
    const isDisplayed = await nodeQueryingOption.isDisplayed();

    assert.strictEqual(isDisplayed, true, 'Accessibility Node Querying не відображається');

    await driver.back();
  });

  it('Перевірка пункту меню Animation', async () => {
    const animationOption = await $('~Animation');
    await animationOption.click();

    // Знаходження опції Bouncing Balls
    const bouncingBallsOption = await $('~Bouncing Balls');
    const isDisplayed = await bouncingBallsOption.isDisplayed();

    assert.strictEqual(isDisplayed, true, 'Bouncing Balls не відображається');

    await driver.back();
  });
});
