import {
  LineToolsAndGroupsState,
  LineToolState,
} from "@/public/static/charting_library/charting_library";
import { LocalStorageSaveLoadAdapter } from "./LocalStorageSaveLoadAdapter";
import { isObjectEmpty } from "@/hooks/helpers";

var LocalStorageAdapter: LocalStorageSaveLoadAdapter;

const loadLocalStorage = async () => {
  LocalStorageAdapter = new LocalStorageSaveLoadAdapter();
  if (
    !LocalStorageAdapter._drawings ||
    isObjectEmpty(LocalStorageAdapter._drawings)
  )
    return;

  const drawings =
    LocalStorageAdapter._drawings[
      Object.keys(LocalStorageAdapter._drawings)[
        Object.keys(LocalStorageAdapter._drawings).length - 1
      ]
    ];
  const drawingsKey = Object.keys(LocalStorageAdapter._drawings).pop();
  // console.log("loadLocalstorage", drawingsKey);

  var states: LineToolsAndGroupsState = {
    sources: new Map(),
    groups: new Map(),
  };
  const sources = new Map();

  for (let [key, state] of Object.entries(drawings)) {
    states = {
      sources: sources.set(key, state),
      groups: new Map(),
    };
  }

  return { states, drawingsKey };
};

const saveLocalStorage = async (
  layoutId: string,
  chartId: string | number,
  drawings: LineToolsAndGroupsState,
) => {
  LocalStorageAdapter.saveLineToolsAndGroups(layoutId, chartId, drawings);
};

const removeLocalStorage = async (
  layoutId: string,
  chartId: string | number,
  drawings: LineToolsAndGroupsState,
) => {
  if (!drawings.sources) return;

  LocalStorageAdapter._drawings[`${layoutId}/${chartId}`] = {};

  for (let [key, state] of drawings.sources) {
    if (state === null) {
      delete LocalStorageAdapter._drawings[`${layoutId}/${chartId}`][key];
    } else {
      LocalStorageAdapter._drawings[`${layoutId}/${chartId}`][key] = state;
    }
  }

  LocalStorageAdapter._isDirty = true;
};

export { loadLocalStorage, saveLocalStorage, removeLocalStorage };
