export function useDom() {
  const getInputElement = (selector: string): HTMLInputElement => {
    const element = document.querySelector(selector);

    if (!(element instanceof HTMLInputElement)) {
      throw new TypeError("Could not find input");
    }

    return element;
  };

  const focusInputElement = async (selector: string): Promise<void> => {
    await timeout(1);
    if (!process.client) return;
    getInputElement(selector).focus();
  };

  return {
    getInputElement,
    focusInputElement,
  };
}
