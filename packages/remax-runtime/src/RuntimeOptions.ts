interface RuntimeOptions {
  pxToRpx: boolean;
  debug: boolean;
  hostComponents: any;
  appEvents: any[];
  pageEvents: any[];
}

let runtimeOptions: RuntimeOptions = {
  pxToRpx: true,
  hostComponents: {},
  debug: false,
  appEvents: [],
  pageEvents: [],
};

export function apply(options: RuntimeOptions) {
  runtimeOptions = {
    ...runtimeOptions,
    ...options,
  };
}

export default runtimeOptions;
