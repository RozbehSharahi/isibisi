import { useRoute as useVueRoute } from "vue-router";

export function useRoute() {
  const route = useVueRoute();

  const getIntQueryParameter = (name: string) => {
    const queryParameter = route.query[name];

    if (typeof queryParameter !== "string" || isNaN(parseInt(queryParameter))) {
      throw new TypeError(`Could not get parameter: ${name}`);
    }

    return parseInt(queryParameter);
  };

  const getStringQueryParameter = (name: string) => {
    const queryParameter = route.query[name];

    if (typeof queryParameter !== "string") {
      throw new TypeError(`Could not get parameter: ${name}`);
    }

    return queryParameter;
  };

  return {
    getIntQueryParameter,
    getStringQueryParameter,
  };
}
