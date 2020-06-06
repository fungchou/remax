import PluginDriver from './PluginDriver';
interface RuntimeOptions {
  pxToRpx: boolean;
  debug: boolean;
  hostComponents: any;
  appEvents: any[];
  pageEvents: any[];
  pluginDriver: PluginDriver;
}

let runtimeOptions: RuntimeOptions = {
  pxToRpx: true,
  hostComponents: {},
  debug: false,
  appEvents: [],
  pageEvents: [],
  pluginDriver: new PluginDriver([]),
};

export function apply(options: RuntimeOptions) {
  runtimeOptions = {
    ...runtimeOptions,
    ...options,
  };
}

export default runtimeOptions;
